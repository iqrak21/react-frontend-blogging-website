import React from 'react';
import "./header.css";
import {nav} from "../../assets/data/data"
import { Link } from 'react-router-dom';
import User from "./User"

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  }) 
  return (
    <>
    <header className='header'>
      <div className='scontainer flex'>
        <div className='logo'>
          <img src='https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=60' alt='logo' width="100px"/>
        </div>
        <nav>
          <ul>{nav.map((link)=>(
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}</ul>
        </nav>
        <div className='account flexCenter'>
          <User/>

        </div>

      </div>
    </header>
    </>
  )
}

export default Header