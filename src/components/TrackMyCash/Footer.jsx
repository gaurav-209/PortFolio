import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#5A4A42] text-[#E6D5B8] flex flex-col md:flex-row justify-center items-start p-6'>
      <div className='md:w-1/2 w-full m-3'>
        <h2 className='text-2xl font-semibold mb-2'>TrackMyCash</h2>
        <p>
          TrackMyCash helps you manage your expenses effortlessly, giving you a clear view of your finances. Stay organized, make informed decisions, and take control of your spending—all in one place.
        </p>
      </div>
      <div className='md:w-1/4 w-full m-3 mt-5 md:mt-3'>
        <p className='mt-2'>&copy; TrackMyCash | All Rights Reserved</p>
        <p>| Developed by <a href="https://codewithgaurav.in/" target='_blank'>Gaurav Mahavar</a></p>
      </div>
    </div>
  );
};

export default Footer;
