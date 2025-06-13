import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();

  // Handle apply
  const handleApply = (e) => {
    e.preventDefault();

    // Get data from input
    const form = e.target;
    const formData = new FormData(form);
    const applyData = Object.fromEntries(formData.entries());

    // Destructure
    const { linkedin, github, resume } = applyData;

    const application = {
      id,
      applicant: user.email,
      linkedin,
      github,
      resume
    }

    // Send data to db
    axios.post('http://localhost:3000/applications', application)
      .then(function (response) {
        console.log(response);
        toast.success("Successfully Applied!")
      })
      .catch(function (error) {
        toast.error(error);
      });

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-8">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Apply for the Job</h1>
          <p className="text-gray-500 mt-2">Submit your profile and resume to proceed with your application.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleApply} className="space-y-4">
          <div>
            <label className="label font-medium text-gray-700">LinkedIn Profile</label>
            <input
              type="url"
              name="linkedin"
              placeholder="https://linkedin.com/in/yourprofile"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label font-medium text-gray-700">GitHub Profile</label>
            <input
              type="url"
              name="github"
              placeholder="https://github.com/yourusername"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label font-medium text-gray-700">Resume (Google Drive or PDF URL)</label>
            <input
              type="url"
              name="resume"
              placeholder="https://yourresume.com/resume.pdf"
              className="input input-bordered w-full"
              required
            />
          </div>

          <input
            type="submit"
            value="Apply Now"
            className="btn btn-neutral w-full mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default JobApply;
