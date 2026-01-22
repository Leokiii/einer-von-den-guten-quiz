# 🚀 Deployment & Startup Guide

## ⚡ Quick Start (lokale Entwicklung)

### Option 1: Browser direkt öffnen (Sofort!)
```
Datei öffnen: index.html
- Rechtsklick auf die Datei → "Öffnen mit" → Browser
- ODER: Einfach Datei per Drag & Drop in den Browser ziehen
```

**✅ Das funktioniert JETZT - keine Installation nötig!**

Die `index.html` ist ein vollständig funktionsfähiger Standalone-Prototyp mit:
- 🎮 10 Demo-Quiz-Fragen (alle 50 sind in `data/questions.json`)
- 📊 Leaderboard Mock-Daten
- 🏆 Volle UI mit Animations
- 📱 Responsive Design (Mobile/Tablet/Desktop)

---

## 📋 Dateien & Struktur

### Wichtigste Dateien (JETZT VERFÜGBAR):
```
├── index.html                    ← DEMO ÖFFNEN!
├── README.md                     ← Komplette Doku
├── package.json                  ← Dependencies für npm
├── tsconfig.json                 ← TypeScript Config
├── tailwind.config.ts            ← Tailwind CSS Config
├── .env.example                  ← Env-Template
├── src/
│   ├── app/                      ← Next.js Pages
│   ├── components/               ← React Components
│   ├── hooks/                    ← Custom Hooks
│   └── lib/                      ← Utilities & Types
├── data/
│   ├── questions.json            ← Alle 50 Fragen (JSON)
│   └── questions.csv             ← Alle 50 Fragen (CSV)
└── public/                       ← Static Assets
```

---

## 🔧 Option 2: Production-Setup mit Node.js

Wenn du Node.js + npm installieren möchtest (https://nodejs.org):

### 1. Dependencies installieren
```bash
cd "C:\Users\LeonardoDiasKiefer\Downloads\einer von den guten quiz"
npm install
```

### 2. Supabase Setup (optional für volle Funktionalität)
- Erstelle Konto: https://supabase.com
- Neues Projekt anlegen
- SQL aus README.md ausführen
- Keys in `.env.local` eintragen

### 3. Dev Server starten
```bash
npm run dev
```
→ Server läuft auf **http://localhost:3000**

### 4. Production Build
```bash
npm run build
npm start
```

---

## 🌐 Option 3: Deploy zu Vercel (Cloud)

### 1. Repo zu GitHub pushen
```bash
git init
git add .
git commit -m "Initial commit: Einer von den Guten Quiz"
git remote add origin <dein-github-repo>
git push -u origin main
```

### 2. Bei Vercel deployen
- Gehe zu https://vercel.com
- "New Project" → GitHub Repo verbinden
- Environment Variablen setzen (falls Supabase genutzt)
- Deploy!

---

## 📊 Daten-Verwaltung

### 50 Fragen verfügbar in:
- **JSON:** `data/questions.json` (für Supabase/APIs)
- **CSV:** `data/questions.csv` (für Excel/Admin-Import)

### Alle Fragen decken ab:
✅ Podcast-Insider & Memes
✅ Host-Geschichten & Charaktere
✅ Community-Moments
✅ Running Gags & Zitate
✅ Levels: Leicht → Schwer

---

## 🔐 Sicherheit & Authentifizierung

### Aktuell (Demo):
- Anonym spielen möglich
- Login-Button im UI (noch nicht verbunden)

### Nach Supabase-Setup:
- Email/Passwort Auth
- Google OAuth (optional)
- Ergebnisse gespeichert in DB
- Leaderboard mit Echtzeit-Updates

---

## 📱 Features verfügbar

### ✅ Sofort funktionierend:
- Landing Page mit Hero-Section
- Quiz mit 10 Demo-Fragen
- Leaderboard Mock
- Responsive Design
- Smooth Animations

### ⚙️ Nach Backend-Setup:
- User Authentication
- Ergebnis-Speicherung
- Admin Panel für Fragen
- Echtzeit-Leaderboard
- CSV Import/Export

---

## 🎯 Nächste Schritte

### Um die VOLLE App zu nutzen:

1. **Node.js installieren** (https://nodejs.org)
2. **npm install** im Projektordner
3. **Supabase Projekt erstellen** (https://supabase.com)
4. **SQL-Migrationen durchführen** (siehe README.md)
5. **.env.local mit Keys füllen**
6. **npm run dev** starten
7. **http://localhost:3000 öffnen**

---

## 🆘 Troubleshooting

### "Node/npm nicht gefunden"
→ https://nodejs.org herunterladen & installieren

### "Module nicht gefunden"
```bash
npm install
```

### "Supabase Connection Error"
→ Check `.env.local` Credentials
→ Stelle sicher, dass SQL-Migrationen durchgeführt wurden

### "Port 3000 ist belegt"
```bash
npm run dev -- -p 3001
```

---

## 📚 Dokumentation

- **[README.md](README.md)** - Komplette Projektdoku
- **[data/questions.json](data/questions.json)** - Alle 50 Fragen
- **[data/questions.csv](data/questions.csv)** - Fragen als CSV
- **[index.html](index.html)** - Playable Demo

---

## 🎉 Status

| Feature | Status | Notizen |
|---------|--------|---------|
| Landing Page | ✅ Ready | Interactive Demo |
| Quiz (10 Fragen) | ✅ Ready | Vollständig spielbar |
| Leaderboard | ✅ Ready | Mock-Daten |
| Admin Panel | ✅ Ready | Wird mit npm run dev geladen |
| Auth | ⏳ Optional | Funktioniert nach Supabase-Setup |
| Datenschutz | ✅ Ready | Seite vorhanden |
| Impressum | ✅ Ready | Seite vorhanden |

---

## 🚀 TL;DR - Schnellstart

### Sofort spielen (keine Installation):
```
1. index.html mit Rechtsklick → "Öffnen mit Browser"
2. Quiz spielen!
```

### Mit Node.js (volle Funktionalität):
```bash
npm install
npm run dev
# http://localhost:3000
```

### Auf Production deployen:
```bash
git push → GitHub
# Vercel Auto-Deploy
```

---

**Viel Erfolg! 🎮**
