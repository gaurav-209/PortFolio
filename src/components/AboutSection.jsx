import React from 'react'
import { skills } from '../data'

const AboutSection = () => {
  const technicalSkills = skills.filter(skill => skill.category === 'technical')
  const softSkills = skills.filter(skill => skill.category === 'soft')

  return (
    <section id='about' className='py-20 bg-gray-50 dark:bg-primary-900/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
            About Me
          </h2>
          <div className='mt-3 mx-auto w-24 h-1 bg-primary-600 dark:bg-accent rounded'></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='animate-slide-up'>
            <h3 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
              Get to know me!
            </h3>
            <div className='space-y-4 text-gray-700 dark:text-gray-300'>
              <p>
                I'm a passionate <span className="font-medium text-primary-600 dark:text-accent">Web Developer</span> with a focus on building modern and responsive web applications.
              </p>
              <p>
                I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enhancing my skills through online courses.
              </p>
              <p>
                My journey in web development started with a curiosity about how websites work, which led me to pursue a degree in Computer Science. Since then, I've been continuously learning and applying my knowledge to create meaningful projects.
              </p>
              <p>
                I enjoy collaborating with teams and clients to deliver high-quality solutions that meet both user needs and business goals. My approach combines technical expertise with creativity to create engaging digital experiences.
              </p>
            </div>
          </div>

          <div className='animate-slide-up delay-100'>
            <h3 className='text-2xl font-semibold mb-6 text-gray-900 dark:text-white'>
              My Skills
            </h3>

            <div className='mb-8'>
              <h4 className='text-xl font-medium mb-4 text-gray-800 dark:text-gray-200'>
                Technical Skills
              </h4>

              <div className='flex flex-wrap mb-6 gap-3'>
                {technicalSkills.map(skill => (
                  <span
                    key={skill.id}
                    className='px-4 py-2 bg-white dark:bg-primary-800 rounded-md shadow-sm border border-gray-200 dark:bg-primary-700 text-gray-800 dark:text-gray-200'
                  > {skill.name}</span>
                ))}
              </div>

              <div>
                <h4 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">
                  Soft Skills
                </h4>

                <div className='flex flex-wrap gap-3'>
                  {softSkills.map(skill => (
                    <span
                      key={skill.id}
                      className='px-4 py-2 bg-white dark:bg-primary-800 rounded-md shadow-sm border border-gray-200 dark:bg-primary-700 text-gray-800 dark:text-gray-200'
                    > {skill.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
