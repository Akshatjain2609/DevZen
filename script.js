// --- Calming Quotes ---
// (quotes array declared only once below if not already present)

function newQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = quote;
}

// --- Calm Music Controls ---
const calmMusic = document.getElementById('calmMusic');
const volumeControl = document.getElementById('volumeControl');

function playMusic() {
  if (calmMusic.paused) {
    calmMusic.play();
  } else {
    calmMusic.pause();
  }
}

volumeControl.addEventListener('input', function() {
  calmMusic.volume = this.value;
});
calmMusic.volume = volumeControl.value;

// --- Dark/Light Mode ---
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('darkModeBtn');
  if (document.body.classList.contains('dark-mode')) {
    btn.textContent = '☀️ Toggle Light Mode';
  } else {
    btn.textContent = '🌙 Toggle Dark/Light Mode';
  }
}

// --- Meditation Timer ---
let timerInterval;
function startTimer() {
  clearInterval(timerInterval);
  let minutes = parseInt(document.getElementById('meditationTime').value, 10);
  let seconds = minutes * 60;
  const display = document.getElementById('timerDisplay');
  function updateDisplay() {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    display.textContent = ` ${m}:${s.toString().padStart(2, '0')}`;
  }
  updateDisplay();
  timerInterval = setInterval(() => {
    seconds--;
    updateDisplay();
    if (seconds <= 0) {
      clearInterval(timerInterval);
      display.textContent = ' Done!';
    }
  }, 1000);
}

// --- Daily Affirmation ---
const affirmations = [
  "You are calm and in control.",
  "You radiate positive energy.",
  "You are enough.",
  "You are resilient and strong.",
  "You choose happiness."
];

function newAffirmation() {
  const affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  document.getElementById('affirmation').textContent = affirmation;
}

// --- Save Favorite Quotes ---
function saveFavoriteQuote() {
  const quote = document.getElementById('quote').textContent;
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  if (!favorites.includes(quote)) {
    favorites.push(quote);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites();
  }
}

function renderFavorites() {
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const list = document.getElementById('favoritesList');
  list.innerHTML = '';
  favorites.forEach(q => {
    const li = document.createElement('li');
    li.textContent = q;
    list.appendChild(li);
  });
}

// --- Background Color Animation ---
let colorIndex = 0;
const colors = ['#f5f7fa', '#c3cfe2', '#e0c3fc', '#f9f9f9', '#d4fc79', '#96e6a1'];
function animateBackground() {
  colorIndex = (colorIndex + 1) % colors.length;
  document.body.style.background = colors[colorIndex];
  setTimeout(animateBackground, 8000);
}

// --- Initial Load ---
window.onload = function() {
  newQuote();
  newAffirmation();
  renderFavorites();
  animateBackground();
};
const quotes = [
  "Breathe in calm. Breathe out stress.",
  "You are enough, exactly as you are.",
  "Take a break. You deserve it.",
  "Success starts with self-care.",
  "Peace begins with a deep breath.",
  "One step at a time, no need to rush.",
];

function newQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}

// Load a random quote on first load
window.onload = newQuote;

function playMusic() {
  const audio = document.getElementById("calmMusic");
  audio.play();
}
