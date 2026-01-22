// ALLE 50 FRAGEN
const QUIZ_DATA = [
  { "id": 1, "text": "Wie habt ihr euch eigentlich das allererste Mal getroffen — erzählt die peinlichste Version.", "options": ["Auf einer Party, keiner erinnerte sich", "Bei einem Gaming-Event zufällig", "Im Chat per DM — peinlich beim Treffen"], "correct_index": 2, "explanation": "Im Chat per DM! Das erste Treffen war super peinlich. 😅" },
  { "id": 2, "text": "Wer hat die verrücktere Kindheitsstory?", "options": ["Hübi — die Wiki-notierte Story", "Zeo — die Story mit dem ersten Kuss", "Beide gleich verrückt"], "correct_index": 0, "explanation": "Hübi! Die Wiki listet mehrere absurde Anekdoten zu ihm. 🤪" },
  { "id": 3, "text": "Was war die absurdeste DM, die ihr je bekommen habt?", "options": ["Fan bot an: 'Ich schenke euch ein Bienenvolk'", "Fan schrieb 500 Wörter über Käse im Schuh", "Fan behauptete: 'Ich bin euer verlorener Cousin'"], "correct_index": 1, "explanation": "500 Wörter über Käse im Schuh! Das ist pure Meme-Ästhetik. 🧀👟" },
  { "id": 4, "text": "Wenn 'Einer von den Guten' ein Gericht wäre — welches wäre Hübi?", "options": ["Ungesalzener Cracker", "Käse im Schuh", "Bienen-Gulasch"], "correct_index": 0, "explanation": "Ungesalzener Cracker! Der klassische Running-Gag. 🍘" },
  { "id": 5, "text": "Welches eurer Zitate wurde am häufigsten als Meme-Bild gepostet?", "options": ["Zeo geht es nicht gut", "Hübi ist ein ungesalzener Cracker", "Die unantastbare Würde einer Biene"], "correct_index": 1, "explanation": "'Hübi ist ein ungesalzener Cracker' — taucht überall auf! 🔥" },
  { "id": 6, "text": "Welches ihrer eigenen Memes würdet ihr am ehesten neu auflagen?", "options": ["Verbieten: Hübi-Face verbieten", "Neuauflage: Hübi-Face als offizielles Merch", "Community regeln lassen"], "correct_index": 1, "explanation": "Neuauflage als Merch! Meme-Merch kommt bei Fans mega an. 👕" },
  { "id": 7, "text": "Was war die chaotischste Podcastaufnahme (technische oder inhaltliche Panne)?", "options": ["Mikro ist ausgefallen, Folge abgebrochen", "Langer Lachflash, Folge nicht fortsetzbar", "Live-Publikum stürmt Bühne"], "correct_index": 1, "explanation": "Langer Lachflash! Comedy-Panne, aber legendär. 😂" },
  { "id": 8, "text": "Wer von euch hat die dümmste Challenge erfunden?", "options": ["Hübi", "Zeo", "Beide gemeinsam"], "correct_index": 2, "explanation": "Beide gemeinsam! Improvisation ist das beste Chaos. 🎭" },
  { "id": 9, "text": "Habt ihr jemals eine Story-Lüge erzählt, die später als wahr herauskam?", "options": ["Ja, komplett erfunden", "Teilweise — etwas Wahres drin", "Nein, immer real"], "correct_index": 1, "explanation": "Teilweise wahr! Storytelling hat immer 'Schattierungen'. ✨" },
  { "id": 10, "text": "Wenn ihr eine Fan-Verschwörungstheorie über euch erfinden müsstet — wie viele glauben daran?", "options": ["< 1%", "1–10%", "> 10%"], "correct_index": 1, "explanation": "1–10%! Subreddit-Humor führt zu kleinen Verschwörungssäßchen. 🤔" },
  { "id": 11, "text": "Lieblings-Hater-Moment: Wurde der Kommentar mehr geliked oder geteilt?", "options": ["Mehr geliked", "Mehr geteilt", "Gleich"], "correct_index": 0, "explanation": "Mehr geliked! Hater-Posts bekommen Upvotes, weniger Shares. 👍" },
  { "id": 12, "text": "Welche Person wird öfter als Traum-Gast genannt?", "options": ["Simon Unge (Promi/YouTuber)", "Überraschungs-Fan als Interview", "Geheimnis-Gast"], "correct_index": 0, "explanation": "Simon Unge! Bekannte Creator sind die Wunsch-Gäste. 🌟" },
  { "id": 13, "text": "Wie bereitet ihr euch inhaltlich auf eine Folge vor?", "options": ["0–15 Minuten (sehr spontan)", "15–60 Minuten (leicht vorbereitet)", ">60 Minuten (konkret geplant)"], "correct_index": 1, "explanation": "15–60 Minuten! Comedy-Podcasts arbeiten mit groben Stichpunkten. 📝" },
  { "id": 14, "text": "Welches Thema würde die Community als Satire akzeptieren?", "options": ["Dating / Beziehungs-Kram", "Politik", "Finanz-Talk"], "correct_index": 0, "explanation": "Dating! Fans bevorzugen private & peinliche Stories. 💔" },
  { "id": 15, "text": "Zeo vs. Hübi: Wer gewinnt im Blind-Käse-Ranking?", "options": ["Hübi", "Zeo", "Unentschieden"], "correct_index": 1, "explanation": "Zeo! Running-gags deuten auf Zeos kulinarische Abenteuer. 🧀" },
  { "id": 16, "text": "Welches Zitat wurde am meisten als Audio-Clip in Reels verwendet?", "options": ["'Zeo geht es nicht gut'", "'Ungesalzener Cracker'", "'Bienen-Interlude'"], "correct_index": 1, "explanation": "'Ungesalzener Cracker'! Kurze Meme-Phrasen funktionieren perfekt. 🔥" },
  { "id": 17, "text": "Nennt einen internen Code-Satz — wie viele Fans raten die Bedeutung in 1 Stunde?", "options": ["<100 Fans", "100–1000 Fans", ">1000 Fans"], "correct_index": 1, "explanation": "100–1000 Fans! Die Community reagiert schnell. ⚡" },
  { "id": 18, "text": "Welche Merch-Idee wurde am häufigsten vorgeschlagen?", "options": ["Hübi-Kaffeetasse ('Ungesalzener Cracker')", "Zeo-Bierglas ('Zeo vs. Bier')", "Meme-Shirt (Hübi-Face / Collage)"], "correct_index": 2, "explanation": "Meme-Shirt! Shirts sind die beliebteste Fan-Merch. 👕" },
  { "id": 19, "text": "Die dümmste Fanfrage — wie oft kam sie schon?", "options": ["0 Mal (neu)", "1–5 Mal", ">5 Mal"], "correct_index": 2, "explanation": ">5 Mal! Absurde wiederkehrende Fragen sind Meme-Treiber. 🤣" },
  { "id": 20, "text": "Was war das teuerste Missverständnis — wie viele Zuhörer bekamen es mit?", "options": ["<1.000", "1.000–20.000", ">20.000"], "correct_index": 1, "explanation": "1.000–20.000! Viraler Clip-Effekt mit Nischen-Reach. 📱" },
  { "id": 21, "text": "Würdet ihr eine komplette Folge improvisieren?", "options": ["Ja, spontan live", "Nein, nur geplant", "Als Special-Event"], "correct_index": 2, "explanation": "Als Special-Event! Impro-Folgen sind Highlight-Material. ✨" },
  { "id": 22, "text": "Wenn euer Podcast eine Fernsehserie wäre — welches Genre?", "options": ["Sitcom", "Mockumentary", "Late-Night/Variety"], "correct_index": 0, "explanation": "Sitcom! Episodische Gags passen perfekt. 📺" },
  { "id": 23, "text": "Wer nervt offline mehr (Skala)?", "options": ["Hübi: wenig", "Hübi: mittel", "Hübi: sehr"], "correct_index": 1, "explanation": "Hübi: mittel! Freundschaftlicher Banter. 😜" },
  { "id": 24, "text": "Wer hat die melodramatischste Story laut Wiki?", "options": ["Hübi", "Zeo", "Beide gleich"], "correct_index": 0, "explanation": "Hübi! Wiki-Einträge zeigen überzeichnete Anekdoten. 📖" },
  { "id": 25, "text": "Falsches Horoskop — welches nimmt die Community am ehesten ernst?", "options": ["'Steinbock: Du erklärst Bienenvolken Million'", "'Wassermann: Dein Ich ist ungesalzener Cracker'", "'Zwillinge: Vermeide Küchengeräte'"], "correct_index": 1, "explanation": "'Wassermann: ungesalzener Cracker'! Perfect Meme-Material. ♒" },
  { "id": 26, "text": "Welches ist euer heimliches Guilty-Pleasure-Song?", "options": ["Pop-Song (peinlich)", "Schlager-Hit", "TikTok-Meme Song"], "correct_index": 2, "explanation": "TikTok-Meme Song! Überraschend & modern. 🎵" },
  { "id": 27, "text": "Welcher Running-Gag soll neu gestartet werden?", "options": ["Zeo vs. Bier", "Hübi-Face", "'Einer von den ...' Template"], "correct_index": 0, "explanation": "Zeo vs. Bier! Der Klassiker ist bereit für Comeback. 🍺" },
  { "id": 28, "text": "Erzählt die Geschichte hinter eurem besten spontanen Lacher — wie lange?", "options": ["<10 Sek.", "10–60 Sek.", ">60 Sek."], "correct_index": 1, "explanation": "10–60 Sek.! Typische Lachflash-Clips. 😂" },
  { "id": 29, "text": "Welche drei Fragen darf man NIE in Live-Q stellen?", "options": ["'Wie viel verdient ihr?' + 'Wer ist euer Ex?' + 'Ist das echt?'", "Nur persönliche Fragen", "Alle sind oK"], "correct_index": 0, "explanation": "Alle drei! Sensibel oder Spoiler-Material. 🚫" },
  { "id": 30, "text": "Peinlichste Freundschafts-Minute on-air — wie viele sahen stumm zu?", "options": ["<1.000", "1.000–10.000", ">10.000"], "correct_index": 1, "explanation": "1.000–10.000! Live-Zuschauer in typischem Bereich. 👀" },
  { "id": 31, "text": "'Dumme Frage des Monats' — wer beantwortet ernsthaft?", "options": ["Hübi", "Zeo", "Keiner von beiden"], "correct_index": 0, "explanation": "Hübi! Der ernsthafte Typ. 😐" },
  { "id": 32, "text": "Beschreibt den perfekten Fan in drei Worten — wer errät es?", "options": ["'Loyal, laut, kreativ'", "'Frech, meme-versiert, schüchtern'", "'Kostümiert, laut, emotional'"], "correct_index": 0, "explanation": "'Loyal, laut, kreativ'! Das ist der Ideal-Fan. ⭐" },
  { "id": 33, "text": "Wenn ihr 'Einer von den Guten'-Cocktail kreiert: wieviel ml geheime Zutat?", "options": ["5–15 ml", "15–40 ml", "40–100 ml"], "correct_index": 0, "explanation": "5–15 ml! Geheimzutat bleibt subtil. 🍹" },
  { "id": 34, "text": "Welcher Flop bekam viralen Push (Streams Woche 1)?", "options": ["<5.000 Streams", "5.000–100.000", ">100.000"], "correct_index": 1, "explanation": "5.000–100.000! Virale Nischen-Formate. 📈" },
  { "id": 35, "text": "Habt ihr ein Ritual vor Aufnahmen?", "options": ["Ja, kleines Ritual (High-Five, Bier, Joke)", "Nein, nie", "Manchmal, nur bei Tours"], "correct_index": 2, "explanation": "Manchmal bei Tours! Spezielle Energie für Events. ✨" },
  { "id": 36, "text": "Wer würde im Survival-Szenario länger überleben?", "options": ["Hübi", "Zeo", "Gleiche Zeit"], "correct_index": 1, "explanation": "Zeo! Running-gags zeigen ihn als tougher. 💪" },
  { "id": 37, "text": "Backstage Horror Story: Wie viele Leute waren dabei?", "options": ["1–5", "6–20", ">20"], "correct_index": 1, "explanation": "6–20! Mittlere Chaos-Gruppe. 😱" },
  { "id": 38, "text": "Meme-Museum – welches Exponat ist das Kronjuwel?", "options": ["Zeo vs. Bier Collage", "Hübi-Face Print", "Andi500-Legend"], "correct_index": 0, "explanation": "Zeo vs. Bier Collage! Der Klassiker. 👑" },
  { "id": 39, "text": "Schlechtestes Promo-Foto — welches 'Most Iconic Awkward'?", "options": ["Live-Selfie (Hübi mit Bier)", "Gestellte Promo (übertrieben)", "Blurry Backstage"], "correct_index": 0, "explanation": "Live-Selfie! Das ist authentisch peinlich. 📸" },
  { "id": 40, "text": "Wer weint heimlich öfter bei Fan-Danksagungen?", "options": ["Hübi", "Zeo", "Keiner"], "correct_index": 0, "explanation": "Hübi! Der emotionale Typ. 😭" },
  { "id": 41, "text": "Welche königliche Pflicht wäre für Zeo am peinlichsten?", "options": ["Parade in Unterhose", "Rede über Bier-Etikette", "Kuchenessen-Zeremonie"], "correct_index": 1, "explanation": "Rede über Bier-Etikette! Perfekt für Zeo. 🍺" },
  { "id": 42, "text": "Dümmste Fan-Hypothese — wie plausibel?", "options": ["<5%", "5–25%", ">25%"], "correct_index": 0, "explanation": "<5%! Aber lustig trotzdem. 🤪" },
  { "id": 43, "text": "Was opfert ihr: Podcast 1 Jahr oder Socials 1 Jahr?", "options": ["Podcast", "Socials", "Keins"], "correct_index": 1, "explanation": "Socials! Podcast ist Hauptprodukt. 📻" },
  { "id": 44, "text": "Wie lange dauerte das synchronste Lachen (viral clip)?", "options": ["<10 Sek.", "10–60 Sek.", ">60 Sek."], "correct_index": 1, "explanation": "10–60 Sek.! Sweet Spot für Clips. 😂" },
  { "id": 45, "text": "Live-Impro 'Rate das Meme' — wie viele errät ein Host in 90 Sek.?", "options": ["0–3", "4–10", ">10"], "correct_index": 1, "explanation": "4–10! Gutes Brain-Tempo. 🧠" },
  { "id": 46, "text": "Welcher fiktive Episoden-Plot gewinnt?", "options": ["Roadtrip: 'Tourchaos & Autopanne'", "Krimi: 'Wer klaute das Bier?'", "Sci-Fi: 'Im Jahr 3000'"], "correct_index": 0, "explanation": "Roadtrip! Chaos & Authentizität. 🚗" },
  { "id": 47, "text": "Wie viele persönliche DMs nach der emotionalen Folge?", "options": ["<100", "100–1.000", ">1.000"], "correct_index": 1, "explanation": "100–1.000! Community-Power. 💌" },
  { "id": 48, "text": "Welcher der 3 dümmsten Hypes wurde am meisten nachgeahmt?", "options": ["Käse im Schuh", "Vorhaut & Bienen", "Zeo vs. Bier"], "correct_index": 2, "explanation": "Zeo vs. Bier! Der Meme-König. 👑" },
  { "id": 49, "text": "'Hübi's Küchenkatastrophen' — wöchentlich oder Special?", "options": ["Wöchentlich", "Nur Special", "Cancelled"], "correct_index": 1, "explanation": "Nur Special! Mehr Impact als Serie. ✨" },
  { "id": 50, "text": "Meta: Was wollen neue Hörer nach 3 Folgen wissen?", "options": ["Sind die wirklich so peinlich/offen?", "Welche Folge ist der beste Einstieg?", "Welche Running-Gags muss ich kennen?"], "correct_index": 0, "explanation": "'Sind die wirklich so peinlich?' — JA! Das ist das Geheimnis. 🎙️" }
];

