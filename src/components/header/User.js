import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RiImageAddLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
const User = () => {
  const user = true;
  const [openProfile,setOpenProfile] = useState(false);
  const close =()=>{
    setOpenProfile(false)
  }
  return (
    <>
      <div className='profile'>
       {user ? (
        <>
         <button className='img' onClick={()=>setOpenProfile(!openProfile)}>
         <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='image' />
       </button>
       
       {openProfile && (
         <div className='openProfile boxItems' onClick={close}>
         <Link to='account'>
           <div className='image'>
             <div className='img'>
               <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
             </div>
             <div className='text'>
               <h4>Umair Ahmed</h4>
               <p>BS Economics</p>

             </div>

           </div>
         </Link>
         <Link to='/create'>
           <button className='box'>
             <RiImageAddLine className='icon' />
             <h4>Create Post</h4>
           </button>
         </Link>
         <Link to='/login'>
           <button className='box'>
             <IoSettingsOutline className='icon' />
             <h4>My Account</h4>
           </button>
         </Link>
         <button className='box'>
           <BsBagCheck className='icon' />
           <h4>My Order</h4>
         </button>
         <button className='box'>
           <AiOutlineHeart className='icon' />
           <h4>Wishlist</h4>
         </button>
         <button className='box'>
           <GrHelp className='icon' />
           <h4>Help</h4>
         </button>
         <button className='box'>
           <BiLogOut className='icon' />
           <h4>Log Out</h4>
         </button>
       </div>
       )}
        </>
  ) : (
    <Link to='/login'>
    <button>My Account</button>
    </Link>
    )}
      </div>
    </>
  )
}

export default User