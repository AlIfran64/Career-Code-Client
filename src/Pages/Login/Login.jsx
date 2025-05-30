import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';
import loginLottie from '../../../src/Assets/Animations/loginAnimation.json'
import Lottie from 'lottie-react';

const Login = () => {

  const { login } = useContext(AuthContext);

  // Handle log in
  const handleLogin = (e) => {
    e.preventDefault();

    // get data from input
    const form = e.target;
    const formData = new FormData(form);
    const loginData = Object.fromEntries(formData.entries());

    // Destructuring
    const { email, password } = loginData;


    // Log in
    login(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);

        toast.success("Successfully Logged In!")
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });

  }


  return (
    <div className="hero bg-base-200 min-h-screen border-b">
      <div className="hero-content flex-col lg:flex-row-reverse gap-2">
        <div className="text-center lg:text-left">
          <Lottie style={{ width: '450px' }} animationData={loginLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <h1 className="text-3xl font-bold mb-5">Login now!</h1>
              <label className="label">Email</label>
              <input type="email" name='email' className="input w-full" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input w-full" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;