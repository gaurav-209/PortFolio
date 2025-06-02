import React from 'react'
import { ArrowRight, Download, Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import { socialLinks } from '../data'

const HeroSection = () => {
    return (
        <section id='home' className='pt-28 pb-20 min-h-screen flex items-center'>
            <div className=' container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className='order-2 lg:order-1 animate-slide-up'>
                        <div className='space-y-4'>
                            <h4 className='text-lg md:text-xl font-medium text-primary-600 dark:text-accent'>Hello, I'm</h4>
                            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white'>Gaurav Mahavar</h1>
                            <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300'>Web Developer</h2>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                                I build modern, responsive web applications with a focus on clean code,
                                intuitive user interfaces, and exceptional user experiences.
                            </p>

                            <div className='flex flex-wrap gap-4 pt-4'>
                                <a href="#contact"
                                    className='inline-flex items-center px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors
                                font-medium'
                                >
                                    Hire Me <ArrowRight size={20} />
                                </a>
                                <a
                                    href="/Gaurav Mahavar Cv.pdf"
                                    download="Gaurav_Mahavar_Resume.pdf"
                                    className='inline-flex items-center px-5 py-3 border border-primary-600 dark:border-accent text-primary-600 dark:text-accent
    hover:bg-primary-50 dark:hover:bg-primary-900/50 rounded-md transition-colors font-medium'
                                >
                                    Download Resume <Download size={18} className='ml-2' />
                                </a>
                            </div>
                            <div className='pt-6'>
                                <div className='flex space-x-5'>
                                    {socialLinks.map(link => {
                                        const IconComponents = {
                                            'github': Github,
                                            'linkedin': Linkedin,
                                            'twitter': Twitter,
                                            'instagram': Instagram
                                        }[link.icon]
                                        return (
                                            <a href={link.url}
                                                key={link.id}
                                                target='_blank'
                                                rel='noopener noreferer'
                                                className='text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:text-accent transition-colors'
                                                aria-label={link.name}
                                            >
                                                {IconComponents && <IconComponents size={22} />}
                                            </a>
                                        )
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in'>
                        <div className='relative'>
                            <div className='w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800'>
                                <img
                                    src='src\assets\Gaurav Ai Profile.png'
                                    alt="Gaurav Mahavar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
