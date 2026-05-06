export const profile = {
  name: "Aida Fitryani",
  title: "Frontend Engineer",
  yearsExperience: "7+ Years Experience",
  tagline:
    "I build scalable, user-centric web applications with React, Next.js, and TypeScript.",
  bio: [
    "Frontend Engineer with 7+ years of experience designing and building production web platforms across teams in Singapore, Japan, and Indonesia.",
    "I specialise in complex UI systems, real-time browser features (WebRTC / MediaDevices), and document generation workflows.",
    "I care about performance, usability, and clean architecture — and I love collaborating with cross-functional teams to ship things people actually use.",
  ],
};

export const contact = {
  email: "fitryani.aida@gmail.com",
  phone: "+62 822-6850-7934",
  linkedin: "https://www.linkedin.com/in/aida-fitryani/",
  github: "https://github.com/reotropi",
  resume: "/resume.pdf",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      "React JS",
      "Next.js (App Router, SSR/SSG)",
      "TypeScript",
      "Tailwind CSS",
      "Mantine UI",
      "Material UI",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "Node.js",
      "Laravel (PHP)",
      "REST API design",
      "AWS Lambda",
      "AWS EC2",
      "AWS SES",
      "AWS CloudFront",
      "Firebase",
    ],
  },
  {
    category: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "AWS DynamoDB",
      "Firebase Firestore",
      "Supabase",
    ],
  },
  {
    category: "Integrations",
    items: [
      "Stripe",
      "Veritrans",
      "GMO",
      "SendGrid",
      "AWS SES",
      "docxtemplater",
      "PDF.js",
      "Canvas API",
      "WebRTC / MediaDevices",
      "Agora RTC / RTM",
      "Google Maps API",
      "Fabric.js",
      "Paper.js",
    ],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "Postman", "Figma", "Trello", "API documentation"],
  },
];

export const softSkills = [
  "Can-do attitude",
  "Clear communication",
  "Leadership",
  "Team collaboration",
  "Adaptability",
  "Critical thinking",
  "Problem-solving",
  "Attention to detail",
];

export const experience = [
  {
    company: "HubbedIn",
    role: "Frontend Engineer",
    location: "Singapore · Remote",
    period: "Aug 2024 – Present",
    bullets: [
      "Build and maintain AI-powered career platforms with Next.js and React, serving B2C job seekers and B2B institutional clients (universities and schools).",
      "AI Resume Builder — full resume creation flow with multi-step forms, dynamic field logic, live preview via React Context, and .docx / PDF export using docxtemplater and PDF.js.",
      "AI Interviewer — browser-based interview tool with real-time camera and microphone access (MediaDevices / WebRTC), canvas overlays, and live AI feedback.",
      "School Career Services — multiple dashboards for students, advisors, and admins, plus CMS customisation so non-technical school admins can manage content independently.",
      "Kiosk-Focused Website & AI Chatbot — kiosk-mode web experience with an integrated AI chatbot for on-site career events.",
      "Modern UI with Tailwind CSS and Mantine; collaboration via Figma and sprint management in Trello.",
    ],
  },
  {
    company: "Port Remote Travel",
    role: "Freelance Web Developer",
    location: "Remote",
    period: "2020 – 2022  ·  ~2 years (until acquisition)",
    bullets: [
      "Real-time communication — built live audio/video sessions and in-app chat using Agora RTC and Agora RTM, including a command-style messaging layer (RTM channel commands) for synchronised UI actions between participants.",
      "Google Maps API integration — embedded interactive maps with custom markers, geolocation, and place search for location-based travel features.",
      "Integrated Firebase for authentication, realtime data, and backend services.",
    ],
  },
  {
    company: "Mirai Technologies",
    role: "Web Developer",
    location: "Tangerang, Indonesia",
    period: "Aug 2018 – Jul 2024  ·  6 years",
    bullets: [
      "Developed and maintained production websites, REST APIs, and servers for the Japanese and Indonesian markets.",
      "Fueru Album — Japanese photo storage platform (40,000+ users) with AI analysis, monthly printed photo books, and complex image processing (upload, crop, compress, webcam capture).",
      "Exam & Certification Registration — form-based booking platforms for the Japanese market with scheduling and confirmation flows.",
      "Stakeholder Reward Portal — internal site for stakeholders to select annual rewards with delivery-to-home fulfilment.",
      "Endorsin — two-sided influencer marketplace with separate brand & influencer dashboards, budget-based job matching, and real-time in-app chat.",
      "Built REST APIs in Laravel (PHP) consumed by iOS/Android teams, including auth, data endpoints, and third-party integrations.",
      "Integrated payment gateways (Veritrans, Stripe, GMO) and email services (SendGrid, AWS SES); led projects as technical lead and produced API documentation.",
    ],
  },
];

export const projects = [
  {
    title: "AI Resume Builder",
    blurb:
      "A guided multi-step resume creation experience with live preview and one-click export to .docx and PDF, powering both B2C job seekers and B2B institutional clients (universities and schools) on HubbedIn.",
    stack: ["Next.js", "React Context", "docxtemplater", "PDF.js", "Tailwind"],
    accent: "pink",
  },
  {
    title: "AI Interviewer",
    blurb:
      "Browser-based interview tool with real-time camera + mic access, canvas overlays, and live AI-driven feedback. Handles permission flows and cross-browser quirks.",
    stack: ["Next.js", "MediaDevices"],
    accent: "purple",
  },
  {
    title: "Fueru Album",
    blurb:
      "Photo storage platform for the Japanese market with 40,000+ users — AI image analysis, monthly printed photo books, and end-to-end image processing.",
    stack: ["Laravel", "JavaScript", "AWS", "Image processing"],
    accent: "rose",
  },
  {
    title: "Endorsin",
    blurb:
      "Two-sided influencer marketplace with separate brand and influencer dashboards, budget-based job matching, and real-time in-app chat.",
    stack: ["Laravel", "REST APIs", "Realtime chat"],
    accent: "violet",
  },
];
