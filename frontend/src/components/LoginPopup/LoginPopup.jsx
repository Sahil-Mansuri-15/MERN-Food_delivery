import React, { useContext } from 'react';
import './LoginPopup.css';
import { useState } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {

  const {url,setToken}=useContext(StoreContext)
  const [currState, setCurrState] = useState('Login');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));

  };

  const onLogin= async (event)=>{
    event.preventDefault();
     let newUrl = url;
     if (currState === 'Login') {
       newUrl += '/api/user/login';
     } else {
       newUrl += '/api/user/register';
     }
     const response = await axios.post(newUrl, data);
     if (response.data.success) {
       setToken(response.data.token);
       localStorage.setItem('token', response.data.token);
        setShowLogin(false);
     }else{
        alert(response.data.message);
     }

  }



  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currState === 'Login' ? (
            <></>
          ) : (
            <input  name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" required />
          )}

          <input name="email" type="email" onChange={onChangeHandler} value={data.email} placeholder="Your email" required />
          <input name="password" type="password" onChange={onChangeHandler} value={data.password} placeholder="Password" required />
        </div>
        <button type='submit'>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>

        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState === 'Login' ? (
          <p>
            Create a new account{' '}
            <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
