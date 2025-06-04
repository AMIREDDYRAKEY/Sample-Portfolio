import React from 'react'
import { PiPulse } from "react-icons/pi";
import { IoEaselOutline } from "react-icons/io5";
import { PiBroadcastLight } from "react-icons/pi";
import { BsBoundingBoxCircles } from "react-icons/bs";
const Services = () => {
  return (
    <div className=' '>
        <div>
            <h2 className='text-center pt-[40px] text-4xl text-[#6e4a3b]'>Services</h2>
            <div className='flex justify-center mt-[10px]'><svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className='w-[180px] text-[#f2c0a4]'>
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2" ></path>
          </svg></div>
          <p className='text-center lg:text-lg text-md text-[#6c6f72] lg:ml-[0px] ml-[20px] w-[90%] lg:w-[100%] lg:w-none mt-[10px] '>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae<br></br> consequatur vel illum qui dolorem</p>
        </div>
        {/* services */}
        <div className='flex flex-col lg:flex lg:flex-row justify-center gap-5   mt-[30px]' >
            {/*content  */}
            <div className=' mt-[-20px] lg:mt-[40px] flex items-start justify-center ml-[-15px] lg:ml-[30px ] gap-4 flex-col lg:h-[400px] lg:w-[450px]'>
                <h3 className='text-[#0f2943] font-semibold text-[40px]  lg:text-[40px] w-[90%] ml-[35px] lg:w-[85%] leading-[45px]'> Consectetur adipiscing elit sed  eiusmod tempor</h3>
                <p className='text-[#123151] ml-[35px] lg:text-sm text-[16px] lg:w-none w-[75%] '>Nulla metus metus ullamcorper vel tincidunt sed<br></br> euismod nibh volutpat velit class aptent taciti sociosqu ad litora.</p>
                <div className='ml-[50px] mt-[30px]' > <button className='border-2 border-[#e87532] text-[#e87532] rounded-full     h-[55px] w-[200px]'>Let`s See  Content</button></div>
            </div>

            {/* cards */}
            <div className='flex flex-col gap-4 justify-evenly  '>
                <div className=' flex flex-col lg:flex-row lg:flex gap-5'>
                <div className='bg-[#ffffff]  hover:scale-105    shadow-xl rounded-md  flex items-start px-5 justify-start py-9 gap-4 flex-col ml-[20px] lg:ml-[0px] h-[220px] w-[280px] lg:w-[350px] text-black lg:h-[220px]'>
                    <span className='text-4xl text-[#e87532]'><PiPulse /></span>
                    <h3 className='text-[#0f2943] text-[20px] hover:text-[#e87532]'>Eget nulla facilisi etiam</h3>
                    <p className='text-[#4e4b4f] text-[15px]'>Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla.</p>
                </div>
                <div className='bg-[#ffffff]  hover:scale-105    shadow-xl rounded-md  flex items-start px-5 justify-start py-9 gap-4 flex-col ml-[20px] lg:ml-[0px] h-[220px] w-[280px] lg:w-[350px] text-black lg:h-[220px]'>
                    <span className='text-4xl text-[#e87532]'><IoEaselOutline /></span>
                    <h3 className='text-[#0f2943] text-[20px] hover:text-[#e87532]'>Duis aute irure dolor</h3>
                    <p className='text-[#4e4b4f] text-[15px]'>Auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor.</p>
                </div>
                </div>
               <div className='lg:flex lg:flex-row flex flex-col    gap-5'>
                <div className='bg-[#ffffff]  hover:scale-105    shadow-xl rounded-md  ml-[20px] lg:ml-[0px] flex items-start px-5 justify-start py-9 gap-4 flex-col h-[220px] w-[280px] lg:w-[350px] text-black lg:h-[220px]'>
                    <span className='text-4xl text-[#e87532]'><PiBroadcastLight /></span>
                    <h3 className='text-[#0f2943] text-[20px] hover:text-[#e87532]'>Excepteur sint occaecat</h3>
                    <p className='text-[#4e4b4f] text-[15px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                </div>
                <div className='bg-[#ffffff]  hover:scale-105    shadow-xl rounded-md ml-[20px] lg:ml-[0px] flex items-start px-5 justify-start py-9 gap-4 flex-col h-[220px] w-[280px] lg:w-[350px] text-black lg:h-[220px]'>
                    <span className='text-4xl text-[#e87532]'><BsBoundingBoxCircles /></span>
                    <h3 className='text-[#0f2943] text-[20px] hover:text-[#e87532]'>Tempor incididunt ut labore</h3>
                    <p className='text-[#4e4b4f] text-[15px]'>Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure .</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services