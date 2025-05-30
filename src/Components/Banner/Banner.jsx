import React from 'react';
import { motion } from "motion/react"
import team1 from '../../Assets/images/team-1.jpg'
import team2 from '../../Assets/images/team-2.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className='w-1/2'>
          <motion.img
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            src={team1}
            className="w-[400px] h-[350px] object-cover rounded-t-[60px] rounded-br-[60px] border-s-10 border-b-10 border-[#74D4DE] shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 2, repeat: Infinity }}
            src={team2}
            className="w-[500px] h-[250px] object-cover rounded-t-[60px] rounded-br-[60px] border-s-10 border-b-10 border-[#74D4DE] shadow-2xl"
          />
        </div>
        <div className='w-1/2'>
          <h1 className="text-6xl font-bold">Latest <motion.span animate={{
            color: ['#6366f1', '#14b8a6', '#f43f5e'],
            transition: { duration: 2, repeat: Infinity }
          }}>Jobs</motion.span> for You!</h1>
          <p className="py-6 text-xl">
            Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day.
          </p>
          <motion.button whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} className="py-3 px-6 bg-[#74D4DE] text-xl rounded-md font-semibold mt-5">Get Started</motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;