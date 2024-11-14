import React from 'react';
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user } = useAuth();
  console.log(user)
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem('realestatert');
      navigate('/');
    }
  };

  return (
    <div className="max-w-3xl my-10 mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src={user?.avatar}
          alt={user?.username}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold">{user?.username}</h1>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-medium">User Details</h2>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">User ID:</span>
            <span>{user?._id}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Created At:</span>
            <span>{new Date(user?.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Last Updated:</span>
            <span>{new Date(user?.updatedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <Link to={"/create-listing"} >
        <button
          className="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
        >
          Create Listing
        </button>
      </Link>

      <button
        onClick={handleLogout}
        className="mt-6 w-full py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
