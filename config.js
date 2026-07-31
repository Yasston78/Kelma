// ============================================================
//  CONFIG.JS — Modifie ce fichier pour personnaliser ton site
// ============================================================

const APP_CONFIG = {

  // ── INFOS GÉNÉRALES ──────────────────────────────────────
  appName:      "Kelma",
  tagline:      "Une parole par jour, de chez nous.",
  description:  "Une affirmation par jour, écrite pour la communauté franco-maghrébine. Motivation, fierté, identité — et un registre spirituel sourcé et vérifié, si tu le choisis.",
  year:         "2026",
  contactEmail: "contact@kelma.life",   // ⚠️ à créer chez ton registrar (redirection suffit)

  // ── ICÔNE ────────────────────────────────────────────────
  // Place ton icône dans /assets/ et indique le nom du fichier
  iconFile: "assets/icon.png",   // ⚠️ le fichier n'existe pas encore

  // ── LIENS STORES ─────────────────────────────────────────
  // L'app n'est pas encore publiée : les boutons pointent dans le vide
  // volontairement. À remplacer le jour de la sortie.
  appStoreUrl:  "#",
  playStoreUrl: "#",

  // ── COULEURS ─────────────────────────────────────────────
  // Le site reste sombre : index.html code en dur un texte quasi blanc,
  // un fond clair le rendrait illisible. Le fond sombre chaud met aussi
  // en valeur les captures saumon de l'app.
  colors: {
    accent:  "#C4633F",   // terre cuite — boutons, highlights
    accent2: "#D4A548",   // or — dégradé du titre
    bg:      "#17100D",   // nuit chaude
    surface: "#221812",   // fond des cartes
  },

  // ── FEATURES ─────────────────────────────────────────────
  features: [
    {
      icon:  "🕊️",
      title: "Trois registres, ton choix",
      desc:  "Spirituel, culturel ou les deux en alternance. Tu choisis à l'installation, et tu peux en changer."
    },
    {
      icon:  "📖",
      title: "Des sources, pas des approximations",
      desc:  "Chaque verset et chaque invocation vient avec sa référence exacte, son texte arabe et sa translittération. Relu un par un."
    },
    {
      icon:  "🗣️",
      title: "Ta langue, pas une traduction",
      desc:  "Écrit en français avec les mots de chez nous. Darija marocaine, derja algérienne ou tounsi, selon ce qui te parle."
    },
    {
      icon:  "🔔",
      title: "Un rappel par jour. Pas dix.",
      desc:  "Tu choisis l'heure, tu reçois ta kelma. Aucune relance, aucune culpabilisation si tu sautes un jour."
    },
    {
      icon:  "💬",
      title: "Fait pour être envoyé",
      desc:  "Une kelma qui te parle part sur WhatsApp en un geste, en image, prête à partager avec ta famille."
    },
    {
      icon:  "🔒",
      title: "Rien ne sort de ton téléphone",
      desc:  "Pas de compte, pas de mot de passe, aucun serveur. Tes favoris et tes réglages restent chez toi, et l'app marche hors ligne."
    },
  ],

  // ── SCREENSHOTS ──────────────────────────────────────────
  // Vide = placeholders gris. À remplir dès que l'app tourne sur un vrai
  // téléphone : "screenshots/screen1.png", etc.
  screenshots: [],

  // ── BADGE HERO ───────────────────────────────────────────
  heroBadge: "✦ Bientôt sur iOS et Android",

  // ── SECTIONS TITRES ──────────────────────────────────────
  sections: {
    features: {
      label:    "L'app",
      title:    "Une parole qui te ressemble",
      subtitle: "Kelma n'est pas une app de développement personnel traduite de l'anglais. Elle est écrite pour celles et ceux qui ont grandi entre deux rives.",
    },
    screenshots: {
      label:    "Aperçu",
      title:    "À quoi ça ressemble",
      subtitle: "Une kelma par jour, en plein écran, prête à être gardée ou partagée.",
    },
    download: {
      title:    "Kelma arrive bientôt",
      subtitle: "Gratuite sur iOS et Android. Sans compte, sans pub, sans collecte de données.",
    },
  },

};
