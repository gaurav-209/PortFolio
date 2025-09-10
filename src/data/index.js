export const projects = [
  {
    id: 'legal-crm',
    title: 'CaseBrief',
    description: 'A comprehensive dashboard for legal professionals to manage cases, clients, and billing. Features include case tracking, document management, and interactive reporting.',
    technologies: ['React', 'Tailwind CSS',],
    imageUrl: '/images/CaseBrief.png',
    featured: true,
    githubUrl: 'https://github.com/gaurav-209/Case-Brief'
  },
  {
    id: 'expentracker',
    title: 'TrackMyCash',
    description: 'A simple expense tracking application with budget management features. Users can categorize expenses, set budgets, and view spending patterns.',
    technologies: ['React', 'JavaScript', 'Bootstrap CSS','FireBase'],
    imageUrl: '/images/TrackMyCash.png',
    liveUrl: '/TrackMyCash',
    githubUrl: 'https://github.com/gaurav-209/Expense-Tracker',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects, skills, and experience. Built with React and Tailwind CSS for a responsive and modern design.',
    technologies: ['React', 'Tailwind CSS'],
    imageUrl: '/images/Portfolio.png',
    liveUrl: 'https://codewithgaurav.in',
    githubUrl: 'https://github.com/gaurav-209/PortFolio',
  },
  {
    id: 'visiting-card-generator',
    title: 'Business Visiting Card Generator',
    description: 'A modern web application for creating and downloading professional business visiting cards. Features real-time preview, customizable fields, and PDF export functionality with clean, professional design.',
    technologies: ['React', 'JavaScript', 'CSS', 'jsPDF', 'html2canvas'],
    imageUrl: '/images/BussinessCard.png',
    liveUrl: '/BussinessCardGenerator',
    githubUrl: 'https://github.com/gaurav-209/Bussiness-Visiting-Card-Generator/tree/main',
    featured: true
  },
  {
    id: 'weather-app',
    title: 'WeatherMe App',
    description: 'A simple weather application that shows real-time weather information by city. Features include current conditions, forecasts, and location-based weather.',
    technologies: ['React', 'JavaScript', 'Weather API','Bootstrap'],
    imageUrl: '/images/WheatherME.png',
    liveUrl: '/WheatherMe',
    githubUrl: 'https://github.com/gaurav-209/Wheather-App',
  },
  {
    id: 'product-catalogue',
    title: 'Product Catalogue',
    description: 'UI design for an online product listing page with filtering, sorting, and search functionality. Responsive design with grid and list views.',
    technologies: ['React', 'CSS', 'Mock API','Bootstrap'],
    imageUrl: '/images/ProductCatalogue.png',
    liveUrl: '/ProductCatalogue',
    githubUrl: 'https://github.com/gaurav-209/Product-Catalogue',
  },
];

export const experiences= [
  {
  id: 'greatbears',
  company: 'Greatbear Ventures',
  position: 'Full Stack Developer',
  duration: 'July 2024 - June 2025',
  description: [
    'Contributed to SwiftFolios, a full-stack mutual fund investment and portfolio management platform.',
    'Built responsive, reusable React components with custom CSS for seamless user experience.',
    'Integrated REST APIs to handle mandates, SIP management, transaction flows, and reporting.',
    'Developed and maintained Node.js backend services for payment processing and client data management.',
    'Collaborated with cross-functional teams to ensure secure and scalable system design.'
  ],
  technologies: ['React', 'Bootstrap CSS', 'HTML5', 'JavaScript', 'Node.js', 'Express', 'MySql']
},
  {
    id: 'technishal',
    company: 'Technishal',
    position: 'React.js Development Training',
    duration: 'Dec 2024 - June 2025',
    description: [
      'Comprehensive React.js development training program',
      'Building a Legal CRM Dashboard as a capstone project',
      'Learning advanced React concepts including hooks, context, and state management',
      'Implementing responsive UI components with React Js and Bootstrap'
    ],
    technologies: ['React', 'Bootstrap Css', 'HTML', 'Javascript']
  },
  {
    id: 'shoppers-stop',
    company: 'Shoppers Stop',
    position: 'Customer Care Associate',
    duration: '2.5 years',
    description: [
      'Provided exceptional customer service and support',
      'Managed customer inquiries and resolved issues efficiently',
      'Collaborated with team members to improve customer experience',
      'Utilized CRM software to track customer interactions'
    ]
  },
  {
    id: 'medilink',
    company: 'Medilink Hospital',
    position: 'Cashless Officer',
    duration: '1.8 years',
    description: [
      'Processed insurance claims and cashless approvals',
      'Coordinated between patients, insurance companies, and hospital departments',
      'Maintained documentation and records of all transactions',
      'Provided guidance to patients regarding insurance procedures'
    ]
  }
];

export const education = [
  {
    id: 'silver-oak',
    institution: 'Silver Oak University',
    degree: 'B.Tech in Computer Science',
    duration: '2020 - 2024',
    description: 'Focused on web development, data structures, and algorithms.'
  }
];

