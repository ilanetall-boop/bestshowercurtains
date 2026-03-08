/**
 * site-config.js — Best Shower Curtains
 * Loaded synchronously in <head> to set config & CSS variables before paint.
 */
window.SITE_CONFIG = {
  name: "Best Shower Curtains",
  tagline: "Your expert guide to stylish and functional shower curtains",
  logo: "/shower-curtains-logo.svg",
  newsletterUrl: "https://script.google.com/macros/s/AKfycbxhUcinCHfLDqvtL6ko2bxreGTOv4yOkGPrO_hUC7v9AVXvjI0cAG9k2nVXKAkbN8kV/exec",
  gaId: "G-PC9GTP4DCP",
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
      { label: "Best Bath Rugs", href: "https://www.bestbathrugs.com" },
      { label: "Best Toilet Seats", href: "https://www.besttoiletseats.com" },
      { label: "Best Bathroom Vanities", href: "https://www.bestbathroomvanities.com" },
      { label: "Best Shower Heads", href: "https://www.best-shower-heads.com" }
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
      id: "best-toilet-seats",
      domain: "besttoiletseats.com",
      headline: "Find Your Perfect Toilet Seat",
      description: "Expert reviews of the best toilet seats for comfort, durability, and style. From heated seats to soft-close options.",
      ctaText: "Explore Toilet Seats",
      bannerImage: "images/banner-toilet-seats.jpg",
      active: true
    },
    {
      id: "best-bathroom-vanities",
      domain: "bestbathroomvanities.com",
      headline: "Shopping for a Bathroom Vanity?",
      description: "Expert reviews of the best bathroom vanities — from floating modern designs to farmhouse styles. Find the perfect vanity for your renovation.",
      ctaText: "Browse Bathroom Vanities",
      bannerImage: "images/banner-bathroom-vanities.jpg",
      active: true
    },
    {
      id: "best-shower-heads",
      domain: "best-shower-heads.com",
      headline: "Upgrade Your Shower Head?",
      description: "From rainfall to high-pressure designs. Expert reviews of the best shower heads for an amazing shower experience.",
      ctaText: "Browse Shower Heads",
      bannerImage: "images/banner-shower-heads.jpg",
      active: true
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
