import React, { useEffect } from 'react'
import { skills } from '../../data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet';

const AboutSection = () => {
  const technicalSkills = skills.filter(skill => skill.category === 'technical')
  const softSkills = skills.filter(skill => skill.category === 'soft')

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <>
      <Helmet>
        <title>About | Gaurav Mahavar</title>
        <meta name="description" content="Learn more about React developer Gaurav Mahavar." />
      </Helmet>
      <section id='about' className='py-20 bg-gray-50 dark:bg-primary-900/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16' data-aos="fade-up">
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
              About Me
            </h2>
            <div className='mt-3 mx-auto w-24 h-1 bg-primary-600 dark:bg-accent rounded'></div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div data-aos="fade-right">
              <h3 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                Get to know me!
              </h3>
              <div className='space-y-4 text-gray-700 dark:text-gray-300'>
                <p>
                  I'm a passionate <span className="font-medium text-primary-600 dark:text-accent">Front-End Web Developer</span> with a strong focus on building modern, responsive, and user-friendly web applications using <span className="font-medium">React.js</span>, <span className="font-medium">JavaScript</span>, and <span className="font-medium">Tailwind CSS</span>.
                </p>
                <p>
                  I enjoy transforming complex problems into simple, elegant, and intuitive user interfaces. When I’m not coding, you’ll often find me exploring the latest web development trends, contributing to open-source projects, or leveling up through online courses and real-world practice.
                </p>
                <p>
                  My journey into web development began with a deep curiosity about how websites function, which inspired me to pursue a degree in <span className="font-medium">Computer Science</span>. Since then, I’ve been committed to continuously improving my skills and building meaningful projects that solve real-world problems.
                </p>
                <p>
                  I thrive in collaborative environments, working with cross-functional teams and clients to develop high-quality digital solutions. My approach blends <span className="font-medium">technical expertise</span> with <span className="font-medium">creative problem-solving</span> to deliver web experiences that are both visually appealing and performance-optimized.
                </p>
              </div>

            </div>

            <div data-aos="fade-left" data-aos-delay="100">
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
                    >
                      {skill.name}
                    </span>
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
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection
