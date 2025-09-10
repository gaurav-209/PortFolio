import React from 'react';

const Alert = ({ alertMessage, setAlert }) => {
  return (
    <div className="flex justify-end">
      <div className="fixed top-20 right-5 bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-md p-4 shadow-lg w-72 z-50 animate-fade-in-down">
        <div className="flex justify-between items-center">
          <span>{alertMessage}</span>
          <button
            onClick={() => setAlert(false)}
            className="ml-4 text-yellow-800 hover:text-yellow-600 focus:outline-none text-lg"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
