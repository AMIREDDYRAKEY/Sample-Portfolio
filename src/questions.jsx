import { p } from 'framer-motion/client';
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaQ } from 'react-icons/fa6';
const Questions = () => {


    const Faqitem = ({ question, answer }) => {
        const [active, setactive] = useState(false)
        return (
            <div className=' lg:p-4 w-[90%]   lg:w-[70%] border-2 rounded-lg cursor-pointer' onClick={() => setactive(!active)}>

                <div className='flex flex-col' >
                    <div className='flex items-center justify-between px-8  '>
                        <div><h3 className={`lg:text-[20px] text-[18px]  ${active && 'ToggleFaq' ? 'text-[#e97532]' : 'text-[#0f2955]'}`}>{question} </h3></div>
                        <button className='text-[#172c5b] ' >
                            <FaAngleRight className={`${active ? 'rotate-90' : 'rotate-0'} transition-transform duration-300`} />
                        </button>
                    </div>
                    <div class>{
                        active && (
                            <p className='text-[#0a295d] px-8  text-lg mt-[20px] '>{answer} </p>
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }

    const faqs = [
        {
            question: 'Non consectetur a erat nam at lectus urna duis?',
            answer: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
        },
        {
            question: 'Non consectetur a erat nam at lectus urna duis?',
            answer: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
        },
        {
            question: 'Non consectetur a erat nam at lectus urna duis?',
            answer: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
        },
        {
            question: 'Non consectetur a erat nam at lectus urna duis?',
            answer: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
        },
        {
            question: 'Non consectetur a erat nam at lectus urna duis?',
            answer: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
        },
        {
            question: 'Non consectetur a erat nam at lectus urna duis?',
            answer: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
        },
    ]

    return (
        <div className=' mt-[50px] pb-[40px]'>
            {/* header */}
            <div>
                <h2 className='text-center pt-[40px] text-4xl text-[#6e4a3b]'>Frequently Asked Questions</h2>
                <div className='flex justify-center mt-[10px]'><svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className='w-[300px] text-[#f2c0a4]'>
                    <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2" ></path>
                </svg></div>
                <p className='text-center text-sm lg:text-lg text-[#6c6f72]  lg:w-none mt-[10px] '>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae<br></br> consequatur vel illum qui dolorem</p>
            </div>
            {/* Questions */}
            <div className='flex flex-col justify-center items-center mt-[50px] gap-3'>
                {
                    faqs.map((faq, index) => (

                        <Faqitem key={index} question={faq.question} answer={faq.answer} />
                    ))
                }
            </div>

        </div>

    )
}

export default Questions