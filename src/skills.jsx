import React from 'react'

const Skills = () => {
  return (
    <div className='pt-[90px] flex flex-col gap-4 lg:ml-[0px] ml-[20px] lg:gap-0 lg:flex-row lg:justify-evenly lg:flex'>
        <div className='bg-[#ffffff] rounded-lg shadow-md h-[160px] w-[280px]'>
            <div className='flex flex-col gap-2 p-3'>
                <h3 className='text-xl text-[#0f2954] font-semibold'>HTML</h3>
                <p className='text-md text-[#aaacad] font-sans'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                <span className='text-right mr-[5px] text-[#aaacad]'>90%</span>
                <div className='bg-[#fcebe0] relative rounded-lg h-[8px] w-[90%] ml-[10px]'>
                    <div className='bg-[#e87532] absolute mt-[-px] rounded-lg h-[8px] w-[90%]'></div>
                </div>
            </div>
        </div>
        <div className='bg-[#ffffff] rounded-lg shadow-md h-[160px] w-[280px]'>
            <div className='flex flex-col gap-2 p-3'>
                <h3 className='text-xl text-[#0f2954] font-semibold'>CSS</h3>
                <p className='text-md text-[#aaacad] font-sans'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                <span className='text-right mr-[5px] text-[#aaacad]'>90%</span>
                <div className='bg-[#fcebe0] relative rounded-lg h-[8px] w-[90%] ml-[10px]'>
                    <div className='bg-[#e87532] absolute mt-[-px] rounded-lg h-[8px] w-[90%]'></div>
                </div>
            </div>
        </div>
        <div className='bg-[#ffffff] rounded-lg shadow-md h-[160px] w-[280px]'>
            <div className='flex flex-col gap-2 p-3'>
                <h3 className='text-xl text-[#0f2954] font-semibold'>Javascript</h3>
                <p className='text-md text-[#aaacad] font-sans'>Neque porro quisquam est qui dolorem ipsum quia dolor.</p>
                <span className='text-right mr-[5px] text-[#aaacad]'>80%</span>
                <div className='bg-[#fcebe0] relative rounded-lg h-[8px] w-[90%] ml-[10px]'>
                    <div className='bg-[#e87532] absolute mt-[-px] rounded-lg h-[8px] w-[86%]'></div>
                </div>
            </div>
        </div>
        <div className='bg-[#ffffff] rounded-lg shadow-md h-[160px] w-[280px]'>
            <div className='flex flex-col gap-2 p-3'>
                <h3 className='text-xl text-[#0f2954] font-semibold'>Tailwind Css</h3>
                <p className='text-md text-[#aaacad] font-sans'>Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
                <span className='text-right mr-[5px] text-[#aaacad]'>90%</span>
                <div className='bg-[#fcebe0] relative rounded-lg h-[8px] w-[90%] ml-[10px]'>
                    <div className='bg-[#e87532] absolute mt-[-px] rounded-lg h-[8px] w-[90%]'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills