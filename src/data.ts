import { Education, Mode, ModeContent, Project } from './types';

/* ------------------------------------------------------------------ */
/* SHARED CONTENT (identical across both modes)                        */
/* ------------------------------------------------------------------ */

const education: Education[] = [
  {
    id: 'smk-medikacom',
    school: 'SMKS MedikaCom Bandung',
    program: 'Software Engineering (RPL)',
    location: 'Bandung, Indonesia',
    period: 'Jul 2023 - May 2026',
    gpa: '87.40 / 100.00',
  },
];

/* ------------------------------------------------------------------ */
/* DEVELOPER MODE                                                      */
/* ------------------------------------------------------------------ */

const devRealProjects: Project[] = [
  {
    id: 'warehouse',
    title: 'Warehouse Management System',
    category: 'real',
    isInternship: true,
    subtitle: 'PT Akur Pratama (Yogya Center)',
    description: 'A web-based warehouse management system built for PT Akur Pratama (Yogya Center). Owned frontend & UI/UX design and implementation.',
    longDescription: 'This internal enterprise system was engineered to streamline inventory operations, tracking, and movement across central warehouses. The goal was to replace slow, error-prone manual entry procedures with a real-time, highly visual administration suite.',
    tags: ['JavaScript', 'Figma', 'Dashboard UI', 'Data Tables', 'Vercel'],
    bannerBg: '#6366F1',
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
    tags: ['JavaScript', 'Figma', 'Touch UI', 'Responsive Design', 'Vercel'],
    bannerBg: '#3B82F6',
    mockupType: 'checkout',
    challenges: [
      'Creating a zero-friction checkout flow for diverse demographics (young to elderly clients).',
      'Minimizing transition states and delays to prevent user anxiety or checkout abandonment.',
      'Preventing erroneous duplicate scanning through robust visual debounce indicators.'
    ],
    achievements: [
      'Achieved average checkout times under 45 seconds per transaction during store simulation tests.',
      'Led the end-to-end user-experience model, from physical tablet ergonomics studies to fine-grained visual components.',
      'Engineered a stateful virtual cart system using optimized web technologies.'
    ]
  }
];

const devPortfolioProjects: Project[] = [
  {
    id: 'steam-rider',
    title: 'Steam Rider',
    category: 'portfolio',
    isPersonal: true,
    subtitle: 'Personal Project',
    // TODO: replace with your real links (leave undefined to hide a button)
    previewUrl: 'https://github.com/alfanjanuar/steam-rider',
    githubUrl: 'https://github.com/alfanjanuar/steam-rider',
    description: 'A browser-based HTML5 Canvas game featuring pixel art visuals, idle and active mechanics, and smooth animations built from scratch.',
    longDescription: 'Steam Rider is a retro-futuristic side-scroller game engine built natively in TypeScript using the HTML5 Canvas API. It integrates fluid parallax backgrounds, robust keyboard controls, a custom collision detection matrix, and satisfying sprite animation cycles.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Canvas API', 'Game Dev'],
    bannerBg: '#8B5CF6',
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
    // TODO: replace with your real links (leave undefined to hide a button)
    githubUrl: 'https://github.com/alfanjanuar/telegram-ai-bot',
    description: 'An agentic Telegram bot deployed on a VPS using multi-LLM API routing, managed with PM2 and optimized for low-resource environments.',
    longDescription: 'A custom, production-grade automated chat agent deployed on minimal cloud servers. The bot handles natural language queries, automates routine reminders, processes files, and intelligently delegates tasks to various LLM models depending on complexity.',
    tags: ['Node.js', 'Telegram Bot API', 'PM2', 'VPS', 'LLM API'],
    bannerBg: '#0284C7',
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
    // TODO: replace with your real links (leave undefined to hide a button)
    githubUrl: 'https://github.com/alfanjanuar/kde-plasma-rice',
    description: 'A fully customized Linux desktop environment inspired by macOS aesthetics, featuring Kvantum blur, glass effects, and Latte Dock.',
    longDescription: 'A comprehensive UNIX desktop customization suite utilizing the KDE Plasma desktop framework. This environment was configured to deliver consistent aesthetics, including translucent panels, global shortcuts, blurred window accents, and customized terminal emulators.',
    tags: ['Linux', 'KDE Plasma', 'Kvantum', 'Latte Dock', 'Bash'],
    bannerBg: '#10B981',
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

const developerContent: ModeContent = {
  hero: {
    role: 'Frontend & Mobile Developer',
    tagline:
      'A frontend & mobile developer focused on building clean, performant, and user-friendly interfaces for web and mobile. I turn UI/UX designs into production-ready frontends with modern technologies.',
  },
  about: {
    intro:
      "I'm a frontend & mobile developer who turns designs into clean, fast, and accessible interfaces. I care about the small details that make a product feel finished, and about writing code that's easy to maintain.",
    secondary:
      "During my internship at PT Akur Pratama (Yogya Center) I owned the frontend and UI/UX for real internal tools used daily by warehouse and retail staff. I'm now open to freelance projects and full-time roles where I can build products people actually enjoy using.",
    whatIDo: [
      { icon: 'Monitor', label: 'Web apps with React, TypeScript & Tailwind CSS' },
      { icon: 'Smartphone', label: 'Cross-platform mobile apps with Flutter' },
      { icon: 'Palette', label: 'UI/UX design, from Figma to production code' },
    ],
  },
  projectGroups: [
    {
      id: 'real',
      heading: 'Real Projects',
      subtitle: 'Real projects I built during my internship at PT Akur Pratama (Yogya Center).',
      cols: 2,
      projects: devRealProjects,
    },
    {
      id: 'portfolio',
      heading: 'Portfolio Projects',
      subtitle:
        "Here are some of the projects I've worked on. Each one represents a unique challenge and an opportunity to learn and grow as a developer.",
      cols: 3,
      projects: devPortfolioProjects,
    },
  ],
  experiences: [
    {
      id: 'dev-exp1',
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
  ],
  education,
  techStack: {
    heading: 'Tech Stack',
    subtitle: 'Technologies, tools, and AI workflows I use to build responsive web and mobile applications.',
    categories: [
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
    ],
  },
  availability: {
    headline: 'Have a project or a role in mind?',
    subtext: "I'm open to freelance work and full-time roles. Send a message and I'll get back to you within a day.",
  },
};

/* ------------------------------------------------------------------ */
/* SALES MODE                                                          */
/* ------------------------------------------------------------------ */

const salesProjects: Project[] = [
  {
    id: 'marketplace-sales',
    title: 'Online Marketplace Sales',
    badgeLabel: 'Freelance',
    subtitle: 'Facebook Marketplace & FJB Community',
    description: 'Selling a wide range of products directly to buyers on online marketplaces and buy-and-sell communities, handling each deal from the first message to delivery.',
    longDescription: 'Community-based online selling where buyers and sellers transact directly. I run the full process on my own: responding to enquiries, explaining products honestly, agreeing on a price, and arranging delivery.',
    tags: ['Customer Service', 'Product Knowledge', 'Online Selling', 'Transaction Management'],
    tagsLabel: 'Skills Applied',
    bannerBg: '#0EA5E9',
    mockupType: 'sales',
    challengesLabel: 'How I work',
    challenges: [
      'Respond to buyers quickly and politely through chat and community groups.',
      'Explain product condition, pricing, and the process honestly so buyers feel safe.',
      'Run the whole transaction myself, from the offer to agreement to shipping.'
    ],
    achievementsLabel: 'Results',
    achievements: [
      'Served 25+ customers across online platforms.',
      'Built buyer trust through transparent communication, which led to repeat orders.',
      'Closed deals independently while keeping buyers satisfied.'
    ],
  },
  {
    id: 'negotiation-retention',
    title: 'Negotiation & Customer Retention',
    badgeLabel: 'Freelance',
    subtitle: 'Facebook Marketplace & FJB Community',
    description: 'Negotiating prices with very different types of buyers and turning one-time purchases into repeat customers through patient, solution-focused service.',
    longDescription: 'Every buyer negotiates differently. I read the situation, find a price that works for both sides, and handle any complaints calmly so the customer stays happy and comes back.',
    tags: ['Negotiation', 'Complaint Handling', 'Relationship Building', 'Repeat Customers'],
    tagsLabel: 'Skills Applied',
    bannerBg: '#6366F1',
    mockupType: 'sales',
    challengesLabel: 'How I work',
    challenges: [
      'Negotiate toward a win-win price with each buyer’s style in mind.',
      'Handle complaints and transaction issues patiently and find a solution.',
      'Keep communication transparent to build long-term trust.'
    ],
    achievementsLabel: 'Results',
    achievements: [
      'Reached agreements that worked for both the buyer and me.',
      'Resolved issues without losing customer satisfaction.',
      'Earned repeat orders through reliable, honest service.'
    ],
  },
];

const salesContent: ModeContent = {
  hero: {
    role: 'Sales & Customer Relations',
    tagline:
      'I help buyers find the right product through honest, responsive communication. I have served 25+ customers across online marketplaces and bring a retail and tech background to every conversation.',
  },
  about: {
    intro:
      'I sell through trust, not pressure. I listen, explain products honestly, and negotiate toward deals that work for both sides. I handle the full cycle myself, from the first message to delivery.',
    secondary:
      'I have served 25+ customers on Facebook Marketplace and buy-and-sell communities, and spent an internship inside a national retail company (YOGYA Center). I am communicative, target-oriented, and quick to adapt to new environments and SOPs.',
    whatIDo: [
      { icon: 'Users', label: 'Customer service and relationship building' },
      { icon: 'Target', label: 'Price negotiation and closing deals' },
      { icon: 'TrendingUp', label: 'End-to-end transaction handling' },
    ],
  },
  projectGroups: [
    {
      id: 'sales-highlights',
      heading: 'Sales Highlights',
      subtitle: 'How I sell and keep customers coming back, from my freelance work on online marketplaces.',
      cols: 2,
      projects: salesProjects,
    },
  ],
  experiences: [
    {
      id: 'sales-exp-pkl',
      role: 'Retail Operations Support',
      company: 'PT Akur Pratama (YOGYA Center)',
      location: 'Bandung, Indonesia',
      period: 'Jul 2025 - Jan 2026',
      type: 'Internship',
      descriptionTitle: 'Supported daily operations inside a nationwide supermarket and department store chain, working closely with frontline and warehouse teams.',
      bullets: [
        'Supported daily operations across a nationwide supermarket and department store chain, working alongside frontline and warehouse staff.',
        'Coordinated actively with multiple divisions (warehouse, cashier, marketing) to resolve day-to-day operational issues.',
        'Worked under strict company SOPs and time targets in a fast-paced retail environment.',
        'Gained first-hand understanding of retail workflows, from stock handling to point-of-sale operations.',
        'Built comfort working in large teams and adapting quickly to new processes.'
      ],
      tags: ['Retail Operations', 'SOP Compliance', 'Teamwork', 'Cross-Division Coordination', 'Fast-Paced Environment']
    },
    {
      id: 'sales-exp1',
      role: 'Freelance Sales',
      company: 'Facebook Marketplace & FJB Community',
      location: 'Bandung, Indonesia',
      period: 'Jan 2023 - Present',
      type: 'Freelance',
      descriptionTitle: 'Community-based online buying and selling, dealing directly with buyers.',
      bullets: [
        'Serve potential buyers through chat and online communities in a responsive, friendly, and professional way.',
        'Give clear, honest information about product condition, pricing, and the transaction process.',
        'Negotiate prices with different types of buyers until reaching a deal that works for both sides.',
        'Handle complaints and transaction issues patiently to keep customers satisfied.',
        'Build buyer trust through transparent communication, which drives repeat orders.',
        'Manage transactions end to end, from the offer and agreement to shipping.'
      ],
      tags: ['Sales', 'Negotiation', 'Customer Service', 'Communication', 'Transaction Management']
    }
  ],
  education,
  techStack: {
    heading: 'Sales Toolkit',
    subtitle: 'The skills and strengths I rely on to sell, build relationships, and keep customers happy.',
    categories: [
      {
        id: 'sales-skills',
        title: 'Core Sales Skills',
        icon: 'Target',
        description: 'Negotiated and closed 25+ transactions across online marketplaces, consistently reaching deals that worked for both sides.',
        tags: ['Negotiation', 'Closing Deals', 'Product Knowledge', 'Target-Oriented']
      },
      {
        id: 'relationships',
        title: 'Customer Relations',
        icon: 'Users',
        description: 'Built repeat-customer relationships through transparent communication and patient complaint handling — earning consistent repeat orders.',
        tags: ['Customer Service', 'Complaint Handling', 'Relationship Building', 'Repeat Customers']
      },
      {
        id: 'communication',
        title: 'Communication',
        icon: 'MessageSquare',
        description: 'Clear, honest communication that earns trust.',
        tags: ['Chat Support', 'Honest Communication', 'Community Selling', 'Multitasking']
      },
      {
        id: 'strengths',
        title: 'Strengths & Tools',
        icon: 'Briefcase',
        description: 'How I show up at work day to day.',
        tags: ['Adaptability', 'Discipline', 'Teamwork', 'Computer & Digital Tools']
      },
    ],
  },
  availability: {
    headline: 'Looking for someone who can sell?',
    subtext: 'I am open to sales and customer-facing roles. Send a message and I will get back to you within a day.',
  },
};

/* ------------------------------------------------------------------ */

export const contentByMode: Record<Mode, ModeContent> = {
  developer: developerContent,
  sales: salesContent,
};
