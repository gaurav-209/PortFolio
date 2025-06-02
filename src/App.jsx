import React, {useEffect} from 'react'
import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {

   useEffect(() => {
    document.title = 'Gaurav Mahavar | Web Developer';
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-primary-950 text-gray-800 dark:text-gray-200">
      <Navbar/>
      <HeroSection/>
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
