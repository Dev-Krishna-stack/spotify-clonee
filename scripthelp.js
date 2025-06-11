const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');

hamburger.addEventListener('click', () => {
  sideMenu.classList.toggle('show');
});
const questions = [
  { q: "How to reset my Spotify password?", a: "Go to login page → 'Forgot Password' → follow the email link." },
  { q: "How can I change my email address?", a: "Visit account settings → change email." },
  { q: "Why is Spotify not playing songs?", a: "Check internet → restart app → clear cache." },
  { q: "How to cancel Spotify Premium?", a: "Go to 'Your Plan' → click 'Cancel Premium'." },
  { q: "Can I recover deleted playlists?", a: "Yes. Go to account → 'Recover playlists'." },
  { q: "How to enable offline mode?", a: "In app settings → enable 'Offline Mode'." },
  { q: "What to do if Spotify is crashing?", a: "Update app → clear cache → reinstall." },
  { q: "How to change language?", a: "Settings → Language → Choose your preferred language." },
  { q: "How can I block explicit content?", a: "Go to account settings → enable 'Block explicit content'." },
  { q: "How do I find my Spotify Wrapped?", a: "Search 'Wrapped' on Spotify during December." },
  { q: "How to follow artists?", a: "Click on artist profile → 'Follow'." },
  { q: "Can I share my playlist?", a: "Yes. Open playlist → Share → Copy link." },
  { q: "How to create a group session?", a: "Play song → click Connect icon → Start session." },
  { q: "Why can't I download songs?", a: "Only Premium users can download. Upgrade to Premium." },
  { q: "How to delete my account?", a: "Go to support → search 'delete account' → follow steps." },
  { q: "How to change theme?", a: "Redirecting to settings... Click 'Change Theme' below." },
  { q: "Can I use Spotify on TV?", a: "Yes, via app or screen casting." },
  { q: "What are listening stats?", a: "You can see them in 'Your Library' → 'Stats'." },
  { q: "How to upgrade to Premium?", a: "Click your profile → 'Upgrade to Premium'." },
  { q: "How to stop autoplay?", a: "Settings → turn off 'Autoplay on this device'." },
];

const container = document.getElementById("faq-container");
const searchInput = document.getElementById("search");

function renderQuestions(filteredQuestions) {
  container.innerHTML = '';
  filteredQuestions.forEach(({ q, a }, index) => {
    const item = document.createElement("div");
    item.className = "faq-item";
    item.innerHTML = `
      <strong>${q}</strong>
      <div class="faq-answer" id="answer-${index}" style="display: none;">${a}</div>
    `;
    item.addEventListener("click", () => {
      const answer = document.getElementById(`answer-${index}`);
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
    container.appendChild(item);
  });
}

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = questions.filter(({ q }) => q.toLowerCase().includes(term));
  renderQuestions(filtered);
});

function redirectToSettings() {
  window.location.href = "settings.html";
}

// Initial render
renderQuestions(questions);
