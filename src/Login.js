import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate = useNavigate();

    return (
        <div className="bg-gradient-light" style={{height:"750px"}}>

            <div className="container">

                {/* <!-- Outer Row --> */}
                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div className="row">
                                    <div className="col-5" style={{margin:"auto 20px"}}>
                                <img src="https://i.pinimg.com/736x/ec/fb/9f/ecfb9ffd184bceec03b3c19161eee7fd.jpg" alt="Gir" width="400" height="400"/>
                                    </div>
                                    <div className=" col-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." />
                                                </div><br/>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password" />
                                                </div>
                                                <br/>
                                                <button style={{margin:"0px 150px"}} type="button" class="btn btn-primary" onClick={()=>navigate("/dashboard")}>Login</button>
                                                <hr />
                                                <a  href="https://www.google.co.in" className="btn btn-link" style={{padding:"7px 80px"}}  role="button">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </a><br/>
                                            </form>
                                            <hr />
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Login;