// STATE
let currentQ = 0;
let totalScore = 0;
let soundOn = true;
let answered = false;
let QUIZ_DATA = [];

const imageURL = './public/evdg-hero.jpg.webp';

// QUIZ DATEN LADEN
async function loadQuizData() {
  try {
    console.log('📂 Laden Quiz-Daten von JSON...');
    const response = await fetch('./data/questions-optimized.json');
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    QUIZ_DATA = await response.json();
    console.log('✅ Quiz erfolgreich geladen:', QUIZ_DATA.length, 'Fragen');
    return true;
  } catch (error) {
    console.error('❌ Fehler beim Laden:', error);
    alert('Fehler beim Laden der Quiz-Daten!');
    return false;
  }
}

function startQuiz() {
  if (QUIZ_DATA.length === 0) {
    alert('Quiz wird noch geladen... Bitte warten!');
    return;
  }
  
  currentQ = 0;
  totalScore = 0;
  answered = false;
  showPage('quiz-page');
  loadQuestion();
  initBeerDose();
}

function goHome() {
  showPage('home-page');
}

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page).classList.add('active');
}

// BIERDOSE INTERAKTIVITÄT
function initBeerDose() {
  const beerDose = document.querySelector('.beer-deco');
  
  if (!beerDose) return;

  beerDose.addEventListener('click', () => {
    beerDose.classList.add('shake');
    setTimeout(() => beerDose.classList.remove('shake'), 500);
    createConfetti();
  });

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  beerDose.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - beerDose.offsetLeft;
    offsetY = e.clientY - beerDose.offsetTop;
    beerDose.classList.add('dragging');
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      beerDose.style.left = (e.clientX - offsetX) + 'px';
      beerDose.style.top = (e.clientY - offsetY) + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    beerDose.classList.remove('dragging');
  });
}

