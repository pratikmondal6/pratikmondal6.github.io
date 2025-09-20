export const siteConfig = {
  name: "Pratik Mondal",
  title: "Java & DevOps Engineer",
  description:
    "Portfolio website of Pratik Mondal, showcasing 4+ years of experience in building enterprise applications and automating deployments with a focus on Java, Spring Boot, CI/CD, and DevOps practices.",
  accentColor: "#1d4ed8", // You can change this to match your branding
  social: {
    email: "pratikmondal6@hotmail.com",
    linkedin: "https://linkedin.com/in/pratikmondal6",
    github: "https://github.com/pratikmondal6",
  },
  aboutMe:
    "Real-world challenge solver who turns complex problems into winning solutions, demonstrated by 2 Smart Farming Hackathon victories organized by Fraunhofer IESE. Java & DevOps Engineer with 4+ years building production systems using Spring Boot, GitLab CI/CD, and Docker. I've scaled applications to 100K+ users and automated pipelines that cut deployment time by 10%. Currently advancing research work while completing my Master's degree.",
  skills: [
    "Java", "Spring Boot", "GitLab CI/CD", "Jenkins", "Docker", "Kubernetes", 
    "Python", "JavaScript", "TypeScript", "ReactJS", "Angular", "MongoDB", 
    "PostgreSQL", "REST API", "Microservices", "AWS S3", "MinIO"
  ],
  skillsAndExpertise: {
    programmingLanguages: [
      "Java", "Python", "JavaScript", "TypeScript", "C++", "Groovy",
    ],
    frameworks: [
      "Spring Boot", "ReactJS", "Angular", "Grails", "Junit", "Mockito",
    ],
    backendAPIs: [
      "Microservices", "REST API", "Spring Security", "Spring Batch", "Hibernate",
      "JPA", "JBoss", "JDBC", "Servlets", "Tomcat",
    ],
    devOps: [
      "GitLab CI/CD", "Jenkins", "Docker", "Harbor", "ArgoCD", "Rancher",
      "SonarQube", "AWS S3", "MinIO", "RabbitMQ", "Kubernetes",
    ],
    databases: [
      "MySQL", "PostgreSQL", "MongoDB", "Firebase",
    ],
    frontend: [
      "Bootstrap 5", "CSS3", "HTML5",
    ],
    tools: [
      "Git", "GitHub", "Jira", "Maven", "Gradle", "Postman", "Linux", "Matlab",
    ],
    machineLearning: [
      "NumPy", "scikit-learn", "Jupyter Notebook",
    ],
    methodologies: [
      "Agile (Scrum, Kanban)", "OOP", "SDLC", "Data Structures & Algorithms",
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
        "Developed an AI-powered IoT system with Node.js + ReactJS for automated seeding, irrigation, and soil monitoring.",
      link: "https://github.com/pratikmondal6/Farmbot-Digital-Agriculture",
      skills: ["Node.js", "ReactJS", "IoT"],
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
      company: "Fraunhofer IEE",
      title: "Research Assistant – Java & DevOps Engineer",
      dateRange: "Jul 2024 – Present",
      bullets: [
        "Migrated Jenkins pipelines to GitLab CI/CD, reducing build/release time by 10%.",
        "Automated MongoDB 7 backups to MinIO/S3 with two-tier disaster recovery, reducing runtime by 15%.",
        "Built a REST API with Spring Boot + JPA to expose metadata from MongoDB backups, reducing query time by 12%.",
      ],
    },
    {
      company: "Greenable GmbH",
      title: "Full-Stack Software Engineer",
      dateRange: "Oct 2023 – Apr 2024",
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
