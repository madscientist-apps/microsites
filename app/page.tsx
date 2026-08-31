import {
  ArrowRight, BadgeCheck, ChevronRight, Fan, Flame, Gauge, Menu,
  MessageSquareText, Phone, ShieldCheck, Snowflake, Sparkles,
  ThermometerSun, Wind, Wrench,
} from "lucide-react";

const phoneDisplay = "(405) 265-7226";
const phoneHref = "tel:+14052657226";
const bookingHref = "https://book.housecallpro.com/book/AC-Medic-Heating--Air-Conditioning/53dc647e7cda49fc9dce5b5e2c810094?v2=true";

const services = [
  { icon: Snowflake, title: "AC repair", body: "Warm air, strange noises, or nothing at all. We diagnose the real problem and explain the options." },
  { icon: Flame, title: "Heating repair", body: "Reliable furnace and heat-pump service when an Oklahoma cold snap finds the weak spot." },
  { icon: ThermometerSun, title: "System installation", body: "Right-sized replacement options, clear pricing, and no pressure to buy more system than your home needs." },
  { icon: Wind, title: "Duct repair", body: "Better airflow, fewer hot and cold rooms, and less conditioned air disappearing into the attic." },
  { icon: Gauge, title: "Seasonal tune-ups", body: "Practical maintenance that helps your system run cleaner, longer, and more efficiently." },
  { icon: Sparkles, title: "Advanced coil cleaning", body: "A deeper clean for restricted, dirty coils that can drag down comfort and system performance." },
];

const serviceAreas = ["Mustang", "Yukon", "Oklahoma City", "Union City", "Tuttle", "Newcastle", "Blanchard", "Minco", "Piedmont", "Bethany", "Moore", "Nichols Hills"];

