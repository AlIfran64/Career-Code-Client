import React, { use } from 'react';
import { Link } from 'react-router';

const JobsList = ({ jobsCreatePromise }) => {
  const jobs = use(jobsCreatePromise);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 py-12">
      <div className="w-full max-w-5xl bg-base-200 p-8 rounded-xl shadow-xl">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Your Posted Jobs</h1>
          <p className="text-base text-gray-500">Manage the jobs you have created and view applications</p>
          <p className="text-sm text-gray-400 mt-2">Total Jobs: {jobs.length}</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-base text-gray-700">
                <th>#</th>
                <th>Title</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job._id}>
                  <th>{index + 1}</th>
                  <td className="font-medium">{job.title}</td>
                  <td>{job.deadline}</td>
                  <td>
                    <Link
                      to={`/applications/${job._id}`}
                      className="btn btn-outline btn-sm bg-black text-white"
                    >
                      View Applications
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobsList;
