import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import BrowseCategory from '../../Components/BrowseCategory/BrowseCategory';
import HotJobs from '../../Components/HotJobs/HotJobs';

const jobsPromise = fetch('http://localhost:3000/careers').then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <BrowseCategory></BrowseCategory>

      <Suspense fallback={<div className='w-11/12 h-screen mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
        <span className="loading loading-spinner loading-lg"></span>
      </div>}>
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;