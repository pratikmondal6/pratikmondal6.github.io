import {
    Mail, Phone, MapPin, Github, Linkedin, Link as LinkIcon,
    Briefcase, GraduationCap, Award, Languages
} from "lucide-react";

// One-file React component you can drop into a Vite + Tailwind project.
export default function CV() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 antialiased print:bg-white">
            {/* Top bar actions (hidden on print) */}
            <div className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b print:hidden">
                <div className="mx-auto max-w-5xl px-5 py-3 flex items-center justify-between">
                    <span className="text-sm text-gray-600">Pratik Mondal — CV</span>
                    <div className="flex gap-2">
                        {/* Removed the Print / Save PDF button */}
                        <a
                            href="#portfolio"
                            className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-100"
                        >
                            <LinkIcon className="h-4 w-4" /> Portfolio
                        </a>
                    </div>
                </div>
            </div>

            {/* Page */}
            <div className="mx-auto max-w-5xl print:max-w-[900px] px-5 py-8 print:py-0">
                {/* Header */}
                <header className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-6 md:p-8 print:shadow-none print:ring-0">
                    {/* was: md:flex md:items-center md:justify-between md:gap-8 */}
                    <div className="md:flex md:items-start md:gap-8">
                        {/* LEFT: name + tagline */}
                        <div className="md:flex-1 min-w-0">
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Pratik Mondal</h1>
                            <p className="mt-1 text-[15px] text-gray-600 leading-snug">
                                Java & DevOps Engineer · 5+ years (2+ in Germany)
                                <br />
                                Spring Boot, React, DevOps (CI/CD, Docker, ArgoCD)
                            </p>
                        </div>

                        {/* RIGHT: contacts — gets exactly half width on md+ */}
                        <ul className="md:flex-1 min-w-0 mt-4 md:mt-0 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /><a href="tel:+4915754255758" className="hover:underline">+49 15754255758</a></li>
                            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:pratikmondal6@hotmail.com" className="hover:underline">pratikmondal6@hotmail.com</a></li>
                            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>Kaiserslautern, Germany</span></li>
                            <li className="flex items-center gap-2"><Github className="h-4 w-4" /><a href="https://github.com/pratikmondal6" target="_blank" rel="noreferrer" className="hover:underline">github.com/pratikmondal6</a></li>
                            <li className="flex items-center gap-2"><Linkedin className="h-4 w-4" /><a href="https://linkedin.com/in/pratikmondal6" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/pratikmondal6</a></li>
                        </ul>
                    </div>
                </header>

                {/* Body: two columns on screen; single column on print */}
                <div className="mt-6 grid lg:grid-cols-[1fr_320px] gap-6 print:grid-cols-1 print:gap-4">
                    {/* Main column */}
                    <div className="space-y-6 print:space-y-4">
                        {/* Profile */}
                        <Section title="Profile">
                            <p className="text-[15px] leading-7 text-gray-700">
                                Java & DevOps Engineer with hands-on experience in building enterprise applications and automating deployments. Strong with
                                Java/Spring Boot, GitLab CI/CD, Docker, and MongoDB. Comfortable with S3-compatible storage (AWS S3/MinIO), ArgoCD,
                                and Rancher. Solid foundation in microservices, data engineering, and Agile delivery.
                            </p>
                        </Section>

                        {/* PRINT-ONLY copy of Technical Skills placed right after Profile */}
                        <div className="hidden print:block">
                            <Card title="Technical Skills">
                                <TechSkillsList />
                            </Card>
                        </div>

                        {/* Experience */}
                        <Section title="Experience" icon={<Briefcase className="h-5 w-5" />}>
                            <Experience
                                role="Research Assistant — Java & DevOps Engineer (Werkstudent)"
                                company="Fraunhofer IEE"
                                location="Kassel, Germany"
                                date="Jul 2024 – Present"
                                bullets={[
                                    "Migrated Jenkins pipelines to GitLab CI/CD, reducing build/release time by ~10%.",
                                    "Automated MongoDB 7 backups to MinIO/S3 with two-tier DR; runtime reduced by ~15%.",
                                    "Deployed backup containers via ArgoCD & Rancher (Harbor registry) for cluster reliability.",
                                    "Implemented TTL indexes for GridFS to lower storage costs and improve query performance.",
                                    "Built compare/sync for MongoDB instances (GridFS, Java, GitLab) to increase data integrity.",
                                    "Led Amprion Data Model migration to GitLab CI/CD; improved collaboration and release cadence.",
                                ]}
                            />

                            <Experience
                                role="Full-Stack Software Engineer (Werkstudent)"
                                company="Greenable GmbH"
                                location="Kaiserslautern, Germany"
                                date="Oct 2023 – Apr 2024"
                                bullets={[
                                    "Designed React/Redux + TypeScript interfaces, speeding decisions by ~15%.",
                                    "Built carbon-emission module (Spring Boot, JDBC, REST), +10% perf gains.",
                                    "Improved quality with JUnit & CI, cutting bugs by ~10%.",
                                ]}
                            />

                            <Experience
                                role="Software Engineer"
                                company="Brac IT"
                                location="Dhaka, Bangladesh"
                                date="Jul 2019 – Sep 2022"
                                bullets={[
                                    "Delivered 5 production systems (ERP, microservices, API Gateway, Kafka) for 100K+ users.",
                                    "Hardened auth with Spring Security + JPA/JDBC; incidents down ~25%.",
                                    "Optimized releases using Maven/Gradle & Docker; -10% release time.",
                                    "Mentored 5 interns; instituted ownership & code review practices (↑ delivery quality ~20%).",
                                ]}
                            />
                        </Section>

                        {/* Education */}
                        <Section title="Education" icon={<GraduationCap className="h-5 w-5" />}>
                            <Edu
                                degree="M.Sc. Informatics"
                                school="RPTU Kaiserslautern-Landau, Germany"
                                date="Oct 2023 – Present"
                                details="Specializations: Software Engineering, Intelligent Systems"
                            />
                            <Edu
                                degree="B.Sc. Computer Science"
                                school="American International University-Bangladesh"
                                date="Aug 2015 – Dec 2019"
                                details="GPA: 1.7 (German Scale) · Coursework: DSA, OOP, SE, AI"
                            />
                        </Section>

                        {/* Projects */}
                        <Section id="portfolio" title="Selected Projects">
                            <Project
                                title="AI-Powered Knowledge Graph for Research Papers"
                                desc="LLM + Neo4j system to analyze 1K+ papers, extract entities, and visualize knowledge graphs."
                                link={{ href: "https://github.com/pratikmondal6/AI-Powered-Knowledge-Graph-for-Research-Paper-Analysis", label: "GitHub" }}
                            />
                            <Project
                                title="Farmbot — Digital Agriculture"
                                desc="AI-powered IoT with Node.js + React for seeding, irrigation, and soil monitoring."
                                link={{ href: "https://github.com/pratikmondal6/Farmbot-Digital-Agriculture", label: "GitHub" }}
                            />
                            <Project
                                title="Shongjog — Emergency Service Mapping"
                                desc="Java/Spring + Angular platform for emergency services; boosted MAU by ~40%."
                                link={{ href: "https://shongjog.brac.net", label: "Live" }}
                            />
                        </Section>
                    </div>

                    {/* Sidebar (unchanged on web). Hide Tech Skills here ONLY on print. */}
                    <aside className="space-y-6 print:space-y-4">
                        <div className="print:hidden">
                            <Card title="Technical Skills">
                                <TechSkillsList />
                            </Card>
                        </div>

                        <Card title="Certifications" icon={<Award className="h-4 w-4" /> }>
                            <ul className="text-sm space-y-1">
                                <li><strong>Best Team  — Smart Farming Hackathon 2024 (Fraunhofer IESE) </strong> </li>
                                <li>Supervised ML: Regression & Classification</li>
                                <li>HackerRank Java (Intermediate) — Problem Solver</li>
                            </ul>
                        </Card>

                        <Card title="Soft Skills">
                            <p className="text-sm">Analytical Problem Solving · Project Management · Ownership · Collaboration · Conflict Resolution</p>
                        </Card>

                        <Card title="Languages" icon={<Languages className="h-4 w-4" />}>
                            <p className="text-sm">Bengali (Native) · English (Fluent) · Deutsch (A1)</p>
                        </Card>

                        <Card title="References">
                            <p className="text-sm text-gray-600">Available upon request.</p>
                        </Card>
                    </aside>
                </div>
            </div>
        </main>
    );
}

