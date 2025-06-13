import React from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddJob = () => {

  const { user } = useAuth();


  // handle add job
  const handleAddJob = (e) => {
    e.preventDefault();

    // get input data
    const form = e.target;
    const formData = new FormData(form);
    const addJobData = Object.fromEntries(formData.entries());

    // Process salary range data
    const { min, max, currency, ...newJob } = addJobData;
    newJob.salaryRange = { min, max, currency };
    console.log(newJob);

    // Process requirements
    newJob.requirements = newJob.requirements.split(',').map(item => item.trim());

    // Process responsibilities
    newJob.responsibilities = newJob.responsibilities.split(',').map(item => item.trim());

    newJob.status = "active";

    // save job to the database
    axios.post('http://localhost:3000/careers', newJob)
      .then(function (response) {
        if (response.data.insertedId) {
          toast.success('Job added successfully');
          form.reset();
        }
      })
      .catch(function (error) {
        toast.error(error);
      });

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 my-20">
      <div className="w-full max-w-4xl bg-base-200 p-8 rounded-xl shadow-xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Add New Job</h1>
          <p className="text-base text-gray-500">Fill in the details to post a new job</p>
        </div>

        <form onSubmit={handleAddJob}>
          <fieldset className="border border-base-300 rounded-xl p-6">
            <legend className="text-lg font-semibold px-2">Basic Info</legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="label font-semibold">Title</label>
                <input
                  type="text"
                  name="title"
                  className="input input-bordered w-full"
                  placeholder="Job title"
                />
              </div>

              <div>
                <label className="label font-semibold">Company</label>
                <input
                  type="text"
                  name="company"
                  className="input input-bordered w-full"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="label font-semibold">Location</label>
                <input
                  type="text"
                  name="location"
                  className="input input-bordered w-full"
                  placeholder="Company location"
                />
              </div>

              <div>
                <label className="label font-semibold">Company Logo</label>
                <input
                  type="text"
                  name="logo"
                  className="input input-bordered w-full"
                  placeholder="Company logo URL"
                />
              </div>
            </div>
          </fieldset>

          {/* Job type */}
          <fieldset className="border border-base-300 rounded-xl p-6 mt-5">
            <legend className="text-lg font-semibold px-2">Job Type</legend>

            <div className="filter">
              <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
              <input className="btn" type="radio" name="jobType" aria-label="On-Site" value="On-site" />
              <input className="btn" type="radio" name="jobType" aria-label="Remote" value="Remote" />
              <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value="Hybrid" />
            </div>
          </fieldset>

          {/* Job Category */}
          <fieldset className="border border-base-300 rounded-xl p-6 mt-5">
            <legend className="text-lg font-semibold px-2">Job Category</legend>
            <select
              defaultValue="Job category"
              name='category'
              className="select">
              <option disabled={true}>Select category</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
          </fieldset>

          {/* Application deadline */}
          <fieldset className="border border-base-300 rounded-xl p-6 mt-5">
            <legend className="text-lg font-semibold px-2">Application deadline</legend>
            <input
              type="date"
              name='deadline'
              className="input" />
          </fieldset>

          {/* Salary Range */}
          <fieldset className="border border-base-300 rounded-xl p-6 mt-5">
            <legend className="text-lg font-semibold px-2">Salary range</legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="label font-semibold">Minimum salary</label>
                <input
                  type="text"
                  name="min"
                  className="input input-bordered w-full"
                  placeholder="Minimum salary"
                />
              </div>

              <div>
                <label className="label font-semibold">Maximum salary</label>
                <input
                  type="text"
                  name="max"
                  className="input input-bordered w-full"
                  placeholder="Maximum salary"
                />
              </div>

              <div>
                <label className="label font-semibold">Currency</label>
                <select
                  defaultValue="Currency"
                  name='currency'
                  className="select">
                  <option disabled={true}>Select currency</option>
                  <option>USD</option>
                  <option>BDT</option>
                  <option>EU</option>
                </select>

              </div>

            </div>
          </fieldset>

          {/* Job Description */}
          <fieldset className="border border-base-300 rounded-xl p-6 mt-5">
            <legend className="text-lg font-semibold px-2">Job description</legend>
            <textarea
              className="textarea w-full"
              name='description'
              placeholder="Job description"></textarea>
          </fieldset>

          {/* Job requirements */}
          <fieldset className="border border-base-300 rounded-xl p-6 mt-5">
            <legend className="text-lg font-semibold px-2">Job requirements</legend>
            <textarea
              className="textarea w-full"
              name='requirements'
              placeholder="Job requirements (Separate by comma)"></textarea>
          </fieldset>

          {/* Job responsibilities */}
          <fieldset className="border border-base-300 rounded-xl p-6 mt-5">
            <legend className="text-lg font-semibold px-2">Job responsibilities</legend>
            <textarea
              className="textarea w-full"
              name='responsibilities'
              placeholder="Job responsibilities (Separate by comma)"></textarea>
          </fieldset>

          {/* HR related info */}
          <fieldset className="border border-base-300 rounded-xl p-6 mt-5">
            <legend className="text-lg font-semibold px-2">HR related info</legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="label font-semibold">HR name</label>
                <input
                  type="text"
                  name="hr_name"
                  className="input input-bordered w-full"
                  placeholder="HR name"
                  defaultValue={user.
                    displayName
                  }
                  readOnly
                />
              </div>

              <div>
                <label className="label font-semibold">HR email</label>
                <input
                  type="text"
                  name="hr_email"
                  className="input input-bordered w-full"
                  placeholder="HR email"
                  defaultValue={user.email}
                  readOnly
                />
              </div>

            </div>
          </fieldset>

          <div className="pt-6 flex justify-center">
            <button type="submit" className="btn bg-black text-white w-full md:w-1/2">Submit Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
