import { Code, Computer, Github, Globe, Linkedin, Mail } from 'lucide-react';

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
