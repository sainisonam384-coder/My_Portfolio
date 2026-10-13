import { createFileRoute } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { ArrowDown, ArrowUpRight, BarChart3, Braces, Check, Code2, Copy, ExternalLink, GitBranch, Github, Globe, Info, Linkedin, Mail, Menu, Monitor, Palette, Presentation, ShieldCheck, Sparkles, Star, Terminal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import workspace from '@/assets/developer-workspace.jpg';
import portrait from '@/assets/sonam-saini.jpg.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Sonam Saini — Code, Design & Digital Experiences' },
    { name: 'description', content: 'Explore Sonam Saini’s developer and visual design portfolio. C++, web development, presentations, and creative collaborations.' },
    { property: 'og:title', content: 'Sonam Saini — Code, Design & Digital Experiences' },
    { property: 'og:description', content: 'A cybersecurity student bringing code, creativity, and thoughtful digital experiences together.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
});

const links = ['About', 'Skills', 'Projects', 'Services', 'Contact'];
const githubUrl = 'https://github.com/sainisonam384-coder';
const linkedinUrl = 'https://www.linkedin.com/in/sonam-saini-815026424/';
const socials = [
  { icon: Github, name: 'GitHub', href: githubUrl },
  { icon: Linkedin, name: 'LinkedIn', href: linkedinUrl },
];

function SocialLinks({ className }: { className?: string }) {
  return <div className={className}>{socials.map(({ icon: Icon, name, href }) => <Button key={name} variant="ghost" size="icon" className="social-button" asChild aria-label={name} title={name}><a href={href} target="_blank" rel="noreferrer noopener"><Icon /></a></Button>)}</div>;
}

const skills = [
  { icon: Code2, title: 'C++ & Core Programming', description: 'Problem-solving, algorithms, data structures, and core CS fundamentals.' },
  { icon: Monitor, title: 'HTML5 / CSS3 / JavaScript', description: 'Responsive layouts, interactive interfaces, and modern front-end design.' },
  { icon: Palette, title: 'Canva & Visual Design', description: 'Creative banners, UI assets, posters, and brand identity elements.' },
  { icon: Presentation, title: 'PowerPoint & Presentations', description: 'High-impact pitch decks, technical slides, and visual storytelling.' },
  { icon: BarChart3, title: 'Infographics & Data Viz', description: 'Complex technical ideas turned into clear, digestible visual graphics.' },
  { icon: GitBranch, title: 'Git & GitHub', description: 'Version control, collaborative workflows, and repository management.' },
];
const projects = [
  { title: 'LogicLab', tags: ['C++', 'Algorithms'], description: 'A concept for exploring core algorithms through a clean, menu-driven C++ toolkit.', kind: 'code' },
  { title: 'The Green Edit', tags: ['HTML / CSS', 'JavaScript'], description: 'An editorial-style website concept for a more thoughtful, sustainable everyday.', kind: 'web' },
  { title: 'Cyber, Simplified', tags: ['Canva', 'Visual Design'], description: 'A visual storytelling concept that makes cybersecurity feel clear and approachable.', kind: 'design' },
];