// CONFETTI
function createConfetti() {
  const colors = ['#ff6b6b', '#667eea', '#764ba2', '#ff9800', '#4caf50'];
  
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    confetti.appendChild(particle);
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
  }
}

function loadQuestion() {
  if (currentQ >= QUIZ_DATA.length) {
    showResults();
    return;
  }

  answered = false;
  const q = QUIZ_DATA[currentQ];

  document.getElementById('q-num').textContent = currentQ + 1;
  document.getElementById('q-score').textContent = totalScore;
  
  const perc = Math.round(((currentQ + 1) / QUIZ_DATA.length) * 100);
  document.getElementById('progress').style.width = perc + '%';
  document.getElementById('progress-text').textContent = perc + '%';

  document.getElementById('quiz-question').textContent = q.text;

  let opts = '<div class="quiz-options">';
  q.options.forEach((opt, i) => {
    opts += `<button class="option" onclick="answer(${i})">${String.fromCharCode(65 + i)}: ${opt}</button>`;
  });
  opts += '</div>';
  document.getElementById('quiz-options').innerHTML = opts;

  document.getElementById('explanation').style.display = 'none';

  window.scrollTo(0, 0);
}

function answer(idx) {
  if (answered) return;
  answered = true;

  const q = QUIZ_DATA[currentQ];
  const correct = idx === q.correct_index;

  const btns = document.querySelectorAll('.option');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === q.correct_index) {
      b.classList.add('correct');
    } else if (i === idx) {
      b.classList.add(correct ? 'correct' : 'incorrect');
    }
  });

  if (correct) {
    totalScore++;
    showCelebration();
    beerDoseReaction('correct');
  } else {
    beerDoseReaction('wrong');
  }

  document.getElementById('explanation-text').textContent = q.explanation;
  document.getElementById('explanation').style.display = 'block';

  setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
}

