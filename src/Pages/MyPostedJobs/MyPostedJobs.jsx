import React, { Suspense } from 'react';
import useAuth from '../../Hooks/useAuth';
import JobsList from './JobsList';
import useJobApi from '../../Api/useJobApi';


const MyPostedJobs = () => {
  const { user } = useAuth();
  const { jobsCreatedByPromise } = useJobApi();


  return (
    <div>


      <Suspense fallback={<div className='w-11/12 h-screen mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
        <span className="loading loading-spinner loading-lg"></span>
      </div>}>
        <JobsList jobsCreatePromise={jobsCreatedByPromise(user.email)}></JobsList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;