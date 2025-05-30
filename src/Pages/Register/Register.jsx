import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottie from '../../../src/Assets/Animations/registerAnimation.json'
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {

  const { register } = useContext(AuthContext);

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();

    // get data from input
    const form = e.target;
    const formData = new FormData(form);
    const registerData = Object.fromEntries(formData.entries());

    // Destucture
    const { email, password } = registerData;

    // Register
    register(email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);

        toast.success("Registration Completed Successfully!");
        // ...
      })
      .catch((error) => {

        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });

  }

  return (
    <div className="hero bg-base-200 min-h-screen border-b">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <div className="text-center lg:text-left">
          <Lottie style={{ width: '350px' }} animationData={registerLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <h1 className="text-3xl font-bold mb-5">Register now!</h1>
              <label className="label">Email</label>
              <input type="email" name='email' className="input w-full" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input w-full" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;