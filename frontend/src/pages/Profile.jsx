import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const { user } = useAuth();
  console.log(user)

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token and navigate to the home page
    localStorage.removeItem('realestatert');
    navigate('/');
  }

  return (
    <div>
      <button onClick={handleLogout}>Logut</button>
    </div>
  )
}

export default Profile