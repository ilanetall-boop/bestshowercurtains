/**
 * site-config.js — Best Shower Curtains
 * Loaded synchronously in <head> to set config & CSS variables before paint.
 */
window.SITE_CONFIG = {
  name: "Best Shower Curtains",
  tagline: "Your expert guide to stylish and functional shower curtains",
  logo: "/shower-curtains-logo.svg",
  colors: {
    primary: "#00695C",
    primaryLight: "#26A69A",
    primaryDark: "#004D40",
    accent: "#FF6F00",
    accentDark: "#E65100"
  },
  nav: [
    { label: "Home", href: "index" },
    { label: "Articles", href: "articles" },
    { label: "Comparisons", href: "comparisons" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" }
  ],
  footer: {
    description: "Your trusted source for shower curtain reviews, comparisons, and buying guides since 2025.",
    quickLinks: [
      { label: "All Articles", href: "articles" },
      { label: "Comparisons", href: "comparisons" },
      { label: "How We Research", href: "how-we-research" },
      { label: "About Us", href: "about" }
    ],
    legal: [
      { label: "Privacy Policy", href: "privacy" },
      { label: "Terms of Service", href: "terms" },
      { label: "Affiliate Disclosure", href: "disclosure" }
    ],
    network: [
      { label: "Best Bath Rugs", href: "https://www.bestbathrugs.com" }
    ]
  },
  networkBanners: [
    {
      id: "best-bath-rugs",
      domain: "bestbathrugs.com",
      headline: "Transform Your Bathroom with Premium Bath Rugs",
      description: "Soft, absorbent, and stylish — find the perfect bath rug for your bathroom. Expert reviews of memory foam, chenille, bamboo, and more.",
      ctaText: "Browse Bath Rugs",
      bannerImage: "images/banner-bath-rugs.jpg",
      active: true
    },
    {
      id: "best-air-fryers",
      domain: "best-air-fryers.com",
      headline: "Upgrade Your Kitchen with the Best Air Fryers",
      description: "Crispy, healthy meals in minutes. Our experts tested the top air fryers so you don't have to.",
      ctaText: "See Air Fryer Reviews",
      bannerImage: "images/banner-air-fryers.jpg",
      active: false
    },
    {
      id: "best-ceiling-fans",
      domain: "best-ceiling-fans.com",
      headline: "Stay Cool with the Best Ceiling Fans",
      description: "From modern smart fans to budget-friendly options. Find the perfect ceiling fan for every room.",
      ctaText: "Explore Ceiling Fans",
      bannerImage: "images/banner-ceiling-fans.jpg",
      active: false
    }
  ]
};

// Set CSS variables immediately
(function () {
  var c = window.SITE_CONFIG.colors;
  var r = document.documentElement.style;
  r.setProperty('--primary', c.primary);
  r.setProperty('--primary-light', c.primaryLight);
  r.setProperty('--primary-dark', c.primaryDark);
  r.setProperty('--accent', c.accent);
  r.setProperty('--accent-dark', c.accentDark);
})();
