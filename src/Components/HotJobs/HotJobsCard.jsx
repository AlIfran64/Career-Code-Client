import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router';

const HotJobsCard = ({ singleData }) => {

  // Destructure
  const { title, location, company_logo, company, description, requirements, category, salaryRange: { min, max, currency }, _id } = singleData;


  return (
    <div className="card bg-base-100 w-96 shadow-sm p-5">
      <div className='flex justify-start items-center gap-4'>
        <figure>
          <img
            className='w-15 h-15'
            src={company_logo}
            alt="logo" />
        </figure>
        <div>
          <h1 className='text-2xl font-bold'>{company}</h1>
          <div className='flex justify-start items-center gap-1'>
            <CiLocationOn />
            <p> {location}</p>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{category}</div>
        </h2>
        <p className='font-semibold'>Salary: {min} - {max} {currency}</p>
        <p>{description}</p>
        <div className="card-actions justify-start">
          {
            requirements.map((requirement, index) => <div key={index} requirement={requirement} className="badge badge-outline">{requirement}</div>)
          }
        </div>
        <div className="card-actions justify-end mt-5">
          <Link to={`/careers/${_id}`}>
            <button className="btn bg-black text-white">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;