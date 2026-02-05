import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Shield, Layers, Zap, ArrowRight, Terminal, Cpu, Lock, Sparkles, CheckCircle2, Globe, Database, Rocket } from 'lucide-react';
import Logo from "./assets/logo.png"

const RadonArc = () => {
  const [email, setEmail] = useState('');
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  const capabilities = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Robust, production-grade web applications built with modern JavaScript stacks. Clean code, scalable architecture, and performance you can actually measure.',
      tags: ['React', 'Express.js', 'JavaScript', 'Node.js', 'MERN']
    },
    {
      icon: Layers,
      title: 'Web Security / Web Testing',
      description: 'Hands-on security testing to uncover vulnerabilities, validate defenses, and harden web applications against real-world attack vectors.',
      tags: ['Web Security', 'Penetration Testing', 'Vulnerability Assessment', 'OWASP']
    },
    {
      icon: Zap,
      title: 'Custom Dashboards',
      description: 'Purpose-built dashboards and internal tools for monitoring, analytics, and decision-making. Optimized for real-time data and scale.',
      tags: ['Data Visualization', 'Real-time Analytics', 'Performance', 'Internal Tools']
    },
    {
      icon: Shield,
      title: 'AI & Cybersecurity',
      description: 'Secure AI-driven systems with a focus on authentication, API protection, and threat modeling. Intelligence without blind trust.',
      tags: ['AI Integration', 'API Security', 'Authentication', 'Threat Modeling']
    },
    {
      icon: Layers,
      title: 'E-Commerce & Growth',
      description: 'Technical handling and optimization of e-commerce platforms, integrations, and traffic pipelines from storefront to conversion.',
      tags: ['Shopify', 'Amazon', 'eBay', 'Facebook Ads', 'E-Commerce']
    }
  ];


  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Javascript, Python & PHP', category: 'Language' },
    { name: 'Tailwind', category: 'Styling' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL & MongoDB', category: 'Database' },
    { name: 'Vercel & Render', category: 'Deployment' }
  ];

  const projects = [
    {
      title: 'Spaceline',
      status: 'In Development',
      description: 'A lightweight, minimal chat application focused on simplicity and speed. Real-time messaging with zero bloat.',
      tech: ['React', 'WebSockets', 'Node.js'],
      link: 'https://spaceline.radonarc.xyz',
      accent: '#BEF264'
    },
    {
      title: 'Notebot',
      status: 'Live',
      description: 'Transform Your Notes Into Knowledge Upload your lectures, generate summaries, and create practice quizzes with the power of artificial intelligence, Group with your Friends Together to discuss on Topics',
      tech: ['AI Integration', 'Gemini', 'MERN', 'Award Winning', 'AI-Powered Study Assistant'],
      link: 'https://notebot.radonarc.xyz',
      accent: '#aaf22c'
    },
    {
      title: 'Our Founder\'s Portfolio',
      status: 'Live',
      description: 'A Stunning Portfolio of Founder with experience in creating visually stunning designs and developing dynamic, responsive websites.',
      tech: ['Portfolio', 'MERN', 'AI'],
      link: 'https://portfolio.radonarc.xyz',
      accent: '#aaf22c'
    },
  ];

  const principles = [
    {
      icon: Terminal,
      title: 'Engineer-First',
      description: 'Built by developers who understand the constraints. Clean code, clear architecture, no technical debt.'
    },
    {
      icon: Zap,
      title: 'Performance Obsessed',
      description: 'Every millisecond matters. Optimized bundles, lazy loading, efficient rendering. Fast is a feature.'
    },
    {
      icon: Lock,
      title: 'Security by Default',
      description: 'Security is not an afterthought. Input validation, secure authentication, regular audits, zero trust architecture.'
    },
    {
      icon: Sparkles,
      title: 'User Experience',
      description: 'Intuitive interfaces that require no manual. Every interaction considered. Accessibility built in, not bolted on.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 antialiased overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#BEF264]/5 via-black to-black" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="relative border-b border-white/5 backdrop-blur-xl sticky top-0 z-50 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-bold tracking-tight flex items-center gap-2"
          >
            <span><img src={Logo} alt="RadonArc logo — web development and AI software studio" height='48px' width='48px'/></span>
            <span className="text-white">Radon</span>
            <span className="text-[#BEF264]">Arc</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-8 text-sm"
          >
            <a href="#services" className="text-gray-400 hover:text-[#BEF264] transition-colors duration-300">
              Services
            </a>
            <a href="#products" className="text-gray-400 hover:text-[#BEF264] transition-colors duration-300">
              Products
            </a>
            <a href="#about" className="text-gray-400 hover:text-[#BEF264] transition-colors duration-300">
              About
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 md:pt-40 pb-32 md:pb-48">
        <motion.div
          style={{ opacity }}
          className="max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-[#BEF264]/10 border border-[#BEF264]/20 rounded-full">
              <span className="text-[#BEF264] text-sm font-mono">v1.0 — Building in Public</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
          >
            RadonArc builds <span className="text-[#BEF264]">scalable web products</span> and real-time software experiments.

          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed"
          >
            No fluff. Just code that scales. We ship production-grade applications and experimental tools for developers who value precision over presentation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a 
              href="#contact"
              className="group px-8 py-4 bg-[#BEF264] text-black font-semibold rounded-lg hover:bg-[#BEF264]/90 transition-all duration-300 flex items-center gap-2"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#work"
              className="px-8 py-4 border border-white/10 text-white font-semibold rounded-lg hover:border-[#BEF264]/50 hover:bg-white/5 transition-all duration-300"
            >
              View Work
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-5 gap-6"
        >
          {[
            { label: 'Projects Shipped', value: '14+' },
            { label: 'Lines of Code', value: '100K+' },
            { label: 'Uptime SLA', value: '99.9%' },
            { label: 'Response Time', value: '<24h' },
            { label: 'Awards Won', value: '2' }
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#BEF264] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Capabilities Section */}
      <section id="services" className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Build</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl">
            Full-stack development with a focus on performance, scalability, and maintainability.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                variants={fadeInUp}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#BEF264]/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-[#BEF264]/0 group-hover:bg-[#BEF264]/5 rounded-2xl transition-all duration-500" />
                <div className="absolute -inset-px bg-gradient-to-r from-[#BEF264]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-12 h-12 bg-[#BEF264]/10 border border-[#BEF264]/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#BEF264]" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {capability.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {capability.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl">
            Modern tools. Battle-tested frameworks. Production-ready infrastructure.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#BEF264]/50 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="text-sm font-mono text-gray-500 mb-2">{tech.category}</div>
              <div className="text-xl font-bold text-white group-hover:text-[#BEF264] transition-colors">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Principles Section */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl">
            Principles that guide every line of code, every design decision, every deployment.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {principles.map((principle, i) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex gap-6 p-8 bg-white/5 border border-white/10 rounded-xl hover:border-[#BEF264]/30 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#BEF264]/10 border border-[#BEF264]/30 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#BEF264]" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">{principle.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Labs / Products Section */}
      <section id="products" className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Labs & Products</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl">
            Experimental projects. Internal tools going public. Building in the open.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-10 hover:border-[#BEF264]/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[#BEF264]/0 group-hover:bg-[#BEF264]/5 transition-all duration-500" />
              
              <div className="relative max-w-4xl">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span 
                    className="px-4 py-1.5 rounded-full text-sm font-mono uppercase tracking-wide"
                    style={{
                      backgroundColor: `${project.accent}15`,
                      borderColor: `${project.accent}30`,
                      color: project.accent,
                      borderWidth: '1px'
                    }}
                  >
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm font-mono text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className=" text-[#BEF264] text-lg leading-relaxed mb-6">
                  {project.link}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">The Studio.</h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                RadonArc is an independent development studio focused on building practical, no-noise software.
              </p>
              <p>
                We're engineers who write code, ship products, and solve real problems. No corporate speak. No vanity metrics. Just systems that work.
              </p>
              <p>
                Every project starts with constraints. Budget. Timeline. Technical debt. We navigate these honestly, communicate clearly, and deliver production-ready solutions.
              </p>
              <p className="text-[#BEF264]">
                Building since 2024. Shipping continuously.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="p-8 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-white">What We Value</h3>
              <ul className="space-y-3">
                {[
                  'Code quality over quick hacks',
                  'Documentation that developers actually read',
                  'Tests that catch bugs, not feelings',
                  'Clear communication, no jargon',
                  'Shipping over perfection paralysis'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#BEF264] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-[#BEF264]/10 border border-[#BEF264]/30 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-white">Availability</h3>
              <p className="text-gray-400 mb-4">
                Currently accepting new projects for Q2 2026. Response time under 24 hours.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-[#BEF264] font-semibold hover:gap-3 transition-all"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Build Something
          </h2>

          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind? Need technical consultation? Let’s talk specifics.
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="mailto:business@radonarc.xyz"
              className="px-10 py-5 bg-[#BEF264] text-black font-bold rounded-lg hover:bg-[#BEF264]/90 transition-all text-lg"
            >
              business@radonarc.xyz
            </a>

            <a
              href="#"
              className="px-10 py-5 border border-white/20 text-white font-bold rounded-lg hover:border-[#BEF264]/50 hover:bg-white/5 transition-all text-lg"
            >
              View Capabilities Deck
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 text-2xl text-gray-400">
            <a
              href="https://instagram.com/radonarc.official"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#BEF264] transition-colors"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://facebook.com/radonarc.official"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#BEF264] transition-colors"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a
              href="https://pk.linkedin.com/in/muhammad-rohan-7333a2120"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#BEF264] transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </motion.div>
      </section>


      {/* Footer */}
      <footer className="relative border-t border-white/5 mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-500">
              © 2026 RadonArc. Built with precision.
            </div>
            <div className="flex items-center gap-8 text-sm">
              <a href="https://github.com/MRohan46" className="text-gray-400 hover:text-[#BEF264] transition-colors">
                GitHub
              </a>
              <a href="https://instagram.com/radonarc.official" className="text-gray-400 hover:text-[#BEF264] transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com/radonarc.official" className="text-gray-400 hover:text-[#BEF264] transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RadonArc;