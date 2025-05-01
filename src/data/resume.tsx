import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jomon Joy",
  initials: "JO",
  url: "https://jomon.vercel.app",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description: "Aspiring Software Development Engineer.",
  summary: "Pursuing my degree at [JCT College of Engineering and Technology](https://www.jct.ac.in/), I aspire to be a Software Development Engineer. I want to get placed in a company where I can put my skills to good use and also gain more. I consistently hone my problem-solving abilities by practicing DSA problems on [LeetCode](https://leetcode.com/u/jomonjoy/) and [GeeksforGeeks](https://www.geeksforgeeks.org/user/jomonjoy/). My passion for development drives me to work on diverse MERN stack projects, deepening my expertise and enabling me to build scalable, efficient applications. For more details, please check out my [resume](https://1drv.ms/f/s!ArXfHHJRn2FXcf-jYoODQGRTs9Q).",
  avatarUrl: "/avatar.png",
  skills: [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "Express JS",
    "Tailwind CSS",
    "Bootstrap",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Vercel",
    "Firebase",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/itsjomon/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:email@example.com",
        icon: Icons.email,
        navbar: false,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/itsjomon",
        icon: Icons.github,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/jomonjoy/",
        icon: Icons.leetcode,
        navbar: true,
      },
      GeeksforGeeks: {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/user/jomonjoy/",
        icon: Icons.geeksforgeeks,
        navbar: true,
      },
    },
  },

  // work: [
  //   {
  //     company: "company name",
  //     href: "comany url",
  //     badges: [],
  //     location: "location",
  //     title: "job title",
  //     logoUrl: "/company.png",
  //     start: "start date",
  //     end: "end date",
  //     description: "job description",
  //   },
  // ],

  education: [
    {
      school: "JCT College of Engineering and Technology",
      href: "https://www.jct.ac.in/",
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      logoUrl: "/education/ug.jpg",
      start: "2021",
      end: "2025",
    },
    {
      school: "St. Thomas HSS Mayannur",
      href: "https://g.co/kgs/fSDrbGH",
      degree: "Higher Secondary | 12th, Computer Science",
      logoUrl: "/education/12th.jpg",
      start: "2019",
      end: "2021",
    },
    {
      school: "St Joseph's High School Pangarappilly",
      href: "https://g.co/kgs/3JhwTem",
      degree: "Secondary Education | 10th",
      logoUrl: "/education/10th.jpg",
      start: "2018",
      end: "2019",
    },
  ],
  
  projects: [
    {
      title: "Social Media Bio Generator",
      href: "https://bio-generator-jomon.vercel.app",
      active: true,
      description: "An AI-powered social media bio generator leveraging the [Groq API](https://console.groq.com/docs/api-reference#chat-create) to craft unique, engaging, and customizable bios for personal and brand profiles. With options to adjust tone, creativity, and style, it helps users effortlessly create the perfect bio.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Groq API",
        "Vercel Fonts",
        "Iconify Design",
        "Vercel AI SDK",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://bio-generator-jomon.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/itsjomon/bio-generator.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/project/bio-generator.mp4",
    },
    {
      title: "Weather App",
      href: "https://weather-app-jomon.vercel.app/",
      active: true,
      description: "A simple weather app built with HTML, CSS, and JavaScript that provides real-time weather updates. Leveraging the [OpenWeatherMap API](https://openweathermap.org/api), it offers location-based weather tracking and city search functionality. Designed for responsiveness and ease of use, it delivers accurate weather data in a user-friendly interface.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "OpenWeatherMap API",
      ],
      links: [
        {
          type: "Website",
          href: "https://weather-app-jomon.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/itsjomon/weather-app.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/project/weather.mp4",
    },
    {
      title: "PacMan Game",
      href: "https://github.com/itsjomon/pacman-game.git",
      active: true,
      description: "A classic Pac-Man game built in Java using the Swing library. Guide Pac-Man through a maze, collect food, and evade ghosts. The game continues until all lives are lost, offering a fun and engaging experience.",
      technologies: [
        "Java",
        "Swing",
      ],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/itsjomon/pacman-game.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project/pacman.png",
      video: "",
    },
    {
      title: "Todo App",
      href: "https://todo-jomon.vercel.app/",
      active: true,
      description: "A simple To-Do app that lets you add, edit, delete, and categorize tasks as Personal or Work, with the ability to mark them as completed. Tasks are stored locally for seamless access and persistence.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://todo-jomon.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/itsjomon/todo-app.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/project/todo.mp4",
    },
  ],

  certificates: [
    {
      title: "Udemy",
      description: "Java Data Structures & Algorithms + LEETCODE Exercises.",
      image: "/certificate/udemy.png",
      links: [
        {
          title: "Java DSA",
          icon: <Icons.file  className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "GeeksforGeeks",
      description: "GfG 160 - 160 Days of Problem Solving.",
      image: "/certificate/gfg.jpg",
      links: [
        {
          title: "GFG 160",
          icon: <Icons.file className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "GeeksforGeeks",
      description: "Java Database Connectivity (JDBC).",
      image: "/certificate/gfg.jpg",
      links: [
        {
          title: "JDBC",
          icon: <Icons.file className="h-4 w-4" />,
          href: "https://www.geeksforgeeks.org/certificate/68c0926d68cdc913e5f759a7e314aca3",
        },
      ],
    },
    {
      title: "Postman",
      description: "Postman API fundamentals student expert program.",
      image: "/certificate/postman.png",
      links: [
        {
          title: "Postman API fundamentals",
          icon: <Icons.file className="h-4 w-4" />,
          href: "https://badgr.com/public/assertions/6_RHnQqSSNunigQaKeaxcw",
        },
      ],
    },
    {
      title: "Edunet Foundations",
      description: "Web Technologies (Full Stack with DJANGO) under the Next Gen Employability Program & TNSDC - Naan Mudhalvan Program 2023-24.",
      image: "/certificate/edunet.png",
      links: [
        {
          title: "Web Technologies",
          icon: <Icons.file className="h-4 w-4" />,
          href: "https://nextgen.edunetworld.com/verify-tn-certificate/TNEP24_20273",
        },
      ],
    },
    {
      title: "Google Cloud Skills Boost",
      description: "Introduction to Generative AI",
      image: "/certificate/googlecloud.jpg",
      links: [
        {
          title: "Generative AI",
          icon: <Icons.file className="h-4 w-4" />,
          href: "https://www.cloudskillsboost.google/public_profiles/19f13fa4-1a33-452e-b031-462ec5f8f5af/badges/8950406?",
        },
      ],
    },
    {
      title: "Coursera",
      description: "Build a computer vision app with Azure Cognitive Services",
      image: "/certificate/coursera.png",
      links: [
        {
          title: "Azure Cognitive Services",
          icon: <Icons.file className="h-4 w-4" />,
          href: "https://www.coursera.org/account/accomplishments/verify/HW4QL9MFUE6J",
        },
      ],
    },
    {
      title: "LinkedIn",
      description: "React: Creating and Hosting a Full-Stack Site",
      image: "/certificate/linkedin.jpg",
      links: [
        {
          title: "React",
          icon: <Icons.file className="h-4 w-4" />,
          href: "https://www.linkedin.com/learning/certificates/dcd0ccedfcfb19e5b9b43a2c0945f4694617c38e5d9b340988945ff685b64a51",
        },
      ],
    },
    {
      title: "Cisco Network Acadamy",
      description: "Achieved student level credential for completing Cybersecurity Essentials course administered by the undersigned instructor.",
      image: "/certificate/cisco.jpg",
      links: [
        {
          title: "Cybersecurity Essentials",
          icon: <Icons.file className="h-4 w-4" />,
          href: "https://1drv.ms/b/s!ArXfHHJRn2FXgQPOYw6Lg8uWeq9S",
        },
      ],
    },
    {
      title: "Cisco Network Acadamy",
      description: "Achieved student level credential for completing Networking Essentials course administered by the undersigned instructor.",
      image: "/certificate/cisco.jpg",
      links: [
        {
          title: "Networking Essentials",
          icon: <Icons.file className="h-4 w-4" />,
          href: "https://1drv.ms/b/s!ArXfHHJRn2FXgQSj3XYPeJZBfI9H",
        },
      ],
    },
  ],
} as const;
