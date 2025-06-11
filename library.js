// ======= Library Page =======
const libraryList = document.getElementById('library-list');
const searchInput = document.getElementById('search-library');

// Use the same songs array from the player for the library
function renderLibrary(songsToRender) {
  libraryList.innerHTML = '';
  songsToRender.forEach((song, i) => {
    const li = document.createElement('li');
    li.textContent = `${song.title} - ${song.artist}`;
    li.style.cursor = 'pointer';
    li.style.padding = '8px 10px';
    li.style.borderBottom = '1px solid #444';
    li.addEventListener('click', () => {
      // Load and play selected song
      currentSongIndex = i;
      loadSong(songs[currentSongIndex]);
      playSong();

      // Switch to Home section with player visible
      document.querySelector('nav button[data-target="home"]').click();
    });
    libraryList.appendChild(li);
  });
}

// Initial render with all songs
renderLibrary(songs);

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filteredSongs = songs.filter(
    (s) => s.title.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query)
  );
  renderLibrary(filteredSongs);
});

// ======= Profile Page =======
const profileForm = document.getElementById('profile-form');
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const profilePassword = document.getElementById('profile-password');
const logoutBtn = document.getElementById('logout-btn');

// Mock user data (normally this comes from backend or auth)
let user = {
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123'
};

// Load user data into form
function loadUserProfile() {
  profileName.value = user.name;
  profileEmail.value = user.email;
  profilePassword.value = '';
}

loadUserProfile();

profileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Save the form data to user object (mock save)
  user.name = profileName.value;
  user.email = profileEmail.value;
  if (profilePassword.value.trim() !== '') {
    user.password = profilePassword.value;
  }
  alert('Profile updated!');
  profilePassword.value = '';
});

logoutBtn.addEventListener('click', () => {
  alert('Logged out!');
  // You can add more logic here (redirect, clear auth tokens, etc.)
});

// ======= Subscription Page =======
const subscriptionStatus = document.getElementById('subscription-status');
const planButtons = document.querySelectorAll('.select-plan-btn');

// Mock subscription status (load from localStorage or default Free)
let subscription = localStorage.getItem('subscription') || 'Free';

function updateSubscriptionStatus() {
  subscriptionStatus.textContent = `Current Plan: ${subscription}`;
}

updateSubscriptionStatus();

planButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedPlan = btn.getAttribute('data-plan');
    subscription = selectedPlan;
    localStorage.setItem('subscription', subscription);
    updateSubscriptionStatus();
    alert(`You selected the ${selectedPlan} plan.`);
  });
});
