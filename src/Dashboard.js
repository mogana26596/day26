import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    return (
    <>
        <div className='dashboard'>
           <img style={{height:"300px",width:"600px"}} src=" https://d35fo82fjcw0y8.cloudfront.net/2019/08/06134352/blog-header.png"/>
        </div>  
        <div>
            <Button style={{margin:"10px 350px"}} className="user-login" onClick={() => navigate('/users')}
                variant="contained"><b>User Login</b></Button>
        </div>
        <div>
            <Button style={{margin:"5px 350px" }} className="profile-login" onClick={() => navigate('/list-user-profile')}
                variant="contained"><b>User Profile Login</b></Button>
        </div>
    </> 
        
    )
}

export default Dashboard;