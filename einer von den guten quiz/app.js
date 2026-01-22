let quizData = [];
let currentQuestion = 0;
let score = 0;
let soundEnabled = true;
let answered = false;
let userAnswers = [];

const imageURL = './public/evdg-hero.jpg.webp';

// MEMES
const MEMES = {
  correct: [
    { emoji: '🍺', text: 'CRACKER!' },
    { emoji: '🧀', text: 'UNGESALZENER CRACKER!' },
    { emoji: '🐝', text: 'BIENE!' },
    { emoji: '💪', text: 'ZEO STARK!' },
    { emoji: '😂', text: 'HÜBI LACHT!' }
  ],
  wrong: [
    { emoji: '😅', text: 'OOF!' },
    { emoji: '🤦', text: 'FALSCH!' },
    { emoji: '💀', text: 'RIP!' }
  ]
};

// QUIZ DATEN DIREKT
const DEFAULT_QUIZ = [
  {
    "id": 1,
    "text": "Wie habt ihr euch eigentlich das allererste Mal getroffen — erzählt die peinlichste Version.",
    "options": ["Auf einer Party, keiner erinnerte sich", "Bei einem Gaming-Event zufällig", "Im Chat per DM — peinlich beim Treffen"],
    "correct_index": 2,
    "explanation": "Im Chat per DM! Das erste Treffen war super peinlich. 😅"
  },
  {
    "id": 2,
    "text": "Wer hat die verrücktere Kindheitsstory?",
    "options": ["Hübi — die Wiki-notierte Story", "Zeo — die Story mit dem ersten Kuss", "Beide gleich verrückt"],
    "correct_index": 0,
    "explanation": "Hübi! Die Wiki listet mehrere absurde Anekdoten zu ihm. 🤪"
  },
  {
    "id": 3,
    "text": "Was war die absurdeste DM, die ihr je bekommen habt?",
    "options": ["Fan bot an: 'Ich schenke euch ein Bienenvolk'", "Fan schrieb 500 Wörter über Käse im Schuh", "Fan behauptete: 'Ich bin euer verlorener Cousin'"],
    "correct_index": 1,
    "explanation": "500 Wörter über Käse im Schuh! Das ist pure Meme-Ästhetik. 🧀👟"
  },
  {
    "id": 4,
    "text": "Wenn 'Einer von den Guten' ein Gericht wäre — welches wäre Hübi?",
    "options": ["Ungesalzener Cracker", "Käse im Schuh", "Bienen-Gulasch"],
    "correct_index": 0,
    "explanation": "Ungesalzener Cracker! Der klassische Running-Gag. 🍘"
  },
  {
    "id": 5,
    "text": "Welches eurer Zitate wurde am häufigsten als Meme-Bild gepostet?",
    "options": ["Zeo geht es nicht gut", "Hübi ist ein ungesalzener Cracker", "Die unantastbare Würde einer Biene"],
    "correct_index": 1,
    "explanation": "'Hübi ist ein ungesalzener Cracker' — taucht überall auf! 🔥"
  }
  // ... (weitere Fragen hier einfügen - gekürzt für Übersicht)
];

// Quiz laden
async function loadQuiz() {
  try {
    console.log('📂 Versuche Quiz-Datei zu laden...');
    const response = await fetch('./data/questions-optimized.json');
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const data = await response.json();
    
    if (Array.isArray(data) && data.length > 0) {
      quizData = data;
      console.log('✅ Quiz-Datei erfolgreich geladen:', quizData.length, 'Fragen');
    } else {
      throw new Error('Ungültige Datenstruktur');
    }
  } catch (error) {
    console.warn('⚠️ Fehler beim Laden der JSON-Datei:', error);
    console.log('📋 Nutze Fallback-Daten...');
    quizData = DEFAULT_QUIZ;
  }
}

