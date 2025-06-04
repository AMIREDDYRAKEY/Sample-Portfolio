 import React from 'react'
 import Navbar from './navbar'
 import Hero from './hero'
 import Skills from './skills'
 import Resume from './resume'
 import Portfolio from './portfolio'
 import Testmonials from './testmonials'
 import Services from './services'
 import Questions from './questions'
 import Contact from './contact'
 import About from "./About"
 import Footer from './footer'
 const App = () => {
   return (
     <div className='border-2'>
      <div className='flex items-center justify-center'><Navbar/></div>
      <div className=' mt-[40p
      x] '><Hero/></div>
      <div className='bg-[#faf9fb]'><About/></div>
      <div className=''><Skills/></div>
      <div className=' '><Resume/></div>
      <div  className=' '><Portfolio/></div>
      {/* <div className='min-h-screen bg-[#faf9fb]'><Testmonials/></div> */}
      <div><Services/></div>
      <div><Questions/></div>
      <div><Contact/></div>
      <div><Footer/></div>
     </div>
   )
 }
 
 export default App