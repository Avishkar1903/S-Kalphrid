import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronUp,
  Gem,
  Handshake,
  Home,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import logo from "./assets/logo.png";

const heroImage =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85';

const services = [
  {
    icon: Home,
    title: 'Premier Presales',
    text: 'Strategic planning and market insights to position your project for a successful launch. We help maximize market readiness and buyer interest from day one.',
  },
  {
    icon: Building2,
    title: 'Tailored Marketing Solutions',
    text: 'Customized marketing campaigns designed to enhance brand visibility and generate quality leads. Our strategies drive engagement, conversions, and sales growth.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    text: 'Data-led property recommendations for investors seeking reliable returns, growth corridors, and portfolio diversification.',
  },
  {
    icon: Handshake,
    title: 'Curated Property Sourcing',
    text: 'Carefully selected property opportunities tailored to your investment goals and requirements. We help clients identify high-potential assets with lasting value.',
  },
  {
    icon: Landmark,
    title: 'Specialized Loan Services',
    text: 'End-to-end assistance in securing home and commercial property loans with competitive rates, seamless documentation, and faster approvals.',
  },
  {
    icon: Award,
    title: 'Comprehensive Sales Mandate',
    text: 'Complete sales management solutions including CRM support, lead nurturing, sales execution, and client assistance until possession is achieved.',
  },
];
const reasons = [
  'Verified projects and transparent developer relationships',
  'Premium market knowledge with grounded local insight',
  'Confidential, client-first advisory for every budget range',
  'Smooth coordination from discovery to possession',
];

const projects = [
  {
    title: 'The Aurum Residences',
    location: 'Mumbai Metropolitan Region',
    type: 'Ultra-luxury apartments',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1300&q=85',
  },
  {
    title: 'Capital Square Offices',
    location: 'Pune Business District',
    type: 'Grade-A commercial spaces',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1300&q=85',
  },
  {
    title: 'Vana Estate Villas',
    location: 'Navi Mumbai Growth Corridor',
    type: 'Private villa community',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1300&q=85',
  },
];

