import React from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fireBase/firebase';

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = React.useState({});
  const [alert, setAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate('/TrackMyCash/');
    } catch (err) {
      setAlertMessage("Registration failed: " + err.message);
      setAlert(true);
      setTimeout(() => setAlert(false), 3000);
    }
  }

  const handleClick = () => {
    navigate('/TrackMyCash');
  };

  return (
    <div>
      {alert && <Alert alertMessage={alertMessage} />}
      <div className='flex flex-col md:flex-row justify-center items-start pt-10 mt-10 pb-10 mb-10 text-[#5A4A42]'>
        {/* Left Panel */}
        <div className='md:w-1/4 w-full border-r border-black p-5'>
          <h2 className='text-2xl font-bold mb-2'>TrackMyCash</h2>
          <h5 className='text-sm italic'>"Take Control of Your Expenses, One Click at a Time!"</h5>
        </div>

        {/* Right Panel (Form) */}
        <div className='md:w-1/4 w-full flex flex-col ms-2 mt-5 md:mt-0'>
          <label htmlFor="name" className='m-2'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={handleChange}
            className='border border-[#5A4A42] rounded px-2 py-1 mx-2 focus:outline-none focus:ring-2 focus:ring-[#5A4A42]'
          />

          <label htmlFor="phone" className='m-2'>Phone:</label>
          <input
            type='text'
            id='phone'
            name='phone'
            onChange={handleChange}
            className='border border-[#5A4A42] rounded px-2 py-1 mx-2 focus:outline-none focus:ring-2 focus:ring-[#5A4A42]'
          />

          <label htmlFor="email" className='m-2'>Email Address:</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            className='border border-[#5A4A42] rounded px-2 py-1 mx-2 focus:outline-none focus:ring-2 focus:ring-[#5A4A42]'
          />

          <label htmlFor="password" className='m-2'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={handleChange}
            className='border border-[#5A4A42] rounded px-2 py-1 mx-2 focus:outline-none focus:ring-2 focus:ring-[#5A4A42]'
          />

          <div className='text-center'>
            <button
              className='bg-[#C4A484] text-[#5A4A42] px-6 py-2 mt-6 rounded-md text-lg hover:bg-[#5A4A42] hover:text-[#C4A484] transition-transform active:scale-95'
              onClick={handleRegister}
            >
              Register
            </button>
          </div>

          <p className='text-center p-3'>
            Already a user?{' '}
            <button onClick={handleClick} className='text-[#5A4A42] underline hover:text-[#A67B5B]'>
              SignIn
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
