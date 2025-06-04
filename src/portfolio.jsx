import React, { useState } from 'react'
import img1 from './assets/portfolio-1.webp'
import img2 from './assets/portfolio-10.webp'
import img3 from './assets/portfolio-7.webp'
import img4 from './assets/portfolio-4.webp'
import img5 from './assets/portfolio-11.webp'
import img6 from './assets/portfolio-2.webp'
const portfolio = () => {
    const [active,setactive]=useState('')
  return (
    <div className='lg:mt-[0px] mt-[40px] pb-[40px]'>
        {/* header */}
        <div>
            <h2 className='text-center pt-[40px] text-5xl text-[#6e4a3b]'>Portfolio</h2>
            <div className='flex justify-center mt-[10px]'><svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className='w-[180px] text-[#f2c0a4]'>
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2" ></path>
          </svg></div>
          <p className='text-center text-lg text-[#6c6f72] lg:w-none w-[92%] lg:ml-[0] ml-[10px] mt-[10px] '>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae<br></br> consequatur vel illum qui dolorem</p>
        </div>
        {/* tabs */}
        <div className=' flex flex-wrap justify-center lg:flex lg:flex-row lg:justify-center mt-[50px] lg:gap-[1rem]'>
           <div> <button  onClick={()=>setactive('Allwork')}  className={` ${active === '' ? 'bg-[#e87532] ':' bg-none text-black'} hover:bg-orange-200 text-md text-black  h-[45px] w-[120px] rounded-full hover:h-[50px] hover:text-black  font-semibold`} >All work</button>
            
           </div>
           {/* webdesin */}
            <div><button onClick={()=>setactive('Web Design')}  className={`${active === 'Web Design' ?' hover:bg-[#e87532] hover:text-white ':'hover:bg-orange-100 hover:h-[50px]'}   text-md text-[#0a0f14]   h-[45px] w-[120px] rounded-full   font-semibold`}>Web Design</button></div>
            {/* Graphics */}
            <div><button onClick={()=>setactive('Graphics')}  className={`${active === 'Graphics' ?' hover:bg-[#e87532] hover:text-white ':'hover:bg-orange-100 hover:h-[50px]'}   text-md text-[#0a0f14]   h-[45px] w-[120px] rounded-full   font-semibold`}>Graphics</button></div>
            {/* motion */}
            <div> <button onClick={()=>setactive('Motion')}  className={`${active === 'Motion' ?' hover:bg-[#e87532] hover:text-white ':'hover:bg-orange-100 hover:h-[50px]'}   text-md text-[#0a0f14]   h-[45px] w-[120px] rounded-full   font-semibold`}>Motion</button></div>
            {/* Branding */}
            <div><button onClick={()=>setactive('Branding')}  className={`${active === 'Branding' ?' hover:bg-[#e87532] hover:text-white ':'hover:bg-orange-100 hover:h-[50px]'}   text-md text-[#0a0f14]   h-[45px] w-[120px] rounded-full   font-semibold`}>Branding</button></div>
        </div>
        {/* tab clicked */}
        <div> 
            {/* Allwork active */}
            { active === 'Allwork' &&(
                <div className='flex flex-col ml-[5px] mt-[40px] lg:ml-[50px] gap-4 lg:mt-[70px]'>
               <div className='  gap-4 lg:flex lg:flex-row flex flex-col  items-center justify-center'>
               <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[600px]'>
                    <img src={img1} alt="" className='rounded-lg h-[200px] lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                 <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[550px]'>
                    <img src={img3} alt="" className='rounded-lg lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                </div>
                 <div className='  gap-4 lg:flex lg:flex-row flex flex-col  items-center justify-center'>
               <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[600px]'>
                    <img src={img2} alt="" className='rounded-lg h-[200px] lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                 <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[550px]'>
                    <img src={img4} alt="" className='rounded-lg lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                </div>
                 <div className='  gap-4 lg:flex lg:flex-row flex flex-col  items-center justify-center'>
               <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[600px]'>
                    <img src={img5} alt="" className='rounded-lg h-[200px] lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                 <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[550px]'>
                    <img src={img6} alt="" className='rounded-lg lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                </div>
            </div>
            )
            }
            {/* allowrk not active */}
            { active === '' &&(
                <div className='flex flex-col ml-[5px] mt-[40px] lg:ml-[50px] gap-4 lg:mt-[70px]'>
               <div className='  gap-4 lg:flex lg:flex-row flex flex-col  items-center justify-center'>
               <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[600px]'>
                    <img src={img1} alt="" className='rounded-lg h-[200px] lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                 <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[550px]'>
                    <img src={img2} alt="" className='rounded-lg lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                </div>
                 <div className='  gap-4 lg:flex lg:flex-row flex flex-col  items-center justify-center'>
               <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[600px]'>
                    <img src={img3} alt="" className='rounded-lg h-[200px] lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                 <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[550px]'>
                    <img src={img4} alt="" className='rounded-lg lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                </div>
                 <div className='  gap-4 lg:flex lg:flex-row flex flex-col  items-center justify-center'>
               <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[600px]'>
                    <img src={img5} alt="" className='rounded-lg h-[200px] lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                 <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[550px]'>
                    <img src={img6} alt="" className='rounded-lg lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                </div>
            </div>
            )
            }
            {/* Web Design */}
            {active === 'Web Design' && (
                <div className='flex flex-col ml-[5px] lg:ml-[50px] gap-4 mt-[40px] lg:mt-[70px]'>
                <div className='  gap-4 lg:flex lg:flex-row flex flex-col  items-center justify-center'>
               <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[600px]'>
                    <img src={img1} alt="" className='rounded-lg h-[200px] lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                 <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[550px]'>
                    <img src={img3} alt="" className='rounded-lg lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                </div>
                </div>
            )}
            {active === 'Graphics' && (
                <div className='flex flex-col ml-[5px] lg:ml-[50px] gap-4 mt-[40px] lg:mt-[70px]'>
                <div className='  gap-4 lg:flex lg:flex-row flex flex-col  items-center justify-center'>
               <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[600px]'>
                    <img src={img3} alt="" className='rounded-lg h-[200px] lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                 <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[550px]'>
                    <img src={img4} alt="" className='rounded-lg lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                </div>
                </div>
            )}
            {active === 'Motion' && (
                <div className='flex flex-col ml-[5px] lg:ml-[50px] gap-4 mt-[40px] lg:mt-[70px]'>
                <div className='  gap-4 lg:flex lg:flex-row flex flex-col  items-center justify-center'>
               <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[600px]'>
                    <img src={img4} alt="" className='rounded-lg h-[200px] lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                 <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[550px]'>
                    <img src={img5} alt="" className='rounded-lg lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                </div>
                </div>
            )}
            {active === 'Branding' && (
                <div className='flex flex-col ml-[5px] lg:ml-[50px] gap-4 mt-[40px] lg:mt-[70px]'>
                <div className='  gap-4 lg:flex lg:flex-row flex flex-col  items-center justify-center'>
               <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[600px]'>
                    <img src={img5} alt="" className='rounded-lg h-[200px] lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                 <div className='shadow-xl rounded-lg h-[350px] w-[90%] lg:h-[450px] lg:w-[550px]'>
                    <img src={img6} alt="" className='rounded-lg lg:h-[300px] lg:w-[600px]' />
                    <div className='mt-[10px]  flex flex-col gap-2 px-6'>
                        <p className='text-sm uppercase text-[#e8753f]'>Web Design</p>
                        <h1 className='lg:text-2xl text-md text-[#0f2943] font-semibold'>Modern Dashboard Interface</h1>
                        <p className='text-sm text-[#53575a]'>Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.</p>
                    </div>
                </div>
                </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default portfolio