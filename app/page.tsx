const menuItems = [
  { name: "Tacos", image: "/images/taco-closeup.webp", position: "center", tone: "lime" },
  { name: "Chips & Salsa", image: "/images/queso-closeup.webp", position: "center", tone: "red" },
  { name: "Quesadilla", image: "/images/quesadilla.webp", position: "center", tone: "gold" },
  { name: "Burritos", image: "/images/burritos.webp", position: "center", tone: "ink" },
  { name: "Desserts", image: "/images/dessert.webp", position: "center", tone: "pink" },
];

const hours = [
  ["Monday", "Closed"],
  ["Tuesday – Thursday", "11am – 8pm"],
  ["Friday – Saturday", "11am – 9pm"],
  ["Sunday", "11am – 8pm"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Toni’s Taco home">
          <img src="/images/tonis-logo.webp" alt="Toni’s Taco" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#story">Our story</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="order-button" href="#order">Start an order <span>↓</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Yukon made · Est. 2019</p>
          <h1>Come hungry.<br /><em>Leave happy.</em></h1>
          <p className="hero-lede">Brisket tacos, breakfast tacos, build-your-own burritos, and everything in between.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="tel:+14052657554">Order carryout <span>↗</span></a>
            <a className="button button-outline" href="https://www.ubereats.com/store/tonis-taco/fPLzy3oBQgWMbhvj7g4hIg" target="_blank" rel="noreferrer">Order delivery <span>↗</span></a>
          </div>
          <div className="local-note">
            <span className="spark">✦</span>
            <p><strong>Breakfast served all day</strong><br />Made from scratch. Served like family.</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="sunburst" aria-hidden="true" />
          <div className="photo-frame">
            <img src="/images/hero-food.webp" alt="A colorful spread of tacos, burritos, chips, salsa, and queso" />
          </div>
          <div className="hand-note" aria-hidden="true">
            <span>The good stuff</span>
          </div>
          <div className="since-stamp" aria-label="Proudly serving Yukon, Oklahoma">
            <span>PROUDLY SERVING</span>
            <strong>YUKON</strong>
            <span>OKLAHOMA</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Toni’s Taco favorites">
        <div>BRISKET TACOS <span>✦</span> ALL-DAY BREAKFAST <span>✦</span> CHORIZO QUESO <span>✦</span> BUILD YOUR OWN <span>✦</span> BRISKET TACOS <span>✦</span> ALL-DAY BREAKFAST <span>✦</span></div>
      </section>

      <section className="order-section" id="order">
        <div className="order-intro">
          <p className="eyebrow eyebrow-light"><span /> Skip the wait</p>
          <h2>Get your Toni’s.<br /><em>Your way.</em></h2>
        </div>
        <a className="order-choice order-pickup" href="tel:+14052657554">
          <span className="choice-number">01</span>
          <div><small>Call ahead</small><strong>Carryout</strong><p>We’ll have it waiting.</p></div>
          <b aria-hidden="true">↗</b>
        </a>
        <a className="order-choice order-delivery" href="https://www.ubereats.com/store/tonis-taco/fPLzy3oBQgWMbhvj7g4hIg" target="_blank" rel="noreferrer">
          <span className="choice-number">02</span>
          <div><small>Stay put</small><strong>Delivery</strong><p>Order through Uber Eats.</p></div>
          <b aria-hidden="true">↗</b>
        </a>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Pick your pleasure</p>
            <h2>What are you<br /><em>hungry for?</em></h2>
          </div>
          <p>Start with a favorite, then make it yours. Big flavor, real ingredients, zero fuss.</p>
        </div>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <article className={`menu-card menu-${item.tone}`} key={item.name}>
              <div className="menu-photo">
                <img src={item.image} alt="" style={{ objectPosition: item.position }} />
                <span className="menu-number">0{index + 1}</span>
              </div>
              <div className="menu-card-footer">
                <h3>{item.name}</h3>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
        <div className="menu-prompt">
          <p>Ready to make it yours?</p>
          <a href="https://www.ubereats.com/store/tonis-taco/fPLzy3oBQgWMbhvj7g4hIg" target="_blank" rel="noreferrer">View the full ordering menu <span>↗</span></a>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-photo-wrap">
          <div className="story-photo">
            <img src="/images/taco-closeup.webp" alt="Three brisket tacos with onions, cilantro, salsa, and lime" />
          </div>
          <span className="round-sticker">REAL FOOD<br />REAL PEOPLE</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow eyebrow-light"><span /> Our story</p>
          <h2>A fresh start.<br /><em>A familiar kitchen.</em></h2>
          <p className="story-lede">Toni’s Taco started with a simple idea: make great tacos using real ingredients and recipes worth coming back for.</p>
          <p>What began as a fresh start in a familiar kitchen has become Yukon’s go-to spot for brisket tacos, all-day breakfast tacos, and our famous chorizo queso. Every dish is made from scratch, every guest is treated like family.</p>
          <div className="signature">Come hungry, leave happy.</div>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-intro">
          <p className="eyebrow"><span /> See you soon</p>
          <h2>Find us<br /><em>in Yukon.</em></h2>
          <div className="address-block">
            <p>1119 S Ranchwood Blvd<br />Yukon, OK 73099</p>
            <a href="https://www.google.com/maps/search/?api=1&query=1119+S+Ranchwood+Blvd+Yukon+OK+73099" target="_blank" rel="noreferrer">Get directions <span>↗</span></a>
          </div>
        </div>
        <a className="map-card" href="https://www.google.com/maps/search/?api=1&query=1119+S+Ranchwood+Blvd+Yukon+OK+73099" target="_blank" rel="noreferrer" aria-label="Open Toni’s Taco in Google Maps">
          <div className="map-grid" aria-hidden="true">
            <span className="road road-one" /><span className="road road-two" /><span className="road road-three" />
            <span className="map-pin"><span>T</span></span>
          </div>
          <div className="map-caption"><span>1119 S Ranchwood Blvd</span><strong>Open in Maps ↗</strong></div>
        </a>
        <div className="hours-card">
          <div className="hours-top">
            <span className="status-dot" />
            <p>Weekly hours</p>
          </div>
          <div className="hours-list">
            {hours.map(([day, time]) => (
              <div className="hours-row" key={day}>
                <span>{day}</span><strong>{time}</strong>
              </div>
            ))}
          </div>
          <a className="phone-row" href="tel:+14052657554">
            <span>Call us</span><strong>(405) 265-7554 ↗</strong>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <img src="/images/tonis-logo.webp" alt="Toni’s Taco logo" />
          <div className="footer-brand">COME <span>HUNGRY.</span></div>
        </div>
        <div className="footer-meta">
          <p>1119 S Ranchwood Blvd<br />Yukon, Oklahoma 73099</p>
          <div>
            <a href="#menu">Menu</a>
            <a href="#story">Our story</a>
            <a href="#visit">Hours</a>
            <a href="https://www.facebook.com/p/Tonis-Taco-100069497460838/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/tonistaco/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <p>© 2026 Toni’s Taco<br /><a href="https://tonistaco.com/privacy-policy/">Privacy Policy</a></p>
        </div>
      </footer>
    </main>
  );
}
