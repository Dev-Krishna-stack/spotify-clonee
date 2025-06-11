function shareSite() {
  if (navigator.share) {
    navigator.share({
      title: 'Spotify Clone',
      text: 'Check out this cool Spotify-style UI!',
      url: window.location.href
    }).catch(console.error);
  } else {
    alert('Sharing not supported on this browser. Copy the link manually.');
  }
}