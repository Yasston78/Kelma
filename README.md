# 📱 App Landing Page Template

Site vitrine simple et moderne pour une application mobile.

## 📁 Structure du projet

```
/
├── index.html          ← Page principale (ne pas modifier)
├── config.js           ← ✅ FICHIER À MODIFIER
├── privacy-policy.html
├── terms.html          
├── app-ads.txt         ← À créer (si tu utilises AdMob)
├── assets/
│   └── icon.png        ← Ton icône d'app (512x512 recommandé)
└── screenshots/
    ├── screen1.png
    ├── screen2.png
    └── ...
```

## 🚀 Comment utiliser ce template

### Étape 1 — Modifier config.js
Ouvre `config.js` et remplis toutes les informations :
- Nom de l'app, tagline, description
- Liens App Store et Google Play
- Features (titre, icône emoji, description)
- Screenshots

### Étape 2 — Ajouter les images
- Place ton **icône** dans `/assets/icon.png`
- Place tes **screenshots** dans `/screenshots/`
- Décommente les lignes screenshots dans `config.js`

### Étape 3 — Déployer sur GitHub Pages
1. Crée un repo GitHub nommé `tonpseudo.github.io`
2. Upload tous les fichiers
3. Active GitHub Pages dans Settings → Pages
4. Ton site est en ligne sur `https://tonpseudo.github.io`

### Étape 4 — Lier un nom de domaine custom (optionnel)

**Sur GitHub :**
1. Ton repo → **Settings → Pages**
2. Champ **"Custom domain"** → tape `tondomaine.com`
3. Clique **Save** (GitHub crée un fichier `CNAME` automatiquement)

**Sur Namecheap :**
1. **Domain List → Manage** → onglet **Advanced DNS**
2. Supprime les enregistrements existants et ajoute :

| Type | Host | Value |
|------|------|-------|
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |
| CNAME | www | tonpseudo.github.io |

3. Attends la propagation DNS (15 min à 48h) — vérifie sur **dnschecker.org**
4. Une fois propagé, retourne sur GitHub → **Settings → Pages** → coche **"Enforce HTTPS"**

Ton site est maintenant accessible sur `https://tondomaine.com` ✅
