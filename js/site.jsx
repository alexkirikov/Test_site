// Autonomy Planner — multi-page wiring
// Defines the route map, composes the Home page from its sections, and mounts
// the right page component (read from window.AP_PAGE, set inline in each HTML).
// Navigation is real page-to-page: onNav(key) -> window.location = <key>.html

window.AP_ROUTES = {
  home: 'index.html',
  features: 'features.html',
  how: 'how.html',
  homeowners: 'homeowners.html',
  installers: 'installers.html',
  pricing: 'pricing.html',
  cases: 'cases.html',
  about: 'about.html',
  blog: 'blog.html',
  article: 'article.html',
  contact: 'contact.html',
  app: 'app.html',
};

// Home page = the marketing sections stacked (same composition as the SPA).
function HomePage({ onNav }) {
  return (
    <div>
      <Hero onNav={onNav} />
      <WhyUs />
      <Capabilities />
      <HowItWorks onNav={onNav} />
      <Testimonials />
      <Audience />
      <Pricing onNav={onNav} />
      <CTA onNav={onNav} />
      <Footer onNav={onNav} />
    </div>
  );
}
Object.assign(window, { HomePage });

// Mount a single page. opts.bare = render without the Navbar chrome (planner app).
function mountPage(pageName, active, opts) {
  opts = opts || {};
  const nav = (v) => { window.location.href = window.AP_ROUTES[v] || 'index.html'; };
  function go() {
    const Page = window[pageName];
    const ready = Page && (opts.bare || window.Navbar) && window.AutonomyPlannerDesignSystem_43f1d6;
    if (!ready) { setTimeout(go, 40); return; }
    const tree = opts.bare
      ? React.createElement(Page, { onNav: nav })
      : React.createElement(
          'div', null,
          React.createElement(window.Navbar, { onNav: nav, active }),
          React.createElement(Page, { onNav: nav })
        );
    ReactDOM.createRoot(document.getElementById('root')).render(tree);
    window.scrollTo(0, 0);
  }
  go();
}
window.mountPage = mountPage;

if (window.AP_PAGE) {
  mountPage(window.AP_PAGE.name, window.AP_PAGE.active, { bare: window.AP_PAGE.bare });
}
