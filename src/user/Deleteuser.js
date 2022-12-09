import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Deleteuser = () => {
    
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://637b824710a6f23f7faadd54.mockapi.io/users/${id}`, {
      method: "DELETE",
    })     
      .then(() => navigate("/users"));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default Deleteuser;