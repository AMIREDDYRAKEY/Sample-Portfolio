import React from 'react'
import img from './assets/profile-1.webp'
import { motion } from 'framer-motion';
const Hero = () => {
    const paths = {
  initial: "M10,30 Q50,5 90,30 Q50,55 10,30 Z",
  morph: "M20,40 Q50,10 80,40 Q50,70 20,40 Z",
};
  return (
    <div className=' flex flex-col lg:pb-[40px] justify-center items-center lg:flex lg:flex-row lg:justify-center lg:items-center mt-[50px] lg:mt-[90px]'>
        {/* content */}
        <div className='flex flex-col justify-center ml-[10px] lg:ml-[-30px] gap-4'>
            <h2 className='text-[35px] lg:text-[50px] text-[#0f2943] lg:text-start text-center lg:w-[60%] lg:leading-[68px] font-semibold'>Crafting Digital Experiences with Passion</h2>
            <p className='lg:w-[60%] lg:text-start text-center lg:ml-[0px] ml-[20px] w-[80%] text-lg lg:text-[20px] text-[#7b7e81]'>Transforming ideas into elegant solutions through creative design and innovative development</p>
            <div className=' flex flex-col gap-3 lg:flex lg:flex-row lg:gap-10 mt-[15px] '>
                <button className=' bg-[#e87532] rounded-full text-[14px] text-white h-[50px] w-[95%] lg:h-[55px] lg:w-[180px]'>View My work</button>
               <div > <button className='border-2 border-[#f8d5c1] text-[#e87532] text-[14px] rounded-full hover:bg-[#e87532]   hover:text-white h-[50px] w-[95%] lg:h-[55px] lg:w-[180px]'>Let`s Connect</button></div>
            </div>
            <div className=' flex flex-col justify-center items-center lg:items-start lg:flex lg:flex-row lg:justify-start gap-5 lg:gap-10 mt-[10px] '>
                <div className='flex flex-col text-[#0f2943]'>
                    <h3 className='text-4xl font-bold text-[#0f2943]'>5+</h3>
                    <p className='text-[#8d8f91]'>Years Experience</p>
                </div>
                <div className='flex flex-col text-[#0f2943]'>
                    <h3 className='text-4xl font-bold text-[#0f2943]'>100+</h3>
                    <p className='text-[#8d8f91]'>Projects Completed</p>
                </div>
                <div className='flex flex-col ml-[-40px] lg:ml-[0px] text-[#0f2943]'>
                    <h3 className='text-4xl font-bold text-[#0f2943]'>50+</h3>
                    <p className='text-[#8d8f91]'>Clients</p>
                </div>
            </div>
        </div>
        {/* picture */}
         <div className=' ml-[16px] mt-[10px] lg:mt-[0px] lg:ml-[-20%]' >
            
            <div className='  rounded-2xl lg:rounded-xl'><img src={img} alt="" className=' h-[250px] w-[250px] lg:h-[430px] lg:w-[430px]  border-black rounded-xl lg:rounded-lg' /></div>
         </div>
          
    </div>
  )
}

export default Hero