export const skills = [
  // Technical Skills
  { id: 'javascript', name: 'JavaScript', level: 4, category: 'technical' },
  { id: 'react', name: 'React.js', level: 4, category: 'technical' },
  { id: 'html', name: 'HTML', level: 5, category: 'technical' },
  { id: 'css', name: 'CSS', level: 5, category: 'technical' },
  { id: 'tailwind', name: 'Tailwind CSS', level: 4, category: 'technical' },
  { id: 'bootstrap', name: 'Bootstrap', level: 3, category: 'technical' },
  { id: 'git', name: 'Git', level: 4, category: 'technical' },
  { id: 'responsive', name: 'Responsive Design', level: 5, category: 'technical' },
  
  // Soft Skills
  { id: 'teamwork', name: 'Teamwork', level: 5, category: 'soft' },
  { id: 'communication', name: 'Communication', level: 4, category: 'soft' },
  { id: 'time-management', name: 'Time Management', level: 4, category: 'soft' },
  { id: 'problem-solving', name: 'Problem Solving', level: 5, category: 'soft' },
  { id: 'adaptability', name: 'Adaptability', level: 4, category: 'soft' }
];

export const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/gaurav-209',
    icon: 'github'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gaurav-mahavar-688114215/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: 'linkedin'
  },
  // {
  //   id: 'twitter',
  //   name: 'Twitter',
  //   url: 'https://twitter.com/gauravmahavar',
  //   icon: 'twitter'
  // },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/codewithgaurav.in/profilecard/?igsh=MTFueHU1ZTc5NzF1aA==',
    icon: 'instagram'
  }
];

export const projectCaseStudyJson = [
  {
    "title": "TrackMyCash",
    "problem": "Managing personal expenses manually is tedious and error-prone. Users often struggle to keep a real-time track of income, expenses, and budgeting goals.",
    "solution": "TrackMyCash is a secure and responsive web app that allows users to log their transactions, categorize them, and visualize spending trends. Firebase Authentication ensures personalized data access while Firestore handles real-time updates.",
    "tools": ["React.js", "Firebase", "Firestore", "Tailwind CSS", "React Router"],
    "images": ["/images/trackmycash-1.png", "/images/trackmycash-2.png"],
    "learnings": "Learned secure data handling using Firebase rules, user-authenticated routing, and optimized state management with React hooks.",
    "githubUrl": "https://github.com/gauravmahavar/trackmycash",
    "liveUrl": "https://trackmycash.codewithgaurav.in"
  },
  {
    "title": "CaseBrief – Legal CRM Dashboard",
    "problem": "Lawyers need a digital platform to manage clients, cases, tasks, and appointments efficiently.",
    "solution": "CaseBrief is a modern legal CRM dashboard tailored for law firms. It includes modules for client management, document tracking, and court schedules with a clean UI and organized layout.",
    "tools": ["React.js", "Tailwind CSS", "Redux", "React Router", "Mock Data"],
    "images": ["/images/casebrief-1.png", "/images/casebrief-2.png"],
    "learnings": "Learned to design large data-driven UI components and simulate realistic workflows using mock JSON data.",
    "githubUrl": "",
    "liveUrl": "https://casebrief.codewithgaurav.in"
  },
  {
    "title": "WeatherMe – Weather App",
    "problem": "People need accurate and real-time weather updates in a simple and lightweight interface.",
    "solution": "WeatherMe is a minimalist weather app built with open weather APIs. It shows current weather, forecasts, and auto-detects user location.",
    "tools": ["React.js", "Tailwind CSS", "OpenWeatherMap API", "Geolocation"],
    "images": ["/images/weatherme-1.png"],
    "learnings": "Worked with third-party APIs and user permission handling. Improved UI responsiveness and data error handling.",
    "githubUrl": "https://github.com/gauravmahavar/weatherme",
    "liveUrl": "https://weatherme.codewithgaurav.in"
  },
  {
    "title": "ProductCatalogue – Product Showcase UI",
    "problem": "Businesses need a sleek and user-friendly way to present products online.",
    "solution": "A clean, filterable product catalog UI with grid and table views. Built for easy integration into any eCommerce frontend.",
    "tools": ["React.js", "Tailwind CSS", "React Router", "Mock APIs"],
    "images": ["/images/productcatalogue-1.png", "/images/productcatalogue-2.png"],
    "learnings": "Learned to manage reusable components, dynamic filtering, and maintain layout consistency across views.",
    "githubUrl": "https://github.com/gauravmahavar/productcatalogue-ui",
    "liveUrl": "https://productcatalogue.codewithgaurav.in"
  },
  {
    "title": "Business Card Generator",
    "problem": "Creating digital business cards should be fast, customizable, and shareable without design tools.",
    "solution": "This app generates professional digital visiting cards based on user input. Users can customize text, layout, and export the card.",
    "tools": ["React.js", "Tailwind CSS", "Canvas API", "Download.js"],
    "images": ["/images/businesscard-1.png"],
    "learnings": "Worked with dynamic DOM rendering to canvas conversion and download functionality in browser.",
    "githubUrl": "https://github.com/gauravmahavar/business-card-generator",
    "liveUrl": "https://bcard.codewithgaurav.in"
  }
]
