const shopUrl = "https://www.threads-of-tradition.com/shop.htm";
const classesUrl = "https://www.threads-of-tradition.com/classes.htm";
const mysteryUrl = "https://www.threads-of-tradition.com/mysteryfive-0.htm";

export default function Home() {
  return (
    <main>
      <div className="shipping-bar">
        <span>Free shipping on orders over $99</span>
        <a href="tel:14056932500">(405) 693-2500</a>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Threads of Tradition home">
          <span className="wordmark-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span><strong>Threads of Tradition</strong><small>QUILT SHOP · YUKON, OKLAHOMA</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href={shopUrl}>Shop</a><a href={classesUrl}>Classes</a><a href={mysteryUrl}>MysteryFive-0</a><a href="#visit">Visit</a>
        </nav>
        <a className="header-cta" href={shopUrl}>Shop online <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="route-shield">ROUTE<br /><b>66</b></span> Historic downtown Yukon</p>
          <h1>Fabric that tells a story.<br /><em>Classes that start one.</em></h1>
          <p className="hero-lede">A family-owned quilt shop filled with vibrant fabrics, uncommon finds, patient teachers, and plenty of room at the table.</p>
          <div className="hero-actions"><a className="button button-light" href={shopUrl}>Explore the shop <span>→</span></a><a className="text-link" href={classesUrl}>Find a class <span>↗</span></a></div>
        </div>
        <div className="hero-photo" role="img" aria-label="Colorful fabric bolts inside Threads of Tradition quilt shop">
          <div className="photo-note"><span>CURATED<br />WITH CARE</span><b>928 W. Main</b></div>
        </div>
      </section>

      <section className="intro section-shell">
        <p className="section-kicker">MAKE SOMETHING WORTH KEEPING</p>
        <div className="intro-grid">
          <h2>Your next favorite quilt<br />begins on Main Street.</h2>
          <p>We search high and low for fabrics, patterns, kits, and notions that have a point of view. Come for the color. Stay because someone remembers your project and asks how it turned out.</p>
        </div>
      </section>

      <section className="three-paths section-shell" aria-label="Ways to experience Threads of Tradition">
        <article className="path-card shop-card">
          <span className="card-number">01</span><div className="fabric-stack" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <div><p className="card-kicker">THE GOOD STUFF</p><h3>Shop the unusual.</h3><p>Vibrant cottons, thoughtful kits, books, patterns, and the finds you will not see stacked at every chain store.</p><a href={shopUrl}>Browse fabrics <span>→</span></a></div>
        </article>
        <article className="path-card class-card">
          <span className="card-number">02</span><div className="quilt-window" aria-hidden="true">{Array.from({ length: 16 }).map((_, i) => <i key={i} />)}</div>
          <div><p className="card-kicker">PULL UP A CHAIR</p><h3>Learn in good company.</h3><p>Never threaded a needle? Finishing your hundredth quilt? Our classes make room for both, and everyone between.</p><a href={classesUrl}>See the class calendar <span>→</span></a></div>
        </article>
        <article className="path-card online-card">
          <span className="card-number">03</span><div className="postal-mark" aria-hidden="true"><b>PACKED<br />IN YUKON</b><span>OK · 73099</span></div>
          <div><p className="card-kicker">FROM OUR SHELVES TO YOURS</p><h3>Shop Route 66 from anywhere.</h3><p>Order online and we will pack your fabric with care. Shipping is free when your cart reaches $99.</p><a href={shopUrl}>Start your order <span>→</span></a></div>
        </article>
      </section>

      <section className="mystery">
        <div className="mystery-pattern" aria-hidden="true" />
        <div className="mystery-badge-wrap"><img src="https://media.rainpos.com/13352/293x305_M50Member2026_20260701095918png.png" alt="Mystery Five-0 member since 2026" /></div>
        <div className="mystery-copy">
          <p className="section-kicker">A STORY IN STITCHES</p><h2>One quilt.<br />Clue by clue.</h2>
          <p>MysteryFive-0 turns a quilt project into an unfolding case. Join the community, receive each new clue, and piece together a design you cannot see coming.</p>
          <a className="button button-orange" href={mysteryUrl}>Uncover MysteryFive-0 <span>→</span></a>
        </div>
        <div className="case-file" aria-label="MysteryFive-0 highlights"><span>CASE FILE</span><h3>Creativity.<br />Community.<br />A little suspense.</h3><p>Virtual events, curated bundles, mini-mysteries, and plenty of reasons to keep guessing.</p><div className="case-stamp">CONFIDENTIAL</div></div>
      </section>

      <section className="belong section-shell">
        <div className="belong-art" aria-hidden="true"><div className="large-block">{Array.from({ length: 25 }).map((_, i) => <i key={i} />)}</div><span>EST.<br />WITH LOVE</span></div>
        <div className="belong-copy">
          <p className="section-kicker">THE CLASSROOM IS THE HEART OF THE SHOP</p><h2>Come to learn.<br /><em>Leave belonging.</em></h2>
          <p>Quilting has always been a communal art. Our classroom keeps that tradition alive with patient instruction, generous tables, shared discoveries, and the low hum of sewing machines at work.</p>
          <div className="belong-links"><a className="button button-dark" href={classesUrl}>Find your next class <span>→</span></a><a className="text-link dark-link" href="https://www.threads-of-tradition.com/about.htm">Our story <span>↗</span></a></div>
        </div>
      </section>

      <section className="gift-band">
        <div className="gift-copy"><p className="section-kicker">FOR THE QUILTER WHO HAS EVERYTHING</p><h2>Give them their next good idea.</h2><p>A Threads of Tradition gift card is fabric, a future project, or three glorious hours wandering the aisles. Their choice.</p></div>
        <a className="button button-cream" href="https://www.threads-of-tradition.com/gift-card.htm">Shop gift cards <span>→</span></a>
      </section>

      <section className="newsletter section-shell">
        <div><p className="section-kicker">FROM THE CUTTING TABLE</p><h2>Fresh fabric. New classes.<br />One useful email.</h2></div>
        <form action="https://www.threads-of-tradition.com" method="get"><label htmlFor="email">Email address</label><div><input id="email" name="email" type="email" placeholder="you@example.com" required /><button type="submit">Join the list <span>→</span></button></div><small>No clutter. Just shop news worth opening.</small></form>
      </section>

      <footer id="visit">
        <div className="footer-main">
          <div className="footer-brand"><span className="wordmark-mark" aria-hidden="true"><i /><i /><i /><i /></span><h2>Threads of<br />Tradition</h2><p>Conspiring to inspire on historic Route 66.</p></div>
          <div><h3>Visit the shop</h3><p>928 West Main Street<br />Yukon, Oklahoma 73099</p><a href="https://maps.google.com/?q=928+West+Main+Street+Yukon+OK+73099">Get directions ↗</a></div>
          <div><h3>Talk to us</h3><p><a href="tel:14056932500">(405) 693-2500</a><br /><a href="mailto:totrt66@gmail.com">totrt66@gmail.com</a></p><a href="https://www.threads-of-tradition.com/contact-us.htm">Store hours ↗</a></div>
          <div><h3>Explore</h3><p><a href={shopUrl}>Shop online</a><br /><a href={classesUrl}>Classes &amp; events</a><br /><a href={mysteryUrl}>MysteryFive-0</a></p></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Threads of Tradition</span><span>Family-owned · Yukon, Oklahoma · Historic Route 66</span></div>
      </footer>
    </main>
  );
}
