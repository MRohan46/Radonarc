import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Code2, Shield, Layers, Zap, ArrowRight, Terminal,
  Lock, Sparkles, CheckCircle2, Rocket
} from 'lucide-react';
import Logo from "./assets/logo.png";


/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
const RadonArc = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  useEffect(() => { setMounted(true); }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: '-100px' }
  };

  const capabilities = [
    { icon: Code2, title: 'Web Development', description: 'Robust, production-grade web applications built with modern JavaScript stacks. Clean code, scalable architecture, and performance you can actually measure.', tags: ['React', 'Express.js', 'JavaScript', 'Node.js', 'MERN'] },
    { icon: Layers, title: 'Web Security & Penetration Testing', description: 'Hands-on security testing to uncover vulnerabilities, validate defences, and harden web applications against real-world attack vectors.', tags: ['Web Security', 'Penetration Testing', 'Vulnerability Assessment', 'OWASP'] },
    { icon: Zap, title: 'Custom Dashboards & Analytics', description: 'Purpose-built dashboards and internal tools for monitoring, analytics, and decision-making. Optimised for real-time data and scale.', tags: ['Data Visualization', 'Real-time Analytics', 'Performance', 'Internal Tools'] },
    { icon: Shield, title: 'AI & Cybersecurity Integration', description: 'Secure AI-driven systems with a focus on authentication, API protection, and threat modelling. Intelligence without blind trust.', tags: ['AI Integration', 'API Security', 'Authentication', 'Threat Modeling'] },
    { icon: Rocket, title: 'E-Commerce & Growth', description: 'Technical handling and optimisation of e-commerce platforms, integrations, and traffic pipelines from storefront to conversion.', tags: ['Shopify', 'Amazon', 'eBay', 'Facebook Ads', 'E-Commerce'] }
  ];

  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'JavaScript, Python & PHP', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL & MongoDB', category: 'Database' },
    { name: 'Vercel & Render', category: 'Deployment' }
  ];

  const projects = [
    { title: 'Spaceline', status: 'In Development', description: 'A lightweight, minimal chat application focused on simplicity and speed. Real-time messaging with zero bloat.', tech: ['React', 'WebSockets', 'Node.js'], link: 'https://spaceline.radonarc.xyz', accent: '#BEF264' },
    { title: 'Notebot', status: 'Live', description: 'Transform your notes into knowledge. Upload lectures, generate summaries, and create practice quizzes powered by AI. Collaborate with friends on shared topics.', tech: ['AI Integration', 'Gemini', 'MERN', 'Award Winning', 'AI-Powered Study Assistant'], link: 'https://notebot.radonarc.xyz', accent: '#aaf22c' },
    { title: "Our Founder's Portfolio", status: 'Live', description: "A stunning portfolio showcasing the founder's experience in creating visually engaging designs and building dynamic, responsive websites.", tech: ['Portfolio', 'MERN', 'AI'], link: 'https://portfolio.radonarc.xyz', accent: '#aaf22c' }
  ];

  const principles = [
    { icon: Terminal, title: 'Engineer-First Development', description: 'Built by developers who understand constraints. Clean code, clear architecture, and zero technical debt carried forward.' },
    { icon: Zap, title: 'Performance Obsessed', description: 'Every millisecond matters. Optimised bundles, lazy loading, efficient rendering because fast is a feature.' },
    { icon: Lock, title: 'Security by Default', description: 'Security is never an afterthought. Input validation, secure authentication, regular audits, and zero-trust architecture throughout.' },
    { icon: Sparkles, title: 'User Experience First', description: 'Intuitive interfaces that need no manual. Every interaction considered. Accessibility built in, not bolted on.' }
  ];

  return (
    <>

      <div className="min-h-screen bg-black text-gray-100 antialiased overflow-x-hidden">

        {/* Background */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#BEF264]/5 via-black to-black" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        </div>

        {/* ── NAV ── */}
        <header>
          <nav className="relative border-b border-white/5 backdrop-blur-xl sticky top-0 z-50 bg-black/60" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <a href="/" className="text-lg font-bold tracking-tight flex items-center gap-2" aria-label="RadonArc home">
                  <img src={Logo} alt="RadonArc logo web development and AI software studio" width={48} height={48} loading="eager" fetchpriority="high" />
                  <span className="text-white">Radon</span><span className="text-[#BEF264]">Arc</span>
                </a>
              </motion.div>
              <motion.nav initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-8 text-sm" aria-label="Section links">
                {[['#services','Services'],['#products','Products'],['#about','About']].map(([href, label]) => (
                  <a key={href} href={href} className="text-gray-400 hover:text-[#BEF264] transition-colors duration-300">{label}</a>
                ))}
              </motion.nav>
            </div>
          </nav>
        </header>

        <main id="main-content">

          {/* ── HERO ── */}
          <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 md:pt-40 pb-32 md:pb-48" aria-labelledby="hero-heading">
            <motion.div style={{ opacity }} className="max-w-5xl">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <p className="inline-block mb-6 px-4 py-2 bg-[#BEF264]/10 border border-[#BEF264]/20 rounded-full">
                  <span className="text-[#BEF264] text-sm font-mono">v1.0 Building in Public</span>
                </p>
              </motion.div>

              {/* SINGLE h1 duplicate sr-only removed, one clear h1 is correct for SEO */}
              <motion.h1 id="hero-heading" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8">
                RadonArc builds <span className="text-[#BEF264]">scalable web products</span> and real-time software experiments.
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                Pakistan-based web development &amp; AI studio. Production-grade React apps, custom dashboards, and AI-powered cybersecurity solutions that scale from MVP to enterprise.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-12 flex flex-wrap gap-4">
                <a href="#contact" className="group px-8 py-4 bg-[#BEF264] text-black font-semibold rounded-lg hover:bg-[#BEF264]/90 transition-all duration-300 flex items-center gap-2" aria-label="Start a web development project with RadonArc">
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
                <a href="#products" className="px-8 py-4 border border-white/10 text-white font-semibold rounded-lg hover:border-[#BEF264]/50 hover:bg-white/5 transition-all duration-300" aria-label="View RadonArc shipped products">
                  View Work
                </a>
              </motion.div>
            </motion.div>

            {/* Stats as <dl> for semantic meaning */}
            <motion.dl initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-5 gap-6" aria-label="RadonArc at a glance">
              {[
                { label: 'Projects Shipped', value: '14+' },
                { label: 'Lines of Code', value: '100K+' },
                { label: 'Uptime SLA', value: '99.9%' },
                { label: 'Response Time', value: '<24h' },
                { label: 'Awards Won', value: '2' }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                  <dd className="text-3xl md:text-4xl font-bold text-[#BEF264] mb-2">{stat.value}</dd>
                  <dt className="text-sm text-gray-400 font-mono">{stat.label}</dt>
                </div>
              ))}
            </motion.dl>
          </section>

          {/* ── SERVICES ── */}
          <section id="services" className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32" aria-labelledby="services-heading">
            <motion.div {...fadeInUp}>
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-4">Web Development &amp; AI Services</h2>
              <p className="text-xl text-gray-400 mb-16 max-w-2xl">Full-stack development services with a focus on performance, security, and long-term maintainability.</p>
            </motion.div>
            <motion.ul variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <motion.li key={cap.title} variants={fadeInUp} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#BEF264]/50 transition-all duration-500" itemScope itemType="https://schema.org/Service">
                    <div className="absolute inset-0 bg-[#BEF264]/0 group-hover:bg-[#BEF264]/5 rounded-2xl transition-all duration-500" aria-hidden="true" />
                    <div className="absolute -inset-px bg-gradient-to-r from-[#BEF264]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur transition-opacity duration-500" aria-hidden="true" />
                    <div className="relative">
                      <div className="w-12 h-12 bg-[#BEF264]/10 border border-[#BEF264]/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                        <Icon className="w-6 h-6 text-[#BEF264]" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white" itemProp="name">{cap.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-6" itemProp="description">{cap.description}</p>
                      <div className="flex flex-wrap gap-2" aria-label={`Technologies for ${cap.title}`}>
                        {cap.tags.map((tag, i) => <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300">{tag}</span>)}
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </section>

          {/* ── TECH STACK ── */}
          <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32" aria-labelledby="stack-heading">
            <motion.div {...fadeInUp}>
              <h2 id="stack-heading" className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
              <p className="text-xl text-gray-400 mb-16 max-w-2xl">Modern tools. Battle-tested frameworks. Production-ready infrastructure.</p>
            </motion.div>
            <motion.ul variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4 list-none p-0">
              {techStack.map((tech, i) => (
                <motion.li key={i} variants={fadeInUp} className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#BEF264]/50 hover:bg-white/[0.07] transition-all duration-300">
                  <p className="text-sm font-mono text-gray-500 mb-2">{tech.category}</p>
                  <p className="text-xl font-bold text-white group-hover:text-[#BEF264] transition-colors">{tech.name}</p>
                </motion.li>
              ))}
            </motion.ul>
          </section>

          {/* ── PRINCIPLES ── */}
          <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32" aria-labelledby="principles-heading">
            <motion.div {...fadeInUp}>
              <h2 id="principles-heading" className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
              <p className="text-xl text-gray-400 mb-16 max-w-2xl">Principles that guide every line of code, every design decision, every deployment.</p>
            </motion.div>
            <motion.ul variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0">
              {principles.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.li key={i} variants={fadeInUp} className="flex gap-6 p-8 bg-white/5 border border-white/10 rounded-xl hover:border-[#BEF264]/30 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#BEF264]/10 border border-[#BEF264]/30 rounded-lg flex items-center justify-center" aria-hidden="true">
                      <Icon className="w-6 h-6 text-[#BEF264]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">{p.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{p.description}</p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </section>

          {/* ── PRODUCTS ── */}
          <section id="products" className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32" aria-labelledby="products-heading">
            <motion.div {...fadeInUp}>
              <h2 id="products-heading" className="text-4xl md:text-5xl font-bold mb-4">Labs &amp; Products</h2>
              <p className="text-xl text-gray-400 mb-16 max-w-2xl">Experimental projects and internal tools going public. Building in the open.</p>
            </motion.div>
            <ul className="space-y-6 list-none p-0">
              {projects.map((project, i) => (
                <motion.li key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-10 hover:border-[#BEF264]/50 transition-all duration-500" itemScope itemType="https://schema.org/SoftwareApplication">
                  <div className="absolute inset-0 bg-[#BEF264]/0 group-hover:bg-[#BEF264]/5 transition-all duration-500" aria-hidden="true" />
                  <div className="relative max-w-4xl">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-white" itemProp="name">{project.title}</h3>
                      <span className="px-4 py-1.5 rounded-full text-sm font-mono uppercase tracking-wide" style={{ backgroundColor: `${project.accent}15`, borderColor: `${project.accent}30`, color: project.accent, borderWidth: '1px' }}>{project.status}</span>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6" itemProp="description">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8" aria-label={`Technologies in ${project.title}`}>
                      {project.tech.map((t, idx) => <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm font-mono text-gray-300">{t}</span>)}
                    </div>
                    <a href={project.link} className="text-[#BEF264] text-lg leading-relaxed hover:underline" target="_blank" rel="noopener noreferrer" itemProp="url" aria-label={`Visit ${project.title}`}>{project.link}</a>
                  </div>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* ── ABOUT ── */}
          <section id="about" className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32" aria-labelledby="about-heading">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeInUp}>
                <h2 id="about-heading" className="text-5xl md:text-6xl font-bold mb-8">The Studio.</h2>
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                  <p>RadonArc is an independent web development studio focused on building practical, no-noise software for clients worldwide.</p>
                  <p>We're engineers who write code, ship products, and solve real problems. No corporate speak. No vanity metrics. Just systems that work.</p>
                  <p>Every project starts with constraints budget, timeline, technical debt. We navigate these honestly, communicate clearly, and deliver production-ready solutions.</p>
                  <p className="text-[#BEF264] font-semibold">Building since 2024. Shipping continuously.</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
                <div className="p-8 bg-white/5 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-white">What We Value</h3>
                  <ul className="space-y-3">
                    {['Code quality over quick hacks','Documentation that developers actually read','Tests that catch bugs, not feelings','Clear communication, no jargon','Shipping over perfection paralysis'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#BEF264] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-[#BEF264]/10 border border-[#BEF264]/30 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-white">Availability</h3>
                  <p className="text-gray-400 mb-4">Currently accepting new projects for Q2 2026. Response time under 24 hours.</p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-[#BEF264] font-semibold hover:gap-3 transition-all" aria-label="Contact RadonArc to start your project">
                    Get in touch <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── CONTACT ── */}
          <section id="contact" className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32" aria-labelledby="contact-heading">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center">
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Together</h2>
              <p className="text-xl text-gray-400 mb-12">Have a web development project in mind? Need AI integration or a security audit? Let's talk specifics.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
                <a href="mailto:business@radonarc.xyz" className="px-10 py-5 bg-[#BEF264] text-black font-bold rounded-lg hover:bg-[#BEF264]/90 transition-all text-lg" aria-label="Email RadonArc">business@radonarc.xyz</a>
                <a href="#" className="px-10 py-5 border border-white/20 text-white font-bold rounded-lg hover:border-[#BEF264]/50 hover:bg-white/5 transition-all text-lg" aria-label="Download Capabilities Deck">View Capabilities Deck</a>
              </div>
              <nav aria-label="Social media links">
                <ul className="flex justify-center gap-8 text-2xl text-gray-400 list-none p-0">
                  {[
                    { href: 'https://instagram.com/radonarc.official', icon: 'fa-instagram', label: 'RadonArc on Instagram' },
                    { href: 'https://facebook.com/radonarc.official', icon: 'fa-facebook', label: 'RadonArc on Facebook' },
                    { href: 'https://pk.linkedin.com/in/muhammad-rohan-7333a2120', icon: 'fa-linkedin', label: 'RadonArc founder on LinkedIn' }
                  ].map(({ href, icon, label }) => (
                    <li key={icon}>
                      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-[#BEF264] transition-colors" aria-label={label}>
                        <i className={`fa-brands ${icon}`} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </section>

        </main>

        {/* ── FOOTER ── */}
        <footer className="relative border-t border-white/5 mt-32" aria-label="Site footer">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-gray-500">
                <small>© 2026 RadonArc. Independent web development &amp; AI studio.</small>
              </p>
              <nav aria-label="Footer navigation">
                <ul className="flex items-center gap-8 text-sm list-none p-0">
                  {[['https://github.com/MRohan46','GitHub'],['https://instagram.com/radonarc.official','Instagram'],['https://facebook.com/radonarc.official','Facebook']].map(([href, label]) => (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#BEF264] transition-colors">{label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default RadonArc;