import React, { useState } from 'react'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { projects } from '../data'

const ProjectSection = () => {
  const [filter, setFilter] = useState(null)

  const filteredProjects = filter ? projects.filter(project => project.technologies.includes(filter)) : projects

  const allTechnologies = Array.from(new Set(projects.flatMap(project => project.technologies))).sort()
  return (
    <section id='projects' className='py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
            My Projects
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 bg-primary-600 dark:bg-accent rounded"></div>
          <p className='mt-4 to-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Here are some of the projects I've worked on. Each project was an opportunity to learn and apply different technologies and concepts.
          </p>
        </div>

        <div className='mb-8 flex flex-wrap justify-center gap-3'>
          <button
            onClick={() => { setFilter(null) }}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === null
                ? 'bg-primary-600 dark:bg-accent text-white dark:text-primary-950' :
                'bg-gray-200 dark:bg-primary-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-primary-700'

              }`}
          > All </button>

          {allTechnologies.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === tech
                  ? 'bg-primary-600 dark:bg-accent text-white dark:text-primary-950'
                  : 'bg-gray-200 dark:bg-primary-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-primary-700'
                }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400 col-span-full">
              No projects found for selected technology.
            </p>
          ) : (
            filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, idx }) => {
  return (
    <article
      className='bg-white dark:bg-primary-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-primary-800
    transition-transform hover:translate-y-[-5px] animate-slide-up'
      style={{ animationDelay: `${idx * 100}ms` }}
    >
      <div className='h-48 overflow-hidden'>
        <img src={project.imageUrl || '/placeholder.png'}
          alt={project.title}
          className='w-full h-full object-cover transition-transform hover:scale-105 duration-700'
        />
      </div>

      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2 text-gray-900 dark:text-white'>
          {project.title}
        </h3>

        <p className='text-gray-600 dark:text-gray-400 mb-4 h-24 overflow-hidden'>
          {project.description}
        </p>

        <div className='flex flex-wrap gap-2 mb-6'>
          {project.technologies.map(tech => (
            <span
            key={tech}
            className='px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-primary-800 text-gray-800 dark:text-gray-200 rounded'
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='flex space-x-3'>
          {project.liveUrl && (
            <a href={project.liveUrl}
            target='_blank'
            rel='noopener noreferer'
            className=' flex items-center px-4 py-2 bg-primary-600 dark:bg-primary-700 text-white rounded-md transition-colors text-sm font-medium'
            >
              Live Demo <ExternalLink size={16} className="ml-2" />
            </a>
          )}

          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-200 dark:bg-primary-800 hover:bg-gray-300 dark:hover:bg-primary-700 text-gray-800 dark:text-gray-200 rounded-md transition-colors text-sm font-medium"
            >
              GitHub <Github size={16} className="ml-2" />
            </a>
          )}
        </div>
      </div>

    </article>
  )
}

export default ProjectSection
