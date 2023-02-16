import React from 'react';
import "./create.css";
import { IoIosAddCircleOutline } from "react-icons/io"

const Create = () => {
  return (
    <>
     <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>
            <img src='https://images.unsplash.com/photo-1553447977-754f9430685c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=60' alt='image' class='image-preview' />
          </div>
          <form>
            <div className='inputfile flexCenter'>
              <input type='file' accept='image/*' alt='img' />
            </div>
            <input type='text' placeholder='Title' />

            <textarea name='' id='' cols='30' rows='10'></textarea>

            <button className='button'>Create Post</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Create