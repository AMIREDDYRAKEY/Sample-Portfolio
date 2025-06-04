import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='h-[200px] pt-[90px] text-black'>
        <div className='flex flex-col gap-3 items-center justify-center'>
            <div className='flex gap-2 text-sm'>© Copyright <h3 className='font-bold'>EasyFolio</h3> All Rights Reserved</div>
            <div className='flex text-lg gap-2  text-[#85888a]'>
                 <span className='border-2 rounded-full px-2 py-2 '><FaXTwitter /></span>
                 <span className='border-2 rounded-full px-2 py-2'><FaFacebook /></span>
                <span className='border-2 rounded-full px-2 py-2'><FaInstagram /></span>
                <span className='border-2 rounded-full px-2 py-2'><FaLinkedin /></span>
            </div>
            <div className='flex gap-2 text-[12px]'>Designed by <h3 className='text-[#e87532]'>BootstrapMade</h3></div>
        </div>
    </div>
  )
}

export default Footer