const testimonials = [
  {
    name: 'Rohan Mehta',
    role: 'Founder, Mehta Capital',
    quote:
      'S Kalphrid Realty gave us rare clarity in a crowded market. Every option was relevant, well researched, and professionally handled.',
  },
  {
    name: 'Priya Shah',
    role: 'Luxury Home Buyer',
    quote:
      'The experience felt discreet, premium, and very personal. They understood our family requirements and protected our time beautifully.',
  },
  {
    name: 'Amit Kulkarni',
    role: 'Commercial Investor',
    quote:
      'Their commercial recommendations were practical and investment-focused. We appreciated the honest pricing view and smooth documentation.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="S Kalphrid Realty home">
          <div className="logo">
            <img
            src={logo}
            alt="S Kalphrid Realty Logo"
            className="logo-img"
            />
         </div>
        </a>

        <nav className={menuOpen ? 'is-open' : ''} aria-label="Primary navigation">
          <a href="#story" onClick={closeMenu}>Our Story</a>
          <a href="#journey" onClick={closeMenu}>Our Journey</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a className="header-cta" href="#contact">Book Consultation</a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="home" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay" />
        <div className="hero-content reveal is-visible">
          <span className="eyebrow"><Sparkles size={15} /> Premium Real Estate Advisory</span>
      <title>S Kalphrid  | Premium Real Estate Advisory</title>
          <h1 class="hero-title">
            <span class="main-title">S KalPhrid</span>
            {/* <span class="sub-title">MultiVentures Pvt. Ltd.</span> */}
          </h1> 
          <p>
            Curating landmark homes, commercial spaces, and investment opportunities with
            discretion, market intelligence, and a refined client experience.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Explore Projects <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href="#contact">Schedule a Call</a>
          </div>
        </div>
        <div className="hero-stats" aria-label="Company highlights">
          <div>
            <strong>12+</strong>
            <span>Years advisory</span>
          </div>
          <div>
            <strong>450+</strong>
            <span>Clients served</span>
          </div>
          <div>
            <strong>95%</strong>
            <span>Referral business</span>
          </div>
        </div>
      </section>

      <section className="section story" id="story">
        <div className="section-grid">
          <div className="reveal">
            <span className="section-kicker">Our Story</span>
            <h2>Every Legacy Begins with a Dream.</h2>
          </div>
          <div className="story-copy reveal">
            <p>
              Born into a humble farming family in a small village of Maharashtra, Mr. D. B. Sahebrao believed that education and determination could transform lives. Through years of dedication and perseverance, he earned the honor of serving the nation as a Class One Officer in the Central Government for over 35 years. Beyond his professional achievements, he became widely respected for his integrity, commitment to social service, and passion for inspiring others. On 31st May 2019, during his retirement ceremony, he shared a heartfelt vision—to begin a new journey as an entrepreneur dedicated to creating opportunities, empowering people, and contributing meaningfully to society.
            </p>
            <p>
              True to that promise, on 10th October 2020, he established The SAVI Group, laying the foundation for what would become S Kalphrid Multi Ventures Pvt. Ltd. Built on the principles of trust, transparency, innovation, and excellence, the company continues to grow across multiple industries while remaining committed to delivering value and building lasting relationships. Guided by a dedicated leadership team, S Kalphrid Multi Ventures Pvt. Ltd. stands as a reflection of one man's dream—proving that with vision, integrity, and purpose, a humble beginning can grow into a legacy that inspires generations.
            </p>
          </div>
        </div>
      </section>

      <section className="journey section" id="journey">
       <div className="journey-header reveal">
          <span className="section-kicker">Our Journey</span>
          <h2>Building a Legacy, One Milestone at a Time</h2>
          <p>
            From a single vision to a diversified business group, our journey
            reflects continuous growth, innovation, and an unwavering commitment
            to creating value for our investors, clients, and communities.
          </p>
        </div>
        <div className="journey-grid">
        {/* <div className="journey-card reveal">
          <span className="year">10 Oct 2020</span>
          <h3>The Beginning</h3>
          <p>
            The SAVI Group was established with a vision of creating financial
            opportunities and building long-term wealth through trusted
             investment solutions.
          </p>
        </div> */}
        <div className="journey-card reveal">
          <span className="year">2020 - 2022</span>
          <h3>KALPHRID INVESTMENT</h3>
          <p>
            Our first venture, Kalphrid Investment, laid the foundation for our growth. 
            With the confidence of<strong> 8,800+ investors</strong>, it continues to inspire our vision for excellence.
          </p>
        </div>
        <div className="journey-card reveal">
          <span className="year">2022 - 2024</span>
          <h3>MURLIDHAR INVESTMENT</h3>
          <p>
            Our second venture, MURLIDHAR INVESTMENT, expanded our journey with confidence and reliability.
             We are proud to have earned the trust of <strong>5,400+ investors</strong>.
          </p>
        </div>
        <div className="journey-card reveal">
          <span className="year">2020 - 2022</span>
          <h3>SAVI FINANCIAL SERVICES</h3>
          <p>
            Our third venture, SAVI FINANCIAL SERVICES, was established to simplify loan solutions for individuals and businesses. 
            With the trust of <strong>6,000+ clients</strong>, we continue to deliver reliable financial support.
          </p>
        </div>
        <div className="journey-card reveal">
          <span className="year">24 Nov 2024</span>
          <h3>Real Estate Launch</h3>
          <p>
            Entered the real estate industry with our first premium project,
          <strong>"The SAVI Homes"</strong>, bringing our vision of
          <em> "Where Dreams Come Home"</em> to life.
          </p>
        </div>
        <div className="journey-card reveal">
          <span className="year">25 Oct 2025</span>
          <h3>Strategic Merger</h3>
          <p>
            Following five successful years, all businesses under
          <strong> The SAVI Group</strong> were unified into
          <strong> S. Kalphrid Multi Ventures Pvt. Ltd.</strong>,
            creating a stronger and future-ready organization.
          </p>
        </div>
      </div>
    </section>

      <section className="section services" id="services">
        <div className="section-heading reveal">
          <span className="section-kicker">Services</span>
          <h2>Property expertise, delivered with precision.</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card reveal" key={service.title}>
                <div className="icon-box"><Icon size={24} /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section why" id="why">
        <div className="why-panel reveal">
          <div>
            <span className="section-kicker">Why Choose Us</span>
            <h2>A more intelligent way to buy, lease, and invest.</h2>
            <p>
              We respect the scale of every decision. That means disciplined due diligence,
              polished communication, and recommendations that are practical, premium, and
              aligned with your goals.
            </p>
          </div>
          <div className="reason-list">
            {reasons.map((reason) => (
              <div className="reason" key={reason}>
                <CheckCircle2 size={21} />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading reveal">
          <span className="section-kicker">Featured Projects</span>
          <h2>Selected opportunities across premium growth markets.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <img src={project.image} alt={`${project.title} real estate project`} />
              <div className="project-content">
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p><MapPin size={16} /> {project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section credentials" aria-label="Credentials">
        <div className="credential reveal">
          <Award size={27} />
          <strong>Premium Curation</strong>
          <span>Every recommendation is filtered for location, developer credibility, pricing, and lifestyle fit.</span>
        </div>
        <div className="credential reveal">
          <ShieldCheck size={27} />
          <strong>Transparent Process</strong>
          <span>Clear guidance across shortlisting, negotiation, documents, payments, and closure.</span>
        </div>
        <div className="credential reveal">
          <Gem size={27} />
          <strong>Luxury Mindset</strong>
          <span>Calm communication, high discretion, and service standards suited to high-value decisions.</span>
        </div>
      </section>

      <section className="section testimonials" id="testimonials">
        <div className="section-heading reveal">
          <span className="section-kicker">Testimonials</span>
          <h2>Trusted by home buyers, owners, and investors.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card reveal" key={item.name}>
              <Quote size={30} />
              <p>{item.quote}</p>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-copy reveal">
          <span className="section-kicker">Contact</span>
          <h2>Begin your property journey with a private consultation.</h2>
          <p>
            Share your requirement and our advisory team will respond with a focused plan,
            relevant options, and the next practical step.
          </p>
          <div className="contact-lines">
            <a href="tel:+91992060727"><Phone size={18} /> +91 9920607271</a>
            <a href="mailto:hello@skalphrid.com"><Mail size={18} /> hello@skalphrid.com</a>
            <span><Landmark size={18} /> Mumbai | Pune | Navi Mumbai</span>
          </div>
        </div>

        <form className="contact-form reveal">
          <label>
            Full Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="+91" required />
          </label>
          <label>
            Requirement
            <select name="requirement" defaultValue="">
              <option value="" disabled>Select service</option>
              <option>Luxury Residential</option>
              <option>Commercial Leasing</option>
              <option>Investment Advisory</option>
              <option>Property Consultation</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="Tell us about your preferred location, budget, and timeline" />
          </label>
          <button className="btn btn-primary" type="submit">
            Request Consultation <ArrowRight size={18} />
          </button>
        </form>
      </section>

       {/* <section className="journey section" id="journey">
       <div className="journey-header reveal">
          <span className="section-kicker">Our Journey</span>
          <h2>Building a Legacy, One Milestone at a Time</h2>
          <p>
            From a single vision to a diversified business group, our journey
            reflects continuous growth, innovation, and an unwavering commitment
            to creating value for our investors, clients, and communities.
          </p>
        </div>
        <div className="journey-grid">
        <div className="journey-card reveal">
          <span className="year">10 Oct 2020</span>
          <h3>The Beginning</h3>
          <p>
            The SAVI Group was established with a vision of creating financial
            opportunities and building long-term wealth through trusted
             investment solutions.
          </p>
        </div>
        <div className="journey-card reveal">
          <span className="year">2020 - 2024</span>
          <h3>Investment Growth</h3>
          <p>
            KALPHRID Investment and MURLIDHAR Investment rapidly expanded,
            together serving more than <strong>14,000+ investors</strong> with
            reliable investment opportunities.
          </p>
        </div>
        <div className="journey-card reveal">
          <span className="year">2021 - 2024</span>
          <h3>Financial Services</h3>
          <p>
            SAVI Financial Services successfully assisted
          <strong>6,000+ clients</strong> by providing home, personal,
            and business loan solutions through leading banks.
          </p>
        </div>
        <div className="journey-card reveal">
          <span className="year">24 Nov 2024</span>
          <h3>Real Estate Launch</h3>
          <p>
            Entered the real estate industry with our first premium project,
          <strong>"The SAVI Homes"</strong>, bringing our vision of
          <em> "Where Dreams Come Home"</em> to life.
          </p>
        </div>
        <div className="journey-card reveal">
          <span className="year">25 Oct 2025</span>
          <h3>Strategic Merger</h3>
          <p>
            Following five successful years, all businesses under
          <strong> The SAVI Group</strong> were unified into
          <strong> S. Kalphrid Multi Ventures Pvt. Ltd.</strong>,
            creating a stronger and future-ready organization.
          </p>
        </div>
      </div>
    </section>  */}

      <footer className="footer">
        <div>
          <a className="brand footer-brand" href="#home" aria-label="S Kalphrid Realty home">
            {/* <span className="brand-mark">SK</span> */}
            <span>
              <strong>S Kalphrid</strong>
              {/* <small>Realty</small> */}
            </span>
          </a>
          <p>Premium real estate advisory for residences, commercial spaces, and investment assets.</p>
        </div>
        <div className="footer-links">
          <a href="#story">Our Story</a>
          <a href="#journey">Our journey</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-meta">
          <span>RERA advisory support available on request.</span>
          <span>© 2026 S Kalphrid. All rights reserved.</span>
        </div>
      </footer>

      <a
        className="whatsapp"
        href="https://wa.me/919920607271?text=Hello%20S%20Kalphrid%20Realty%2C%20I%20would%20like%20to%20discuss%20a%20property%20requirement."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with S Kalphrid  on WhatsApp"
      >
        <Phone size={24} />
      </a>
      <a className="scroll-top" href="#home" aria-label="Back to top">
        <ChevronUp size={22} />
      </a>
    </main>
  );
}

export default App;
