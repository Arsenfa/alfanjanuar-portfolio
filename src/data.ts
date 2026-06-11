import { Project, Experience, TechCategory } from './types';

export const projectsData: Project[] = [
  {
    id: 'warehouse',
    title: 'Warehouse Management System',
    category: 'real',
    isInternship: true,
    subtitle: 'PT Akur Pratama (Yogya Center)',
    description: 'A web-based warehouse management system built for PT Akur Pratama (Yogya Center). Owned frontend & UI/UX design and implementation.',
    longDescription: 'This internal enterprise system was engineered to streamline inventory operations, tracking, and movement across central warehouses. The goal was to replace slow, error-prone manual entry procedures with a real-time, highly visual administration suite.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Vercel'],
    bannerBg: '#6366F1', // indigo
    mockupType: 'warehouse',
    challenges: [
      'Visualizing complex high-density dataset arrays with low latency on standard warehouse tablets.',
      'Ensuring real-time barcode scanning interactions and instant visual status confirmation.',
      'Designing intuitive flow-charts for step-by-step stock routing and catalog allocation.'
    ],
    achievements: [
      'Successfully reduced processing time for inbound inventory audits by 30%.',
      'Designed a completely responsive, touch-friendly UI layout that requires zero training time for warehouse workers.',
      'Built reusable, modular UI components utilizing native JavaScript optimized for performant DOM updates.'
    ]
  },
  {
    id: 'checkout',
    title: 'Self Checkout',
    category: 'real',
    isInternship: true,
    subtitle: 'PT Akur Pratama (Yogya Center)',
    description: 'A self-checkout web app built for PT Akur Pratama (Yogya Center). Led frontend & UI/UX from design to implementation.',
    longDescription: 'An interactive self-checkout terminal application built to run on customer-facing tablets. The interface was optimized for quick interactions, foolproof item scanning, instant feedback, and secure digital payment processing.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Vercel'],
    bannerBg: '#3B82F6', // blue-500
    mockupType: 'checkout',
    challenges: [
      'Creating a zero-friction checkout flow for diverse demographics (young to elderly clients).',
      'Minimizing transition states and delays to prevent user anxiety or checkout abandonment.',
      'Preventing erroneous duplicate scanning through robust visual debounce indicators.'
    ],
    achievements: [
      'Achieved average checkout times under 45 seconds per transactions during store simulation tests.',
      'Led the end-to-end user-experience model, from physical tablet ergonomics studies to fine-grained visual components.',
      'Engineered an stateful virtual cart system using optimized web technologies.'
    ]
  },
  {
    id: 'steam-rider',
    title: 'Steam Rider',
    category: 'portfolio',
    isPersonal: true,
    subtitle: 'Personal Project',
    description: 'A browser-based HTML5 Canvas game featuring pixel art visuals, idle and active mechanics, and smooth animations built from scratch.',
    longDescription: 'Steam Rider is a retro-futuristic side-scroller game engine built natively in TypeScript using the HTML5 Canvas API. It integrates fluid parallax backgrounds, robust keyboard controls, a custom collision detection matrix, and satisfying sprite animation cycles.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Canvas API', 'Game Dev'],
    bannerBg: '#8B5CF6', // violet-500
    mockupType: 'steam',
    challenges: [
      'Implementing silky-smooth 60fps rendering using requestAnimationFrame with variable monitor refresh rates.',
      'Handling multiple active game objects, collision loops, and particle assets simultaneously without memory leaks.',
      'Balancing math-driven projectile trajectories and arcade-style acceleration physics.'
    ],
    achievements: [
      'Constructed a reliable game cycle with independent render and update loops.',
      'Designed pixel-precise custom vector-like CSS visual backdrops and sprites.',
      'Integrated an upgrade screen that persists gameplay milestones locally on the browser client.'
    ]
  },
  {
    id: 'telegram-ai',
    title: 'Telegram AI Bot',
    category: 'portfolio',
    isPersonal: true,
    subtitle: 'Personal Project',
    description: 'An agentic Telegram bot deployed on a VPS using multi-LLM API routing, managed with PM2 and optimized for low-resource environments.',
    longDescription: 'A custom, production-grade automated chat agent deployed on minimal cloud servers. The bot handles natural language queries, automates routine reminders, processes files, and intelligently delegates tasks to various LLM models depending on complexity.',
    tags: ['Node.js', 'Telegram Bot API', 'PM2', 'VPS', 'LLM API'],
    bannerBg: '#0284C7', // sky-600
    mockupType: 'telegram',
    challenges: [
      'Optimizing API connection pools and stream responses to guarantee sub-second delivery over slow network conditions.',
      'Preventing system crashes due to high rate-limits or simultaneous requests from multiple group chats.',
      'Running a server on minimal RAM limits (below 512MB) while processing rich context.'
    ],
    achievements: [
      'Successfully integrated automated fallback routing to guarantee service uptime whenever main AI models are over capacity.',
      'Configured secure webhook-based handlers with automated log rotations and database state caches.',
      'Implemented custom conversational session memory buffers without compromising CPU overhead.'
    ]
  },
  {
    id: 'linux-rice',
    title: 'KDE Plasma Ricing',
    category: 'portfolio',
    isPersonal: true,
    subtitle: 'Personal Project',
    description: 'A fully customized Linux desktop environment inspired by macOS aesthetics, featuring Kvantum blur, glass effects, and Latte Dock.',
    longDescription: 'A comprehensive UNIX desktop customization suite utilizing the KDE Plasma desktop framework. This environment was configured to deliver consistent aesthetics, including translucent panels, global shortcuts, blurred window accents, and customized terminal emulators.',
    tags: ['Linux', 'KDE Plasma', 'Kvantum', 'Latte Dock', 'Bash'],
    bannerBg: '#10B981', // emerald-500
    mockupType: 'kde',
    challenges: [
      'Configuring complex theme modules across mixed GTK and Qt renderers to ensure visual consistency.',
      'Optimizing GPU compositing, transparency, and background blur effects to avoid frame drops during heavy workloads.',
      'Automating installation and setup scripts to deploy on new machines seamlessly.'
    ],
    achievements: [
      'Created a single-command setup bash script that fetches and applies window, font, and panel preferences catalog-wide.',
      'Optimized idle RAM utilization of the entire graphic subsystem down to only 650MB.',
      'Authored unique window decoration templates published on the active open-source ricing communities.'
    ]
  }
];

