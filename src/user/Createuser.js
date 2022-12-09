import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createuser = () => {

    const [Firstname, setFirstName] = useState("");
    const [Lastname, setLastName] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");

    const navigate = useNavigate();

    return (
        <div>
            <div className="add-user" style={{marginTop:"100px", marginLeft:"180px"}}>
                <TextField onChange={(event) => setFirstName(event.target.value)}
                    label="First Name" type="name" variant="standard" />

                <TextField onChange={(event) => setLastName(event.target.value)}
                    label="Last Name" type="name" variant="standard" />

                <TextField onChange={(event) => setDate(event.target.value)}
                    label="DOB" type="date" variant="standard" />

                <TextField onChange={(event) => setEmail(event.target.value)}
                    label="Email" type="email" variant="standard" />

                <TextField onChange={(event) => setPhone(event.target.value)}
                    label="Phone" type="number" variant="standard" />

                <TextField onChange={(event) => setLocation(event.target.value)}
                    label="Location" type="name" variant="standard" />
            </div>
             
        <Button className="add-button" onClick={() => {
          const newuser = {
            Firstname: Firstname,
            Lastname:Lastname,
            date:date,
            email: email,
            phone: phone,
            location:location        
          };
          
          fetch("https://637b824710a6f23f7faadd54.mockapi.io/users",{
            method: "POST",
            body: JSON.stringify(newuser),
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then((data) => data.json())         
          .then(() => navigate("/users"));                  
        }} 
          variant="contained">Add user</Button>
        </div>
    )
}

export default Createuser;