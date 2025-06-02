import React from 'react'
import { GraduationCap } from 'lucide-react'
import { education } from '../data'

const EducationSection = () => {
  return (
    <section id='education' className='py-20'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 bg-primary-600 dark:bg-accent rounded"></div>
        </div>
        <div className='max-w-3xl mx-auto'>
          {education.map(edu => (
            <div key={edu.id}
              className='bg-white dark:bg-primary-900 rounded-lg shadow-md border border-gray-200 dark:border-primary-800 animate-slide-up'
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
