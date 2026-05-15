// lib/resumeData.ts

export type Experience = {
  company: string;
  role: string;
  location: string;
  duration: string;
  bullets: string[];
};

export type ResumeData = {
  basics: {
    name: string;
    label: string;
    subLabel: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    summary: string;
    impactHighlights: {
      id: string;
      title: string;
      metric: string;
      description: string;
    }[];
  };
  experience: Experience[];
  skills: {
    technical_stack: string[];
    top_skills: string[];
    languages: string[];
  };
  education: {
    institution: string;
    degree: string;
    duration: string;
  }[];
  certifications: string[];
};

export const resumeData: ResumeData = {
  basics: {
    name: "Indraneel Mukherjee",
    label: "Electronic & Communication Engineer (MSc)",
    subLabel: "AI-augmented RF & Embedded Systems | Architecting intelligent wireless infrastructure for 5G, mmWave & industrial IoT",
    email: "indraneelm99@gmail.com",
    phone: "+447741745998",
    location: "Nottingham, UK",
    linkedin: "https://www.linkedin.com/in/im-indraneel",
    summary: "The engineers who will define 5G, 6G, and industrial IoT aren't just hardware specialists — they're the ones who know how to make AI and silicon work together. I'm Indraneel Mukherjee — an electronic and communication engineer with an MSc from the University of Nottingham (2025), specialising in AI-augmented embedded systems, RF/antenna design, and intelligent industrial automation.",
    impactHighlights: [
      {
        id: "01",
        title: "Industrial Automation",
        metric: "90%",
        description: "Accelerated plant throughput by 90% by architecting end-to-end PLC workflows integrated with AI monitoring at Amossys Consulting."
      },
      {
        id: "02",
        title: "Safety Engineering",
        metric: "70%",
        description: "Cut workplace hazard incidents by 70% by designing AI-powered real-time reporting dashboards at Amossys Consulting."
      },
      {
        id: "03",
        title: "EV Systems",
        metric: "BMS+",
        description: "Improved EV battery energy tracking accuracy via custom autonomous monitoring PCB with ST Microcontroller chipsets at Aryabhatta Motors."
      },
      {
        id: "04",
        title: "Operational Resilience",
        metric: "Top Tier",
        description: "Achieved 'Top of the Tree' performance recognition for exceptional service under high-pressure, high-disruption conditions."
      }
    ]
  },
  experience: [
    {
      company: "East Midlands Railway",
      role: "Customer Service Officer",
      location: "Derbyshire",
      duration: "November 2025 - Present (7 months)",
      bullets: [
        "Maintained a zero-escalation safety dispatch record across high-volume daily operations serving hundreds of passengers per shift.",
        "Reduced passenger distress during service disruptions through clear, empathetic real-time communication as an EMR ambassador.",
        "Protected vulnerable passenger welfare consistently across all shifts, measured by zero safeguarding incidents under my watch."
      ]
    },
    {
      company: "Nottingham Venues",
      role: "C & B Assistant",
      location: "Nottingham",
      duration: "August 2024 - November 2025 (1 year 4 months)",
      bullets: [
        "Earned Top of the Tree performance nomination benchmarked against team-wide service KPIs in a high-volume hospitality environment.",
        "Delivered zero-error concurrent event setups by implementing personal pre-event checklists and cross-team briefing routines."
      ]
    },
    {
      company: "Amossys Consulting Services Pvt Ltd",
      role: "Automation Service Engineer",
      location: "Bengaluru",
      duration: "July 2022 - July 2023 (1 year 1 month)",
      bullets: [
        "Boosted plant throughput by 90% by architecting and deploying full-stack PLC automation workflows integrated with AI-driven monitoring.",
        "Reduced workplace hazard incidents by 70% by building AI-powered real-time safety dashboards that predicted risk events.",
        "Improved cross-functional operational efficiency by 20% by re-engineering inter-team data pipelines and automating workflow handoffs."
      ]
    },
    {
      company: "ARYABHATTA MOTORS PRIVATE LIMITED",
      role: "Research And Development Intern",
      location: "Bengaluru",
      duration: "January 2022 - May 2022 (5 months)",
      bullets: [
        "Advanced EV battery energy-tracking accuracy by designing a custom autonomous monitoring PCB built on ST Microcontroller chipsets.",
        "Enhanced EV battery safety and lifecycle reliability by developing a custom BMS interface that automated anomaly detection."
      ]
    },
    {
      company: "Cummins India",
      role: "Summer Intern",
      location: "Jamshedpur, Jharkhand, India",
      duration: "July 2021 - August 2021 (2 months)",
      bullets: [
        "Developed an autonomous carbon monitoring system for diesel engines integrating PM sensors to detect and control particulate emissions.",
        "Improved emission filtering efficiency to align with environmental compliance goals.",
        "Demonstrated capability to blend electronics and sustainability solutions in real-world applications."
      ]
    }
  ],
  skills: {
    technical_stack: [
      "Antenna Design", "RF Optimisation", "Embedded Systems", "FPGA Development", "Signal Processing", 
      "AI-Human Collaboration", "5G/6G", "mmWave", "Industrial IoT", "PLC Programming", "TIA Portal", 
      "Sensor Fusion", "Data Acquisition", "PCB Design", "Battery Management Systems", "MATLAB", 
      "Simulink", "Python", "C/C++", "Embedded C", "Xilinx Vivado", "CST Studio", "HFSS"
    ],
    top_skills: ["Transferable Skills", "Customer Service Representatives", "Communication Equipment"],
    languages: ["Hindi (Native/Bilingual)", "English (Professional)", "Bengali (Native/Bilingual)"]
  },
  education: [
    {
      institution: "University of Nottingham",
      degree: "Master's degree, Electronics Communication and Computer Engineering",
      duration: "2023 - 2025"
    },
    {
      institution: "Dayananda Sagar University",
      degree: "Bachelor of Technology - BTech, Electronics and Communications Engineering",
      duration: "2018 - 2022"
    }
  ],
  certifications: [
    "OBJECT ORIENTED PROGRAMING",
    "Introduction to Programming Using Python",
    "Computer Programmer/Operator/Systems Engineer",
    "Introduction to Packet Tracer"
  ]
};