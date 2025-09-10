import React from 'react';
import logo from '/images/Tlogo.png';
import profile from '/images/profile.png';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../fireBase/firebase';
import { useAuth } from '../../Context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/TrackMyCash/login');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="bg-[#5A4A42] text-[#E6D5B8] w-full p-3 flex flex-col md:flex-row items-center justify-between">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-4 mb-2 md:mb-0">
        <img
          src={logo}
          alt="TrackMyCash Logo"
          className="h-[50px] w-[50px] transition-transform hover:scale-110 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <h2 className="text-2xl font-semibold hover:text-[#A67B5B] cursor-pointer" onClick={() => navigate('/')}>
          TrackMyCash
        </h2>
      </div>

      {/* Center: Navigation */}
      {user && (
        <ul className="flex gap-8 mb-2 md:mb-0">
          <li
            className="hover:text-[#A67B5B] cursor-pointer"
            onClick={() => navigate('/TrackMyCash/dashboard')}
          >
            Add Expense +
          </li>
          <li
            className="hover:text-[#A67B5B] cursor-pointer"
            onClick={() => navigate('/TrackMyCash/analytics')}
          >
            Analytics
          </li>
        </ul>
      )}

      {/* Right: Profile & Logout */}
      {user && (
        <div className="flex items-center gap-4">
          <img
            src={profile}
            alt="Profile"
            className="h-[30px] w-[30px] rounded-full hover:scale-110 transition-transform cursor-pointer"
          />
          <button
            onClick={handleLogout}
            className="bg-[#C4A484] text-[#5A4A42] px-4 py-1 rounded hover:bg-[#5A4A42] hover:text-[#C4A484] transition-all"
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
