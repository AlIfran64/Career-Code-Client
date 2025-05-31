import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';
import loginLottie from '../../../src/Assets/Animations/loginAnimation.json'
import Lottie from 'lottie-react';

const Login = () => {

  const { login, googleLogin } = useContext(AuthContext);

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


  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("Successfully Logged in")
      }).catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        toast.error(errorMessage)
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

            <div className="divider">OR</div>

            {/* Google */}
            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;