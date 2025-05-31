import React, { use } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = ({ jobsPromise }) => {

  // load data
  const data = use(jobsPromise);
  console.log(data);


  return (
    <div className='w-11/12 mx-auto my-20'>
      <h1 className='text-center text-4xl font-bold mb-3'>Jobs of the day</h1>
      <p className='text-center text-lg'>Search and connect with the right candidates faster.</p>


      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center place-items-center mt-10'>
        {
          data.map((singleData) => <HotJobsCard key={singleData._id} singleData={singleData}></HotJobsCard>)
        }
      </div>
    </div>
  );
};

export default HotJobs;