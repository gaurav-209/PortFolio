import React from 'react'
import { GraduationCap } from 'lucide-react'
import { education } from '../../data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const EducationSection = () => {
  useEffect(() => {
  AOS.init({ duration: 800, once: true, offset: 50 })
}, [])

  return (
    <section id='education' className='py-20'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 bg-primary-600 dark:bg-accent rounded"></div>
        </div>

        <div className='max-w-3xl mx-auto space-y-6'>
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className='bg-white dark:bg-primary-900 rounded-lg shadow-md border border-gray-200 dark:border-primary-800'
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className='flex p-4 items-start'>
                <div className='mr-4 p-2 bg-primary-100 dark:bg-primary-800 rounded-full'>
                  <GraduationCap size={24} className="text-primary-600 dark:text-accent" />
                </div>

                <div className='flex-1'>
                  <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-2'>
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                      {edu.degree}
                    </h3>

                    <span className='text-sm font-medium bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full mt-2 sm:mt-0'>
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-primary-600 dark:text-accent font-medium mb-3">
                    {edu.institution}
                  </p>

                  {edu.description && (
                    <p className="text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
