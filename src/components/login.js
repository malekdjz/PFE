
import Footer from './Footer';
import {Navigate} from 'react-router-dom';
import React, { useState, useRef } from "react";
import auth from '../services/auth';


function Login() {

 const [username,setUsername] = useState('');
 const [password,setPassword] = useState('');

 function changeUsername(e)
 {
  setUsername(e.target.value);
 }

 function changePassword(e)
 {
  setPassword(e.target.value);
 }
  function handleLogin(e)
  {
    e.preventDefault();
    console.log(auth.login(username,password));
  }
  console.log(auth.currentUser());

  return (
    <>
      <div className="login">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
              <div className="form-container">
                <h3 className="title">Login</h3>
                <form className="form-horizontal" onSubmit={handleLogin}>
                  <div className="form-icon">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <div className="form-group">
                    <span className="input-icon"><i className="bi bi-person-fill"></i></span>
                    <input type="text" className="form-control" placeholder="Username" onChange={changeUsername}/>
                  </div>
                  <div className="form-group">
                    <span className="input-icon"><i className="bi bi-lock-fill"></i></span>
                    <input type="password" className="form-control" placeholder="Password" onChange={changePassword}/>
                  </div>
                  <button className="btn signin">Login</button>
                  <span className="forgot mt-3 text-center">Contact your admin for any help needed.</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
