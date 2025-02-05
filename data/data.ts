import { Code, Computer, Github, Globe, Linkedin, Mail } from 'lucide-react';

export const patterns = [
  'repeating-linear-gradient(45deg, #fff 0%, #fff 2%, #e5e5e5 2%, #e5e5e5 4%)',
  'repeating-radial-gradient(circle at 50% 50%, #fff 0%, #fff 2%, #e5e5e5 2%, #e5e5e5 4%)',
  'repeating-conic-gradient(#fff 0% 2%, #e5e5e5 2% 4%)',
  'linear-gradient(0deg, #fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
  'radial-gradient(circle at center, #e5e5e5 1px, transparent 1px)',
];

export const aboutData = {
  name: 'Rasel Parvez Sanny',
  role: 'Frontend Developer',
  loves: ['Clean Code', 'Creative UI', 'Animation'],
};

export const projects = [
  {
    title: 'TrickNShip - Parcel Management App',
    description: 'Efficiently manage and track parcels with TrickNShip',
    tags: ['React', 'Tailwind', 'MongoDB', 'Firebase', 'NodeJs', 'Shadcn'],
    icon: Globe,
    githubLink: 'https://github.com/im-sanny/trackNShip-client-a12',
    liveLink: 'https://tracknship22.web.app/',
    features: [
      'Real-time parcel tracking',
      'User-friendly dashboard',
      'Multi-carrier support',
      'Detailed analytics',
    ],
  },
  {
    title: 'StudyHive - Online Group Study & Assignment Application',
    description:
      'Online application designed for collaborative assignments and effective teamwork.',
    tags: ['React', 'Tailwind', 'MongoDB', 'Firebase', 'NodeJs'],
    icon: Computer,
    githubLink: 'https://github.com/im-sanny/studyHive-client-a11',
    liveLink: 'https://b9a11-a9c79.web.app',
    features: [
      'Dynamic Assignment Creation',
      'Responsive Design',
      'Assignment Management',
      'Submission and Grading',
    ],
  },
  {
    title: 'DrawNook - Art & Craft Store',
    description:
      'An Art and Craft website dedicated to display painting, drawing, and craft-related products',
    tags: ['React', 'Tailwind', 'MongoDB', 'Firebase', 'NodeJs'],
    icon: Code,
    githubLink: 'https://github.com/im-sanny/drawNook-client-a10',
    liveLink: 'https://drawnook-a10.web.app',
    features: [
      'React-simple-typewriter',
      'User-friendly environment',
      'React Awesome Reveal',
      'React Lottie',
    ],
  },
];

// terminal data
export const terminalContentData = {
  help: {
    messages: [
      'Available commands:',
      '- help: Show this help message',
      '- about: Display information about me',
      '- skills: List technical skills',
      '- projects: Show project details',
      '- contact: Display contact information',
      '- clear: Clear terminal',
      '- theme: Toggle terminal theme',
      '- explode: Visual surprise',
    ],
  },
  about: {
    messages: [
      '🚀 Who Am I?',
      'Name: Rasel Parvez Sanny',
      'Role: Frontend Developer & Creative Technologist',
      'Location: Jessore, Bangladesh',
      '',
      '💡 Passion: Turning ideas into interactive digital experiences',
      '🔧 Specialties: React, Next.js, TypeScript',
      '',
      'Want to know more? Try commands like "skills", "projects"',
    ],
  },
  skills: {
    messages: [
      '🛠️ Technical Skills:',
      '• Frontend: React, Next.js, TypeScript, Tailwind CSS, Shadcn',
      '• Backend: Node.js, Express, MongoDB',
      '• Tools: Git, Vercel, Netlify, Figma',
      '• Soft Skills: Problem Solving, Communication, Creativity',
    ],
  },
  projects: {
    messages: [
      'Project 1: https://tracknship22.web.app',
      'Project 2: https://b9a11-a9c79.web.app',
      'Project 3: https://drawnook-a10.web.app',
    ],
  },
  contact: {
    messages: [
      '📞 Contact Information:',
      'Email: raselparvezsanny@gmail.com',
      'LinkedIn: https://www.linkedin.com/in/im-sanny',
      'GitHub: https://github.com/im-sanny',
      '',
      'Open to collaboration and exciting opportunities!',
    ],
  },
  explode: {
    messages: [
      '💥 MEGA EXPLOSION! 💥',
      'The universe just got a little more chaotic.',
      'Hope you enjoyed the show!',
    ],
  },
  clear: {
    messages: ['Terminal cleared. Start typing your next command!'],
  },
};

export const socialLinks = [
  {
    label: 'GitHub',
    icon: Github,
    link: 'https://github.com/im-sanny',
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/im-sanny/',
  },
  {
    label: 'Email',
    icon: Mail,
    link: 'mailto:raselparvezsanny@gmail.com',
  },
];
