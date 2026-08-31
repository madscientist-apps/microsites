import {
  ArrowRight, BadgeCheck, Check, Flame, MapPin, Menu, Phone, Quote,
  ShieldCheck, Snowflake, Star, Wrench,
} from "lucide-react";

const phoneHref = "tel:+14053545541";

function RainbowMark() {
  return (
    <svg className="rainbow-mark" viewBox="0 0 88 52" aria-hidden="true">
      <path d="M8 47a36 36 0 0 1 72 0" stroke="#c14f38" strokeWidth="8" fill="none" />
      <path d="M18 47a26 26 0 0 1 52 0" stroke="#e7a536" strokeWidth="8" fill="none" />
      <path d="M28 47a16 16 0 0 1 32 0" stroke="#4f7c65" strokeWidth="8" fill="none" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>HVAC Contractors — Quick Response Time | Same-Day Services | Licensed and Insured</span>
          <a href="https://maps.google.com/?q=501+Cedar+Ave+Yukon+OK+73099"><MapPin size={14} /> 501 Cedar Ave, Yukon</a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Rainbow Heat and Air home">
            <RainbowMark />
            <span className="brand-copy"><strong>RAINBOW</strong><small>HEAT &amp; AIR · SINCE 1976</small></span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#air-conditioning">Air Conditioning</a><a href="#heating">Heating</a>
            <a href="#carrier">Carrier</a><a href="#about">About</a><a href="#contact">Contact</a>
          </nav>
          <a className="header-phone" href={phoneHref}>
            <span className="phone-icon"><Phone size={18} /></span>
            <span><small>Talk to a real person</small><strong>(405) 354-5541</strong></span>
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><Menu /></summary>
            <div><a href="#air-conditioning">Air Conditioning</a><a href="#heating">Heating</a><a href="#carrier">Carrier</a><a href="#about">About</a><a href="#contact">Contact</a><a href={phoneHref}>Call (405) 354-5541</a></div>
          </details>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" role="img" aria-label="Row of outdoor air conditioning units mounted on a building wall" />
        <div className="hero-shade" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Yukon&apos;s hometown comfort company · Est. 1976</div>
            <h1>Get Consistent Heating or Air Conditioning Systems Installed <em>Today</em></h1>
            <p>Rainbow Heat &amp; Air Inc is a family-owned business with over 25 years of experience providing air conditioning and heating services. We&apos;re a Christian-based business and are loyal and honest with our customers. We&apos;re licensed and bonded for your protection. Call us for a FREE estimate — we&apos;ll provide you with an estimate on the same business day.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={phoneHref}><Phone size={18} /> Request a Service</a>
              <a className="button button-ghost" href="#air-conditioning">Explore services <ArrowRight size={18} /></a>
            </div>
            <div className="hero-trust">
              <span><BadgeCheck size={17} /> Licensed &amp; bonded</span>
              <span><Wrench size={17} /> We service all brands</span>
              <span><ShieldCheck size={17} /> Family owned</span>
            </div>
          </div>

          <aside className="service-card" aria-label="Request service">
            <div className="year-stamp"><span>EST.</span><strong>1976</strong><small>YUKON, OK</small></div>
            <div className="service-card-top"><span className="status-dot" /> Same-day service available</div>
            <div className="service-card-body">
              <p className="kicker">Need help today?</p>
              <h2>Let&apos;s get your home comfortable again.</h2>
              <p>Call our local Yukon team. We return calls and provide estimates on the same business day.</p>
              <a className="card-call" href={phoneHref}>
                <span><Phone size={22} /></span>
                <div><small>Call Rainbow now</small><strong>(405) 354-5541</strong></div>
                <ArrowRight size={20} />
              </a>
              <small className="microcopy">Free estimates on new installations and replacements.</small>
            </div>
          </aside>
        </div>
      </section>

      <section className="legacy-strip">
        <div className="shell legacy-grid">
          <div className="legacy-year"><strong>50</strong><span>years of<br />local service</span></div>
          <p>Serving our neighbors with the same straightforward values since 1976.</p>
          <div className="legacy-points">
            <span><Check /> Quick response</span><span><Check /> Honest recommendations</span><span><Check /> Quality workmanship</span>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="kicker">How we can help</p><h2>Home comfort, handled.</h2></div>
            <p>Whether the AC quits in July or your heater starts acting up in January, our team brings experience, practical solutions, and no runaround.</p>
          </div>
          <div className="service-grid">
            <article className="service-tile cooling" id="air-conditioning">
              <div className="tile-number">01</div><div className="icon-box"><Snowflake /></div>
              <h3>Air Conditioning</h3>
              <p>Your home should be at a comfortable temperature all year long, despite the season — is it? If your AC is inconsistent or you go through spurts of hot spells, give us a call. We can help provide your home with a more consistent system.</p>
              <a href={phoneHref}>Learn More <ArrowRight /></a>
            </article>
            <article className="service-tile heating" id="heating">
              <div className="tile-number">02</div><div className="icon-box"><Flame /></div>
              <h3>Heating</h3>
              <p>You and your family need to be comfortable during the long, brutal months of winter. Whether you want one of our experts to check your current system or replace it with one of our energy-efficient systems, we&apos;re here to help.</p>
              <a href={phoneHref}>Learn More <ArrowRight /></a>
            </article>
            <article className="service-tile systems" id="carrier">
              <div className="tile-number">03</div><div className="icon-box"><Wrench /></div>
              <h3>Carrier Products</h3>
              <p>Turn to the Carrier factory authorized dealers at Rainbow Heat &amp; Air Inc for quality air conditioning and heating products. Call us for a FREE estimate on new installations and replacements. Our response time is quick.</p>
              <a href={phoneHref}>Learn More <ArrowRight /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="gallery section" id="systems">
        <div className="shell">
          <div className="section-heading">
            <p className="kicker">Equipment we install and service</p>
            <h2>Built to run quietly for years.</h2>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-tile">
              <div className="gallery-photo" role="img" aria-label="Outdoor residential air conditioning condenser unit installed on a concrete pad" style={{ backgroundImage: "url('https://images.pexels.com/photos/24828656/pexels-photo-24828656.jpeg?auto=compress&cs=tinysrgb&w=1200')" }} />
              <figcaption>Residential condenser installs</figcaption>
            </figure>
            <figure className="gallery-tile">
              <div className="gallery-photo" role="img" aria-label="Row of multiple outdoor air conditioning units serving a commercial building" style={{ backgroundImage: "url('https://images.pexels.com/photos/28726413/pexels-photo-28726413.jpeg?auto=compress&cs=tinysrgb&w=1200')" }} />
              <figcaption>Multi-unit &amp; commercial systems</figcaption>
            </figure>
            <figure className="gallery-tile">
              <div className="gallery-photo" role="img" aria-label="HVAC technician inspecting an outdoor unit during a service call" style={{ backgroundImage: "url('https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1200')" }} />
              <figcaption>Routine inspection &amp; service</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="why section" id="why-rainbow">
        <div className="shell why-grid">
          <div className="why-image-wrap">
            <div className="why-image" role="img" aria-label="Technician carefully working on home equipment" />
            <div className="script-note">Neighbors helping neighbors<br /><span>since 1976</span></div>
          </div>
          <div className="why-copy">
            <p className="kicker">Why Rainbow</p><h2>Old-fashioned integrity. Modern home comfort.</h2>
            <p className="lead">We&apos;re a Christian, family-owned business. That means our work is guided by something deeper than the day&apos;s service schedule: treat people honestly, care for their homes, and keep our word.</p>
            <div className="reason-list">
              <div><span><BadgeCheck /></span><p><strong>Rooted right here</strong>We&apos;ve served Yukon and the surrounding area for 50 years.</p></div>
              <div><span><ShieldCheck /></span><p><strong>No-pressure guidance</strong>Clear recommendations built around what your home actually needs.</p></div>
              <div><span><Star /></span><p><strong>Trusted experience</strong>Licensed, insured, and a Carrier Factory Authorized Dealer.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial section" id="reviews">
        <div className="shell testimonial-inner">
          <Quote className="quote-icon" />
          <div className="stars" aria-label="5 stars"><Star /><Star /><Star /><Star /><Star /></div>
          <blockquote>“I would recommend Rainbow Heating &amp; Air to everyone, and I have. They are reasonable in their charges, quick to respond and very courteous.”</blockquote>
          <p><strong>Diane W.</strong><span>Rainbow customer</span></p>
        </div>
        <div className="shell more-reviews">
          <div className="review-tile">
            <div className="stars" aria-label="5 stars"><Star /><Star /><Star /><Star /><Star /></div>
            <p>“I have used Rainbow for over 15 years and have always been impressed with their service and expertise. When it came time to replace my heat and air unit I totally trusted their choice of Carrier. I will continue to use Rainbow.”</p>
            <span>Long-time Rainbow customer</span>
          </div>
          <div className="review-tile">
            <div className="stars" aria-label="5 stars"><Star /><Star /><Star /><Star /><Star /></div>
            <p>“Rainbow Heat and Air was very knowledgeable, professional and very friendly. I would highly recommend them to anyone I know.”</p>
            <span>Rainbow customer</span>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="shell about-grid">
          <div><p className="kicker">A Yukon original</p><h2>Still local.<br />Still answering the phone.</h2></div>
          <div className="about-copy">
            <p className="lead">A lot has changed since Rainbow opened in 1976. Our commitment to the people who invite us into their homes hasn&apos;t.</p>
            <p>We believe expertise matters, but character matters too. So we show up, explain what we find, and help you make a confident decision. Simple as that.</p>
            <a href={phoneHref}>Meet your hometown HVAC team <ArrowRight /></a>
          </div>
          <div className="about-stat"><span>Est.</span><strong>1976</strong><small>Yukon, Oklahoma</small></div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="shell cta-inner">
          <div><p className="kicker">We&apos;re ready when you need us</p><h2>Let&apos;s make your home comfortable.</h2></div>
          <a className="button button-light" href={phoneHref}><Phone size={19} /> (405) 354-5541</a>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div>
            <a className="brand footer-brand" href="#top"><RainbowMark /><span className="brand-copy"><strong>RAINBOW</strong><small>HEAT &amp; AIR · SINCE 1976</small></span></a>
            <p>Honest heating and air conditioning service for Yukon and surrounding communities.</p>
          </div>
          <div><h3>Services</h3><a href="#air-conditioning">Air Conditioning</a><a href="#heating">Heating</a><a href="#carrier">Carrier Products</a></div>
          <div><h3>Visit us</h3><a href="https://maps.google.com/?q=501+Cedar+Ave+Yukon+OK+73099">501 Cedar Ave<br />Yukon, OK 73099</a><span>Mon–Fri, 8am–5pm<br />Closed Sat–Sun</span></div>
          <div><h3>Contact</h3><a className="footer-phone" href={phoneHref}>(405) 354-5541</a><a href="mailto:rainbowha95@yahoo.com">rainbowha95@yahoo.com</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Rainbow Heat &amp; Air Inc.</span><span>Licensed &amp; bonded · Family owned · Serving Yukon since 1976</span></div>
      </footer>
    </main>
  );
}
