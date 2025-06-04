 import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from './assets/person-f-8.webp'
import img2 from './assets/person7.webp'
import img3 from './assets/person9.webp'
import 'swiper/css/pagination';
import "./style.css"
import { Pagination,Autoplay } from 'swiper/modules';
const Testmonials = () => {
    return (
        <div className='pb-[50px]'>
            {/* header */}
            <div>
                <h2 className='text-center pt-[40px] text-4xl text-[#6e4a3b]'>Testmonials</h2>
                <div className='flex justify-center mt-[10px]'><svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className='w-[180px] text-[#f2c0a4]'>
                    <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2" ></path>
                </svg></div>
                <p className='text-center text-md lg:ml-[0px] ml-[10px] lg:w-none w-[90%] lg:text-lg text-[#6c6f72]  mt-[10px] '>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae<br></br> consequatur vel illum qui dolorem</p>
            </div>
            {/* slider */}
            <div className='h-[600px] lg:h-[500px] lg:w-[80%] w-[90%] ml-[20px] lg:ml-[10%] mt-[30px] rounded-3xl shadow-lg'>
                <Swiper
                className='rounded-3xl'
                    modules={[Pagination, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 1000,       // Slide every 4000ms (4 seconds)
                        disableOnInteraction: false, // Keeps autoplay even after user interaction
                    }}
                    loop={true}
                >
                    <SwiperSlide className=' flex flex-col-reverse lg:flex lg:flex-row justify-around rounded-3xl'>
                        <div className='text-black h-[160px] lg:h-none lg:mt-[-180px] lg:ml-[0px] ml-[10px] mt-[-0px] flex flex-col gap-5 items-start justify-start   ' >
                     <h2  className='lg:text-2xl text-md  font-semibold text-[#1a334d] ' >Labore nostrum eos impedit</h2>
                     <i><p className='text-start lg:w-none w-[100%] lg:w-[90%] text-[11px] lg:text-[14px] lg:mt-[0px] mt-[-20px]  text-[#717477]'>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.<br></br> Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    </p></i>
                    <i> <p className='text-start lg:w-none w-[100%] lg:w-[100%] mt-[-10px] text-[12px] lg:text-[14px] lg:mt-[30px] text-[#717477]'>
                      Omnis aspernatur accusantium qui delectus praesentium repellendus. Facilis sint odio aspernatur<br></br> voluptas commodi qui qui qui pariatur. Corrupti deleniti itaque quaerat ipsum deleniti culpa<br></br> tempora tempore. Et consequatur exercitationem hic aspernatur nobis est voluptatibus architecto<br></br> laborum.
                    </p></i>
                    <div className='flex gap-4'>
                        <div className='h-[80px] w-[80px] rounded-full'><img src={img1} alt="" className='rounded-full' /></div>
                        <div className='mt-2  '><h3 className='text-[#1a334d] font-semibold'>Matt Brandon</h3>
                        <p className='text-sm text-[#717477]'>Freelancer</p></div>
                    </div>
                    </div>
                        <div className=' h-[250px] w-[100%] mt-[-190px] lg:mt-[0px] lg:h-[400px] lg:ml-[60px] roundend-xl lg:w-[350px]'>
                             <img src={img1} alt="" className=' rounded-xl' />
                        </div>
                    </SwiperSlide>
                      <SwiperSlide className=' flex flex-col-reverse lg:flex lg:flex-row justify-around rounded-3xl'>
                        <div className='text-black h-[160px] lg:h-none lg:mt-[-180px] lg:ml-[0px] ml-[10px] mt-[-0px] flex flex-col gap-5 items-start justify-start   ' >
                     <h2  className='lg:text-2xl text-md  font-semibold text-[#1a334d] ' >Labore nostrum eos impedit</h2>
                     <i><p className='text-start lg:w-none w-[100%] lg:w-[90%] text-[11px] lg:text-[14px] lg:mt-[0px] mt-[-20px]  text-[#717477]'>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.<br></br> Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    </p></i>
                    <i> <p className='text-start lg:w-none w-[100%] lg:w-[100%] mt-[-10px] text-[12px] lg:text-[14px] lg:mt-[30px] text-[#717477]'>
                      Omnis aspernatur accusantium qui delectus praesentium repellendus. Facilis sint odio aspernatur<br></br> voluptas commodi qui qui qui pariatur. Corrupti deleniti itaque quaerat ipsum deleniti culpa<br></br> tempora tempore. Et consequatur exercitationem hic aspernatur nobis est voluptatibus architecto<br></br> laborum.
                    </p></i>
                    <div className='flex gap-4'>
                        <div className='h-[80px] w-[80px] rounded-full'><img src={img2} alt="" className='rounded-full' /></div>
                        <div className='mt-2  '><h3 className='text-[#1a334d] font-semibold'>Matt Brandon</h3>
                        <p className='text-sm text-[#717477]'>Freelancer</p></div>
                    </div>
                    </div>
                        <div className=' h-[250px] w-[100%] mt-[-190px] lg:mt-[0px] lg:h-[400px] lg:ml-[60px] roundend-xl lg:w-[350px]'>
                             <img src={img2} alt="" className=' rounded-xl' />
                        </div>
                    </SwiperSlide>
                      <SwiperSlide className=' flex flex-col-reverse lg:flex lg:flex-row justify-around rounded-3xl'>
                        <div className='text-black h-[160px] lg:h-none lg:mt-[-180px] lg:ml-[0px] ml-[10px] mt-[-0px] flex flex-col gap-5 items-start justify-start   ' >
                     <h2  className='lg:text-2xl text-md  font-semibold text-[#1a334d] ' >Labore nostrum eos impedit</h2>
                     <i><p className='text-start lg:w-none w-[100%] lg:w-[90%] text-[11px] lg:text-[14px] lg:mt-[0px] mt-[-20px]  text-[#717477]'>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.<br></br> Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    </p></i>
                    <i> <p className='text-start lg:w-none w-[100%] lg:w-[100%] mt-[-10px] text-[12px] lg:text-[14px] lg:mt-[30px] text-[#717477]'>
                      Omnis aspernatur accusantium qui delectus praesentium repellendus. Facilis sint odio aspernatur<br></br> voluptas commodi qui qui qui pariatur. Corrupti deleniti itaque quaerat ipsum deleniti culpa<br></br> tempora tempore. Et consequatur exercitationem hic aspernatur nobis est voluptatibus architecto<br></br> laborum.
                    </p></i>
                    <div className='flex gap-4'>
                        <div className='h-[80px] w-[80px] rounded-full'><img src={img3} alt="" className='rounded-full' /></div>
                        <div className='mt-2  '><h3 className='text-[#1a334d] font-semibold'>Matt Brandon</h3>
                        <p className='text-sm text-[#717477]'>Freelancer</p></div>
                    </div>
                    </div>
                        <div className=' h-[250px] w-[100%] mt-[-190px] lg:mt-[0px] lg:h-[400px] lg:ml-[60px] roundend-xl lg:w-[350px]'>
                             <img src={img3} alt="" className=' rounded-xl' />
                        </div>
                    </SwiperSlide>
                    
                     
                </Swiper>
            </div>

        </div>
    )
}

export default Testmonials
