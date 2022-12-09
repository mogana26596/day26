import './App.css';
import { Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import Login from './Login';
import Dashboard from './Dashboard';
import Createuser from './user/Createuser';
import Edituser from './user/Edituser';
import UserList from './user/UserList';
import Deleteuser from './user/Deleteuser';
import Createprofile from './profile/Createprofile';
import Editprofile from './profile/Editprofile';
import Viewprofile from './profile/Viewprofile';
import UserprofileList from './profile/UserprofileList';
import Deleteprofile from './profile/Deleteprofile';

function App() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
         
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-user" element={<Createuser />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/edit-user/:id" element={<Edituser />} />
                <Route path="/delete-user/:id" element={<Deleteuser />} />
                <Route path="/create-profile" element={<Createprofile />} />
                <Route path="/list-user-profile" element={<UserprofileList />} />
                <Route path="/profile/:id" element={<Viewprofile />} />
                <Route path="/edit-profile/:id" element={<Editprofile />} />
                <Route path="/delete-profile/:id" element={<Deleteprofile />} />
              </Routes>
            </div>
        </div>
      </div>
     
      
    </div>
  );
}

export default App;

