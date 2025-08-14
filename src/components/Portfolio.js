import { FaGithub } from "react-icons/fa";
import { Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Pratik Mondal</h1>
        <p className="text-sm text-gray-500">+49 15754255758 • pratikmondal6@hotmail.com • Kaiserslautern, Germany</p>
        <p className="text-lg text-gray-600">
          DevOps Engineer @ Fraunhofer IEE | Spring Boot • React • DevOps | 4+ Yrs Experience
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/pratikmondal6" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/pratikmondal6" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Two-column layout: About Me | Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* About Me */}
        <div className="p-2">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-sm text-gray-700">
            I'm a full-stack and DevOps engineer with over 4 years of experience, including 2 years in Germany. I specialize in Java Spring Boot, scalable backend systems, cloud deployments, CI/CD automation, and data integrity using MongoDB and Docker. I’m currently pursuing a Master’s in Informatics at RPTU Kaiserslautern-Landau.
          </p>
        </div>

        {/* Skills */}
        <div className="p-2">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li><span className="font-medium text-gray-600">Languages:</span> Java, Python, JavaScript, TypeScript, Groovy</li>
            <li><span className="font-medium text-gray-600">Frameworks:</span> Spring Boot, ReactJS, AngularJS, Grails, jQuery</li>
            <li><span className="font-medium text-gray-600">Backend:</span> REST API, Spring Security, Microservices, Kafka, JPA, Hibernate, JDBC, Tomcat</li>
            <li><span className="font-medium text-gray-600">DevOps:</span> Docker, GitLab CI/CD, Jenkins, Maven, Gradle, MinIO, S3, RabbitMQ, Linux</li>
            <li><span className="font-medium text-gray-600">Databases & Storage:</span> MongoDB, MySQL, PostgreSQL, Firebase, GridFS</li>
            <li><span className="font-medium text-gray-600">Machine Learning:</span> NumPy, Scikit-learn, Matplotlib, Jupyter Notebook</li>
            <li><span className="font-medium text-gray-600">Concepts & Extras:</span> Agile (Scrum), SDLC, OOP, Data Structures & Algorithms</li>
          </ul>
        </div>
      </div>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold">Research Assistant – DevOps Engineer (Werkstudent) – Fraunhofer IEE</h3>
            <p className="text-sm text-gray-500">Jul 2024 – Present | Kassel, Germany</p>
            <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
              <li>Migrated CI/CD pipelines from Jenkins to GitLab CI/CD, reducing build and release times by 30%.</li>
              <li>Automated MongoDB 7 backups with MinIO and S3, reducing backup times by 20% and enabling disaster recovery.</li>
              <li>Implemented TTL indexes for GridFS to reduce storage costs by 40% and enhance performance.</li>
              <li>Developed tools to compare and sync data across MongoDB databases using GridFS and Java.</li>
              <li>Led the migration of the iee-amprion-datamodel to GitLab, improving deployment and collaboration.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Full-Stack Software Engineer (Werkstudent) – greenable GmbH</h3>
            <p className="text-sm text-gray-500">Oct 2023 – Apr 2024 | Kaiserslautern, Germany</p>
            <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
              <li>Developed interfaces with ReactJS, Redux, and TypeScript, boosting decision-making by 15%.</li>
              <li>Integrated carbon emissions calculation with REST APIs and Spring Boot, improving performance by 10%.</li>
              <li>Reduced bugs by 10% via automated testing and CI with JUnit and Jenkins.</li>
              <li>Accelerated development using Agile practices including sprint planning and daily stand-ups.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Software Engineer – Brac IT</h3>
            <p className="text-sm text-gray-500">Jul 2019 – Sep 2022 | Dhaka, Bangladesh</p>
            <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
              <li>Led 5 projects including complex ERP systems using Spring Boot, Microservices, and Apache Kafka.</li>
              <li>Enhanced security by 25% with Spring Security and JPA-based integration.</li>
              <li>Cut deployment time by 10% through optimized code and DevOps tools (Maven, Gradle, Docker).</li>
              <li>Mentored a team of 5 interns, guiding them through project environments and workflows.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <ul className="list-disc ml-5 text-sm space-y-2">
          <li>🏆 Best Team Award – Smart Farming Hackathon 2024 – Fraunhofer IESE</li>
          <li>📄 IESE BaSyx Hackathon 2023 – Participation Certificate</li>
          <li>🎓 Supervised Machine Learning (Coursera) – <a className="text-blue-600 underline" href="https://www.coursera.org/account/accomplishments/verify/623KTREHJYNV" target="_blank" rel="noopener noreferrer">Certificate</a></li>
          <li>💡 HackerRank Java (Intermediate) – <a className="text-blue-600 underline" href="https://www.hackerrank.com/certificates/97291312d232" target="_blank" rel="noopener noreferrer">Certificate</a></li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="text-sm space-y-2">
          <li><strong>M.Sc. Informatics</strong> – RPTU Kaiserslautern-Landau, Germany (2023–Present)</li>
          <li><strong>B.Sc. Computer Science</strong> – AIUB, Bangladesh (2015–2019)</li>
        </ul>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6">
          <div>
            <h3 className="font-bold">AI-Powered-Knowledge-Graph-for-Research-Paper-Analysis</h3>
            <p className="text-sm">This project automates research paper analysis using LLMs, APIs, and Neo4j to extract metadata, citations, and build a structured knowledge graph. It processes papers, generates summaries, maps references, and visualizes relationships between authors, papers, and fields of study.</p>
            <a href="https://github.com/pratikmondal6/AI-Powered-Knowledge-Graph-for-Research-Paper-Analysis" className="text-blue-600 text-sm underline" target="_blank" rel="noopener noreferrer">Visit Project</a>
          </div>
          <div>
            <h3 className="font-bold">FarmBot</h3>
            <p className="text-sm">AI-powered agricultural automation system. Automates seeding, watering, and soil monitoring. Utilized NodeJS, ReactJS, and IoT for precision farming.</p>
            <a href="https://github.com/pratikmondal6/Farmbot-Digital-Agriculture" className="text-blue-600 text-sm underline" target="_blank" rel="noopener noreferrer">Visit Project</a>
          </div>
          <div>
            <h3 className="font-bold">Shongjog</h3>
            <p className="text-sm">Service mapping platform for violence victims. Increased MAUs by 40%.</p>
            <a href="https://shongjog.brac.net" className="text-blue-600 text-sm underline" target="_blank" rel="noopener noreferrer">Visit Project</a>
          </div>
          <div>
            <h3 className="font-bold">VaccinationCitizen</h3>
            <p className="text-sm">Microservice app with API Gateway and service discovery.</p>
            <a href="https://github.com/pratikmondal6/VaccinationCitizen-Microservice" className="text-blue-600 text-sm underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      {/* References */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">References</h2>
        <ul className="text-sm space-y-4">
          <li>
            <p className="font-bold">Vitalij Kasselmann</p>
            <p>Wissenschaftlicher Mitarbeiter, Fraunhofer IEE</p>
            <p className="text-gray-600">pankraz88@googlemail.com</p>
          </li>
          <li>
            <p className="font-bold">Shaiful Islam</p>
            <p>Sr. Technical Project Manager, BJIT</p>
            <p className="text-gray-600">kuvic16@gmail.com</p>
            <a href="https://www.linkedin.com/in/shaifulislampalash/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              LinkedIn Profile
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
