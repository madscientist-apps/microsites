import { ArrowRight, BadgeCheck, CarFront, ChevronRight, Clock3, Gauge, MapPin, Phone, ScanLine, ShieldCheck, Wrench, Zap } from "lucide-react";

const services = [
  [ScanLine, "Diagnostics", "Modern computer diagnostics and drivability troubleshooting."],
  [Gauge, "Brakes & suspension", "Confident stopping, smooth handling, and a safer daily drive."],
  [Zap, "Engine & electrical", "From check-engine lights to electrical systems and major repairs."],
  [CarFront, "Diesel & gasoline", "Full-service care for domestic, foreign, and diesel vehicles."],
] as const;

export default function Home() {
  return <main>
    <div className="utility-bar"><div className="shell utility-inner"><span><Clock3 size={14}/> Mon–Fri 8–6 <i/> Sat 8–3</span><span className="utility-location"><MapPin size={14}/> 1208 N Council Rd, Oklahoma City</span></div></div>
    <header className="site-header"><div className="shell nav-wrap">
      <a className="brand" href="#top" aria-label="M and J Auto Service home"><span className="brand-mark"><Wrench size={23}/></span><span className="brand-name">M <b>&amp;</b> J <small>Auto Service</small></span></a>
      <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#about">Why M &amp; J</a><a href="#visit">Visit Us</a></nav>
      <a className="phone-cta" href="tel:+14057922311"><Phone size={17}/><span>405-792-2311</span></a>
    </div></header>
    <section className="hero" id="top"><div className="hero-image"/><div className="hero-wash"/><div className="shell hero-grid"><div className="hero-copy">
      <p className="eyebrow"><span/> Family-run. Oklahoma proud.</p>
      <h1>Repairs you can trust.<br/><em>Answers you can understand.</em></h1>
      <p className="hero-lede">Honest, experienced auto care for the vehicles that keep your life moving. No mystery. No runaround. Just solid work.</p>
      <div className="hero-actions"><a className="button button-clay" href="tel:+14057922311">Call to schedule <ArrowRight size={17}/></a><a className="text-link" href="#services">Explore our services <ChevronRight size={16}/></a></div>
      <div className="trust-row"><span><BadgeCheck size={20}/> 15+ years combined experience</span><span><ShieldCheck size={20}/> All makes &amp; models</span></div>
    </div></div><div className="hero-tag">Drive it. <strong>We fix it.</strong></div></section>
    <section className="service-strip" id="services"><div className="shell">
      <div className="split-heading"><div><p className="eyebrow dark"><span/> What we do</p><h2>One shop for the<br/><em>whole vehicle.</em></h2></div><p>From routine maintenance to the repair you did not see coming, our experienced technicians help you understand what matters now, what can wait, and what it takes to get safely back on the road.</p></div>
      <div className="service-grid">{services.map(([Icon,title,text],i)=><article className="service-card" key={title}><div className="service-number">0{i+1}</div><Icon size={28}/><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="service-list"><span>Oil changes</span><span>Safety inspections</span><span>Tune-ups</span><span>ECU reflashing</span><span>Engine &amp; transmission replacement</span></div>
    </div></section>
    <section className="about" id="about"><div className="shell about-grid"><div className="about-art"><div className="about-stamp"><span>15+</span> years of<br/>experience</div><div className="tool-lines"/></div><div className="about-copy">
      <p className="eyebrow dark"><span/> A better kind of shop</p><h2>Your car is complicated.<br/><em>Getting it fixed shouldn’t be.</em></h2>
      <p className="lead">M &amp; J is a family-run business built around a simple idea: good service should come with good explanations and no surprises.</p>
      <div className="principles"><div><b>01</b><p><strong>Straight answers</strong><br/>We tell you what we find and help you make a clear decision.</p></div><div><b>02</b><p><strong>Capable hands</strong><br/>Experienced technicians work on foreign, domestic, gas, and diesel vehicles.</p></div><div><b>03</b><p><strong>Local care</strong><br/>We live here too. Every repair carries our name back into the community.</p></div></div>
    </div></div></section>
    <section className="visit" id="visit"><div className="shell visit-grid"><div><p className="eyebrow light"><span/> Ready when you are</p><h2>Let’s get you<br/><em>back on the road.</em></h2><a className="button button-cream" href="tel:+14057922311"><Phone size={17}/> Call 405-792-2311</a></div><div className="visit-details"><div><MapPin size={21}/><p><strong>Visit the shop</strong><br/>1208 N Council Rd<br/>Oklahoma City, OK 73127</p></div><div><Clock3 size={21}/><p><strong>Shop hours</strong><br/>Monday–Friday, 8 AM–6 PM<br/>Saturday, 8 AM–3 PM<br/><small>Night drop available</small></p></div></div></div></section>
    <footer><div className="shell footer-inner"><div className="brand footer-brand"><span className="brand-mark"><Wrench size={20}/></span><span className="brand-name">M <b>&amp;</b> J <small>Auto Service</small></span></div><p>Family-run auto repair in Oklahoma City.</p><p>© 2026 M &amp; J Auto Service</p></div></footer>
  </main>;
}
