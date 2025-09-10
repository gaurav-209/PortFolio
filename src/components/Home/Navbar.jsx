import React, { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react'
import { socialLinks } from '../../data'

const IconComponents = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram
}

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [darkMode, setDarkMode] = useState(true)

    const toggleMenu = () => setIsOpenMenu(!isOpenMenu)
    const toggleDarkMode = () => setDarkMode(!darkMode)

    useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <nav className={`fixed w-full transition-all z-50 duration-300 backdrop:blur-sm shadow-sm ${darkMode ? 'bg-primary-950/90' : 'bg-white/90 '}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                    <div className='flex items-center'>
                        <a href='#home' className="flex items-center">
                            <span className={`text-2xl font-bold ${darkMode ? 'text-accent' : 'text-primary-600'}`}>G</span>
                            <span className={`text-xl ml-1 font-bold`}>Mahavar</span>
                        </a>
                    </div>

                    <div className='hidden md:flex items-center space-x-8'>
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-medium transition-colors hover:cursor-pointer ${darkMode ? 'text-gray-300  hover:text-accent' : 'text-gray-700 hover:text-primary-600 '}`}
                            >
                                {link.name}
                            </a>
                        ))}

                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${darkMode ? 'hover:bg-primary-800' : "hover:bg-gray-200"} transition-colors`}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun className='text-white' size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile MEnu Button */}

                    <div className='flex items-center md:hidden'>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 mr-2 rounded-full transition-colors ${darkMode ? 'hover:bg-primary-800' : 'hover:bg-gray-200'}`}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun className='text-white' size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-accent' : 'text-gray-700 hover:text-primary-600'} `}
                            aria-expanded={isOpenMenu}
                            aria-label="Toggle menu"
                        >
                            {isOpenMenu ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu */}

            <div className={`${isOpenMenu?'block':'hidden'} md:hidden ${darkMode?'bg-primary-900':'bg-white'} shadow-lg`}>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                    {navLinks.map(links => (
                        <a 
                        key={links.name}
                        href={links.href}
                        className={`block px-3 py-2 rounded-md text-base hover:cursor-pointer ${darkMode?'text-gray-300 hover:bg-primary-800 hover:text-accent':'text-gray-700 hover:bg-gray-100 hover:text-primary-600'} `}
                        onClick={toggleMenu}
                        >
                            {links.name}
                        </a>
                    ))}
                    <div className='flex space-x-4 px-3 py-3'>
                        {
                            socialLinks.map(link =>{
                                const Icon = IconComponents[link.icon]
                                return (
                                    <a 
                                    key={link.id}
                                    href={link.url}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className={`${darkMode?'hover:text-accent':'text-primary-600'} text-gray-500`}
                                    >
                                        <Icon size={20} />
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
