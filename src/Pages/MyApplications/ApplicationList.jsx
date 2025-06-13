import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({ myApplicationPromise }) => {
  const data = use(myApplicationPromise);

  return (
    <div className="bg-base-100 p-6 rounded-xl shadow-md">
      <div className="mb-6 text-center">

        <p className="text-sm text-gray-500">You have applied to <span className="font-semibold">{data.length}</span> job{data.length !== 1 ? 's' : ''}.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200 text-base font-semibold text-gray-700">
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>LinkedIn</th>
              <th>GitHub</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {data.map((application, index) => (
              <JobApplicationRow
                key={application._id}
                index={index}
                application={application}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
