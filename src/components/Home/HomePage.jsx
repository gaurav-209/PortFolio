import React from 'react'
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ExperienceSection />
    <EducationSection />
    <ContactSection />
    <Footer />
  </div>

  )
}

export default HomePage
