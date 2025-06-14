const images = [
  "images/bg1.jpg",
  "images/bg2.png",
  "images/bg3.jpg",
  "images/bg4.jpg",
  "images/bg5.jpg"
];

let index = 0;
let showingBg1 = true;

const bg1 = document.getElementById('cbg1');
const bg2 = document.getElementById('cbg2');

// Set initial image
bg1.style.backgroundImage = `url('${images[index]}')`;
bg1.style.opacity = 1;

function changeBackground() {
  index = (index + 1) % images.length;
  const nextImage = `url('${images[index]}')`;

  if (showingBg1) {
    bg2.style.backgroundImage = nextImage;
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
  } else {
    bg1.style.backgroundImage = nextImage;
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
  }

  showingBg1 = !showingBg1;
}

window.addEventListener('load', () => {
  setInterval(changeBackground, 5000);
});

