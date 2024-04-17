import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  lambtoncollegernd,
  dalle2,
  metaversus,
  ecommerce,
  threejs,
  yoom,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full-Stack Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Embedded Engineer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  // {
  //   title: 'React.js Developer',
  //   company_name: 'Starbucks',
  //   icon: starbucks,
  //   iconBg: '#383E56',
  //   date: 'March 2020 - April 2021',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'React Native Developer',
  //   company_name: 'Tesla',
  //   icon: tesla,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2021 - Feb 2022',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  {
    title: 'Research Assistant',
    company_name: 'Lambton College/ Seneris Automation',
    icon: lambtoncollegernd,
    iconBg: '#383E56',
    date: 'Nov 2020 - July 2021',
    points: [
      'Conducted an exhaustive literature review of IoT devices that utilize wireless communication like Bluetooth Low Energy and Thread Protocols. Analyzed their design, functionality, and performance, and identified potential areas for improvement.',
      'Explored the advantages and disadvantages of using Bluetooth Low Energy and Thread Protocols in IoT devices, and compared them to other wireless communication protocols such as Wi-Fi, Zigbee, and NFC.',
      'Investigated the security implications of using Bluetooth Low Energy and Thread Protocols in IoT devices, and proposed potential solutions to address any security vulnerabilities.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: '',
    icon: reactjs,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Specializing in the development and maintenance of web applications with a focus on React.js and related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Emphasizing the creation of high-quality, responsive web applications that meet client requirements and deliver satisfaction.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Vy is a highly skilled and hardworking engineer. It was a pleasure to work with him on developing embedded C code for experimental multi-protocol wireless communications. He was always enthusiastic and unafraid to dive deep into systems for debugging and gain insights into functioning. Vy is a supportive team player, working with his colleagues and mentors to elevate the entire effort. He would be an excellent addition to any technical team!',
    name: 'Takis Zourntos',
    designation: 'Professor',
    company: 'Lambton College',
    image:
      'https://media.licdn.com/dms/image/D5603AQHu3qmLiUUJwg/profile-displayphoto-shrink_400_400/0/1678901278688?e=1710979200&v=beta&t=AlkVbFel9s42F-N_ZzK6LN87sNsgp7OKcl_1NXhkJDY',
  },
  {
    testimonial:
      'I know Vy from college when he started learning journey in embedded system engineering design program in Toronto. I really enjoyed teaching him because Vy proved his quick learner and motivated characteristics. During the capstone project course I found him knowledgeable and ready for fulfilling real embedded system design projects. Vy is a good match for in-field jobs.',
    name: 'Mike Aleshams',
    designation: 'Professor',
    company: 'Lambton College',
    image:
      'https://media.licdn.com/dms/image/D4E35AQGBAUFuGZjXIw/profile-framedphoto-shrink_400_400/0/1698309179658?e=1705863600&v=beta&t=Tsl3SFZqfXMwKesNWlFH0QVQteRJZmKXbY2X8PbfSH0',
  },
];

const projects = [
  {
    name: 'Dalle 2.0',
    description:
      " a DALL·E clone website crafted with the MERN stack. Users can describe images, and OpenAI's DALL·E brings them to life. It's a fusion of tech and creativity, demonstrating my skills in full-stack development and AI integration.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: dalle2,
    source_code_link: 'https://github.com/vyhoangquocnguyen/dall-e/tree/main',
  },
  {
    name: 'Metaversus',
    description:
      'Web application featuring a modern design created using React and Next.js 13. The styling is enhanced with Tailwind CSS, and dynamic animations are incorporated using Framer Motion. The goal is to provide users with a seamless and visually appealing web experience that embraces the latest technologies and design principles.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: metaversus,
    source_code_link: 'https://github.com/vyhoangquocnguyen/metaversus',
  },
  {
    name: 'ecommerce',
    description:
      'Explore a dynamic e-commerce experience with this Next.js project. Powered by Sanity and Stripe, it seamlessly blends content management and secure transactions, promising a future-ready online shopping journey.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'sanity',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce,
    source_code_link: 'https://github.com/vyhoangquocnguyen/ecommerce',
  },
  {
    name: 'Zoom-Clone',
    description:
      'Explore Yoom, an application that allows users to create and join video conferences with multiple participants, similar to the popular video conferencing application Zoom.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'streamapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: yoom,
    source_code_link: 'https://github.com/vyhoangquocnguyen/zoom_clone',
  },
];

export { services, technologies, experiences, testimonials, projects };
