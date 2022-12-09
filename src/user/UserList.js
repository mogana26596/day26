import React from 'react';
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const UserList = () => {

    const [users, setUser] = useState([]);
    const navigate = useNavigate();

    function getUser() {
        fetch("https://637b824710a6f23f7faadd54.mockapi.io/users", {
          method: "GET"
        })
          .then((data) => data.json())
          .then((res) => setUser(res))         
          .catch((e) => console.log(e));
      }
    
      useEffect(() => getUser() , []);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.Firstname}</td>
                <td>{user.Lastname}</td>
                <td>{user.date}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.location}</td>
                <td><IconButton onClick={() => navigate(`/edit-user/${user.id}`)} color="secondary">
                    <EditIcon />
                  </IconButton>
                </td>
                <td><IconButton onClick={() => navigate(`/delete-user/${user.id}`)} color="error">
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

export default UserList;