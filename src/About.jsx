 import React from 'react'
 import img from './assets/profile-2.webp'
 const About = () => {
   return (
     <div className='pb-[40px]'>
        {/* header */}
        <div className='lg:mt-[0px]  mt-[20px]'>
            <h2 className='text-center pt-[40px] text-4xl text-[#6e4a3b]'>About</h2>
            <div className='flex justify-center mt-[10px]'><svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className='w-[180px] text-[#f2c0a4]'>
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2" ></path>
          </svg></div>
          <p className='text-center text-sm lg:text-lg text-[#6c6f72]  mt-[10px] '>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae<br></br> consequatur vel illum qui dolorem</p>
        </div>
        {/* photo */}
        <div className='flex flex-col lg:flex lg:flex-row mt-[30px] lg:mt-[40px] justify-center ml-[1] lg:ml-[9%] gap-[40px] '>
        <div className=''>
            <div><img src={img} alt="" className=' shadow-2xl h-[300px] w-[280px] ml-[20px] lg:ml-[0px] lg:h-[536px] lg:w-[796px] rounded-xl' /></div>
        </div>
        {/* content */}
        <div className='flex flex-col ml-[30px] mt-[20px]'>
            <div className='flex flex-col gap-4 '>
            <h3 className='lg:text-sm text-lg text-[#e87532] lg:text-start text-start font-bold'>About Me</h3>
            <p className='lg:text-4xl text-[#0f2954] lg:ml-[0px] ml-[-10px] text-3xl font-semibold'>UI/UX Designer & Web Developer</p>
            <p className='lg:w-[60%] lg:text-start w-[100%] lg:ml-[0px] ml-[-10px] text-start lg:text-lg text-lg font-poppins text-[#585d5e]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <p className='text-lg font-poppins text-[#0a1323] lg:ml-[0px] ml-[-10px]'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
            </div>
            <div className='bg-[#ffffff] rounded-xl p-6 h-[400px] lg:h-[230px] flex flex-col lg:flex-row lg:flex lg:justify-start lg:gap-[6rem] gap-2 ml-[-10px] lg:ml-[10px] w-[280px] lg:w-[500px] mt-[20px]'>
                <div className='flex flex-col gap-3'>
                    <div>
                        <p className='text-[#757273]'>Name</p>
                        <h3 className='text-lg text-[#0f2954] font-bold'>Eliot Johnson</h3>
                    </div>
                     <div>
                        <p className='text-[#757273]'>Age</p>
                        <h3 className='text-lg text-[#0f2954] font-bold'>26 Years</h3>
                    </div>
                     <div>
                        <p className='text-[#757273]'>Occupation</p>
                        <h3 className='text-lg text-[#0f2954] font-bold'>Lorem Engineer</h3>
                    </div>
                </div>
                 <div className='flex flex-col gap-3'>
                    <div>
                        <p className='text-[#757273]'>Phone</p>
                        <h3 className='text-lg text-[#0f2954] font-bold'>+123 456 7890</h3>
                    </div>
                     <div>
                        <p className='text-[#757273]'>Email</p>
                        <h3 className='text-lg text-[#0f2954] font-bold'>email@example.com</h3>
                    </div>
                     <div>
                        <p className='text-[#757273]'>Nationality</p>
                        <h3 className='text-lg text-[#0f2954] font-bold'>Ipsum</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
     </div>
   )
 }
 
 export default About
