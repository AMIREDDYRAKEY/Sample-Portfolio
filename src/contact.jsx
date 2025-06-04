import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
const Contact = () => {
  return (
    <div className=' mt-[10px] pb-[40px] bg-[#faf9fb]'>
        <div className='flex flex-col lg:flex lg:flex-row justify-start pt-[30px] ml-[10px] lg:ml-[150px] '>
            {/* content */}
            <div className='text-black gap-6 lg:ml-[0px] h-[400px] md:w-[550px] flex flex-col items-start justify-start px-4 pt-[10px]'>
                <h3 className='uppercase text-[#585d5e] font-bold'>Contact</h3>
                <p className='lg:text-5xl text-[25px] w-[90%] lg:w-[100%] text-[#0f2943] font-semibold'>Nemo enim ipsam voluptatem quia voluptas aspernatur</p>
                <p className='lg:text-xl text-lg lg:w-[100%] w-[90%] font-sans text-[#585d5e]'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                <div className='flex flex-col gap-3 text-lg font-semibold\'>
                <span className='text-[#0a1640] flex gap-3'><MdOutlineEmail className='mt-[6px] text-xl text-[#e97732]' />info@example.com</span>
                 <span className='text-[#0a1640] flex gap-3'> <FiPhone className='mt-[6px] text-xl text-[#e97732]'/> +1 5589 55488 558</span>
                 <span className='text-[#0a1640] lg:text-md lg:w-[95%] text-sm lg:w-none w-[80%] flex gap-3'> <CiLocationOn className='mt-[6px] text-xl text-[#e97732]' />A108 Adam Street, New York, NY 535022</span>
                 </div>
            </div>
            {/* ConatctForm */}
            <div className=' h-[450px] w-[95%] lg:ml-[30px] ml-[5px] lg:h-[450px] lg:w-[500px] lg:mt-[-0px] mt-[70px] rounded-2xl bg-[#ffffff] shadow-xl'>
                <div className='flex  flex-col p-5 gap-5'>
                    <input type="name" placeholder='Your Name' className='border-[1px] px-5 py-3 rounded-lg mt-[10px] hover:border-[#e87532]' />
                    <input type=" Email" placeholder='Your Email' className='border-[1px] px-5 py-3 rounded-lg hover:border-[#e87532]'/> 
                    <input type="text" placeholder='Subject'className='border-[1px] px-5 py-3 rounded-lg hover:border-[#e87532]' />
                    <textarea name="Message" id="" placeholder='Message' className='border-[1px] px-3 py-[40px] rounded-lg text-start hover:border-[#e87532]'></textarea>
                    <button className=' mt-[0px] bg-[#e87532] px-2 py-3 rounded-xl text-white font-semibold'>Submit Message</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact