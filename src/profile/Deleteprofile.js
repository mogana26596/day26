import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Deleteprofile = () => {
    
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://637b824710a6f23f7faadd54.mockapi.io/profile/${id}`, {
      method: "DELETE",
    })     
      .then(() => navigate("/list-user-profile"));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default Deleteprofile;