export const experiencesData: Experience[] = [
  {
    id: 'exp1',
    role: 'Frontend Developer (UI/UX)',
    company: 'PT Akur Pratama (Yogya Center)',
    location: 'Bandung',
    period: 'Jun 2025 - Jan 2026',
    type: 'Internship',
    descriptionTitle: 'Owned frontend and UI/UX for internal web applications.',
    bullets: [
      'Designed and implemented the UI/UX for the Warehouse Management System (WMS), improving internal operational efficiency.',
      'Developed a responsive and intuitive interface for the Self-Checkout application used in retail locations.',
      'Collaborated with backend teams to ensure seamless API integration and data presentation.',
      'Delivered production-ready code optimizing for cross-browser compatibility and mobile responsiveness.'
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Figma', 'Vercel', 'Git']
  }
];

export const techStackData: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'Monitor',
    description: 'Building clean, responsive, and user-friendly web interfaces.',
    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Responsive Design']
  },
  {
    id: 'ui-design',
    title: 'UI & Styling',
    icon: 'Palette',
    description: 'Designing and building consistent interface components.',
    tags: ['Figma', 'UI/UX', 'shadcn/ui', 'Component Design']
  },
  {
    id: 'dev-env',
    title: 'Dev Environment',
    icon: 'Code2',
    description: 'Code editors, package managers, and browser tools I use daily.',
    tags: ['VS Code', 'Zed', 'npm', 'Browser DevTools']
  },
  {
    id: 'vcs',
    title: 'Version Control & Deploy',
    icon: 'GitFork',
    description: 'Managing code and shipping to production.',
    tags: ['Git', 'GitHub', 'Vercel']
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: 'Smartphone',
    description: 'Exploring cross-platform mobile development.',
    tags: ['Flutter', 'Dart']
  },
  {
    id: 'ai-tooling',
    title: 'AI Integration & Tooling',
    icon: 'Cpu',
    description: 'Integrating LLM APIs into practical workflows, including agentic bots, automation, prompt engineering, and multi-provider routing.',
    tags: ['LLM API', 'Agentic Bots', 'Automation', 'Prompt Engineering', 'Claude', 'ChatGPT']
  }
];
