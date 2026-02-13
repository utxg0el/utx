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
  domains: ProjectDomain[];
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
  gpa: string;
  note?: string;
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
  education: EducationInfo;
  skills: SkillCategory[];
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
    "MS CS candidate at NYU Courant (Semester 2) focused on LLM agents, efficient AI systems, and robotics perception with production and research execution.",
  resumeUrl: "/Utkarsh_CV.pdf",
  sections: [
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "culture", label: "Culture" },
    { id: "contact", label: "Contact" }
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/utxg0el" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/utkarshgoel2001/" }
  ],
  education: {
    school: "New York University Courant Institute of Mathematical Sciences",
    degree: "MS in Computer Science",
    status: "Semester 2",
    gpa: "3.5+ (Semester 1)",
    note: "Advanced graduate coursework spanning theory, machine learning, and systems."
  },
  skills: [
    {
      category: "AI/ML",
      items: ["LLM pretraining", "RL for reasoning", "agentic orchestration", "statistical ML"]
    },
    {
      category: "Efficient AI",
      items: ["CUDA", "quantization", "low-rank optimization", "KV caching", "inference optimization"]
    },
    {
      category: "Vision/Robotics",
      items: ["CoTracker", "FoundationPose", "SAM2", "Depth Anything", "HAMER", "optical flow"]
    },
    {
      category: "Systems",
      items: ["production APIs", "tool orchestration", "distributed systems fundamentals"]
    }
  ],
  work: [
    {
      company: "Amazon Smart Vehicles",
      role: "Software Development Engineer",
      period: "2023 - 2024",
      location: "Bengaluru, India",
      impactBullets: [
        "Part of the first 3-engineer team that migrated Alexa Smart Vehicles from rigid FST command handling to a dynamic LLM-based architecture.",
        "Built agent behavior for real-time input understanding plus API/tool orchestration, effectively giving the assistant practical autonomy for multi-step tasks.",
        "Helped take the concept from hackathon demo to productionized direction after interest from OEMs including Audi, Rivian, and Mahindra."
      ],
      stack: ["LLM agents", "tool orchestration", "distributed services", "production infra"],
      domains: ["llm_agents", "efficient_ai"]
    },
    {
      company: "EliteFit.AI",
      role: "Machine Learning Engineer",
      period: "2022 - 2023",
      location: "Singapore",
      impactBullets: [
        "Integrated a normalization transform stage into the vision pipeline so model input stayed robust across varying camera angles before inference.",
        "Built optical-flow-based frame detection handling up to 25 degrees of pan/zoom variation with F1 score of 0.98.",
        "Developed a body-part weighting repository from open datasets to dynamically feature-engineer parameters for stronger similarity scoring and feedback quality."
      ],
      stack: ["computer vision", "optical flow", "feature engineering", "ML pipelines"],
      domains: ["robotics_perception", "efficient_ai"]
    }
  ],
  projects: [
    {
      name: "LLM Pretraining + RL CoT Reasoning (100M params)",
      oneLiner: "Built and pretrained a 100M-parameter LLM and ran RL-based chain-of-thought reasoning experiments.",
      details:
        "Designed training and evaluation loops for compact-model reasoning while balancing quality, stability, and efficiency constraints.",
      chips: ["pretraining", "RL", "reasoning", "evaluation"],
      domains: ["theory", "llm_agents", "efficient_ai"]
    },
    {
      name: "Robotics Perception Layer @ AI4CE Lab, NYU",
      oneLiner:
        "Built a perception stack on the Apple EgoDex dataset using CoTracker, FoundationPose, SAM2, Depth Anything, and HAMER.",
      details:
        "Integrated multiple foundation models into one practical robotics perception layer for embodied object and hand understanding.",
      chips: ["SAM2", "Depth Anything", "FoundationPose", "CoTracker", "HAMER"],
      domains: ["robotics_perception", "efficient_ai"]
    },
    {
      name: "In-class LLM Build (NYU ML coursework)",
      oneLiner: "Built an end-to-end LLM implementation in NYU graduate machine learning coursework.",
      details:
        "Covered model foundations, optimization tradeoffs, and practical training decisions under realistic constraints.",
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
      term: "NYU Courant - Semester 1",
      note: "Built an LLM as part of coursework."
    },
    {
      course: "Honors Algorithms (PhD level)",
      level: "Graduate",
      instructor: "Prof. Subhash Khot",
      term: "NYU Courant - Semester 1"
    },
    {
      course: "Operating Systems, Programming Languages, Efficient AI / AI Accelerators",
      level: "Graduate",
      instructor: "Prof. Sai Zhang (Efficient AI)",
      term: "NYU Courant - Semester 2",
      note: "CUDA + low-rank methods + quantization + KV caching + hardware-aware optimization."
    }
  ],
  culture: [
    { category: "Books", items: ["Dostoevsky", "Camus", "Philosophy of science"] },
    { category: "Cinema", items: ["Character-driven films", "Moral tension", "Dry dialogue"] },
    { category: "Ideas", items: ["First principles", "Hardware futures", "Deadpan comedy"] }
  ]
};
