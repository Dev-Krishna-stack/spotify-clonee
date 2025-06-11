const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');

hamburger.addEventListener('click', () => {
  sideMenu.classList.toggle('show');
});

function showMore() {
  const more = document.getElementById("moreContent");
  if (more.style.display === "none") {
    more.style.display = "block";
  } else {
    more.style.display = "none";
  }
}