// Audio player functionality
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const trackName = document.getElementById('trackName');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

let isPlaying = false;
let currentTrackIndex = 0;
let tracks = [];

// Function to play a song
function playSong(src, name) {
  audio.src = src;
  trackName.textContent = name;
  audio.play();
  isPlaying = true;
  playBtn.textContent = '⏸️';

  // Add to tracks history if not already there
  if (!tracks.includes(src)) {
    tracks.push(src);
    currentTrackIndex = tracks.length - 1;
  } else {
    currentTrackIndex = tracks.indexOf(src);
  }
}

// Toggle play/pause
function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = '▶️';
  } else {
    audio.play();
    playBtn.textContent = '⏸️';
  }
  isPlaying = !isPlaying;
}

// Play previous song
function prevSong() {
  currentTrackIndex--;
  if (currentTrackIndex < 0) {
    currentTrackIndex = tracks.length - 1;
  }
  audio.src = tracks[currentTrackIndex];
  audio.play();
  isPlaying = true;
  playBtn.textContent = '⏸️';
}

// Play next song
function nextSong() {
  currentTrackIndex++;
  if (currentTrackIndex >= tracks.length) {
    currentTrackIndex = 0;
  }
  audio.src = tracks[currentTrackIndex];
  audio.play();
  isPlaying = true;
  playBtn.textContent = '⏸️';
}

// Update progress bar
function updateProgress() {
  progress.value = audio.currentTime / audio.duration;
  if (audio.ended) {
    nextSong();
  }
}

// Set progress when user clicks on progress bar
function setProgress() {
  audio.currentTime = progress.value * audio.duration;
}

// Set volume
function setVolume() {
  audio.volume = volume.value;
}

// Event listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progress.addEventListener('input', setProgress);
volume.addEventListener('input', setVolume);

// Artist page functionality
document.addEventListener('DOMContentLoaded', function () {
  // Check if we're on the songs.html page
  if (window.location.pathname.includes('songs.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const artist = urlParams.get('artist');

    if (artist) {
      loadArtistData(artist);
    }
  }
});

// Load artist data for artist pages
function loadArtistData(artistId) {
  const artistData = {
    'weeknd': {
      name: 'The Weeknd',
      image: 'weeknd.jpeg',
      monthlyListeners: '85.5M',
      songs: [
        { title: 'Blinding Lights', album: 'After Hours (2020)', duration: '3:20', src: 'blinding-lights.mp3' },
        { title: 'Starboy', album: 'Starboy (2016)', duration: '3:50', src: 'starboy.mp3' },
        { title: 'Save Your Tears', album: 'After Hours (2020)', duration: '3:35', src: 'save-your-tears.mp3' },
        { title: 'The Hills', album: 'Beauty Behind the Madness (2015)', duration: '3:41', src: 'the-hills.mp3' }
      ],
    },
    'ed-sheeran': {
      name: 'Ed Sheeran',
      image: 'edsheeran.jpeg',
      monthlyListeners: '78.2M',
      songs: [
        { title: 'Shape of You', album: '÷ (2017)', duration: '3:53', src: 'shape-of-you.mp3' },
        { title: 'Perfect', album: '÷ (2017)', duration: '4:23', src: 'perfect.mp3' },
        { title: 'Thinking Out Loud', album: 'x (2014)', duration: '4:41', src: 'thinking-out-loud.mp3' }
      ],
    },
    'ariana-grande': {
      name: 'Ariana Grande',
      image: 'ariana.jpeg',
      monthlyListeners: '72.8M',
      songs: [
        { title: 'thank u, next', album: 'thank u, next (2019)', duration: '3:27', src: 'thank-u-next.mp3' },
        { title: '7 rings', album: 'thank u, next (2019)', duration: '2:58', src: '7-rings.mp3' },
        { title: 'positions', album: 'positions (2020)', duration: '2:52', src: 'positions.mp3' }
      ],
    },
    'post-malone': {
      name: 'Post Malone',
      image: 'post.jpeg',
      monthlyListeners: '68.3M',
      songs: [
        { title: 'Circles', album: 'Hollywood\'s Bleeding (2019)', duration: '3:35', src: 'circles.mp3' },
        { title: 'Sunflower', album: 'Spider-Man: Into the Spider-Verse (2018)', duration: '2:38', src: 'sunflower.mp3' },
        { title: 'Rockstar', album: 'beerbongs & bentleys (2018)', duration: '3:38', src: 'rockstar.mp3' }
      ],
    },
    'bruno-mars': {
      name: 'Bruno Mars',
      image: 'bruno.jpeg',
      monthlyListeners: '65.7M',
      songs: [
        { title: 'Uptown Funk', album: 'Uptown Special (2014)', duration: '4:30', src: 'uptown-funk.mp3' },
        { title: 'That\'s What I Like', album: '24K Magic (2016)', duration: '3:26', src: 'thats-what-i-like.mp3' },
        { title: 'Just the Way You Are', album: 'Doo-Wops & Hooligans (2010)', duration: '3:40', src: 'just-the-way-you-are.mp3' }
      ],
    },
    'taylor-swift': {
      name: 'Taylor Swift',
      image: 'taylor.jpeg',
      monthlyListeners: '62.4M',
      songs: [
        { title: 'Blank Space', album: '1989 (2014)', duration: '3:51', src: 'blank-space.mp3' },
        { title: 'Love Story', album: 'Fearless (2008)', duration: '3:55', src: 'love-story.mp3' },
        { title: 'Shake It Off', album: '1989 (2014)', duration: '3:39', src: 'shake-it-off.mp3' }
      ],
    }
  };

  const artist = artistData[artistId] || {
    name: 'Artist',
    image: '1.jpg',
    monthlyListeners: '10M',
    songs: [],
    albums: []
  };

  // Update artist info
  document.getElementById('artist-name').textContent = artist.name;
  document.getElementById('artist-image').src = artist.image;
  document.getElementById('artist-stats').textContent = `${artist.monthlyListeners} monthly listeners • ${artist.songs.length} songs`;

  // Populate popular songs
  const songsContainer = document.getElementById('popular-songs');
  songsContainer.innerHTML = '';
  artist.songs.forEach((song, index) => {
    const songItem = document.createElement('div');
    songItem.className = 'song-item';
    songItem.onclick = () => playSong(song.src, `${artist.name} - ${song.title}`);
    songItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <img src="${artist.image}" alt="${song.title}" />
      <div class="song-info">
        <p class="song-title">${song.title}</p>
        <p class="song-album">${song.album}</p>
      </div>
      <span class="duration">${song.duration}</span>
    `;
    songsContainer.appendChild(songItem);
  });
}
