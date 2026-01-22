# 🎙️ Einer von den Guten - Quiz Arena

Eine moderne, responsive Quiz-Webseite zum Podcast **„Einer von den Guten"** mit 50 Fragen, Authentifizierung, Leaderboard und Admin-Panel.

## 🚀 Features

✅ **50 Podcast-Fragen** - Umfassende Quiz mit Erklärungen
✅ **Benutzer-Auth** - Email/Passwort Registrierung & Login  
✅ **Admin-Panel** - Fragen verwalten, CSV Import/Export
✅ **Leaderboard** - Top-Scorer und Bestenlisten
✅ **Responsive Design** - Mobile, Tablet, Desktop optimiert
✅ **Barrierefreiheit** - WCAG AA konforme Navigation
✅ **Datenschutz** - DSGVO konform mit Cookie-Consent
✅ **SEO** - Meta-Tags, Sitemap, OpenGraph

## 🛠️ Tech-Stack

- **Frontend:** Next.js 15 + TypeScript + Tailwind CSS
- **Auth & DB:** Supabase (PostgreSQL + Auth)
- **State Management:** Zustand
- **Animationen:** Framer Motion
- **Hosting:** Vercel (empfohlen)

## 📋 Installation

### 1. Repository klonen
```bash
git clone <repo-url>
cd einer-von-den-guten-quiz
```

### 2. Dependencies installieren
```bash
npm install
```

### 3. Umgebungsvariablen setzen
Kopiere `.env.example` zu `.env.local` und fülle die Supabase-Keys ein:

```bash
cp .env.example .env.local
```

**Benötigte Keys:**
- `NEXT_PUBLIC_SUPABASE_URL` - Deine Supabase Project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Öffentlicher Anon Key
- `SUPABASE_SERVICE_ROLE_KEY` - Server-seitiger Service Role Key

### 4. Supabase Setup

Erstelle eine neues Supabase-Projekt und führe folgende SQL aus:

```sql
-- Users Profiles
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  display_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

-- Quizzes
CREATE TABLE quizzes (
  id serial PRIMARY KEY,
  slug text UNIQUE,
  title text,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Questions
CREATE TABLE questions (
  id serial PRIMARY KEY,
  quiz_id int REFERENCES quizzes(id),
  idx int,
  text text NOT NULL,
  options jsonb NOT NULL,
  correct_index int NOT NULL,
  image_url text,
  explanation text,
  source jsonb
);

-- Attempts (Quiz Results)
CREATE TABLE attempts (
  id serial PRIMARY KEY,
  user_id uuid REFERENCES profiles(id),
  quiz_id int REFERENCES quizzes(id),
  score int,
  total int,
  created_at timestamptz DEFAULT now()
);

-- Answers (Individual Question Answers)
CREATE TABLE answers (
  id serial PRIMARY KEY,
  attempt_id int REFERENCES attempts(id),
  question_id int REFERENCES questions(id),
  selected_index int,
  correct boolean
);
```

### 5. Dev Server starten
```bash
npm run dev
```

Die App läuft unter **http://localhost:3000**

## 📁 Projektstruktur

```
src/
├── app/
│   ├── layout.tsx              # Root Layout
│   ├── page.tsx                # Landing Page
│   ├── quiz/
│   │   └── page.tsx            # Quiz Page
│   ├── leaderboard/
│   │   └── page.tsx            # Leaderboard
│   ├── admin/
│   │   └── page.tsx            # Admin Panel
│   ├── datenschutz/
│   │   └── page.tsx            # Privacy Policy
│   └── impressum/
│       └── page.tsx            # Impressum
├── components/
│   ├── Navigation.tsx          # Nav + Footer
│   ├── QuizCard.tsx            # Quiz Question Card
│   ├── ResultCard.tsx          # Result Screen
│   ├── AuthModal.tsx           # Login/Signup Modal
│   └── AdminQuestionForm.tsx   # Add Question Form
├── hooks/
│   └── useAuth.ts              # Auth Hook
├── lib/
│   ├── types.ts                # TypeScript Interfaces
│   ├── store.ts                # Zustand Stores
│   └── supabase.ts             # Supabase Client
└── data/
    ├── questions.json          # 50 Questions JSON
    └── questions.csv           # Questions CSV

public/                         # Static Assets
```

## 🎮 Verwendung

### Anonym spielen
- Besuche `/quiz` und beantworte Fragen
- Ohne Login: Antworten werden registriert, aber Feedback versteckt

### Mit Account
- Registriere dich mit Email/Passwort
- **Dein Vorteil:** Sofortiges Feedback + Ergebnisse speichern + Leaderboard

### Admin Panel
Zugang: `/admin` (erfordert Admin-Role in Supabase)
- Fragen hinzufügen/bearbeiten/löschen
- CSV Import/Export
- Statistiken

## 🔑 API Endpoints

| Method | Route | Beschreibung |
|--------|-------|-------------|
| GET | `/api/quiz` | Quiz & Fragen laden |
| POST | `/api/attempts` | Neuer Quiz-Versuch |
| POST | `/api/attempts/:id/answer` | Antwort absenden |
| GET | `/api/leaderboard` | Leaderboard laden |
| POST | `/api/admin/questions` | Neue Frage (Admin) |

## 🚀 Deployment (Vercel)

```bash
# Mit Vercel CLI
vercel

# Oder via GitHub
# → Repo zu GitHub pushen
# → Vercel mit GitHub verbinden
# → Deploy!
```

**Umgebungsvariablen in Vercel Project Settings:**
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

## 📊 Fragen-Daten

Alle 50 Fragen sind in `data/questions.json` gespeichert:

```json
{
  "id": 1,
  "text": "Wie habt ihr euch das allererste Mal getroffen?",
  "options": ["...", "...", "..."],
  "correct_index": 2,
  "explanation": "...",
  "image_url": "https://..."
}
```

## 🔐 Sicherheit

- ✅ Auth über Supabase (Magic Links, OAuth)
- ✅ Server-side validation für alle API-Calls
- ✅ DSGVO-konform (Datenschutzseite, Cookie-Consent)
- ✅ Rate-Limiting empfohlen (Supabase or Vercel Edge)
- ✅ Moderation für User-generated Content

## 📝 Lizenz

Fan-Projekt – nicht offiziell verbunden mit dem Podcast „Einer von den Guten".

**Bildrechte:** Lizenzfrei (Unsplash, Pexels) oder mit Genehmigung.

## 🤝 Contributing

Fehler gefunden? Feature-Idee?
- Issues erstellen
- Pull Requests willkommen
- Feedback via Email

## 📧 Support

Bei Fragen oder Problemen:
- GitHub Issues
- Email: [deine@email.com]
- Discord: [optional]

---

**Viel Spaß beim Quizzen! 🎮**