function ProjectArt({ kind }: { kind: string }) {
  if (kind === 'code') return <div className="project-art code-art"><div className="code-window"><div className="window-top"><i /><i /><i /><span>logiclab.cpp</span></div><div className="code-lines"><em>#include</em> &lt;iostream&gt;<br /><br /><em>int</em> main() {'{'}<br />&nbsp;&nbsp; cout &lt;&lt; <em>"Let’s solve it."</em>;<br />&nbsp;&nbsp; <em>return</em> 0;<br />{'}'}</div></div></div>;
  if (kind === 'web') return <div className="project-art web-art"><div className="mini-site"><div className="mini-nav"><span>THE GREEN EDIT</span><span>Journal &nbsp; About ↗</span></div><div className="mini-title">Small changes.<br /><i>Better living.</i></div><div className="mini-pill">EXPLORE THE JOURNAL ↗</div></div></div>;
  return <div className="project-art design-art"><div className="design-poster"><div className="poster-small">A smarter digital world</div><div className="poster-title">STAY<br />CYBER<br />SMART.</div><ShieldCheck className="poster-icon" /></div><div className="design-poster second"><div className="poster-small">Think before you click</div><div className="poster-title">YOUR<br />DATA.<br />YOUR<br />POWER.</div></div></div>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<{ type: 'contact' | 'project'; title: string; kind?: string } | null>(null);
  const [draft, setDraft] = useState('');
  const [copied, setCopied] = useState(false);
  const contact = () => { setDraft(''); setCopied(false); setModal({ type: 'contact', title: 'Let’s create something together.' }); };
  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setDraft(`Hi Sonam,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nReply to: ${data.get('email')}`);
  }
  async function copyDraft() {
    try { await navigator.clipboard.writeText(draft); setCopied(true); } catch { setCopied(false); }
  }
  return <>
    <header className="site-header"><div className="container-wide grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-5 md:flex md:justify-between">
      <a className="brand min-w-0" href="#about" aria-label="Sonam Saini home"><Braces className="brand-icon shrink-0" /><div><span className="brand-name">SONAM SAINI</span><span className="brand-caption">DEVELOPER & DESIGNER</span></div></a>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav>
      <SocialLinks className="header-social" />
      <Button variant="gold" className="header-cta" onClick={contact}>Get in Touch <ArrowUpRight /></Button>
      <Button variant="ghost" size="icon" className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
    </div>{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>)}<div className="mobile-social"><SocialLinks className="social-links" /><Button variant="ghost" size="icon" className="social-button" aria-label="Email" title="Email" onClick={() => { setMenuOpen(false); contact(); }}><Mail /></Button></div></nav>}</header>

    <main>
      <section className="hero" id="about">
        <img className="hero-photo" src={workspace} alt="A developer’s workspace with a coding laptop and warm geometric lamp" width={1536} height={1024} fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="container-wide hero-grid">
          <div className="hero-content">
            <div className="availability"><span className="status-dot" /> Open to learning & collaboration</div>
            <h1>BUILD.<br />CODE.<br />DESIGN.<span className="editorial">All in One Place.</span></h1>
            <p className="hero-subtitle">Crafting robust software solutions,<br />powerful scripts, and visual stories.</p>
            <p className="hero-description">First-year B.Tech CSE Cyber Security student bridging technical development with creative visual design.</p>
            <div className="hero-actions"><Button variant="gold" asChild><a href="#projects">Explore Projects <ArrowUpRight /></a></Button><Button variant="glass" onClick={contact} className="h-[45px] px-6 text-xs">Contact Me <Mail /></Button></div>
            <p className="stack-caption"><span>Tech Stack:</span> C++ · JavaScript · Web Dev · Visual Design · Git</p>
            <div className="hero-note"><Code2 className="text-primary h-8 w-8" strokeWidth={1.3} /><div><p className="text-xs font-medium">Logic meets creativity.</p><p className="mt-1 text-[10px] text-muted-foreground">One line. One pixel. One idea at a time.</p></div></div>
          </div>
          <figure className="portrait">
            <img src={portrait.url} alt="Sonam Saini, developer and visual designer" width={1208} height={1601} fetchPriority="high" />
            <figcaption><strong>Sonam Saini</strong><span>B.Tech CSE · Cyber Security</span></figcaption>
          </figure>
        </div>
      </section>
      <div className="stack-strip"><div className="container-wide stack-row"><span>MY CREATIVE TOOLKIT</span><div className="stack-item"><Code2 /> C++</div><div className="stack-item"><Braces /> JavaScript</div><div className="stack-item"><Globe /> HTML & CSS</div><div className="stack-item"><Palette /> Canva</div><div className="stack-item"><Presentation /> PowerPoint</div><div className="stack-item"><Github /> GitHub</div></div></div>

      <section className="section" id="skills"><div className="container-wide"><div className="section-heading"><div className="eyebrow">Skills & toolkit</div><h2>Everything you need<br /><span className="editorial">to bring ideas to life.</span></h2><p>A blend of technical thinking and creative expression.<br />The right tools to turn a good idea into something real.</p></div><div className="skills-grid">{skills.map(({ icon: Icon, title, description }) => <article className="glass-card skill-card" key={title}><Icon /><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section className="section projects-section" id="projects"><div className="container-wide"><div className="section-top"><div className="section-heading"><div className="eyebrow">Selected work</div><h2>Built with purpose.<br /><span className="editorial">Designed with care.</span></h2></div><span className="sample-label"><Info size={12} /> Illustrative project concepts</span></div><div className="projects-grid">{projects.map(project => <article className="glass-card overflow-hidden" key={project.title}><ProjectArt kind={project.kind} /><div className="project-body"><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-buttons"><Button variant="ghost" asChild><a href={githubUrl} target="_blank" rel="noreferrer noopener"><Github /> GitHub Repo</a></Button><Button variant="ghost" onClick={() => setModal({ type: 'project', title: project.title, kind: project.kind })}>Live Demo <ArrowUpRight className="text-primary" /></Button></div></div></article>)}</div></div></section>

      <section className="section service-band" id="services"><div className="container-wide"><div className="section-heading"><div className="eyebrow">What I offer</div><h2>Your next idea.<br /><span className="editorial">Let’s make it happen.</span></h2><p>From your first website to your next presentation —<br />let’s build something that makes an impression.</p></div><div className="services-grid">{[{ icon: Monitor, title: 'Custom Web Development', text: 'Thoughtful, responsive websites crafted with HTML, CSS, and JavaScript.' }, { icon: Terminal, title: 'C++ & Logic Building', text: 'Clean code, problem-solving, and core programming brought together.' }, { icon: Sparkles, title: 'Decks & Visual Storytelling', text: 'Compelling presentation decks, Canva designs, and clear infographics.' }].map(({ icon: Icon, title, text }) => <article className="service-item" key={title}><Icon /><div><h3>{title}</h3><p>{text}</p><Button variant="link" asChild><a href="#contact">Let’s collaborate <ArrowUpRight /></a></Button></div></article>)}</div></div></section>

      <section className="section"><div className="container-wide"><div className="section-heading"><div className="eyebrow">Good work. Great connections.</div><h2>Loved by peers<br /><span className="editorial">& collaborators.</span></h2><p>Sample testimonials · awaiting real collaborator feedback</p></div><div className="testimonials-grid">{[{ initials: 'P', role: 'Project teammate', quote: '“Thoughtful problem-solving and a creative eye — the kind of energy every team needs.”' }, { initials: 'D', role: 'Design collaborator', quote: '“Turns complex ideas into visuals that just make sense. Every detail feels intentional.”' }, { initials: 'C', role: 'Coding peer', quote: '“Curious, collaborative, and always ready to explore a better way to build something.”' }].map(item => <article className="glass-card quote-card" key={item.role}><div className="stars" aria-label="Sample five-star rating">{Array.from({ length: 5 }, (_, i) => <Star key={i} />)}</div><blockquote>{item.quote}</blockquote><div className="quote-author"><div className="initial-avatar">{item.initials}</div><div><strong>{item.role}</strong><span>Illustrative feedback</span></div></div></article>)}</div></div></section>

      <section className="cta-band" id="contact"><img src={workspace} width={1536} height={1024} loading="lazy" alt="" /><div className="cta-inner"><div className="eyebrow">Have something in mind?</div><h2>Ready to collaborate on code<br />or design projects?<br /><span className="editorial">Let’s bring your ideas to life.</span></h2><Button variant="gold" className="h-11 px-7 text-xs" onClick={contact}>Start a Conversation <ArrowUpRight /></Button><p>Great things start with a simple hello.</p></div></section>
    </main>

    <footer className="footer"><div className="container-wide"><div className="footer-row"><a className="brand" href="#about"><Braces className="brand-icon" /><div><span className="brand-name">SONAM SAINI</span><span className="brand-caption">DEVELOPER & DESIGNER</span></div></a><nav className="footer-links" aria-label="Footer navigation">{links.map(link => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav><div className="footer-social"><SocialLinks className="social-links" /><Button variant="ghost" size="icon" className="social-button" aria-label="Email" title="Email" onClick={contact}><Mail /></Button></div></div><div className="footer-bottom"><span>© 2026 Sonam Saini. All rights reserved.</span><span>Made with curiosity, code & a little creativity.</span></div></div></footer>

    <Dialog open={modal !== null} onOpenChange={open => { if (!open) setModal(null); }}><DialogContent className="max-h-[90vh] max-w-[calc(100%-32px)] overflow-y-auto sm:max-w-lg"><DialogTitle className="pr-5 leading-snug">{modal?.title}</DialogTitle><DialogDescription>{modal?.type === 'contact' ? 'A good collaboration starts with a good idea.' : 'Illustrative project concept'}</DialogDescription>
      {modal?.type === 'contact' && <><p className="dialog-note">Sonam’s contact address hasn’t been added yet. Prepare a message to copy and share; nothing is sent from this page.</p>{!draft ? <form onSubmit={prepareDraft}><label className="contact-field">Your name<input name="name" required placeholder="How should I call you?" maxLength={100} /></label><label className="contact-field">Your email<input name="email" type="email" required placeholder="you@example.com" /></label><label className="contact-field">Your idea<textarea name="message" required rows={4} placeholder="Tell me a little about your project…" maxLength={3000} /></label><Button variant="gold" type="submit" className="w-full">Prepare Message <ArrowUpRight /></Button></form> : <><label className="contact-field">Your message<textarea value={draft} readOnly rows={8} /></label><Button variant="gold" onClick={copyDraft}>{copied ? <Check /> : <Copy />}{copied ? 'Message Copied' : 'Copy Message'}</Button></>}</>}
      {modal?.type === 'project' && (modal.kind === 'repo' ? <p className="dialog-note">This is a sample project concept, not a published repository. A real GitHub link can be added when Sonam’s project is available.</p> : <><ProjectArt kind={modal.kind ?? 'code'} /><p className="dialog-note">A visual preview of the project concept. A published live demo hasn’t been added yet.</p></>)}
    </DialogContent></Dialog>
  </>;
}
