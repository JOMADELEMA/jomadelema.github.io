import { TbDatabase } from "react-icons/tb";
import {
  // FaReact,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaBrain,
  FaInfo,
  FaGamepad,
  FaFigma,
  FaServer,
} from "react-icons/fa";

import logo_w from "../assets/imgs/logo_w.png";
import logo from "../assets/imgs/logo.png";
import {
  BsCodeSlash,
  // BsBraces
} from "react-icons/bs";
// import icon_w from '../assets/imgs/icon_w.svg';
// import icon from "../assets/imgs/icon.svg";

const navbarLinkIconSize = 20;
export const navbarLinks = [
  {
    id: "home",
    name: "HOME",
    route: "/",
    icon: <FaHome size={navbarLinkIconSize} />,
  },
  {
    id: "about",
    name: "ABOUT ME",
    route: "/about",
    icon: <FaInfo size={navbarLinkIconSize} />,
  },
  {
    id: "expertise",
    name: "EXPERTISE",
    route: "/expertise",
    icon: <FaBrain size={navbarLinkIconSize} />,
  },
  {
    id: "contact",
    name: "CONTACT",
    route: "/contact",
    icon: <FaEnvelope size={navbarLinkIconSize} />,
  },
];

const projectIconSize = 100;
export const skillLanguages = [
  {
    id: "design",
    language: "Design",
    route: "/expertise",
    icon: <FaFigma size={projectIconSize} />,
    // color: "rgba(255, 213, 0, 1)",
    color:
      "bg-violet-300 dark:bg-violet-500 hover:bg-violet-200 dark:hover:bg-violet-600 hover:duration-300",
  },
  {
    id: "webdev",
    language: "Web Development",
    route: "/expertise",
    icon: <BsCodeSlash size={projectIconSize} />,
    // color: "rgba(245, 132, 47, 1)",
    color:
      "bg-orange-300 dark:bg-orange-600 hover:bg-orange-200 dark:hover:bg-orange-700 hover:duration-300",
  },
  {
    id: "gamedev",
    language: "Game Dev",
    route: "/expertise",
    icon: <FaGamepad size={projectIconSize} />,
    // color: "rgba(0, 201, 24, 1)",
    color:
      "bg-green-300 dark:bg-green-600 hover:bg-green-200 dark:hover:bg-green-700 hover:duration-300",
  },
  {
    id: "apis",
    language: "Apis",
    route: "/expertise",
    icon: <FaServer size={projectIconSize} strokeWidth={1} />,
    // color: "rgba(74, 83, 255, 1)",
    color:
      "bg-blue-300 dark:bg-blue-600 hover:bg-blue-200 dark:hover:bg-blue-700 hover:duration-300",
  },
];

