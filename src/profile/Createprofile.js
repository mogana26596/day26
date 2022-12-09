import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
const Createprofile = () => {

    const [Firstname, setFirstName] = useState("");
    const [Lastname, setLastName] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [jobtitle, setJobtitle] = useState("");
    const [experience, setExperience] = useState("");
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

                <Form.Select aria-label="Default select example" onSelect={(event) => setGender(event.target.value)}>
                    <option>Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                </Form.Select>

                <TextField onChange={(event) => setEmail(event.target.value)}
                    label="Email" type="email" variant="standard" />

                <TextField onChange={(event) => setPhone(event.target.value)}
                    label="Phone" type="number" variant="standard" />

                <TextField onChange={(event) => setJobtitle(event.target.value)}
                    label="Job Title" type="name" variant="standard" />

                <TextField onChange={(event) => setExperience(event.target.value)}
                    label="Experience" type="name" variant="standard" />
            </div>
             
        <Button className="add-button" onClick={() => {
          const newuserprofile = {
            Firstname: Firstname,
            Lastname:Lastname,
            date:date,
            gender:gender,
            email: email,
            phone: phone,
            jobtitle:jobtitle,      
            experience:experience         
          };
          
          fetch("https://637b824710a6f23f7faadd54.mockapi.io/profile",{
            method: "POST",
            body: JSON.stringify(newuserprofile),
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then((data) => data.json())         
          .then(() => navigate("/list-user-profile"));                  
        }} 
          variant="contained">Add user profile</Button>
        </div>
    )
}

export default Createprofile;