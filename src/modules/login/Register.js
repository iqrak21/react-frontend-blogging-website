import React from 'react';
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
     <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form>
            <span>Email address *</span>
            <input type='text' required />
            <span>Username *</span>
            <input type='text' required />
            <span>Password *</span>
            <input type='password' required />
            <span>Conform Password *</span>
            <input type='password' required />
            <button className='button'>Register</button>
            <Link to="/login" className='reg'>Already Registered Please Login</Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register