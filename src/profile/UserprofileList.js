import React from 'react';
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const UserprofileList = () => {

    const [profiles, setProfile] = useState([]);
    const navigate = useNavigate();

    function getProfile() {
        fetch("https://637b824710a6f23f7faadd54.mockapi.io/profile", {
          method: "GET"
        })
          .then((data) => data.json())
          .then((res) => setProfile(res))         
          .catch((e) => console.log(e));
      }
    
      useEffect(() => getProfile() , []);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
          </tr>
        </thead>     
        <tbody>
          {profiles.map((profile) => {
            return (
              <tr>
                <th scope="row">{profile.id}</th>
                <td>{profile.Firstname}</td>
                <td>{profile.Lastname}</td>
                <td><Button onClick={() => navigate(`/profile/${profile.id}`)} variant="link">View full profile</Button>
                </td>
                <td><IconButton onClick={() => navigate(`/edit-profile/${profile.id}`)} color="secondary">
                    <EditIcon />
                  </IconButton>
                </td>
                <td><IconButton onClick={() => navigate(`/delete-profile/${profile.id}`)} color="error">
                    <DeleteIcon />
                  </IconButton>
                  </td>
              </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserprofileList;