import React from 'react';

const BrowseCategory = () => {
  return (
    <div className='w-11/12 mx-auto my-20'>
      <h1 className='text-center text-4xl font-bold mb-3'>Browse by category</h1>
      <p className='text-center text-lg'>Find the job that’s perfect for you. about 800+ new jobs everyday</p>

      <div className='mt-10 grid grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-4'>
        {/* card-1 */}
        <div className='cursor-pointer flex justify-center items-center gap-3 border border-gray-300 rounded-lg p-3 transition-all duration-300 hover:border-black hover:shadow-md'>
          <img className='w-14 h-14' src="../../../src/Assets/images/content-writing.png" alt="icon" />
          <div>
            <h1 className='text-2xl font-semibold'>Content Writer</h1>
            <p>29 Jobs Available</p>
          </div>
        </div>

        {/* card-2 */}
        <div className='cursor-pointer border border-gray-300 rounded-lg p-8 row-span-2 transition-all duration-300 hover:border-black hover:shadow-md'>
          <img className='w-14 h-14 mb-2' src="../../../src/Assets/images/marketing-and-sale.png" alt="icon" />
          <h1 className='text-2xl font-semibold'>Marketing & Sale</h1>
          <p>9 Jobs Available</p>
        </div>

        {/* card-3 */}
        <div className='cursor-pointer flex justify-center items-center gap-3 border border-gray-300 rounded-lg p-3 transition-all duration-300 hover:border-black hover:shadow-md'>
          <img className='w-14 h-14' src="../../../src/Assets/images/market-reaserch.png" alt="icon" />
          <div>
            <h1 className='text-2xl font-semibold'>Market Research</h1>
            <p>7 Jobs Available</p>
          </div>
        </div>

        {/* card-4 */}
        <div className='cursor-pointer border border-gray-300 rounded-lg p-8 row-span-2 transition-all duration-300 hover:border-black hover:shadow-md'>
          <img className='w-14 h-14 mb-2' src="../../../src/Assets/images/management.png" alt="icon" />
          <h1 className='text-2xl font-semibold'>Management</h1>
          <p>6 Jobs Available</p>
        </div>

        {/* card-5 */}
        <div className='cursor-pointer border border-gray-300 rounded-lg p-8 row-span-2 transition-all duration-300 hover:border-black hover:shadow-md'>
          <img className='w-14 h-14 mb-2' src="../../../src/Assets/images/software.png" alt="icon" />
          <h1 className='text-2xl font-semibold'>Software</h1>
          <p>4 Jobs Available</p>
        </div>

        {/* card-6 */}
        <div className='cursor-pointer border border-gray-300 rounded-lg p-8 row-span-2 transition-all duration-300 hover:border-black hover:shadow-md'>
          <img className='w-14 h-14 mb-2' src="../../../src/Assets/images/customer-help.png" alt="icon" />
          <h1 className='text-2xl font-semibold'>Customer Help</h1>
          <p>4 Jobs Available</p>
        </div>

        {/* card-7 */}
        <div className='cursor-pointer flex justify-center items-center gap-3 border border-gray-300 rounded-lg p-3 transition-all duration-300 hover:border-black hover:shadow-md'>
          <img className='w-14 h-14' src="../../../src/Assets/images/finance.png" alt="icon" />
          <div>
            <h1 className='text-2xl font-semibold'>Finance</h1>
            <p>9 Jobs Available</p>
          </div>
        </div>

        {/* card-8 */}
        <div className='cursor-pointer flex justify-center items-center gap-3 border border-gray-300 rounded-lg p-3 transition-all duration-300 hover:border-black hover:shadow-md'>
          <img className='w-14 h-14' src="../../../src/Assets/images/human-resource.png" alt="icon" />
          <div>
            <h1 className='text-2xl font-semibold'>Human Resource</h1>
            <p>10 Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
