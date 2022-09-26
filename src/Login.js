import React, {useState} from 'react'
import './login.css'
import {useSelector,useDispatch } from 'react-redux';
import {login} from "./action/index";



function Login() {
    const dispatch=useDispatch();
    const admin=useSelector(state=>state.login.admin);
    const error=useSelector(state=>state.login.error);

        if(admin != ''){
            window.location.href = "/Dashboard";
        }
    
      
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');


    document.body.style.overflow='hidden';
  return (
    <div className="login-form">

    <form>
      <header>

        <div className="photo">
          <img src="http://lorempixel.com/120/120/animals/" alt="" />
        </div>


        <div className="user-info">
          <img src="https://cdn.discordapp.com/attachments/1002099207177523221/1003297806192226394/logoo-removebg-preview_3.png" className="safari-logo-login"/>


          <h3>Safari</h3>
          <h5>Admin Dashboard Login</h5>
        </div>

      </header>


      <section>

        <div id='Error-div'>
            <span>{error}</span>
        </div>


        <div className="input">
          <input 
            type="email" 
            placeholder="Email Address" 
            name='email'
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>


        <div className="password">
          <input className="toggle-type" 
            type="password" 
            placeholder="Password"
            name='password' 
            onChange={(e)=>setPassword(e.target.value)}
            />
        </div>


        <div className="confirm-password">
          <div className="inner">
            <input 
                type="password" 
                placeholder="Confirm Password" 
                />
          </div>
          
        </div>

      </section>

      <footer>
        <div className="action">
          <a onClick={() =>  dispatch(login(email,password))}>Login</a>
        </div>

      </footer>

    </form>
    
  </div>
  
  )
}

export default Login
