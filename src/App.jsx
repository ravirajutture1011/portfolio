// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from "./components/Hero"
// import About from './components/About'
// import Technologies from './components/Technologies'
// import Experience from './components/Experience'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
 
// const App = () => {
//   return (
//     <div className='overflow-x-hidden  text-neutral-300 antialiased  selection:bg-cyan-300 selection:text-cyan-900'>
//       <div className='fixed top-0 -z-10 h-full w-full'>
//       <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
//       </div>
//       <div className='container mx-auto px-8'>
//          <Navbar/>
//          <Hero/>
//          <About/>
//          <Technologies/>
//          <Experience/>
//          <Projects/>
//          <Contact/>
 
//       </div>
      
//     </div>
//   )
// }

// export default App



import React from 'react'
import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TabSelector from './components/TabSelector'
 
const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "Home") homeRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "About") aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "Projects") projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "Contact") contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className='overflow-x-hidden  text-neutral-300 antialiased  selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className='container mx-auto px-8'>
         <Navbar/>
         <TabSelector onSelectTab={scrollToSection} />
         
        <section ref={homeRef}>
        <Hero />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>
         <Technologies/>
         <Experience/>

      <section ref={projectsRef}>
        <Projects />
      </section>

         <section ref={contactRef}>
        <Contact />
      </section>
 
      </div>
      
    </div>
  )
}

export default App