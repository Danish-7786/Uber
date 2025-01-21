import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem('token');
      console.log(token);

      try {
        const response = await axios.get("http://localhost:8000/users/logout", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } catch (error) {
        console.log(error);
      }
    };

    logout();
  }, [navigate]);

  return null;
}

export default UserLogout;