function beerDoseReaction(type) {
  const beerDose = document.querySelector('.beer-deco');
  if (!beerDose) return;

  if (type === 'correct') {
    beerDose.classList.add('celebrate');
    setTimeout(() => beerDose.classList.remove('celebrate'), 1500);
  } else {
    beerDose.classList.add('sad');
    setTimeout(() => beerDose.classList.remove('sad'), 1000);
  }
}

function nextQuestion() {
  currentQ++;
  loadQuestion();
}

function showResults() {
  const perc = Math.round((totalScore / QUIZ_DATA.length) * 100);

  document.getElementById('final-score').textContent = totalScore;
  document.getElementById('final-percentage').textContent = perc + '%';

  let title = '🤔 NEWBIE!';
  let msg = 'Das ist erst der Anfang! Es wird besser! 📺';

  if (perc === 100) {
    title = '🏆 MEGA-FAN!';
    msg = 'Du bist ein GOTT! Du kennst ALLES! 😱';
  } else if (perc >= 90) {
    title = '⭐ SUPER-FAN!';
    msg = 'Beeindruckend! Du kennst praktisch alles! 🔥';
  } else if (perc >= 80) {
    title = '👑 ECHTER FAN!';
    msg = 'Sehr gut! Du bist definitiv ein echter Fan! 💪';
  } else if (perc >= 70) {
    title = '✨ SOLIDAR FAN!';
    msg = 'Nicht schlecht! Du kennst eine Menge! 📻';
  } else if (perc >= 50) {
    title = '👍 CASUAL FAN!';
    msg = 'Du magst den Podcast! Höre noch mehr rein! 🚀';
  }

  document.getElementById('final-title').textContent = title;
  document.getElementById('final-message').textContent = msg;

  showCelebration();
  showPage('results-page');
}

function showCelebration() {
  const cel = document.getElementById('celebration');
  if (cel) {
    cel.classList.add('show');
    setTimeout(() => cel.classList.remove('show'), 1500);
  }
}

function toggleSound() {
  soundOn = !soundOn;
  document.querySelector('.btn-sound').textContent = soundOn ? '🔊' : '🔇';
}

// LOAD ON START
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🚀 Seite geladen - lade Quiz-Daten...');
  await loadQuizData();
  console.log('✅ Bereit zum starten!');
});