export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  university: string;
  institute: string;
  duration: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image: string;
}

export const personalInfo = {
  name: "Er. Vekariya Dilip",
  professionalTitle: "Computer Science Engineer | Lecturer | Flutter Developer | Technical Mentor",
  tagline: "Empowering Education Through Technology & Innovation",
  location: "Bhuj, Gujarat, India",
  email: "vekariyadilip444@gmail.com",
  phone: "+91 919904434601"
};

export const myStory = {
  title: "A Bridge Between Academia & Industry",
  paragraphs: [
    "I am a Computer Science and Engineering graduate with a strong passion for technology, education, and continuous learning. My professional journey began in software development, where I gained hands-on experience building Flutter applications and working directly with clients to transform ideas into functional software solutions.",
    "Today, I serve as a Lecturer at HJD Institute of Technical Education and Research, where I teach subjects including Data Structures, Software Engineering, Python, and Artificial Intelligence. Beyond the classroom, I mentor students on academic projects, research work, and career development while also managing GTU academic processes, coordinating departmental events, and serving as the Sports Head.",
    "What sets me apart is my ability to bridge the gap between academia and industry. Whether I'm developing applications, mentoring future engineers, or organizing institutional initiatives, I strive to combine technical excellence with effective leadership, communication, and problem-solving skills."
  ],
  stats: [
    { value: "5+", label: "Years Teaching Experience" },
    { value: "200+", label: "Students Mentored" }
  ]
};

export const achievements = {
  title: "Achievements",
  subtitle: "Professional Credentials & Engagements",
  roles: [
    {
      title: "GTU Endorsed Faculty",
      description: "Recognized and endorsed faculty member under Gujarat Technological University guidelines."
    },
    {
      title: "HJD Institute Lecturer",
      description: "Lecturer at HJD Institute of Technical Education and Research, leading departmental initiatives."
    },
    {
      title: "Core Teaching Domains",
      description: "Delivering expert lectures in Data Structures, Software Engineering, Python, and Artificial Intelligence."
    },
    {
      title: "Institutional Leadership",
      description: "Serving as Sports Head, managing GTU Portal Management, and overseeing Academic Administration and departmental events."
    }
  ]
};

export const skillsData: SkillCategory[] = [
  {
    title: "Programming & Development",
    icon: "Code2",
    skills: [
      "Flutter Development",
      "Dart Programming",
      "Mobile Application Development",
      "Software Development",
      "Artificial Intelligence",
      "Python",
      "Computer Science",
      "Data Structures",
      "Software Engineering"
    ]
  },
  {
    title: "Computer Science Education",
    icon: "GraduationCap",
    skills: [
      "Project Guidance",
      "Data Structures",
      "Software Engineering",
      "Computer Science Education"
    ]
  },
  {
    title: "Professional Skills",
    icon: "Briefcase",
    skills: [
      "Leadership",
      "Team Collaboration",
      "Event Management",
      "Academic Administration",
      "GTU Portal Management",
      "Client Communication",
      "Multitasking",
      "Fast Learning",
      "Problem Solving"
    ]
  },
  {
    title: "Languages",
    icon: "Languages",
    skills: [
      "English",
      "Gujarati",
      "Hindi",
      "French"
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Education in Maths & Science",
    institute: "Saraswati B.ed College",
    university: "Affiliated with Gujarat University (GU)",
    duration: "July 2024 – March 2026",
    highlights: []
  },
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
    institute: "HJD Institute of Technical Education and Research",
    university: "Affiliated with Gujarat Technological University (GTU)",
    duration: "July 2019 – July 2023",
    highlights: []
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institute: "Shree Swaminarayan Gurukul, Surat",
    university: "",
    duration: "June 2017 – March 2019",
    highlights: []
  },
  {
    degree: "Secondary Education (SSC)",
    institute: "Shree Swaminarayan Gurukul, Surat",
    university: "",
    duration: "June 2015 – March 2017",
    highlights: []
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Lecturer",
    company: "HJD Institute of Technical Education and Research",
    duration: "April 2024 – Present",
    highlights: [
      "Deliver lectures in Computer Science and Engineering.",
      "Teach Data Structures, Software Engineering, Python and Artificial Intelligence.",
      "Mentor undergraduate and postgraduate students.",
      "Guide research work and software projects.",
      "Manage GTU academic portal activities.",
      "Coordinate departmental events.",
      "Serve as Sports Head.",
      "Recognized as GTU Endorsed Faculty."
    ],
    tags: ["Academics", "Teaching", "Mentoring", "GTU"]
  },
  {
    role: "Flutter Developer Intern",
    company: "Shree Softech",
    duration: "February 2023 – July 2023",
    highlights: [
      "Developed Flutter applications.",
      "Worked with Dart.",
      "Converted client requirements into software.",
      "Worked in Agile teams.",
      "Maintained website content.",
      "Handled customer communication."
    ],
    tags: ["Flutter", "Dart", "Agile", "Client Tech"]
  },
  {
    role: "Software Intern",
    company: "LPK Technosoft",
    duration: "June 2022 – July 2022",
    highlights: [
      "Worked with software development teams.",
      "Built customer-focused software.",
      "Collaborated across teams.",
      "Learned professional software development practices."
    ],
    tags: ["Software", "Development", "Collaboration", "Practices"]
  }
];

export const projectsData: ProjectItem[] = [
  {
    title: "DC – Real-Time Chat Application",
    description: "Flutter chat application with authentication and real-time messaging.",
    tags: ["Flutter", "Dart", "Firebase", "Real-time API"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "BMI Calculator",
    description: "Flutter mobile application that calculates BMI and provides health recommendations.",
    tags: ["Flutter", "Dart", "UI/UX", "Mobile Computing"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Student Project Mentorship",
    description: "Guided undergraduate and postgraduate students through software projects and research.",
    tags: ["Mentorship", "Research Guidance", "Academics"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Academic & Event Management",
    description: "Managed GTU activities, departmental events and engineering sports initiatives.",
    tags: ["Management", "GTU Portal", "Sports Head"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
  }
];
