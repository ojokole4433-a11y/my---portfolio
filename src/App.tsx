import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const projects = [
  {
    id: 'northstar',
    number: '01',
    name: 'Northstar Studio',
    disciplines: 'Brand identity · Web design',
    description:
      'A considered identity and digital home for a creative practice. The sample project brings a clear point of view to every touchpoint, from the first impression to the smallest interaction.',
  },
  {
    id: 'common-ground',
    number: '02',
    name: 'Common Ground',
    disciplines: 'Product design · Development',
    description:
      'A product concept shaped around making complex things feel approachable. Thoughtful interface patterns and purposeful front-end details create a calmer path through the experience.',
  },
  {
    id: 'field-notes',
    number: '03',
    name: 'Field Notes',
    disciplines: 'Art direction · E-commerce',
    description:
      'An editorial-led storefront concept for objects made to be kept. A tactile visual language and a direct shopping journey give the products room to speak.',
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '↓'}</span>;
}

function Portfolio() {
  return (
    <div className="portfolio" id="home">
      <header className="topbar">
        <div className="wrap nav">
          <a className="brand" href="#home" data-testid="link-brand">
            <span className="brand-mark">AM</span>
            <span>Alex Morgan</span>
          </a>
          <nav className="navlinks" aria-label="Main navigation">
            <a className="nav-link" href="#home" data-testid="link-home">Home</a>
            <a className="nav-link" href="#about" data-testid="link-about">About</a>
            <a className="nav-link" href="#portfolio" data-testid="link-portfolio">Portfolio</a>
            <a className="nav-cta" href="#contact" data-testid="link-contact">Contact <Arrow diagonal /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="reveal">
            <p className="eyebrow"><span className="live-dot" /> Designer · Developer · Creator</p>
            <h1 id="hero-title">I make thoughtful <em>digital</em> experiences.</h1>
            <p className="hero-intro">
              I’m Alex, a multidisciplinary designer and developer helping people turn good ideas into useful, memorable products.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#portfolio" data-testid="button-explore-work">Explore my work <Arrow diagonal /></a>
              <a className="text-link" href="#about" data-testid="link-a-little-about">A little about me</a>
            </div>
          </div>
          <div className="hero-aside reveal reveal-delay" aria-label="Abstract botanical artwork">
            <div className="orbit-scene" role="img" aria-label="Abstract forms in green, sage and warm apricot">
              <div className="sun-disc" />
              <div className="abstract-petal" />
              <div className="scene-line" />
              <span className="scene-tag">Ideas in good company — 01 / 03</span>
            </div>
            <div className="hero-note"><div><span>Good ideas<br />grow here</span>Design × code</div></div>
          </div>
          <div className="hero-bottom">
            <span>Independent creative practice</span>
            <span>Designing with care, building with purpose</span>
          </div>
        </section>

        <div className="marquee-band" aria-hidden="true">
          <div className="marquee-track">
            {Array.from({ length: 2 }, (_, repeat) => (
              <span className="marquee-set" key={repeat}>
                <span>Curiosity into clarity</span><i /><span>Make it useful</span><i /><span>Make it memorable</span><i /><span>Design · Detail · Direction</span><i />
              </span>
            ))}
          </div>
        </div>

        <section className="section wrap" id="portfolio" aria-labelledby="work-title">
          <div className="section-head">
            <div>
              <p className="eyebrow">Selected work · 01—03</p>
              <h2 id="work-title">A few things<br />I’ve <em>made.</em></h2>
            </div>
            <p className="section-note">A small selection of projects across identity, digital products and the spaces in between.</p>
          </div>
          <div className="work-list">
            {projects.map((project) => (
              <div key={project.id} id={project.id}>
                <a className="work-item" href={`#${project.id}-detail`} data-testid={`link-project-${project.id}`}>
                  <span className="work-index">{project.number}</span>
                  <span className="work-title">{project.name}</span>
                  <span className="work-type">{project.disciplines}</span>
                  <span className="work-arrow"><Arrow diagonal /></span>
                </a>
                <p className="work-detail" id={`${project.id}-detail`} data-testid={`text-project-description-${project.id}`}>{project.description}</p>
              </div>
            ))}
          </div>
          <p className="work-endnote">Sample project names and descriptions — replace these with your own work.</p>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="wrap about-grid">
            <div className="about-title">
              <p className="eyebrow">A little about me</p>
              <h2 id="about-title">Curious by nature.<br /><em>Creative</em> by design.</h2>
            </div>
            <div className="about-copy">
              <p className="lead">Good work happens when a clear idea meets a little curiosity.</p>
              <p>
                I work across visual design and front-end development, bringing clarity and care to every stage of a project. My approach is collaborative, detail-minded, and grounded in making things that are easy to use.
              </p>
              <p>
                Outside of work, you’ll find me exploring new places, collecting inspiration, or learning something new. This is a sample portfolio, ready for your own story, skills, and experience.
              </p>
              <div className="principles">
                <div className="principle">
                  <span className="num">01</span><div><h3>Start with the why</h3><p>Find the useful idea underneath the first idea.</p></div>
                </div>
                <div className="principle">
                  <span className="num">02</span><div><h3>Care about the details</h3><p>Small decisions shape how the whole thing feels.</p></div>
                </div>
                <div className="principle">
                  <span className="num">03</span><div><h3>Build for real people</h3><p>Make the experience clear, kind, and easy to use.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap process-section" aria-labelledby="process-title">
          <div className="section-head">
            <div><p className="eyebrow">How I like to work</p><h2 id="process-title">Thoughtful from<br />the <em>first sketch.</em></h2></div>
            <p className="section-note">A flexible process, shaped around the problem and the people we’re making it for.</p>
          </div>
          <div className="process-grid">
            <article className="process-step"><span className="step-num">01 / Listen</span><h3>Get curious</h3><p>Understand the context, the people, and what success should feel like.</p></article>
            <article className="process-step"><span className="step-num">02 / Explore</span><h3>Find the shape</h3><p>Turn open questions into a shared direction and a few good options.</p></article>
            <article className="process-step"><span className="step-num">03 / Make</span><h3>Bring it to life</h3><p>Design and build in close conversation, refining the details as we go.</p></article>
            <article className="process-step"><span className="step-num">04 / Refine</span><h3>Make it feel right</h3><p>Test, learn, and polish until the experience feels clear and considered.</p></article>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="wrap contact-inner">
            <div>
              <p className="eyebrow">The next good idea</p>
              <h2 id="contact-title">Let’s make<br />something <em>matter.</em></h2>
              <p>Thanks for taking a look around. This sample contact section is ready for your preferred way to get in touch.</p>
            </div>
            <a className="contact-button" href="#portfolio" data-testid="button-back-to-work">Back to<br />selected work <Arrow diagonal /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-row">
          <a className="brand" href="#home" data-testid="link-footer-brand"><span className="brand-mark">AM</span><span>Alex Morgan</span></a>
          <span className="footer-meta">© 2026 Alex Morgan · Made with care</span>
          <a className="back-top" href="#home" data-testid="link-back-to-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Portfolio} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
