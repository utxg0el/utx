export type ProjectDomain = "theory" | "llm_agents" | "efficient_ai" | "robotics_perception";

export type SectionNavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type WorkItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  imageUrl?: string;
  imageAlt?: string;
  impactBullets: string[];
  stack: string[];
  domains: ProjectDomain[];
  links?: LinkItem[];
};

export type ProjectItem = {
  name: string;
  oneLiner: string;
  details: string;
  chips: string[];
  domains: ProjectDomain[];
  links?: LinkItem[];
  imageUrl?: string;
};

export type CourseItem = {
  course: string;
  level: string;
  instructor: string;
  term: string;
  note?: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type EducationInfo = {
  school: string;
  degree: string;
  status: string;
  note?: string;
};

export type SiteProfile = {
  name: string;
  title: string;
  location: string;
  summary: string;
  resumeUrl: string;
  avatarUrl: string;
  sections: SectionNavItem[];
  socials: SocialLink[];
  education: EducationInfo;
  skills: SkillCategory[];
  work: WorkItem[];
  projects: ProjectItem[];
  coursework: CourseItem[];
};

export const domainLabel: Record<ProjectDomain, string> = {
  theory: "Theory",
  llm_agents: "LLM Agents",
  efficient_ai: "Efficient AI",
  robotics_perception: "Robotics Perception"
};

export const profile: SiteProfile = {
  name: "Utkarsh Goel",
  title: "MS CS @ NYU Courant | Applied AI/ML Engineer",
  location: "New York, NY",
  summary:
    "Second-semester MS CS student at NYU Courant building LLM systems, efficient AI, and robotics perception. Actively looking for internship and full-time opportunities. Love books, movies, and podcasts of all kinds!",
  resumeUrl: "/Utkarsh_CV.pdf",
  avatarUrl: "/profile/utkarsh-mall.png",
  sections: [
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" }
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/utxg0el" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/utkarshgoel2001/" },
    { label: "Email", href: "mailto:goelutk2001@gmail.com" }
  ],
  education: {
    school: "New York University Courant Institute of Mathematical Sciences",
    degree: "MS in Computer Science",
    status: "Semester 2 (Spring 2026)"
  },
  skills: [
    {
      category: "AI/ML",
      items: ["LLM systems", "RL for reasoning", "agentic orchestration", "PyTorch"]
    },
    {
      category: "Efficient AI",
      items: ["CUDA", "quantization", "low-rank optimization", "inference optimization"]
    },
    {
      category: "Vision/Robotics",
      items: ["CoTracker", "FoundationPose", "SAM2", "Depth Anything", "HAMER", "optical flow"]
    },
    {
      category: "Systems/Data",
      items: ["Java + Spring", "microservices", "AWS", "Apache Airflow", "PostgreSQL", "Tableau", "Selenium"]
    }
  ],
  work: [
    {
      company: "Amazon Smart Vehicles",
      role: "Software Development Engineer 1",
      period: "Jan 2024 - Jul 2025",
      location: "Bengaluru, India",
      imageUrl: "/work/amazon-smart-vehicles.svg",
      imageAlt: "Illustration of in-car assistant orchestration for Amazon Smart Vehicles",
      impactBullets: [
        "On a 3-engineer team that moved Alexa Smart Vehicles from FSM/FST to an LLM-based architecture.",
        "Built service logic for real-time intent handling and tool/API orchestration for multi-step vehicle actions.",
        "Helped productionize the platform with OEM-facing integrations."
      ],
      stack: ["LLM systems", "microservices"],
      domains: ["llm_agents", "efficient_ai"],
      links: [
        { label: "Amazon", href: "https://www.amazon.com/" },
        { label: "Alexa Auto", href: "https://www.amazon.com/alexa-auto/b?ie=UTF8&node=18021383011" },
        { label: "Audi", href: "https://www.audi.com/" },
        { label: "Rivian", href: "https://rivian.com/" },
        { label: "Mahindra", href: "https://www.mahindra.com/" }
      ]
    },
    {
      company: "timelyAI (now Zoca)",
      role: "Product Analyst and Data Science Intern",
      period: "Jul 2023 - Dec 2023",
      location: "Bengaluru, India",
      imageUrl: "/work/zoca-analytics.svg",
      imageAlt: "Illustration of analytics and growth dashboard pipelines for Zoca",
      impactBullets: [
        "Built an analytics stack with Python pipelines and Node.js backend, contributing to 50% MoM DAU growth.",
        "Automated QA with Python + Selenium, cutting manual testing by 30%.",
        "Built dashboards and growth experiments that contributed to 20% SMB revenue growth."
      ],
      stack: ["analytics", "data pipelines"],
      domains: ["efficient_ai"],
      links: [{ label: "Zoca", href: "https://www.zoca.ai/" }]
    },
    {
      company: "EliteFit.AI",
      role: "Data Scientist Intern",
      period: "Aug 2022 - Jun 2023",
      location: "Singapore",
      imageUrl: "/work/elitefit-vision.svg",
      imageAlt: "Illustration of pose normalization and optical-flow pipeline for EliteFit",
      impactBullets: [
        "Built vision normalization and frame-alignment logic to handle camera-angle variance before inference.",
        "Implemented optical-flow frame detection robust to 25 degrees pan/zoom variation (F1: 0.98).",
        "Engineered body-part weighted features to improve real-time similarity scoring."
      ],
      stack: ["computer vision", "ML pipelines"],
      domains: ["robotics_perception", "efficient_ai"],
      links: [{ label: "EliteFit.AI", href: "https://elitefit.ai/" }]
    }
  ],
  projects: [
    {
      name: "Pico LLM: 100M Pretraining + RL CoT",
      oneLiner: "Built and pretrained a 100M-parameter LLM with RL-based CoT reasoning experiments.",
      details: "Designed compact training and evaluation loops for stable reasoning performance.",
      chips: ["LLM pretraining", "RL reasoning"],
      domains: ["theory", "llm_agents", "efficient_ai"],
      imageUrl: "https://opengraph.githubassets.com/1/anushreebhat2001/pico-llm",
      links: [
        { label: "GitHub Repo", href: "https://github.com/anushreebhat2001/pico-llm" },
        { label: "GitHub Profile", href: "https://github.com/utxg0el" }
      ]
    },
    {
      name: "AI4CE Robotics Perception Layer",
      oneLiner:
        "Built a perception layer for robotics on the Apple EgoDex dataset using CoTracker, FoundationPose, SAM2, Depth Anything, and HAMER.",
      details: "Integrated foundation models for embodied object and hand understanding.",
      chips: ["robotics perception", "foundation models"],
      domains: ["robotics_perception", "efficient_ai"],
      imageUrl: "https://opengraph.githubassets.com/1/utxg0el/egodexrobotics",
      links: [{ label: "GitHub Repo", href: "https://github.com/utxg0el/egodexrobotics" }]
    },
    {
      name: "Balanced Spiking Networks for Predictive Coding (Ongoing)",
      oneLiner: "Building a novel spiking-network approach for predictive coding with Max Kanwal at Stanford.",
      details: "Extending balanced spiking-network ideas for biologically plausible error propagation.",
      chips: ["spiking networks", "predictive coding"],
      domains: ["theory", "efficient_ai"],
      imageUrl: "https://opengraph.githubassets.com/1/utxg0el/balanced-spiking-networks-pc",
      links: [
        { label: "Project Repo", href: "https://github.com/utxg0el/balanced-spiking-networks-pc" },
        {
          label: "Reference Paper",
          href: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003258"
        }
      ]
    },
    {
      name: "In-class LLM Build (NYU ML coursework)",
      oneLiner: "Built an end-to-end LLM implementation in NYU graduate machine learning coursework.",
      details: "Built in Prof. Matus Telgarsky's class with focus on optimization and training tradeoffs.",
      chips: ["ML systems", "optimization"],
      domains: ["theory", "llm_agents"],
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/16/New_York_University_Seal.svg",
      links: [{ label: "NYU Courant", href: "https://www.courant.nyu.edu/" }]
    }
  ],
  coursework: [
    {
      course: "Quantum Computing (PhD)",
      level: "Graduate",
      instructor: "Prof. Omer Regev",
      term: "NYU Courant - Semester 1 (Fall 2025)"
    },
    {
      course: "Machine Learning",
      level: "Graduate",
      instructor: "Prof. Matus Telgarsky",
      term: "NYU Courant - Semester 1 (Fall 2025)",
      note: "Built an LLM as part of coursework."
    },
    {
      course: "Honors Analysis of Algorithms (PhD)",
      level: "Graduate",
      instructor: "Prof. Subhash Khot",
      term: "NYU Courant - Semester 1 (Fall 2025)"
    },
    {
      course: "Operating Systems",
      level: "Graduate",
      instructor: "NYU Courant",
      term: "NYU Courant - Semester 2 (Spring 2026)"
    },
    {
      course: "Programming Languages",
      level: "Graduate",
      instructor: "NYU Courant",
      term: "NYU Courant - Semester 2 (Spring 2026)"
    },
    {
      course: "AI Accelerators / Efficient AI",
      level: "Graduate",
      instructor: "NYU Courant",
      term: "NYU Courant - Semester 2 (Spring 2026)",
      note: "CUDA + low-rank methods + quantization + KV caching + hardware-aware optimization."
    }
  ]
};