function goToQuiz() {
  console.log('🎮 Quiz-Start wird versucht...');
  
  // Prüfe Daten
  if (!quizData || quizData.length === 0) {
    console.error('❌ Keine Quiz-Daten verfügbar!');
    alert('Quiz-Daten werden geladen. Bitte warten...');
    loadQuiz();
    setTimeout(() => goToQuiz(), 1000);
    return;
  }
  
  console.log('✅ Quiz-Daten vorhanden:', quizData.length, 'Fragen');
  
  // Seiten anzeigen/verstecken
  const homePage = document.getElementById('home-page');
  const quizPage = document.getElementById('quiz-page');
  const resultsPage = document.getElementById('results-page');
  
  if (!homePage || !quizPage || !resultsPage) {
    console.error('❌ Seiten-Container nicht gefunden!');
    return;
  }
  
  homePage.style.display = 'none';
  quizPage.style.display = 'block';
  resultsPage.style.display = 'none';
  
  // Quiz reset
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  answered = false;
  
  console.log('🎬 Zeige erste Frage...');
  showQuestion();
  
  // Scroll zu Top
  window.scrollTo(0, 0);
}

function goToHome() {
  console.log('🏠 Zurück zur Startseite');
  document.getElementById('home-page').style.display = 'block';
  document.getElementById('quiz-page').style.display = 'none';
  document.getElementById('results-page').style.display = 'none';
}

function showQuestion() {
  console.log('📋 Frage', currentQuestion + 1, 'von', quizData.length);
  
  if (!quizData || quizData.length === 0) {
    console.error('❌ Keine Quiz-Daten!');
    return;
  }

  answered = false;
  const question = quizData[currentQuestion];
  
  if (!question) {
    console.error('❌ Frage nicht gefunden!');
    return;
  }

  // Update Header
  const counterEl = document.getElementById('current-question');
  const scoreEl = document.getElementById('score-display');
  
  if (counterEl) counterEl.textContent = currentQuestion + 1;
  if (scoreEl) scoreEl.textContent = score;
  
  // Update Progress
  const percentage = ((currentQuestion + 1) / quizData.length) * 100;
  const progressBar = document.getElementById('progress-bar');
  const progressPercent = document.getElementById('progress-percentage');
  
  if (progressBar) progressBar.style.width = percentage + '%';
  if (progressPercent) progressPercent.textContent = Math.round(percentage) + '%';

  // Frage anzeigen
  const imageEl = document.getElementById('question-image');
  const textEl = document.getElementById('question-text');
  const optionsEl = document.getElementById('options');
  
  if (imageEl) imageEl.src = imageURL;
  if (textEl) textEl.textContent = question.text;

  // Optionen rendern
  if (optionsEl) {
    const optionsHTML = question.options.map((option, index) => `
      <button class="option" onclick="selectAnswer(${index})">
        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
        <span class="option-text">${option}</span>
      </button>
    `).join('');
    
    optionsEl.innerHTML = optionsHTML;
  }

  // Erklärung verstecken
  const explSection = document.getElementById('explanation-section');
  if (explSection) explSection.style.display = 'none';

  console.log('✅ Frage angezeigt');
}

function selectAnswer(index) {
  if (answered) return;

  console.log('✅ Antwort gewählt:', index);
  
  answered = true;
  const question = quizData[currentQuestion];
  const options = document.querySelectorAll('.option');
  const isCorrect = index === question.correct_index;

  userAnswers.push({
    questionId: currentQuestion + 1,
    selected: index,
    correct: question.correct_index,
    isCorrect: isCorrect
  });

  options.forEach((option, i) => {
    option.disabled = true;
    if (i === question.correct_index) {
      option.classList.add('correct');
    } else if (i === index && i !== question.correct_index) {
      option.classList.add('incorrect');
      showWrongReaction();
    }
  });

  if (isCorrect) {
    score++;
    showCelebration();
    showRandomMeme('correct');
    createConfetti();
  } else {
    showRandomMeme('wrong');
  }

  // Erklärung anzeigen
  const explText = document.getElementById('explanation-text');
  const explSection = document.getElementById('explanation-section');
  
  if (explText) explText.textContent = question.explanation;
  if (explSection) explSection.style.display = 'block';

  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, 100);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  console.log('🏆 Zeige Ergebnisse');
  
  document.getElementById('quiz-page').style.display = 'none';
  document.getElementById('results-page').style.display = 'block';

  const percentage = (score / quizData.length) * 100;
  const wrong = quizData.length - score;

  document.getElementById('final-score').textContent = score;
  document.getElementById('final-percentage').textContent = percentage.toFixed(1) + '%';
  document.getElementById('correct-count').textContent = score;
  document.getElementById('wrong-count').textContent = wrong;
  document.getElementById('success-rate').textContent = percentage.toFixed(0) + '%';

  let title = '';
  let message = '';

  if (percentage === 100) {
    title = '🏆 MEGA-FAN!';
    message = 'Du bist ein GOTT! Du kennst WIRKLICH jeden Meme! 😱';
  } else if (percentage >= 90) {
    title = '⭐ SUPER-FAN!';
    message = 'Beeindruckend! Du kennst praktisch alles! 🔥';
  } else if (percentage >= 80) {
    title = '👑 ECHTER FAN!';
    message = 'Sehr gut! Du bist definitiv ein echter Fan! 💪';
  } else if (percentage >= 70) {
    title = '✨ SOLIDAR FAN!';
    message = 'Nicht schlecht! Du kennst eine Menge! 📻';
  } else if (percentage >= 50) {
    title = '👍 CASUAL FAN!';
    message = 'Du magst den Podcast! Höre noch mehr rein! 🚀';
  } else {
    title = '🤔 NEWBIE!';
    message = 'Das ist erst der Anfang! Es wird besser! 📺';
  }

  document.getElementById('results-title').innerHTML = title;
  document.getElementById('results-message').innerHTML = message;

  showCelebration();
  window.scrollTo(0, 0);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  answered = false;
  goToQuiz();
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  const btn = document.querySelector('.btn-sound');
  if (btn) btn.textContent = soundEnabled ? '🔊' : '🔇';
}

function showCelebration() {
  const overlay = document.getElementById('celebration-overlay');
  if (!overlay) return;
  
  overlay.classList.add('show');
  
  const beerCan = document.querySelector('.beer-decoration');
  if (beerCan) {
    beerCan.style.animation = 'floating 1s ease-in-out';
  }
  
  setTimeout(() => {
    overlay.classList.remove('show');
  }, 1500);
}

function showWrongReaction() {
  const beerCan = document.querySelector('.beer-decoration');
  if (beerCan) {
    beerCan.style.animation = 'shake 0.5s ease-in-out';
  }
}

function showRandomMeme(type) {
  const memeList = MEMES[type] || MEMES.correct;
  const randomMeme = memeList[Math.floor(Math.random() * memeList.length)];
  
  const memeElement = document.createElement('div');
  memeElement.className = 'meme-popup';
  memeElement.innerHTML = `<span class="meme-emoji">${randomMeme.emoji}</span><span class="meme-text">${randomMeme.text}</span>`;
  
  document.body.appendChild(memeElement);
  
  setTimeout(() => memeElement.classList.add('show'), 10);
  setTimeout(() => {
    memeElement.classList.remove('show');
    setTimeout(() => memeElement.remove(), 300);
  }, 1500);
}

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

// LOAD ON START
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Seite geladen...');
  console.log('📂 Lade Quiz-Daten...');
  loadQuiz();
  console.log('✅ Bereit!');
});

// Bierdose Interaktivität
document.addEventListener('DOMContentLoaded', () => {
  const beerDose = document.querySelector('.beer-decoration');
  if (beerDose) {
    beerDose.addEventListener('click', () => {
      beerDose.style.animation = 'none';
      setTimeout(() => {
        beerDose.style.animation = 'floating 3s ease-in-out infinite, rotating 4s linear infinite';
      }, 10);
      createConfetti();
    });
  }
});
