export type ProjectDomain = "theory" | "llm_agents" | "efficient_ai" | "robotics_perception";

export type SectionNavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type WorkItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  impactBullets: string[];
  stack: string[];
};

export type ProjectItem = {
  name: string;
  oneLiner: string;
  details: string;
  chips: string[];
  domains: ProjectDomain[];
  links?: { label: string; href: string }[];
};

export type CourseItem = {
  course: string;
  level: string;
  instructor: string;
  term: string;
};

export type CultureItem = {
  category: string;
  items: string[];
};

export type SiteProfile = {
  name: string;
  title: string;
  location: string;
  summary: string;
  resumeUrl: string;
  sections: SectionNavItem[];
  socials: SocialLink[];
  work: WorkItem[];
  projects: ProjectItem[];
  coursework: CourseItem[];
  culture: CultureItem[];
};

export const domainLabel: Record<ProjectDomain, string> = {
  theory: "Theory",
  llm_agents: "LLM Agents",
  efficient_ai: "Efficient AI",
  robotics_perception: "Robotics Perception"
};

export const profile: SiteProfile = {
  name: "Utkarsh Goel",
  title: "Applied AI/ML Engineer",
  location: "New York, NY",
  summary:
    "MS CS candidate at NYU Courant building production AI systems across LLM agents, efficient inference, and robotics perception.",
  resumeUrl: "/Utkarsh_CV.pdf",
  sections: [
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "culture", label: "Culture" },
    { id: "contact", label: "Contact" }
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/utxg0el" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/utkarshgoel2001/" },
    { label: "Email", href: "mailto:utkarsh@example.com" }
  ],
  work: [
    {
      company: "Amazon Smart Vehicles",
      role: "Software Development Engineer",
      period: "2023 - 2024",
      location: "Bengaluru, India",
      impactBullets: [
        "Part of the first 3-engineer team that shifted Alexa vehicle experiences from rigid FST commands to a dynamic LLM-agent architecture.",
        "Built orchestration patterns that combined real-time input understanding with API/tool execution for autonomous multi-step task handling.",
        "Converted hackathon traction into production direction after interest from OEM partners including Audi, Rivian, and Mahindra."
      ],
      stack: ["LLM agents", "tool orchestration", "distributed services", "production infra"]
    },
    {
      company: "EliteFit.AI",
      role: "Machine Learning Engineer",
      period: "2022 - 2023",
      location: "Singapore",
      impactBullets: [
        "Integrated camera-normalization transforms and optical-flow frame detection into a vision pipeline robust to pan/zoom variation.",
        "Handled up to 25 degrees of camera variance and achieved F1 score of 0.98 in virtual trainer movement evaluation.",
        "Built body-part weighting features from open datasets to improve statistical similarity scoring and real-time feedback quality."
      ],
      stack: ["computer vision", "optical flow", "feature engineering", "ML pipelines"]
    }
  ],
  projects: [
    {
      name: "LLM Pretraining + RL CoT Reasoning (100M)",
      oneLiner: "Built and pretrained a 100M-parameter LLM with RL-based chain-of-thought reasoning experiments.",
      details:
        "Designed training and evaluation loops for compact-model reasoning while balancing inference quality and efficiency constraints.",
      chips: ["pretraining", "RL", "reasoning", "evaluation"],
      domains: ["theory", "llm_agents", "efficient_ai"]
    },
    {
      name: "Robotics Perception Layer @ AI4CE Lab, NYU",
      oneLiner:
        "Built a perception stack on the Apple EgoDex dataset using CoTracker, FoundationPose, SAM2, Depth Anything, and HAMER.",
      details:
        "Unified open foundation models into a practical pipeline for object/hand understanding in embodied settings.",
      chips: ["SAM2", "Depth Anything", "FoundationPose", "CoTracker", "HAMER"],
      domains: ["robotics_perception", "efficient_ai"]
    },
    {
      name: "In-Class LLM Build @ NYU",
      oneLiner: "Implemented an end-to-end LLM build in advanced ML coursework.",
      details:
        "Focused on model fundamentals, optimization tradeoffs, and practical training decisions under real constraints.",
      chips: ["ML systems", "model training", "optimization"],
      domains: ["theory", "llm_agents"]
    }
  ],
  coursework: [
    {
      course: "Quantum Computing (PhD level)",
      level: "Graduate",
      instructor: "Prof. Omer Regev",
      term: "NYU Courant - Semester 1"
    },
    {
      course: "Machine Learning",
      level: "Graduate",
      instructor: "Prof. Matus Telgarsky",
      term: "NYU Courant - Semester 1"
    },
    {
      course: "Honors Algorithms (PhD level)",
      level: "Graduate",
      instructor: "Prof. Subhash Khot",
      term: "NYU Courant - Semester 1"
    },
    {
      course: "Operating Systems, Programming Languages, Efficient AI / Accelerators",
      level: "Graduate",
      instructor: "Prof. Sai Zhang (Efficient AI)",
      term: "NYU Courant - Semester 2"
    }
  ],
  culture: [
    { category: "Books", items: ["Fyodor Dostoevsky", "Science philosophy"] },
    { category: "Cinema", items: ["Woody Allen", "Character-driven films"] },
    { category: "Podcasts & Ideas", items: ["Carver Mead", "Comedy", "Jordan Peterson"] }
  ]
};
