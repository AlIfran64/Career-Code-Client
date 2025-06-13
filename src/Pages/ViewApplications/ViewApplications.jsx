import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const ViewApplications = () => {
  const { id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) => {
    axios.patch(`http://localhost:3000/applications/${app_id}`, { status: e.target.value })
      .then(res => {
        if (res.data.modifiedCount) {
          toast.success('Status updated successfully');
        }
      })
      .catch(err => {
        toast.error('Error updating status');
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen px-4 py-10 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-10 border">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-black mb-2">Applications Overview</h1>
          <p className="text-black">
            <span className="font-semibold">{applications.length}</span> application{applications.length !== 1 ? 's' : ''} received for Job ID:
            <span className="ml-1 font-mono text-sm">{id}</span>
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-black text-sm text-left text-black">
            <thead className="bg-black text-white uppercase">
              <tr>
                <th className="px-6 py-3 border border-white">#</th>
                <th className="px-6 py-3 border border-white">Email</th>
                <th className="px-6 py-3 border border-white">Title</th>
                <th className="px-6 py-3 border border-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {
                applications.length > 0 ? applications.map((app, index) => (
                  <tr key={app._id} className="hover:bg-gray-100 border-t border-black">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{app.applicant}</td>
                    <td className="px-6 py-4">{app.title}</td>
                    <td className="px-6 py-4">
                      <select
                        onChange={e => handleStatusChange(e, app._id)}
                        defaultValue={app.status}
                        className="px-3 py-1 border border-black rounded bg-white focus:outline-none"
                      >
                        <option disabled>Update Status</option>
                        <option>Pending</option>
                        <option>Hired</option>
                        <option>Rejected</option>
                      </select>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="4" className="text-center py-6">No applications found.</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewApplications;