export const skill = [
  {
    group_id: "reactjs",
    name: "React JS",
    color:
      "bg-blue-300 dark:bg-blue-700 hover:bg-blue-200 dark:hover:bg-blue-800 hover:duration-300",
    data: [
      {
        id: "demos",
        name: "Demos",
        route: "demos",
      },
      {
        id: "components",
        name: "Components",
        route: "components",
      },
      {
        id: "hooks",
        name: "Hooks",
        route: "hooks",
      },
      {
        id: "customhooks",
        name: "Custom Hooks",
        route: "custom-hooks",
      },
    ],
  },
  {
    group_id: "vanillajs",
    name: "Vanilla Javascript",
    color:
      "bg-yellow-300 dark:bg-yellow-500 hover:bg-yellow-200 dark:hover:bg-yellow-600 hover:duration-300",
    data: [
      {
        id: "demos",
        name: "Demos",
        route: "demos",
      },
      {
        id: "variables",
        name: "Variables",
        route: "variables",
      },
      {
        id: "functions",
        name: "Functions",
        route: "functions",
      },
      {
        id: "arrays",
        name: "Arrays",
        route: "arrays",
      },
      {
        id: "objects",
        name: "Objects",
        route: "objects",
      },
      {
        id: "loops",
        name: "Loops",
        route: "loops",
      },
      {
        id: "events",
        name: "Events",
        route: "events",
      },
    ],
  },
  {
    group_id: "html",
    name: "HTML + CSS",
    color:
      "bg-orange-300 dark:bg-orange-700 hover:bg-orange-200 dark:hover:bg-orange-800 hover:duration-300",
    data: [
      {
        id: "demos",
        name: "Demos",
        route: "demos",
      },
      {
        id: "structure",
        name: "Structure",
        route: "structure",
      },
      {
        id: "lists",
        name: "Lists",
        route: "lists",
      },
      {
        id: "tables",
        name: "Tables",
        route: "tables",
      },
      {
        id: "forms",
        name: "Forms",
        route: "forms",
      },
    ],
  },
  {
    group_id: "nodejs",
    name: "Node JS",
    color:
      "bg-green-300 dark:bg-green-700 hover:bg-green-200 dark:hover:bg-green-800 hover:duration-300",
    data: [
      // {
      //   id: "demos",
      //   name: "Demos",
      //   route: "demos",
      // },
      {
        id: "express",
        name: "Express",
        route: "express",
      },
      {
        id: "cors",
        name: "Cors",
        route: "cors",
      },
      {
        id: "swagger",
        name: "Swagger",
        route: "swagger",
      },
      {
        id: "socket-io",
        name: "Socket io",
        route: "socket-io",
      },
    ],
  },
];

const contactIconSize = 20;
export const contactData = [
  {
    id: "github",
    description:
      "Please feel free to check the Github repositories I have been working during these years.",
    url: "http://www.github.com/JOMADELEMA",
    name: "/JOMADELEMA",
    icon: <FaGithub size={contactIconSize} />,
  },
  {
    id: "linkedin",
    description:
      "Also check my linkedin profile to know about my professional career and some of my courses certifications.",
    url: "http://www.linkedin.com/in/JOMADELEMA",
    name: "/JOMADELEMA",
    icon: <FaLinkedin size={contactIconSize} />,
  },
  {
    id: "email",
    description: "or see below my e-mail to get in touch.",
    url: "mailto:jomadelema@gmail.com",
    name: "jomadelema@gmail.com",
    icon: <FaEnvelope size={contactIconSize} />,
  },
];

export const quotes = [
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Wisdom... comes not from age, but from education and learning.",
    author: "Anton Chekhov",
  },
  {
    quote:
      "Commit yourself to lifelong learning. The most valuable asset you'll ever have is your mind and what you put into it.",
    author: "Albert Einstein",
  },
  {
    quote:
      "You don't learn to walk by following rules. You learn by doing, and by falling over.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    author: "Pele",
  },
  {
    quote:
      "Continuous learning is the minimum requirement for success in any field.",
    author: "Brian Tracy",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote: "Don't just count your years, make your years count.",
    author: "George Mereith",
  },
  {
    quote:
      "Knowledge, like air, is vital to life. Like air, no one should be denied it.",
    author: "Alan Moore",
  },
  {
    quote: "Learning is not a destination, it is a continuous process.",
    author: "Kevin Horsley",
  },
];

export const aboutMeData = {
  id: "JOMADELEMA",
  name: "Jorge de León M.",
  logo_w,
  logo,
  // icon_w,
  // icon,
  currentLevel: 36,
  description:
    "I am a curious and passionate learner who loves to explore new ideas and technologies. I am always eager to expand my knowledge and skills in programming and beyond.",
  interests: [
    "Web Development",
    "Front End",
    "UI/UX Designs",
    "Backend",
    "Databases",
  ],
  hobbies: ["Photography", "Cooking", "Drawing", "and of course Video games"],
  languages: ["Spanish", "English"],
};