/* --- Reusable snippets --- */
function TechSkillsList() {
    return (
        <ul className="text-sm leading-6 sm:grid sm:grid-cols-2 gap-x-6">
            <li><strong>Programming Languages:</strong> Java, Python, JavaScript, TypeScript, C++, Groovy</li>
            <li><strong>Frameworks:</strong> Spring Boot, React, Angular, Grails, JUnit</li>
            <li><strong>Backend & APIs:</strong> Microservices, REST, API Gateway, Security, Batch, Hibernate, JBoss, JPA, Kafka, JDBC, WildFly</li>
            <li><strong>DevOps:</strong> GitLab CI/CD, Jenkins, Docker, Harbor, ArgoCD, Rancher, SonarQube, AWS S3, MinIO, RabbitMQ, Maven</li>
            <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Firebase</li>
            <li><strong>Frontend:</strong> HTML5, CSS3, Bootstrap 5</li>
            <li><strong>Tools:</strong> Git, GitHub, Jira, Postman, Linux, Matlab</li>
            <li><strong>ML:</strong> NumPy, scikit-learn, Jupyter</li>
            <li><strong>Methods:</strong> Agile (Scrum/Kanban), OOP, SDLC, DSA</li>
        </ul>
    );
}

function Section({ id, title, icon, children }) {
    return (
        <section
            id={id}
            className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-6 md:p-8 print:p-5 print:shadow-none print:ring-0"
        >
            <div className="flex items-center gap-2">
                {icon}
                <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            </div>
            <div className="mt-4 space-y-4">{children}</div>
        </section>
    );
}

