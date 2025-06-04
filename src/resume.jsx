import React from 'react'

const Resume = () => {
  return (
    <div className=''>
        {/* header */}
        <div>
            <h2 className='text-center pt-[40px] text-4xl text-[#6e4a3b]'>Resume</h2>
            <div className='flex justify-center mt-[10px]'><svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className='w-[180px] text-[#f2c0a4]'>
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2" ></path>
          </svg></div>
          <p className='text-center lg:text-lg text-md w-[78%] ml-[20px] lg:ml-[0px] lg:w-[100%] text-[#6c6f72]   mt-[10px] '>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae<br></br> consequatur vel illum qui dolorem</p>
        </div>
        {/* experinece */}
        <div className='mt-[50px]  lg:mt-[100px] ml-[20px] lg:ml-[90px] flex flex-col gap-3'>
            <h3 class=" text-2xl lg:text-5xl text-[#0f2943] font-semibold">Work Experience</h3>
            <p className=' text-lg lg:text-xl font-thin text-[#6c6f72]'>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
        </div>
        <div className='flex flex-col gap-3 lg:flex lg:ml-[0px] ml-[20px] lg:flex-row lg:gap-[5rem] mt-[40px]'>
            <div className='flex flex-col lg:gap-[9rem] gap-5  lg:ml-[90px]'>
                <div className='flex flex-col'>
                   <h3 className='text- font-bold text-[#0f3674] '>Etiam Industries</h3>
                   <p className='text-[#e87532]'>Jun, 2023 - Current</p>
                </div>
                 <div className='flex flex-col'>
                   <h3 className='text-lg font-bold text-[#0f3674] lg:mt-[-40px]'>Nullam Corp</h3>
                   <p className='text-[#e87532]'>2019 - 2023</p>
                </div>
                 <div className='flex flex-col'>
                   <h3 className='text-lg font-bold text-[#0f3674] lg:mt-[35px]'>Stepping Stone Ltd.</h3>
                   <p className='text-[#e87532]'>2015-2019</p>
                </div>
                 
            </div>
            <div className='lg-mt-[0px]'>
                <div className=' hidden lg:flex h-[500px] mt-[-6px] bg-[#fcece1] w-[3px] flex flex-col gap-[8rem] '>
                    <div className=' bg-[#e87532] h-[15px] mt-[10px] w-[15px] ml-[-7px] rounded-full'></div>
                     <div className=' bg-[#e87532] h-[15px] w-[15px] ml-[-7px] rounded-full'></div>
                      <div className=' bg-[#e87532] h-[15px] w-[15px] ml-[-7px] mt-[90px] rounded-full'></div>
                </div>
            </div>
            <div className='flex flex-col lg:gap-[6rem] gap-[3rem] mt-[-10px]'>
                <div className='flex flex-col '>
                    <h3 className='text-xl font-bold text-[#0f3674]'>Project Lead</h3>
                    <p className='text-[#485671] text-md '>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde<br></br> vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader<br></br> mart dila</p>
                </div>
                <div className='flex flex-col mt-[-40px]'>
                    <h3 className='text-xl font-bold text-[#0f3674]'>Master of Fine Arts & Graphic Design</h3>
                    <p className='text-[#485671] lg:w-none w-[90%]'>Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.</p>
                   <div className='gap-3 flex flex-col mt-[10px] text-black'> <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                       <li> Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                       <li> Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                        <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                        </div>
                </div>
                <div className='flex flex-col lg:mt-[-40px] mt-[-30px]'>
                    <h3 className='text-xl font-bold text-[#0f3674]'>Graphic design specialist</h3>
                    <p className='text-[#485671] lg:w-none w-[90%]'>Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.</p>
                </div>
            </div>
        </div>
        {/* education */}
        <div className= ' mt-[30px] lg:mt-[100px] ml-[20px] lg:ml-[90px] flex flex-col gap-3'>
            <h3 className=' text-3xl lg:text-5xl text-[#0f2943] font-semibold'>My Education</h3>
            <p className='lg:text-xl text-lg font-thin text-[#6c6f72] lg:w-none w-[90%] '>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
        </div>
            <div className=" flex flex-col lg:flex lg:flex-row gap-4 lg:gap-[5rem] mt-[40px]">
    <div className="flex flex-col lg:gap-[60px] gap-4 ml-[20px] lg:ml-[90px]">
    <div className="flex flex-col">
      <h3 className="text-lg font-bold text-[#0f3674]">Vestibulum University</h3>
      <p className="text-[#e87532]">2017 - 2019</p>
    </div>
    <div className="flex flex-col">
      <h3 className="text-lg font-bold text-[#0f3674]">Nullam Corp</h3>
      <p className="text-[#e87532]">2019 - 2023</p>
    </div>
    <div className="flex flex-col">
      <h3 className="text-lg font-bold text-[#0f3674]">Vestibulum University</h3>
      <p className="text-[#e87532]">2015 - 2019</p>
    </div>
  </div>

  {/* Timeline vertical line with dots */}
  <div className="relative hidden lg:block h-[300px] mt-[-6px] w-[3px] bg-[#fcece1] flex flex-col items-center gap-[6.4rem]">
    <div className="bg-[#e87532] h-[15px] w-[15px] mt-[10px] rounded-full absolute top-0 -left-[6px]"></div>
    <div className="bg-[#e87532] h-[15px] w-[15px] rounded-full absolute top-[120px] -left-[6px]"></div>
    <div className="bg-[#e87532] h-[15px] w-[15px] rounded-full absolute top-[240px] -left-[6px]"></div>
  </div>

  {/* Right Side - Degrees and Descriptions */}
  <div className="flex flex-col lg:gap-[3rem] gap-5 lg:ml-[0px] ml-[20px] mt-[-8px]">
    <div className="flex flex-col">
      <h3 className="text-xl font-bold text-[#0f3674]">Diploma in Consequat</h3>
      <p className="text-[#485671] lg:w-none w-[90%]">
        Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.
      </p>
    </div>
    <div className="flex flex-col">
      <h3 className="text-xl font-bold text-[#0f3674]">
        Master of Fine Arts & Graphic Design
      </h3>
      <p className="text-[#485671] lg:w-none w-[90%]">
        Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.
      </p>
    </div>
    <div className="flex flex-col">
      <h3 className="text-xl font-bold text-[#0f3674]">
        Bachelor of Fine Arts & Graphic Design
      </h3>
      <p className="text-[#485671] lg:w-none w-[90%]">
        Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.
      </p>
      </div>
       </div>
     </div>

    </div>
  )
}

export default Resume