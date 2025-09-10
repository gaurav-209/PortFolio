import React, { useState, FromEvent } from 'react'
import { MapPin, Phone, Mail, Send, Github, Linkedin, Instagram, Twitter } from 'lucide-react'
import { socialLinks } from '../../data'
import emailjs from 'emailjs-com'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const IconComponents = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    emailjs.send(
      'service_pgrb69k',
      'template_txbec9g',
      formData,
      '3lFljbGbAk5Q7uouh'
    )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <section id='contact' className='py-20 bg-gray-50 bg-primary-900/30'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='text-center mb-16' data-aos="fade-up">
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
            Get In Touch!
          </h2>

          <div className='mt-3 mx-auto w-24 h-1 bg-primary-600 dark:bg-accent rounded'></div>
          <p className=' mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            Feel free to reach out if you have any questions or want to work together.
            I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <div data-aos="fade-right">
            <h3 className='text-2xl font-semibold mb-6 text-gray-900 dark:text-white'>
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-2 bg-primary-100 dark:bg-primary-800 rounded-full mr-4">
                  <MapPin size={20} className="text-primary-600 dark:text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-primary-100 dark:bg-primary-800 rounded-full mr-4">
                  <Mail size={20} className="text-primary-600 dark:text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=gauravmahavar2002@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-accent font-medium hover:underline"
                  >
                    gauravmahavar2002@gmail.com
                  </a>

                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 bg-primary-100 dark:bg-primary-800 rounded-full mr-4">
                  <Phone size={20} className="text-primary-600 dark:text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">Social Profiles</h4>
              <div className="flex space-x-4">
                {socialLinks.map(link => {
                  const Icon = IconComponents[link.icon] || null;
                  return Icon ? (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-primary-800 rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-primary-700 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent"
                      aria-label={link.name}
                    >
                      <Icon size={20} />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="100">
            <h3 className='text-2xl font-semibold mb-6 text-gray-900 dark:text-white'>
              Send Me Message
            </h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                  Your Name
                </label>
                <input type="text"
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-md bg-white dark:bg-primary-800 border border-gray-300 dark:border-primary-700 text-gray-900 
                dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:ring-accent'
                />
              </div>
              <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                  Your Email
                </label>
                <input type="email"
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-md bg-white dark:bg-primary-800 border border-gray-300 dark:border-primary-700 text-gray-900 
                dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:ring-accent'
                />
              </div>
              <div>
                <label htmlFor="subject" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                  Subject
                </label>
                <input type="text"
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-md bg-white dark:bg-primary-800 border border-gray-300 dark:border-primary-700 text-gray-900 
                dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:ring-accent'
                />
              </div>
              <div>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                  Your Message
                </label>
                <input type="text"
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-md bg-white dark:bg-primary-800 border border-gray-300 dark:border-primary-700 text-gray-900 
                dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:ring-accent'
                />
              </div>

              <button
                type='submit'
                className='inline-flex items-center px-6 py-3 mt-6 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors font-medium'
              >
                Send Message <Send size={18} className='ml-2' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
