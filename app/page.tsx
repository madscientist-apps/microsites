const products = [
  { name: "Breakfast pastries", note: "Croissants, danish, muffins and cinnamon rolls, pulled from the oven while Yukon is still waking up.", image: "/images/pastries.webp", className: "product-wide" },
  { name: "Artisan breads", note: "Sourdough, jalapeño cheddar, challah and rotating loaves, shaped and baked in house.", image: "/images/breads.webp" },
  { name: "Custom cakes", note: "A centerpiece made for your people, your colors and your reason to celebrate.", image: "/images/cakes.webp" },
  { name: "Whole desserts", note: "Cheesecakes, pies, roulades and trifles for the table that needs one more good thing.", image: "/images/desserts.webp", className: "product-wide" },
  { name: "Savory", note: "Pasties, pierogi, soups and take-and-bake comfort food made the same way: from zero.", image: "/images/savory.webp" },
  { name: "Holiday", note: "The familiar favorites you wait all year for, offered through seasonal pre-order menus.", image: "/images/holiday.webp" },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.6" r="1" className="fill" /></svg>;
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-4H14V7.2c0-1.2.4-2.2 2.1-2.2H18V1.4c-.7-.1-1.8-.4-3.2-.4C11.7 1 9.5 2.9 9.5 6.6V9H6v4h3.5v8H14Z" /></svg>;
}

export default function Home() {
  return (
    <main>
      <div className="topbar"><p>Wednesday–Saturday · 6 AM–Noon</p><a href="tel:+14054674155">Call or text (405) 467-4155</a></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="9oh6 Baking Co. home"><img src="/images/logo.png" alt="9oh6 Baking Co." /></a>
        <nav aria-label="Main navigation"><a href="#bakery">Our bakery</a><a href="#bakes">What we bake</a><a href="#visit">Visit</a></nav>
        <a className="header-cta" href="tel:+14054674155">Start an order</a>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="/images/pastries.webp" alt="A generous display of fresh croissants and breakfast pastries from 9oh6 Baking Co." />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Scratch-made in Yukon, Oklahoma</p>
          <h1>Made from scratch.<br /><em>Every single day.</em></h1>
          <p className="hero-copy">Before the sun comes up, the ovens are already warm. Come find the croissants, sourdough, cakes and pierogi worth getting out of bed for.</p>
          <div className="hero-actions"><a className="button button-cream" href="#bakes">See what we make <Arrow /></a><a className="text-link light-link" href="#visit">12801 NW 10th St. <Arrow /></a></div>
        </div>
        <div className="hero-hours" aria-label="Open Wednesday through Saturday from 6 AM to noon"><span>Doors open</span><strong>6:00</strong><small>in the morning</small></div>
      </section>

      <section className="intro" id="bakery">
        <div className="section-label"><span>01</span> Why 9oh6</div>
        <div className="intro-copy">
          <p className="eyebrow">The neighborhood bakery, done properly</p>
          <h2>Flour on the apron.<br /><em>Nothing up the sleeve.</em></h2>
          <p className="lead">Everything here begins in the kitchen, not a box. Real ingredients. Small batches. Fresh work, every morning.</p>
        </div>
        <div className="values-grid">
          <article><span className="value-number">01</span><h3>Made today</h3><p>Pastries, breads and sweets are made in house from scratch, every day the bakery is open.</p></article>
          <article><span className="value-number">02</span><h3>Made for you</h3><p>Custom cakes and special orders get genuine conversation and craft. Allow one to two weeks for cakes.</p></article>
          <article><span className="value-number">03</span><h3>Made with care</h3><p>Gluten-free options are prepared with careful attention to reducing cross-contact risk.</p></article>
          <article><span className="value-number">04</span><h3>Room to make</h3><p>Need a licensed space for your own food business? Commissary kitchen rental is available.</p></article>
        </div>
      </section>

      <section className="products" id="bakes">
        <div className="products-heading"><div><p className="eyebrow light">A counter full of reasons</p><h2>Come hungry.<br /><em>Leave with a box.</em></h2></div><p>The menu changes with the season, the holiday and occasionally a very good idea. Here’s what you can expect to find.</p></div>
        <div className="product-grid">
          {products.map((product, index) => <article className={`product-card ${product.className ?? ""}`} key={product.name}><img src={product.image} alt={`${product.name} made by 9oh6 Baking Co.`} loading={index > 1 ? "lazy" : "eager"} /><div className="product-overlay" /><div className="product-copy"><span>0{index + 1}</span><h3>{product.name}</h3><p>{product.note}</p></div></article>)}
        </div>
      </section>

      <section className="daily-note">
        <div className="daily-stamp" aria-hidden="true"><span>baked</span><strong>fresh</strong><span>daily</span></div>
        <div><p className="eyebrow">A small heads-up</p><h2>The good stuff<br /><em>does sell out.</em></h2></div>
        <p>That’s the nature of baking fresh in small batches. Come early for the widest selection, and follow along for daily case updates and holiday menus.</p>
        <div className="social-row"><a href="https://instagram.com/9oh6_baking" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram <Arrow /></a><a href="https://www.facebook.com/9oh6Baking/" target="_blank" rel="noreferrer"><FacebookIcon /> Facebook <Arrow /></a></div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-main"><p className="eyebrow light">Come find us. Call us.</p><h2>We love talking<br /><em>about food.</em></h2><p>Orders are accepted in person, by call or by text. If you’re dreaming up a cake, planning a holiday table or hunting for something unusual, ask. It never hurts.</p><a className="phone" href="tel:+14054674155">(405) 467-4155</a></div>
        <div className="visit-details">
          <div><p className="detail-label">Visit</p><a href="https://maps.google.com/?q=12801+NW+10th+St+Suite+200+Yukon+OK+73099" target="_blank" rel="noreferrer">12801 NW 10th St.<br />Suite 200<br />Yukon, OK 73099 <Arrow /></a></div>
          <div><p className="detail-label">Hours</p><p>Wednesday–Saturday<br /><strong>6 AM–Noon</strong><br />Sunday–Tuesday · Closed</p></div>
          <div><p className="detail-label">Special orders</p><p>Custom cakes typically need<br /><strong>1–2 weeks’ notice.</strong></p></div>
        </div>
      </section>

      <footer><a className="footer-brand" href="#top">9<em>oh</em>6</a><p>Scratch-made bakery · Yukon, Oklahoma</p><div><a href="https://instagram.com/9oh6_baking" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/9oh6Baking/" target="_blank" rel="noreferrer">Facebook</a></div></footer>
    </main>
  );
}
