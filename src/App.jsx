 import React from 'react'
 import Navbar from './navbar.jsx'
 import Hero from './hero.jsx'
import About from './About.jsx'
 import Skills from './skills.jsx'
 import Resume from './resume.jsx'
 import Portfolio from './portfolio.jsx'
 import Testmonials from './testmonials.jsx'
 import Services from './services.jsx'
 import Questions from './questions.jsx'
 import Contact from './contact.jsx'
 import Footer from './footer.jsx'
 const App = () => {
   return (
     <div className='border-2'>
      <div className='flex items-center justify-center'><Navbar/></div>
      <div className=' mt-[40px] '><Hero/></div>
      <div className='bg-[#faf9fb]'><About/></div>
      <div className=''><Skills/></div>
      <div className=' '><Resume/></div>
      <div  className=' '><Portfolio/></div>
      <div className='min-h-screen bg-[#faf9fb]'><Testmonials/></div>
      <div><Services/></div>
      <div><Questions/></div>
      <div><Contact/></div>
      <div><Footer/></div>
     </div>
   )
 }
 
 export default App