import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className='w-11/12 h-screen mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }

  if (user && user?.email) {
    return children
  }

  return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default PrivateRoutes;