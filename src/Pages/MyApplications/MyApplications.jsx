import React, { Suspense } from 'react';
import ApplicationList from './ApplicationList';
import useAuth from '../../Hooks/useAuth';
import useApplicationApi from '../../Api/useApplicationApi';


const MyApplications = () => {
  const { user } = useAuth();
  const { myApplicationPromise } = useApplicationApi();

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16 py-10 bg-base-100">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">My Job Applications</h1>
        <p className="text-lg text-gray-600">
          Here you can track the jobs you’ve applied for and view their current status.
        </p>
      </div>

      {/* Stats (Optional if used) */}
      {/* <ApplicationsStat /> */}

      {/* Application List */}
      <Suspense
        fallback={
          <div className="w-full h-80 flex justify-center items-center bg-white shadow rounded-xl">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        }
      >
        <ApplicationList myApplicationPromise={myApplicationPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyApplications;