function Card({ title, icon, children }) {
    return (
        <div className="no-break bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-6 print:p-5 print:shadow-none print:ring-0">
            <div className="flex items-center gap-2">
                {icon}
                <h3 className="font-semibold">{title}</h3>
            </div>
            <div className="mt-3 space-y-3">{children}</div>
        </div>
    );
}

function Experience({ role, company, location, date, bullets }) {
    return (
        <div className="no-break border-l-2 border-gray-200 pl-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{role}</h3>
                <span className="text-xs text-gray-500">{date}</span>
            </div>
            <div className="text-sm text-gray-600">{company} · {location}</div>
            <ul className="mt-2 space-y-1 text-[15px] leading-6 list-disc pl-4">
                {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
        </div>
    );
}

function Edu({ degree, school, date, details }) {
    return (
        <div className="grid sm:grid-cols-[1fr_auto] gap-1">
            <div>
                <p className="font-medium">{degree}</p>
                <p className="text-sm text-gray-600">{school}</p>
                {details && <p className="text-sm mt-1">{details}</p>}
            </div>
            <span className="text-xs text-gray-500 whitespace-nowrap">{date}</span>
        </div>
    );
}

function Project({ title, desc, link }) {
    return (
        <div className="border-l-2 border-gray-200 pl-4">
            <p className="font-medium">{title}</p>
            <p className="text-sm text-gray-700 mt-1">{desc}</p>
            {link && (
                <a
                    className="inline-flex items-center gap-2 mt-2 text-sm text-blue-600 hover:underline"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkIcon className="h-4 w-4" /> {link.label}
                </a>
            )}
        </div>
    );
}
