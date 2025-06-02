import React from 'react';
import { BriefcaseIcon } from 'lucide-react';
import { experiences } from '../data';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-primary-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 bg-primary-600 dark:bg-accent rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey across different roles and organizations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary-200 dark:border-primary-800 pl-8 ml-4">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id} 
                className={`mb-12 relative animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -left-12 mt-1.5 w-8 h-8 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center border-2 border-primary-200 dark:border-primary-700">
                  <BriefcaseIcon size={16} className="text-primary-600 dark:text-accent" />
                </div>
                
                <span className="absolute -left-[3.25rem] mt-1.5 h-full w-0.5 bg-primary-100 dark:bg-primary-800"></span>
                
                <div className="bg-white dark:bg-primary-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-primary-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.position}
                    </h3>
                    <span className="text-sm font-medium bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full mt-2 sm:mt-0">
                      {experience.duration}
                    </span>
                  </div>
                  
                  <p className="text-primary-600 dark:text-accent font-medium mb-4">
                    {experience.company}
                  </p>
                  
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-primary-600 dark:text-accent">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {experience.technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-primary-800 text-gray-800 dark:text-gray-200 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;