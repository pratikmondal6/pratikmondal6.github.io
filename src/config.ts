export const siteConfig = {
  name: "Pratik Mondal",
  title: "Java & DevOps Engineer",
  description:
    "Portfolio website of Pratik Mondal, showcasing 5+ years of experience in building enterprise applications and automating deployments with a focus on Java, Spring Boot, CI/CD, and DevOps practices.",
  accentColor: "#1d4ed8", // You can change this to match your branding
  social: {
    email: "pratikmondal6@hotmail.com",
    linkedin: "https://linkedin.com/in/pratikmondal6",
    github: "https://github.com/pratikmondal6",
  },
  aboutMe:
    `<p>I’m a <strong>Software Engineer</strong> with <strong>5+ years of professional experience</strong>, focused on <strong>Java backend development and DevOps</strong>. I work mainly with <strong>Java, Spring Boot, microservices, Docker, Kubernetes, CI/CD, Linux, and distributed systems</strong>.</p>`,
  skills: [
    "Java", "Spring Boot", "Microservices", "DevOps", "CI/CD", "Docker", "Kubernetes",
    "REST APIs", "GitLab CI/CD", "Jenkins", "Spring Security", "PostgreSQL", "MongoDB",
    "Apache Kafka", "Spring Cloud", "Event-Driven Architecture", "API Gateways", "Git", "Linux", "Maven"
  ],
  skillsAndExpertise: {
    programmingLanguages: [
      "Java", "Python", "C++", "TypeScript", "JavaScript", "Groovy",
    ],
    frameworks: [
      "Spring Boot", "Spring Cloud", "Spring Security", "Spring Batch", "JPA", "Hibernate", "JDBC", "Grails",
    ],
    backendAPIs: [
      "Microservices", "REST APIs", "Event-Driven Architecture", "API Gateways", "Apache Kafka", "RabbitMQ",
    ],
    devOps: [
      "Docker", "Kubernetes", "GitLab CI/CD", "Jenkins", "Argo CD", "Rancher", "Harbor", "SonarQube", "Microsoft Azure", "AWS S3", "MinIO", "Linux",
    ],
    databases: [
      "PostgreSQL", "MongoDB", "MySQL", "Neo4j", "Firebase",
    ],
    frontend: [
      "React", "Angular", "Qt/QML", "Bootstrap 5", "HTML5", "CSS3",
    ],
    tools: [
      "Git", "GitHub", "Maven", "Gradle", "Postman", "JUnit", "Mockito",
    ],
    machineLearning: [
      "LLM", "Machine Learning", "NumPy", "scikit-learn", "Jupyter Notebook", "Data Analysis", "Neo4j",
    ],
    methodologies: [
      "Agile", "Scrum", "Kanban", "SDLC", "OOP", "Jira", "Project Management",
    ]
  },
  achievements: [
    "2nd Position – Smart Farming Hackathon 2025 - Innovationsagentur Rheinland-Pfalz",
    "Best Team Award - Smart Farming Hackathon 2024 – Fraunhofer IESE",
    "Project Manager at Porsche Informatik Collaboration with RPTU, Fraunhofer IESE & Porsche",
    "Java Problem Solver - HackerRank Java (Intermediate)",
  ],
  projects: [
    {
      name: "AI-Powered Knowledge Graph for Research Papers",
      description:
        "Built an LLM + Neo4j system to analyze 1000 research papers, extracting entities and visualizing knowledge graphs.",
      link: "https://github.com/pratikmondal6/AI-Powered-Knowledge-Graph-for-Research-Paper-Analysis",
      skills: ["Python", "Neo4j", "Machine Learning"],
    },
    {
      name: "Farmbot – Digital Agriculture",
      description:
        "Developed an IoT system with Node.js and React for automated seeding, irrigation, and soil monitoring.",
      link: "https://github.com/pratikmondal6/Farmbot-Digital-Agriculture",
      skills: ["Node.js", "React", "IoT"],
    },
    {
      name: "Shongjog – Emergency Service Mapping Platform",
      description:
        "Delivered a Java/Spring + Angular platform for emergency services, increasing MAU (Monthly Active Users) by 40%.",
      link: "https://shongjog.brac.net",
      skills: ["Java", "Spring", "Angular"],
    },
    {
      name: "Smart Farming Compliance Tool",
      description:
        "Developed a compliance solution that reduces office work by 50% with one-click checks, integrating GeoBox and FMIS for field-specific guidance on fertilization, crop protection, and environmental regulations.",
      link: "https://github.com/pratikmondal6/farm-compliance-tool",
      skills: ["Java", "Spring Boot", "GeoBox", "FMIS"],
    },
  ],
  experience: [
    {
      company: "Fraunhofer IESE",
      title: "Student Assistant – Predictive Autonomy Lab",
      dateRange: "Jul 2026 – Present",
      logo: "/logos/fraunhofer-iee-logo.jpg",
      bullets: [
        "Traced and validated real-time vehicle signals from the dynamics model to digital instrument clusters through configuration debugging, signal mapping, and simulator/lab testing.",
        "Developed Qt/QML-based HMI displays for real-time vehicle data visualization across multiple automotive display units.",
        "Developed driving simulation scenarios and supporting software in Python and C++ for autonomous-driving research.",
      ],
    },
    {
      company: "Fraunhofer IEE",
      title: "Research Assistant – Java & DevOps Engineer",
      dateRange: "Jul 2024 – Apr 2026",
      logo: "/logos/fraunhofer-iee-logo.jpg",
      bullets: [
        "Migrated Jenkins pipelines to GitLab CI/CD, reducing build/release time by 10%.",
        "Automated MongoDB 7 backups to MinIO/S3 with two-tier disaster recovery, reducing runtime by 15%.",
        "Built a REST API with Spring Boot + JPA to expose metadata from MongoDB backups, reducing query time by 12%.",
      ],
    },
    {
      company: "Greenable GmbH",
      title: "Software Engineer – Full-Stack",
      dateRange: "Oct 2023 – Apr 2024",
      logo: "/logos/greenable-logo.jpg",
      bullets: [
        "Designed React/Redux + TypeScript interfaces, improving decision workflows by 15%.",
        "Implemented carbon-emission calculation module (Spring Boot, JDBC, REST), improving performance by 10%.",
        "Integrated external APIs into Spring Boot services, boosting interoperability by 20%.",
      ],
    },
    {
      company: "Brac IT",
      title: "Software Engineer",
      dateRange: "Jul 2019 – Sep 2022",
      logo: "/logos/brac-it-logo.jpg",
      bullets: [
        "Delivered 5 enterprise-grade production systems (ERP, microservices, API Gateway, Kafka) serving 100K+ users.",
        "Optimized deployments using Maven/Gradle and Docker, cutting release time by 10%.",
        "Mentored 5 interns, establishing task ownership practices and structured code reviews, improving delivery quality by 20%.",
      ],
    },
  ],
  education: [
    {
      school: "RPTU Kaiserslautern-Landau, Kaiserslautern, Germany",
      degree: "Master of Science in Informatics",
      dateRange: "Oct 2023 – Present",
      achievements: [
        "Specializations: Software Engineering, Intelligence Systems",
      ],
    },
    {
      school: "American International University-Bangladesh, Dhaka, Bangladesh",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "Aug 2015 – Dec 2019",
      achievements: [
        "GPA: 1.7 (German Scale)",
        "Coursework: Data Structures & Algorithms, Object-oriented programming, Software Engineering, Artificial Intelligence",
      ],
    },
  ],
};