export const htmlDemos = [
  {
    id: "photographer",
    name: "Photographer Layout",
    description: "Responsive site idea for a Photographer site layout.",
    route: "photographer",
  },
  {
    id: "imageGrid",
    name: "Image Grid",
    description:
      "Responsive site idea of an image grid for hand and digital drawings ",
    route: "image-grid",
  },
  {
    id: "landingPage",
    name: "Landing Page",
    description: "Responsive landing page concept for a { ???? } ",
    route: "landing-page",
  },
  {
    id: "blog",
    name: "Blog",
    description: "Responsive blog design",
    route: "blog",
  },
];

export const webDesigns = [
  {
    title: "404 not found message",
    description: "Website 404 Not found error message site",
    url: "https://pbs.twimg.com/media/FvJKPuYWwBAhKB1?format=jpg&name=4096x4096",
    social: "https://x.com/jomadelema_dev/status/1653466035750567936",
    tags: "Figma",
  },
  {
    title: "e-commerce Shop",
    description: "Single item page for an e-commerce website",
    url: "https://pbs.twimg.com/media/Fvn6IL_XsAk8GFY?format=jpg&name=large",
    social: "https://x.com/jomadelema_dev/status/1650734634529955840",
    tags: "Figma",
  },
  {
    title: "Calculator",
    description: "Calculator app with neumorphism effect",
    url: "https://pbs.twimg.com/media/FupxSwaXwAECLd_?format=jpg&name=medium",
    social: "https://x.com/jomadelema_dev/status/1655629418306449430",
    tags: "Figma, e-commerce",
  },
  {
    title: "Countdown Timer",
    description: "Countdown timer for a webapp",
    url: "https://pbs.twimg.com/media/Fvxf6XZXsAATgXZ?format=jpg&name=4096x4096",
    social: "https://x.com/jomadelema_dev/status/1656304593150541825",
    tags: "lroem loem lorem poem",
  },
  {
    title: "Location Tracker",
    description: "A tracker for web site using neubrutalism design",
    url: "https://pbs.twimg.com/media/FwavbKtaEAAqOp6?format=jpg&name=4096x4096",
    social: "https://x.com/jomadelema_dev/status/1659206902574882818",
    tags: "tracker, location, neubrutalism",
  },
  {
    title: "Home Monitoring Dashboard",
    description:
      "A dashboard usign glassmorphism design for a home monitoring dashboard",
    url: "https://pbs.twimg.com/media/Fwhy3-HWcAMTbI4?format=jpg&name=4096x4096",
    social: "https://x.com/jomadelema_dev/status/1659703209357717505",
    tags: "monitoring, glassmorphism",
  },
];

export const mobileDesigns = [
  {
    title: "Card Checkout",
    description: "Mobile device credit card checkout and success message",
    url: "https://pbs.twimg.com/media/FuiWC74XoAAHxi_?format=jpg&name=4096x4096",
    social: "https://x.com/jomadelema_dev/status/1650734634529955840",
    tags: "Figma",
  },
  {
    title: "Calculator",
    description: "Calculator app with neumorphism effect",
    url: "https://pbs.twimg.com/media/FupxSwaXwAECLd_?format=jpg&name=medium",
    social: "https://x.com/jomadelema_dev/status/1651257350269927424",
    tags: "Figma, neumorphism",
  },
  {
    title: "Error and Success Message",
    description: "Success and Error message for a mobile device app",
    url: "https://pbs.twimg.com/media/FvZqhynXoAY_cR9?format=jpg&name=4096x4096",
    social: "https://x.com/jomadelema_dev/status/1654628087324082176",
    tags: "error, success, figma",
  },
  {
    title: "Leaderboard",
    description: "Season leaderboard design for a mobile game or app",
    url: "https://pbs.twimg.com/media/FwYTWFmWYAEXSeV?format=jpg&name=4096x4096",
    social: "https://x.com/IftahazK/status/1659472252310814720",
    tags: "leaderboard, ",
  },
  {
    title: "Onboarding",
    description: "",
    url: "https://pbs.twimg.com/media/Fw3kYfLXsAMvziB?format=jpg&name=4096x4096",
    social: "https://x.com/jomadelema_dev/status/1661235134782402562",
    tags: "lroem loem lorem poem",
  },
];
