import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronUp,
  Gem,
  House,
  Megaphone,
  Landmark,
  BedDouble,
  UsersRound,
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
    icon: TrendingUp,
    title: 'Investment',
    text: 'Strategic investment opportunities backed by market insights and careful evaluation, helping clients identify potential avenues for long-term growth and value creation.',
  },
  {
    icon: Landmark,
    title: 'Loan Services',
    text: 'End-to-end loan assistance for individuals and businesses, including suitable financing options, documentation support, and guidance through the approval process.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Services',
    text: 'Customized marketing solutions designed to strengthen brand visibility, generate quality leads, engage the right audience, and support sustainable business growth.',
  },
  {
    icon: Building2,
    title: 'Business Setup',
    text: 'Start-to-end complete business setup services covering planning, registration, documentation, operations, and execution — everything you need to establish and launch your business.',
  },
  {
    icon: BedDouble,
    title: 'PG Services',
    text: 'Comfortable and well-managed PG accommodation designed to provide a safe, convenient, and welcoming stay for students and working professionals.',
  },
  {
    icon: UsersRound,
    title: 'Manpower & Staffing Solutions',
    text: 'Reliable manpower and staffing solutions tailored to business requirements, helping organizations build skilled, efficient, and dependable teams.',
  },
  {
    icon: House,
    title: 'Real Estate',
    text: 'Residential, commercial, and investment property opportunities supported by market knowledge, careful selection, and a transparent approach to real-estate transactions.',
  },
];
// why choose us - 4 points
const reasons = [
  'Carefully selected opportunities focused on growth and long-term value.',
  'Research-driven insights to help you make informed investment decisions.',
  'Clear communication and a client-first philosophy at every step.',
  'Dedicated assistance from opportunity evaluation through execution.',
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
    role: 'Individual Investor',
    quote:
      'S Kalphrid helped us look at investment opportunities with much greater clarity. Their approach was transparent, well-researched, and focused on finding opportunities that aligned with our financial goals.',
  },
  {
    name: 'Priya Shah',
    role: 'Business Investor',
    quote:
      'What stood out about S Kalphrid was their professional approach and understanding of the market. They presented opportunities clearly and helped us make decisions with confidence rather than pressure.',
  },
  {
    name: 'Amit Kulkarni',
    role: 'Private Investor',
    quote:
      'S Kalphrid has given us a more strategic perspective on investing. From evaluating opportunities to understanding the potential and risks, their team provided consistent support throughout the process.',
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
      
       <title>S Kalphrid  | We  Speak  Finance  Fluently</title>
      <section className="hero" id="home" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay" />
        <div className="hero-content reveal is-visible">
          {/* <span className="eyebrow"><Sparkles size={17} /> We  Speak  Finance  Fluently </span> */}
          <h1 className="hero-title">
            <span className="main-title">S KalPhrid</span>
            <span className="eyebrow"><Sparkles size={17} /> We Speak Finance Fluently </span>
            {/* <span className="sub-title">MultiVentures Pvt. Ltd.</span> */}
          </h1> 
          <p>
            Creating value through strategic investments, diverse ventures, and opportunities built for long-term growth.
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
            <strong>20000+</strong>
            <span> Individual Clients served</span>
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
              Born into a humble farming family in a small village of Maharashtra, <strong>Mr. D. B. Sahebrao</strong> believed that education and determination could transform lives. Through years of dedication and perseverance, he earned the honor of serving the nation as a Class One Officer in the Central Government for over 35 years. Beyond his professional achievements, he became widely respected for his integrity, commitment to social service, and passion for inspiring others. On 31st May 2019, during his retirement ceremony, he shared a heartfelt vision—to begin a new journey as an entrepreneur dedicated to creating opportunities, empowering people, and contributing meaningfully to society.
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
            With the confidence of<strong> 8,800+ individual investors</strong>, it continues to inspire our vision for excellence.
          </p>
        </div>
        <div className="journey-card reveal">
          <span className="year">2022 - 2024</span>
          <h3>MURLIDHAR INVESTMENT</h3>
          <p>
            Our second venture, MURLIDHAR INVESTMENT, expanded our journey with confidence and reliability.
             We are proud to have earned the trust of <strong>5,400+  individual investors</strong>.
          </p>
        </div>
        <div className="journey-card reveal">
          <span className="year">2020 - 2022</span>
          <h3>SAVI FINANCIAL SERVICES</h3>
          <p>
            Our third venture, SAVI FINANCIAL SERVICES, was established to simplify loan solutions for individuals and businesses. 
            With the trust of <strong>6,000+ individual clients</strong>, we continue to deliver reliable financial support.
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
          {/* <h2>Property expertise, delivered with precision.</h2> */}
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
            <h2>A smarter way to grow, expand, and invest.</h2>
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
          <h2>Trusted by Investors. Built on Relationships.</h2>
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
          <h2>
            Start Your <br />
           <span className="highlight">Investment Journey</span> With a Private Consultation.
          </h2>
          <p>
            Share your requirement and our team will respond with a focused plan,
            relevant options, and the next practical step.
          </p>
          <div className="contact-lines">
            <a href="tel:+91992060727"><Phone size={18} /> +91 9920607271</a>
            <a href="mailto:hello@skalphrid.com"><Mail size={18} /> hello@skalphrid.com</a>
            <span><Landmark size={18} /> Mumbai | Navi Mumbai | Pune </span>
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
          <p>Strategic investments, diverse ventures, and opportunities <br /> built to create lasting value.</p>
        </div>
        <div className="footer-links">
          <a href="#story">Our Story</a>
          <a href="#journey">Our journey</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-meta">
          <span>Investments | Multi-Ventures | Financial Solutions | Real Estate.</span>
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
