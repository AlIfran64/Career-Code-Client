import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { CiLocationOn } from 'react-icons/ci';
import { FaBriefcase, FaMoneyBillWave, FaEnvelope, FaUserTie, FaClock } from 'react-icons/fa';

const CardDetails = () => {
  const data = useLoaderData();
  console.log(data);


  // Destructure
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange: { min = 0, max = 0, currency = 'BDT' } = {},
    description,
    company,
    requirements = [],
    responsibilities = [],
    status,
    hr_email,
    hr_name,
    company_logo,
  } = data;

  return (
    <div className="w-11/12 max-w-5xl mx-auto my-10 bg-white shadow-lg rounded-xl p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-5 border-b pb-5">
        <img
          src={company_logo}
          alt="Company Logo"
          className="w-20 h-20 object-contain border rounded-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-lg text-gray-600">{company}</p>
          <div className="flex items-center text-gray-500 gap-2 mt-1">
            <CiLocationOn size={20} />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Info Badges */}
      <div className="flex flex-wrap gap-4 text-sm">
        <span className="badge badge-outline text-blue-700">
          <FaBriefcase className="mr-1" /> {category}
        </span>
        <span className="badge badge-outline text-purple-700">
          <FaClock className="mr-1" /> Type: {jobType}
        </span>
        <span className="badge badge-outline text-green-700">
          <FaMoneyBillWave className="mr-1" /> Salary: {currency.toUpperCase()} {min} - {max}
        </span>
        <span className="badge badge-outline text-red-600">
          Deadline: {applicationDeadline}
        </span>
        <span className={`badge ${status === 'active' ? 'badge-success' : 'badge-error'}`}>
          Status: {status}
        </span>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Job Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Responsibilities */}
      {responsibilities.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Responsibilities</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Requirements */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Requirements</h2>
        <div className="flex flex-wrap gap-2">
          {requirements.map((req, idx) => (
            <span key={idx} className="badge badge-outline">
              {req}
            </span>
          ))}
        </div>
      </div>

      {/* HR Contact */}
      <div className="bg-gray-100 p-4 rounded-lg mt-6">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">HR Contact</h2>
        <div className="flex items-center gap-4 text-gray-700">
          <FaUserTie />
          <p>{hr_name}</p>
        </div>
        <div className="flex items-center gap-4 text-gray-700 mt-1">
          <FaEnvelope />
          <p>{hr_email}</p>
        </div>
      </div>

      {/* Apply Button */}
      <div className="text-right mt-6">
        <Link to={`/jobApply/${_id}`}>
          <button className="bg-black text-white px-6 py-2 rounded-md transition duration-200">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardDetails;
