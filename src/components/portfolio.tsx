'use client';

import { useState } from "react";
import Image from "next/image";
import {
  ArrowDownToLine, ArrowDown, ArrowUpRight, Github, Linkedin, Mail,
  MapPin, Menu, X, Code2, Database, GraduationCap, BriefcaseBusiness,
  ChevronDown, Sparkles, ExternalLink, Terminal, BarChart3,
  Brain,
  HandHeart,
  Target,
} from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";

type Project = {
  name: string;
  type: string;
  description: string;
  stack: string[];
  screenshot?: string;
  liveUrl?: string;
  sourceUrl?: string;
  link?: string;
};

function SkillDropdown({
  title, subtitle, icon, skills, tone,
}: {
  title: string; subtitle: string; icon: React.ReactNode;
  skills: string[]; tone: "violet" | "cyan";
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`glass-panel skill-panel ${tone}`}>
      <button className="dropdown-trigger" onClick={() => setOpen(!open)}
        aria-expanded={open}>
        <span className="icon-tile">{icon}</span>
        <span className="trigger-copy"><strong>{title}</strong><small>{subtitle}</small></span>
        <ChevronDown className={`chevron ${open ? "rotated" : ""}`} size={19} />
      </button>
      {open && <div className="dropdown-content">
        <div className="skill-list">{skills.map((skill) =>
          <span className="skill-chip" key={skill}>{skill}</span>)}</div>
      </div>}
    </div>
  );
}

function ProjectDropdown({
  title, subtitle, icon, projects, tone,
}: {
  title: string; subtitle: string; icon: React.ReactNode;
  projects: Project[]; tone: "violet" | "cyan";
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`glass-panel project-group ${tone}`}>
      <button className="dropdown-trigger" onClick={() => setOpen(!open)}
        aria-expanded={open}>
        <span className="icon-tile">{icon}</span>
        <span className="trigger-copy"><strong>{title}</strong><small>{subtitle}</small></span>
        <span className="project-count">{projects.length.toString().padStart(2, "0")}</span>
        <ChevronDown className={`chevron ${open ? "rotated" : ""}`} size={19} />
      </button>
      {open && <div className="project-list">
        {projects.map((project) => <article className="project-card" key={project.name}>
          {project.screenshot && <div className="project-screenshot">
            <Image src={project.screenshot} alt={`${project.name} screenshot`} fill sizes="(max-width: 560px) 90vw, (max-width: 900px) 42vw, 340px" />
          </div>}
          <div className="project-card-top"><span className="project-type">{project.type}</span></div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="skill-list">{project.stack.map((item) => <span className="skill-chip" key={item}>{item}</span>)}</div>
          {(project.liveUrl || project.sourceUrl || project.link) && <div className="project-links">
            {(project.liveUrl || project.link) && <a href={project.liveUrl || project.link} target="_blank" rel="noreferrer"><ExternalLink size={14}/> Live demo</a>}
            {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer"><Github size={14}/> Source code</a>}
          </div>}
        </article>)}
      </div>}
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ["Home", "#home"], ["About", "#about"], ["Skills", "#skills"],
    ["Projects", "#projects"], ["Contact", "#contact"],
  ];
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="navbar">
        <a href="#home" className="brand" aria-label="Abhinav Udayan home">
          <span className="brand-mark">A<span>U</span></span><span>abhinav<span className="brand-dot">.</span></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="primary-navigation">
          {menuOpen ? <X size={21}/> : <Menu size={21}/>}
        </button>
        <nav id="primary-navigation" className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <section id="home" className="hero section-wrap theme-home">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot"/> OPEN TO OPPORTUNITIES</div>
          <p className="hero-kicker">HELLO, WORLD! <span className="wave">✳</span></p>
          <h1>I’m <span className="gradient-text">Abhinav</span><br/>Udayan<span className="accent-dot">.</span></h1>
          <p className="hero-role">{portfolio.role}</p>
          <p className="hero-description">{portfolio.tagline}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={portfolio.resume} download><ArrowDownToLine size={17}/> Download resume</a>
            <a className="button button-ghost" href={portfolio.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={15}/></a>
            <a className="social-button" href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={19}/></a>
          </div>
          <div className="hero-meta"><span><MapPin size={15}/>{portfolio.location}</span><span className="meta-separator"/><span><Sparkles size={15}/> Always learning, always building</span></div>
        </div>
        <div className="hero-visual">
          <div className="photo-orbit orbit-a"/><div className="photo-orbit orbit-b"/>
          <div className="photo-frame">
            <div className="photo-topline"><span>PROFILE</span><span className="live-dot"/></div>
            <div className="profile-photo">
              <Image src="/profilepic.png" alt="profile photo" fill priority sizes="(max-width: 768px) 70vw, 360px" style={{objectFit:"cover"}}/>
            </div>
            <div className="photo-caption"><div><span className="caption-label">CURRENT FOCUS</span><strong>Code. Learn. Create.</strong></div><span className="caption-symbol"></span></div>
          </div>
          <div className="floating-card float-code"><Terminal size={17}/><span><b>Problem solver</b><small>One line at a time</small></span></div>
          <div className="floating-card float-data"><BarChart3 size={18}/><span><b>Data curious</b><small>Insight over noise</small></span></div>
          
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      </section>

      <section id="about" className="section-wrap section-block theme-about">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curiosity into capability." description="A quick look at my journey so far—and where I’m heading next."/>
        <div className="about-grid">
          <div className="glass-panel about-intro">
            <span className="large-quote">“</span><p>{portfolio.about}</p>
            <div className="about-tags"><span>Build with purpose</span><span>Learn continuously</span><span>Think analytically</span></div>
          </div>
          <div className="timeline-column">
            <div className="timeline-heading"><GraduationCap size={18}/><h3>Education</h3></div>
            <div className="timeline">
              {portfolio.education.map((item) => <article className="timeline-item" key={item.title}>
                <span className="timeline-dot"/><div className="timeline-top"><h4>{item.title}</h4><span>{item.period}</span></div>
                <p>{item.place}</p><small>{item.detail}</small>
              </article>)}
            </div>
            <div className="timeline-heading experience-heading"><BriefcaseBusiness size={18}/><h3>Training & Experience</h3></div>
            <div className="timeline">
              {portfolio.experience.map((item) => <article className="timeline-item" key={item.title}>
                <span className="timeline-dot"/><div className="timeline-top"><h4>{item.title}</h4><span>{item.period}</span></div>
                <p>{item.place}</p><small>{item.detail}</small>
              </article>)}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-wrap section-block theme-skills">
        <SectionHeading eyebrow="MY TOOLKIT" title="Skills with a purpose." description="Choose a track to explore the tools and concepts I’m building with."/>
        <div className="dropdown-grid">
          <SkillDropdown title="Software Development" subtitle="Programming · Web · Core CS" icon={<Code2 size={21}/>} skills={portfolio.softwareSkills} tone="violet"/>
          <SkillDropdown title="Data Analytics" subtitle="SQL · Data · Insights" icon={<Database size={21}/>} skills={portfolio.analyticsSkills} tone="cyan"/>
          <SkillDropdown title="Artificial Intelligence" subtitle="AI/ML · Automation" icon={<Brain size={21}/>}skills={portfolio.artificialIntelligence} tone="violet"/>
          <SkillDropdown title="Soft Skills" subtitle="Collaboration · Teamwork" icon={<HandHeart size={21}/>}skills={portfolio.softSkills} tone="cyan"/>
        </div>
        <p className="section-footnote"><span className="status-dot"/> Skill list reflects my current learning and project experience.</p>
      </section>

      <section id="projects" className="section-wrap section-block theme-projects">
        <SectionHeading eyebrow="SELECTED WORK" title="Ideas made tangible." description="A few projects that connect software, connected devices, and AI-powered workflows."/>
        <div className="dropdown-stack">
          <ProjectDropdown title="Development Projects" subtitle="Web apps · IoT · Assistive technology" icon={<Code2 size={21}/>} projects={portfolio.developmentProjects} tone="violet"/>
          <ProjectDropdown title="Analytics & Automation Projects" subtitle="AI workflows · Data-driven tools" icon={<BarChart3 size={21}/>} projects={portfolio.analyticsProjects} tone="cyan"/>
        </div>
        <div className="project-note"><Sparkles size={17}/><p>Have a project idea? I’d love to explore how we could build it.</p><a href="#contact">Let’s connect <ArrowUpRight size={15}/></a></div>
      </section>

      <section id="contact" className="section-wrap section-block theme-contact">
        <div className="contact-panel glass-panel">
          <div className="contact-orb" aria-hidden="true"/>
          <SectionHeading eyebrow="HAVE A ROLE OR IDEA?" title="Let’s make something meaningful." description="I’m open to entry-level opportunities, collaborations, and conversations about technology."/>
          <a className="button button-primary contact-button" href={`mailto:${portfolio.email}`}><Mail size={17}/> Say hello <ArrowUpRight size={16}/></a>
          <div className="contact-details"><span><MapPin size={15}/>{portfolio.location}</span><a href={portfolio.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a></div>
        </div>
      </section>

      <footer className="footer"><a href="#home" className="footer-brand">AU<span>.</span></a><p>Designed with curiosity, built with care.</p><span>© {new Date().getFullYear()} Abhinav Udayan</span></footer>
    </main>
  );
}
