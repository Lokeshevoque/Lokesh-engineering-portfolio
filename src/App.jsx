import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, BarChart3, BriefcaseBusiness, CheckCircle2, ChevronRight, Download, Factory, Gauge, Link, Mail, MapPin, Menu, ShieldCheck, Sparkles, Target, Users, Wrench, X, Zap } from "lucide-react";

const metrics = [
  { value: "$9M", label: "Lean Six Sigma program led", icon: Target },
  { value: "40%", label: "Downtime reduction", icon: Gauge },
  { value: "40%", label: "Final-yield improvement", icon: BarChart3 },
  { value: "$4M", label: "Approximate BD site impact", icon: Sparkles },
  { value: "35", label: "GMP employees managed", icon: Users },
  { value: "10 yrs", label: "Manufacturing experience", icon: BriefcaseBusiness },
];

const expertise = [
  { title: "Process & Manufacturing Engineering", icon: Factory, items: ["NPI and technology transfer", "Process validation and IQ/OQ/PQ", "DFM, DFA, PFMEA and Control Plans", "Automation, equipment and production readiness"] },
  { title: "Quality Systems & Compliance", icon: ShieldCheck, items: ["ISO 9001 implementation", "ISO 13485 and FDA-regulated QMS", "CAPA, change control and investigations", "TrackWise, Veeva, MasterControl and ETQ"] },
  { title: "Operational Excellence", icon: Zap, items: ["DFSS Black Belt and Lean Six Sigma Green Belt", "DMAIC, Kaizen, A3 and 8D", "Power BI, JMP, Minitab and SPC", "KPI systems, Daily Management and visual controls"] },
  { title: "Reliability & Automation", icon: Wrench, items: ["SAP/CMMS and PM optimization", "PLC/HMI, FactoryTalk View and machine vision", "OSI-PI, MES and process analytics", "Asset reliability, RCA and FMEA"] },
];

const projects = [
  { category: "Operational Excellence", title: "Enterprise-Scale Yield and Reliability Improvement", company: "Pfizer", summary: "Led a cross-functional Lean Six Sigma program integrating equipment, process, data and operating-system improvements.", results: ["$9M program leadership", "40% downtime reduction", "40% final-yield improvement"], tools: ["DOE", "SPC", "Power BI", "JMP", "Minitab", "MES"] },
  { category: "Process Improvement", title: "Media Preparation Process Transformation", company: "BD", summary: "Led and co-led Kaizen initiatives focused on process robustness, deviation reduction and standardized execution.", results: ["Approximately $4M site impact", "40% fewer deviations", "30% greater process consistency"], tools: ["Kaizen", "A3", "FMEA", "Power BI", "CAPA", "Standard Work"] },
  { category: "Manufacturing Engineering", title: "Production Efficiency and Scrap Reduction", company: "Maini Materials Movement", summary: "Improved industrial manufacturing performance through process optimization, tooling changes, line balancing and supplier development.", results: ["Efficiency increased from 68% to 92%", "18% molding-cycle reduction", "30% scrap reduction"], tools: ["Line Balancing", "6S", "PFMEA", "PPAP", "Tooling", "Supplier Quality"] },
];

const experience = [
  { years: "2024 - Present", role: "Process Engineer, Operations", company: "BD Integrated Diagnostics", description: "Leading process, quality, validation, automation, reliability and continuous-improvement initiatives in regulated diagnostic manufacturing." },
  { years: "2021 - 2024", role: "Process Engineer, Continuous Improvement Operations", company: "Pfizer", description: "Managed GMP operations and delivered data-driven improvements across pharmaceutical manufacturing, equipment, quality and reliability systems." },
  { years: "2016 - 2019", role: "Engineer, Operations", company: "Maini Materials Movement", description: "Supported manufacturing engineering, production planning, supplier development, tooling, product industrialization and launch readiness." },
  { years: "2014 - 2016", role: "Team Leader, Vehicle Dynamics, Powertrain & Chassis", company: "Chicane Racing", description: "Led multidisciplinary automotive engineering activities from requirements and fabrication through testing and final delivery." },
];

const skills = ["Process Engineering", "Operational Excellence", "Quality Management Systems", "Manufacturing Engineering", "Lean Six Sigma", "DFSS", "CAPA", "Change Control", "Process Validation", "IQ/OQ/PQ", "Technology Transfer", "Reliability Engineering", "Root Cause Analysis", "DOE", "SPC", "PFMEA", "Power BI", "JMP", "Minitab", "SAP", "MES", "CMMS", "TrackWise", "Veeva", "MasterControl", "ETQ", "MPS", "MRP", "Capacity Planning", "PLC/HMI", "Machine Vision", "Supplier Quality", "ISO 9001", "ISO 13485"];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

const Button = ({ children, className="", onClick, href, download }) => href ? <a className={`button ${className}`} href={href} download={download}>{children}</a> : <button className={`button ${className}`} onClick={onClick}>{children}</button>;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const filteredProjects = useMemo(() => filter === "All" ? projects : projects.filter(p => p.category === filter), [filter]);
  const navItems = ["About", "Expertise", "Impact", "Experience", "Contact"];
  const filters = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const scrollTo = id => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return <div className="site">
    <header className="header"><div className="nav-wrap">
      <button onClick={() => scrollTo("about")} className="brand"><span className="logo">LT</span><span><b>Lokesh Thiruvenkatam</b><small>Engineering & Operations</small></span></button>
      <nav>{navItems.map(n => <button key={n} onClick={() => scrollTo(n)}>{n}</button>)}</nav>
      <Button className="primary desktop" onClick={() => location.href='mailto:lokeshevoque@gmail.com'}>Let's Connect <ArrowRight size={16}/></Button>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </div>{menuOpen && <div className="mobile-nav">{navItems.map(n => <button key={n} onClick={() => scrollTo(n)}>{n}</button>)}</div>}</header>

    <main>
      <section id="about" className="hero section"><div className="glow"/><div className="hero-grid">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.div variants={item} className="eyebrow">Process Engineering • Quality Systems • Operational Excellence</motion.div>
          <motion.h1 variants={item}>Turning complex manufacturing challenges into <span>measurable, sustainable results.</span></motion.h1>
          <motion.p variants={item} className="lead">Mechanical and process engineer with 10 years of experience across diagnostics, medical devices, pharmaceutical manufacturing, automation, reliability, quality systems, and high-volume operations.</motion.p>
          <motion.div variants={item} className="actions"><Button className="primary" onClick={() => scrollTo("impact")}>View Selected Impact <ChevronRight size={16}/></Button><Button className="secondary" onClick={() => location.href='mailto:lokeshevoque@gmail.com'}><Mail size={16}/> Contact Me</Button></motion.div>
          <motion.div variants={item} className="contact-line"><span><MapPin size={16}/> Mebane, North Carolina</span><a href="mailto:lokeshevoque@gmail.com"><Mail size={16}/> lokeshevoque@gmail.com</a></motion.div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.65}} className="snapshot card"><div className="card-title"><div><small>Professional Snapshot</small><h2>Manufacturing impact at scale</h2></div><Award/></div><div className="metric-grid">{metrics.map(({value,label,icon:Icon}) => <div className="metric" key={label}><Icon/><b>{value}</b><span>{label}</span></div>)}</div></motion.div>
      </div></section>

      <section id="expertise" className="section band"><div className="content"><div className="section-head"><small>Core Expertise</small><h2>Engineering depth. Operational discipline.</h2><p>A cross-functional toolkit spanning technical execution, regulated quality systems, data analytics, people leadership, and scalable manufacturing operations.</p></div><motion.div className="expertise-grid" initial="hidden" whileInView="show" viewport={{once:true}} variants={container}>{expertise.map(({title,icon:Icon,items}) => <motion.article className="card expertise" key={title} variants={item}><div className="icon"><Icon/></div><h3>{title}</h3><ul>{items.map(x => <li key={x}><CheckCircle2/>{x}</li>)}</ul></motion.article>)}</motion.div></div></section>

      <section id="impact" className="section"><div className="content"><div className="impact-head"><div className="section-head"><small>Selected Impact</small><h2>Results built on data and execution.</h2></div><div className="filters">{filters.map(f => <button className={filter===f?'active':''} key={f} onClick={()=>setFilter(f)}>{f}</button>)}</div></div><div className="project-grid">{filteredProjects.map(p => <motion.article layout className="project card" key={p.title}><small>{p.category}</small><h3>{p.title}</h3><em>{p.company}</em><p>{p.summary}</p><div className="results">{p.results.map(r => <span key={r}><CheckCircle2/>{r}</span>)}</div><div className="tags">{p.tools.map(t => <i key={t}>{t}</i>)}</div></motion.article>)}</div></div></section>

      <section id="experience" className="section band"><div className="content experience-grid"><div className="section-head"><small>Experience</small><h2>A career built across operations and engineering.</h2><p>From automotive product development to pharmaceutical manufacturing and diagnostic operations, each role has strengthened a practical, systems-level approach to engineering leadership.</p></div><div className="timeline">{experience.map(e => <article className="card" key={e.role}><div><h3>{e.role}</h3><strong>{e.company}</strong></div><time>{e.years}</time><p>{e.description}</p></article>)}</div></div></section>

      <section className="section"><div className="content toolkit-grid"><div className="section-head"><small>Technical Toolkit</small><h2>Built for regulated, data-rich manufacturing.</h2><div className="credentials card"><span><Award/>Design for Six Sigma Black Belt</span><span><Award/>Lean Six Sigma Green Belt</span><span><BriefcaseBusiness/>M.S., Mechanical Engineering</span></div></div><div className="skill-cloud">{skills.map(s => <span key={s}>{s}</span>)}</div></div></section>

      <section id="contact" className="section contact"><div className="content contact-card"><div><small>Let's Build What's Next</small><h2>Open to senior engineering, quality, validation, reliability, and operational-excellence opportunities.</h2><p>Interested in discussing a process, manufacturing, quality-system, MSAT, reliability, or engineering-leadership opportunity? I'd be glad to connect.</p></div><div className="contact-actions"><Button className="primary" onClick={() => location.href='mailto:lokeshevoque@gmail.com'}><Mail size={16}/>Email Lokesh</Button><Button className="secondary" onClick={() => window.open('https://www.linkedin.com/in/lokeshthehustler97','_blank','noopener,noreferrer')}><Link size={16}/>LinkedIn</Button><Button className="secondary" href="/Lokesh_Thiru_Grail.pdf" download="Lokesh_Thiruvenkatam_Resume.pdf"><Download size={16}/>Download Resume PDF</Button></div></div></section>
    </main>
    <footer>© 2026 Lokesh Thiruvenkatam. Process engineering, quality systems, and operational excellence portfolio.</footer>
  </div>;
}