function BrandMark() {
  return (
    <div className="brand" aria-label="AC Medic Heating and Air Conditioning">
      <span className="brand-icon"><Snowflake size={21} strokeWidth={2.4} /></span>
      <span className="brand-copy"><strong>AC MEDIC</strong><small>HEATING &amp; AIR</small></span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span><span className="pulse" /> 24/7 emergency service across Mustang, Yukon &amp; the OKC metro</span>
        <a href={phoneHref}>Call or text {phoneDisplay}</a>
      </div>

      <header className="site-header">
        <a href="#top" className="brand-link"><BrandMark /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a><a href="#story">Our story</a><a href="#why-us">Why AC Medic</a><a href="#areas">Service area</a>
        </nav>
        <a className="header-cta" href={bookingHref} target="_blank" rel="noreferrer">Request service <ArrowRight size={16} /></a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><Menu size={22} /></summary>
          <div><a href="#services">Services</a><a href="#story">Our story</a><a href="#why-us">Why AC Medic</a><a href="#areas">Service area</a><a href={phoneHref}>Call {phoneDisplay}</a></div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="eyebrow"><Wrench size={16} /> Family owned. Oklahoma raised. Serving since 2014.</p>
          <h1>We started with <em>$42,</em><br />an ambulance,<br />and a dream.</h1>
          <p className="hero-lede">We still run on the same thing that got us here: honest work, fair options, and treating your family like our own.</p>
          <div className="hero-actions">
            <a className="button button-amber" href={phoneHref}><Phone size={18} /> Call or text us</a>
            <a className="button button-ghost" href={bookingHref} target="_blank" rel="noreferrer">Book online <ChevronRight size={18} /></a>
          </div>
          <p className="hero-note"><BadgeCheck size={17} /> Licensed, insured, and available around the clock.</p>
        </div>
        <div className="hero-story-card">
          <span className="story-year">2014</span><p>One retired ambulance became our first service truck.</p><span>That scrappy beginning still shapes how we treat every dollar you spend.</span>
        </div>
        <div className="scroll-cue"><span /> SCROLL TO BREATHE EASIER</div>
      </section>

      <section className="trust-strip" aria-label="Why homeowners trust AC Medic">
        <div><ShieldCheck /><span><strong>One-year parts warranty</strong>Free replacement on qualifying parts</span></div>
        <div><MessageSquareText /><span><strong>No scare tactics</strong>Clear options, explained plainly</span></div>
        <div><Fan /><span><strong>Repair-minded technicians</strong>If it can be fixed, we can fix it</span></div>
        <div><BadgeCheck /><span><strong>A+ BBB accredited</strong>Locally owned since 2014</span></div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div><p className="eyebrow dark"><span>01</span> HOW WE HELP</p><h2>Comfort restored.<br />Runaround removed.</h2></div>
          <p>Whether your system needs a small repair or a full replacement, you get the same thing first: an honest diagnosis and room to decide.</p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, body }, index) => (
            <article className="service-card" key={title}>
              <div className="service-icon"><Icon size={27} /></div><span className="service-number">0{index + 1}</span><h3>{title}</h3><p>{body}</p><a href={phoneHref}>Get help <ArrowRight size={15} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="story section" id="story">
        <div className="story-visual" aria-hidden="true">
          <div className="big-number">$42</div><div className="story-rule" /><p>ALL THAT<br />WAS LEFT</p><div className="ambulance-label"><span>FIRST SERVICE RIG</span><strong>RET. AMBULANCE</strong></div>
        </div>
        <div className="story-copy">
          <p className="eyebrow dark"><span>02</span> THE AC MEDIC STORY</p>
          <h2>Built because doing the right thing shouldn’t get you fired.</h2>
          <p className="lead">Mike Bales refused to install a wildly overpriced part a customer didn’t need. He lost his job. Then he and Bri started a different kind of HVAC company.</p>
          <p>They scraped together enough to buy a retired ambulance, drove two hours to negotiate the deal, and came home with a service truck and $42 to their name. AC Medic was born from a stubborn idea: homeowners deserve knowledge, options, and the dignity of making their own decision.</p>
          <p>More than a decade later, the team is bigger. The promise hasn’t changed.</p>
          <div className="signature"><span>Mike &amp; Bri Bales</span><small>FOUNDERS, AC MEDIC</small></div>
        </div>
      </section>

      <section className="promise" id="why-us">
        <div className="promise-intro"><p className="eyebrow"><span>03</span> OUR PROMISE</p><h2>Your broken AC<br />is stressful enough.</h2><p>So we stripped the sales games out of the service call.</p></div>
        <div className="promise-list">
          <article><span>01</span><div><h3>We diagnose before we prescribe.</h3><p>You’ll understand what failed, what can be repaired, and what each option costs before work begins.</p></div></article>
          <article><span>02</span><div><h3>We don’t age-shame your equipment.</h3><p>An older unit is not an automatic replacement. If it can be safely fixed, repair stays on the table.</p></div></article>
          <article><span>03</span><div><h3>We stand behind the repair.</h3><p>Qualifying part replacements include a one-year free replacement warranty, plus a 30-day no-hassle diagnostic guarantee.</p></div></article>
        </div>
      </section>

      <section className="testimonial section">
        <div className="quote-mark">“</div><blockquote>Honest and fair pricing. Excellent and fast service. These guys know what they’re doing. They will not try to sell you something you don’t need.</blockquote>
        <div className="quote-credit"><span className="stars">★★★★★</span><strong>David Czarnecki</strong><small>Oklahoma City homeowner</small></div>
      </section>

      <section className="rescue section">
        <div className="rescue-copy"><p className="eyebrow dark">HOT HOUSE? COLD HOUSE? WEIRD NOISE?</p><h2>Tell us what’s broken.<br />We’ll take it from here.</h2><p>Call or text anytime. You’ll get a real conversation, a clear next step, and no runaround.</p></div>
        <div className="rescue-card"><div><span>24</span><small>/ 7</small></div><p>Emergency service</p><a href={phoneHref}><Phone size={20} /> {phoneDisplay}</a><a className="text-link" href={bookingHref} target="_blank" rel="noreferrer">Or request service online <ArrowRight size={15} /></a></div>
      </section>

      <footer id="areas">
        <div className="footer-main">
          <div className="footer-brand"><BrandMark /><p>Honest heating and air service for the people we call neighbors.</p></div>
          <div className="area-list"><p className="footer-label">PROUDLY SERVING</p><div>{serviceAreas.map((area) => <span key={area}>{area}</span>)}</div></div>
          <div className="footer-contact"><p className="footer-label">CALL OR TEXT ANYTIME</p><a href={phoneHref}>{phoneDisplay}</a><span>24/7 emergency service</span><span>193 N Centennial Way, Mustang, OK</span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 AC Medic Inc.</span><span>Family owned since 2014 · Oklahoma License #00114663</span></div>
      </footer>
    </main>
  );
}
