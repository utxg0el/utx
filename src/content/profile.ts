export type LinkItem = {
  label: string;
  href: string;
};

/** Prose that can carry inline links. Rendered by <Rich /> in app/page.tsx. */
export type RichText = (string | LinkItem)[];

export type Figure = {
  src: string;
  alt: string;
  /** Tells the reader what to look at. Without it the figure is decoration. */
  caption: string;
  /**
   * "plot" is line art drawn in black on white and needs its own light surface
   * in dark mode; "photo" already carries its own pixels and gets none.
   */
  kind: "plot" | "photo";
};

export type Paper = {
  title: string;
  authors: string;
  venue: string;
  status: string;
  summary: string;
  figure?: Figure;
  repo?: string;
};

export type ResearchItem = {
  lab: string;
  labUrl?: string;
  advisor: string;
  advisorUrl?: string;
  period: string;
  /** Paragraphs. Written for a reader who has never heard of splicing. */
  body: string[];
  paper?: Paper;
};

export type WorkItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  body: string;
  /** Names an inline diagram component rather than an image asset. */
  diagram?: "alexa";
};

export type ProjectItem = {
  name: string;
  year: string;
  affiliation?: string;
  body: string;
  figure?: Figure;
  repo?: string;
  credit?: string;
};

export type CourseItem = {
  course: string;
  instructor?: string;
  phd?: boolean;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  note?: string;
  /** Coursework belongs to a school, not to the page. */
  coursework?: CourseItem[];
};

export type SiteProfile = {
  name: string;
  location: string;
  standing: string;
  lede: RichText;
  resumeUrl: string;
  avatarUrl: string;
  showPortrait: boolean;
  emails: string[];
  socials: LinkItem[];
  research: ResearchItem[];
  work: WorkItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  availability: string;
};

