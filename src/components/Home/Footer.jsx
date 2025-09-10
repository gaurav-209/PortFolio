import React from 'react'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className='bg-white dark:bg-primary-900 py-8 border-t border-gray-200 dark:border-primary-800'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-4 md:mb-0'>
          <a href="#home" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600 dark:text-accent">G</span>
            <span className="text-xl font-semibold ml-1 text-gray-900 dark:text-white">Mahavar</span>
          </a>
          <p className='text-gray-600 dark:text-gray-400 mt-2'>
            Building digital experiences that matter.
          </p>
        </div>

        <div className=' flex flex-col items-center md:items-end'>
          <div className='flex space-x-6 mb-4'>
            <a href="#home"
              className='text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent transition-colors'
            >Home
            </a>
            <a href="#about"
              className='text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent transition-colors'
            >About
            </a>
            <a href="#projects"
              className='text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent transition-colors'
            >Projects
            </a>
            <a href="#contact"
              className='text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent transition-colors'
            >Contact
            </a>
            <button
              onClick={scrollToTop}
              className='p-2 bg-gray-100 dark:bg-primary-800 rounded-full hover:bg-gray-200 dark:bg-primary-700 transition-colors'>
              <ArrowUp size={20} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>

        <div className='border-t border-gray-200 dark:border-primary-800 mt-6 pt-6 text-center'>
          <p className='text-gray-600 dark:text-gray-400'>
             © {new Date().getFullYear()} Gaurav Mahavar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
