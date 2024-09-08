import React from 'react';
import hero from '../data/logo.json'

function Navbar1() {
  return (
    <>
      <div className="container nav_bar"
        data-aos="zoom-in"
        data-aos-duration="1000" >
        <div className="left nav_items"> <img className='my-logo' src={`/assest/${hero.imgSrc}`} alt="" /></div>
        <div className="right">
          <a href="#home" className="nav_items">Home
          </a>
          <a href="#skills" className="nav_items">Skills
          </a>
          <a href="#education" className="nav_items">Education
          </a>
          <a href="#exp" className="nav_items">Experince
          </a>


          <a href="#projects" className="nav_items">Project
          </a>
          <a href="#cont" className="nav_items">Contract
          </a>

        </div>




      </div>





    </>
  )
}

export default Navbar1