import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function CaptainProtectedWrapper({children}) {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
   
     useEffect(() => {
       if (!token) {
         navigate("/login");
       }
     }, [token, navigate]);
  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectedWrapper