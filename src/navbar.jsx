import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className='bg-[#ffffff] border-2 border-white shadow-lg  lg:h-[70px] h-[40px]  w-[95%]  rounded-full mt-[50px] lg:w-[85%] '>
        <div className='flex justify-evenly  lg:mt-[13px]   items-center'>
        <h2 className='text-2xl text-[#0f2943] ml-[0px] lg:ml-[-90px] lg:text-[#8a8c8f] lg:font-semibold'>Portfolio</h2>
        {/* lists */}
        <div className='hidden lg:flex justify-center    text-[#0A0F14] text-[16px] items-center '>
                <ul className='flex justify-center gap-8 text-[16px]  text-[#0A0F14] font-poppins  '>
                    <li className='hover:text-[#e97a3a]'>Home</li>
                    <li className='hover:text-[#e97a3a]'>About</li>
                    <li className='hover:text-[#e97a3a]'>Resume</li>
                    <li className='hover:text-[#e97a3a]'>Portfolio</li>
                    <li className='hover:text-[#e97a3a]'>Services</li>
                    <li className='hover:text-[#e97a3a]'>Dropdown
                        <select name="Dropdown" id="" className='w-[20px] border-none bg-white '>
                            <option value="" className=''>Dropdown</option>
                            <option value="">Dropdown2</option>
                            <option value="">Dropdown3</option>
                            <option value="">Dropdown4</option>
                            <option value="">Dropdown5</option>
                        </select>
                    </li>
                    <li className='hover:text-[#e97a3a]'>Contact</li>
                </ul>
        </div>
        {/* icons */}
        <div className='flex gap-2 mr-[0px] lg:mr-[-90px] lg:text-[#8a8c8f] text-[#8a8c8f]   text-lg lg:text-md'>
            <span><FaXTwitter /></span>
            <span><FaFacebook /></span>
            <span><FaInstagram /></span>
            <span><FaLinkedin /></span>
        </div>
        <div className='lg:hidden flex text-xl text-[#0f2943] font-bold'><FiMenu /></div>
        </div>
    </div>
  )
}

export default Navbar