export const profile: SiteProfile = {
  name: "Utkarsh Goel",
  location: "New York",
  standing: "Master's student, NYU Courant",
  lede: [
    "I'm a master's student in computer science at NYU Courant, advised by ",
    { label: "Professor Oded Regev", href: "https://cims.nyu.edu/~regev/" },
    ". I work on deep learning models that predict RNA splicing (how a cell cuts RNA apart and stitches it back together). Our lab works on interpretability to understand and hypothesize biological mechanisms while also finding blind spots and limitations (then of course, publishing various improvements over SOTA models). Before NYU I spent eighteen months at Amazon, rebuilding Alexa's in-car assistant around an LLM agent-orchestrated stack."
  ],
  resumeUrl: "/Utkarsh_Goel_Resume.pdf",
  avatarUrl: "/profile/utkarsh-mall.png",
  showPortrait: true,
  emails: ["ug2084@nyu.edu", "goelutk2001@gmail.com"],
  socials: [
    { label: "GitHub", href: "https://github.com/utxg0el" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/utkarshgoel2001/" }
  ],
  research: [
    {
      lab: "Regev Lab, NYU Courant",
      advisor: "Oded Regev",
      advisorUrl: "https://cims.nyu.edu/~regev/",
      period: "May 2026 – present",
      body: [
        "A gene is not used end to end. The cell copies it into RNA — a string of four letters — then cuts pieces out of the copy and stitches the rest back together before building a protein, and which pieces are kept changes which protein you get. That cutting and stitching is called splicing, and deep learning models are good at predicting where the cuts fall from the letters alone.",
        "But RNA does not stay a flat string. It folds back on itself, and a fold can bury or expose the exact spots where a cut would be made. A model that only reads letters cannot see this, and it is known to fail in one specific way because of it: on tightly folded sequences it predicts that a piece is kept when the cell in fact cuts it out."
      ],
      paper: {
        title: "Folding It In: Structure-Aware Deep Splicing Models",
        authors: "Utkarsh Goel, Arush Ramteke, Oded Regev",
        venue: "NECB 2026 (New England Computational Biology)",
        status: "Accepted",
        summary:
          "Alongside the letters we gave the model a second input: for each base, how likely it is to be left unpaired — computed by a standard folding program, not measured in a cell. At the same model size it made about 9% fewer errors, 95.8% against 95.4%, and its bias against tightly folded sequences dropped by about half. The part we care about more is whether it is right for the right reasons, so we tested it on mutations that break a fold and then repair it: our model's predictions rise and fall with the lab measurements, while SpliceAI, Pangolin and AlphaGenome miss one or both steps.",
        figure: {
          kind: "plot",
          src: "/research/necb-fig1.png",
          alt:
            "Three panels. Left: a sequence-only model beside our model, which also takes the predicted folding as input. Middle: prediction error plotted against how tightly the sequence folds; our line is flattest. Right: measured and predicted splicing change across a stem loop broken by one mutation and repaired by a second; only our model tracks the measured curve.",
          caption:
            "Left, the two models: ours reads the predicted folding alongside the letters. Middle, error against how tightly a sequence folds — flatter is better, and ours is the blue line. Right, a fold broken by one mutation and repaired by a second; only ours follows the measured values in black."
        },
        repo: "https://github.com/utxg0el/OpenSpliceAI-Structure"
      }
    }
  ],
  work: [
    {
      company: "Amazon — Alexa Automotive",
      role: "Software Development Engineer 1",
      location: "Bengaluru",
      period: "Jan 2024 – Jul 2025",
      body:
        "Alexa's in-car assistant used to run on hand-written rules, so someone had to anticipate every phrasing and every follow-up in advance. I was one of three engineers who rebuilt it as an agent: it reads the car's live sensor data, works out which vehicle APIs to call, and chains them together to finish a request on its own. I wrote the real-time intent handling and the tool-calling layer, plus the Java and Spring Boot services behind it. It started as a hackathon demo and went to production on AWS after Audi, Rivian and Mahindra picked it up; the services I wrote now run on millions of vehicles.",
      diagram: "alexa"
    },
    {
      company: "Zoca",
      role: "Product Analyst, Data Engineering",
      location: "Bengaluru",
      period: "Jul 2023 – Dec 2023",
      body:
        "Built the analytics stack for a sales product on my own: the Python pipelines, the Node.js backend, and the dashboards the growth team made decisions from. Also trained the model that sorted incoming leads by how likely they were to convert, and automated the regression testing."
    },
    {
      company: "EliteFit.AI",
      role: "Machine Learning Engineer Intern",
      location: "Singapore",
      period: "Aug 2022 – Jun 2023",
      body:
        "People film themselves exercising from whatever angle they happen to stand at, which is enough to confuse a model trained on clean video. I built the pipeline that corrects for it — up to about 25 degrees of camera pan and zoom — before the model sees a frame, reaching 0.98 F1 on frame detection across fifteen exercise categories, plus the weighting that decides which body parts matter for which exercise."
    }
  ],
  projects: [
    {
      name: "Adaptive block allocation for diffusion language models",
      year: "2026",
      affiliation: "Efficient AI, NYU Courant",
      body:
        "Diffusion language models write a whole block of text at once instead of one word at a time. A bigger block is faster but comes out worse, and the size is normally fixed in advance. I trained a small network that reads the model's internal state at each block boundary and picks the next size from it. On LLaDA-8B it beats AdaBlock, the rule-based alternative, by 2.8 points on average across GSM8K, MATH and MBPP at the same compute per token.",
      credit: "With two collaborators",
      repo: "https://github.com/utxg0el/adaptive-block-size"
    },
    {
      name: "Robotics perception layer",
      year: "2026",
      affiliation: "AI4CE Lab, NYU",
      body:
        "Robotics researchers want to know what the hands and objects in a video are actually doing, which normally means running five separate models and reconciling them by hand. I stitched those five — tracking, object pose, segmentation, depth and hand reconstruction — into a single pass over Apple's EgoDex footage (30 fps video with depth).",
      figure: {
        kind: "photo",
        src: "/research/egodex-perception.jpg",
        alt:
          "A frame from the pipeline: a first-person view of two hands holding a cup with the hand skeletons traced in green, a depth map of the same frame beside it, and a readout of end-effector height and tracking confidence.",
        caption:
          "One frame, all five models at once: hand skeletons traced on the camera view, the depth estimate beside it, and the end-effector position read off both."
      },
      repo: "https://github.com/utxg0el/egodexrobotics"
    },
    {
      name: "LLM pretraining with RL chain-of-thought",
      year: "2025",
      affiliation: "Machine Learning, NYU Courant",
      body:
        "A 100M-parameter language model built and trained from scratch in PyTorch — attention coded from the equations rather than imported from a library — then fine-tuned with reinforcement learning so it works problems out step by step instead of guessing an answer.",
      repo: "https://github.com/anushreebhat2001/pico-llm"
    }
  ],
  education: [
    {
      school: "New York University, Courant Institute",
      degree: "M.S. Computer Science",
      period: "Sep 2025 – May 2027",
      note: "Violet Internship and Research Award, 2026",
      coursework: [
        { course: "Deep Learning", instructor: "Yann LeCun" },
        {
          course: "Mathematical Tools for Computational Neuroscience",
          instructor: "Eero Simoncelli",
          phd: true
        },
        { course: "Quantum Computing", instructor: "Oded Regev", phd: true },
        { course: "Honors Analysis of Algorithms", instructor: "Subhash Khot", phd: true },
        { course: "Machine Learning", instructor: "Matus Telgarsky" },
        { course: "AI Accelerators / Efficient AI" },
        { course: "Operating Systems" },
        { course: "Programming Languages" }
      ]
    },
    {
      school: "Manipal Institute of Technology",
      degree: "B.Tech, Computer and Communication Engineering",
      period: "Jul 2019 – May 2023"
    }
  ],
  availability: "Looking for research and engineering roles from mid-2027."
};
