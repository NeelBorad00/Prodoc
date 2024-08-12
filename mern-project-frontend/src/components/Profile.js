import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/auth/profile', {
          withCredentials: true
        });
        setUser(res.data);
      } catch (error) {
        console.error(error.response.data.message);
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const onLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      navigate('/login');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;