import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './TNavbar';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';
import ExpenseApp from './ExpenseApp';
import PrivateRoute from './PrivateRoute';

const TrackMyCash = () => {
  return (
      <div className="min-h-screen flex flex-col">
        {/* Always visible */}
        <Navbar />

        {/* Page Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/ExpenseApp' element={<PrivateRoute><ExpenseApp /></PrivateRoute>} />
          </Routes>
        </div>

        {/* Always visible */}
        <Footer />
      </div>
  );
};

export default TrackMyCash;
