// ============================================================
//  CONFIG.JS — Modifie ce fichier pour personnaliser ton site
// ============================================================

const APP_CONFIG = {

  // ── INFOS GÉNÉRALES ──────────────────────────────────────
  appName:      "AppName",
  tagline:      "Your App Tagline Here",
  description:  "A short description of what your app does and the main value it brings to users. Keep it simple and clear.",
  year:         "2026",
  contactEmail: "contact@yourapp.com",

  // ── ICÔNE ────────────────────────────────────────────────
  // Place ton icône dans /assets/ et indique le nom du fichier
  iconFile: "assets/icon.png",   // ex: "assets/icon.png"

  // ── LIENS STORES ─────────────────────────────────────────
  appStoreUrl:  "https://apps.apple.com/YOUR_LINK",
  playStoreUrl: "https://play.google.com/store/apps/YOUR_LINK",

  // ── COULEURS ─────────────────────────────────────────────
  colors: {
    accent:  "#6c63ff",   // couleur principale (boutons, highlights)
    accent2: "#ff6584",   // couleur secondaire (dégradé titre)
    bg:      "#0a0a0f",   // fond général
    surface: "#13131a",   // fond des cartes
  },

  // ── FEATURES ─────────────────────────────────────────────
  // Tu peux en ajouter ou en supprimer (max recommandé : 6)
  features: [
    {
      icon:  "⚡",
      title: "Feature One",
      desc:  "Describe the first key feature of your app. What problem does it solve?"
    },
    {
      icon:  "🎯",
      title: "Feature Two",
      desc:  "Describe the second key feature of your app. Focus on the benefit, not the technical detail."
    },
    {
      icon:  "🔒",
      title: "Feature Three",
      desc:  "Describe the third key feature of your app. Keep it concise and user-friendly."
    },
    {
      icon:  "📊",
      title: "Feature Four",
      desc:  "Describe the fourth key feature of your app. What makes your app stand out?"
    },
    {
      icon:  "🌍",
      title: "Feature Five",
      desc:  "Describe the fifth key feature of your app. Think about what your users will love most."
    },
    {
      icon:  "💬",
      title: "Feature Six",
      desc:  "Describe the sixth key feature of your app. You can remove cards or add more as needed."
    },
  ],

  // ── SCREENSHOTS ──────────────────────────────────────────
  // Place tes screenshots dans /screenshots/ et liste les noms ici
  // Laisser vide affiche des placeholders gris
  screenshots: [
    "screenshots/screen1.png",
    "screenshots/screen2.png",
    "screenshots/screen3.png",
    "screenshots/screen4.png",
    "screenshots/screen5.png",
  ],

  // ── BADGE HERO ───────────────────────────────────────────
  // Texte affiché dans la pastille en haut du hero
  heroBadge: "✦ Available on iOS & Android",

  // ── SECTIONS TITRES ──────────────────────────────────────
  sections: {
    features: {
      label:    "Features",
      title:    "Everything you need",
      subtitle: "Describe your app's core value proposition here in one or two sentences.",
    },
    screenshots: {
      label:    "Screenshots",
      title:    "See it in action",
      subtitle: "Replace these placeholders with real screenshots of your app.",
    },
    download: {
      title:    "Download AppName today",
      subtitle: "Available for free on iOS and Android. No credit card required.",
    },
  },

};
