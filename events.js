/*__MENU__*/
const menuToggle = document.getElementById('menuToggle');
const slideMenu = document.getElementById('slideMenu');
const overlay = document.getElementById('menuOverlay');
menuToggle.onclick = () => {
  slideMenu.classList.toggle('active');
  overlay.classList.toggle('active');
};
overlay.onclick = () => {
  slideMenu.classList.remove('active');
  overlay.classList.remove('active');
};



const searchIcon = document.getElementById('searchIcon');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const body = document.querySelector('body');

searchIcon.onclick = () => {
  searchContainer.classList.toggle('active');
  if (searchContainer.classList.contains('active')) {
    searchInput.focus();
  }
};

document.addEventListener('click', function (e) {
  if (!searchContainer.contains(e.target) && e.target !== searchIcon) {
    searchContainer.classList.remove('active');
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    searchContainer.classList.remove('active');
  }
});
/*________*/






/*__CARRUSEL DE IMAGENES__*/
const images = document.querySelectorAll('.Objects3d');
const dots = document.querySelectorAll('.dot');
let index = 0;
let interval;

function showImage(i) {
  images.forEach((img, j) => {
    img.style.display = i === j ? 'block' : 'none';
    img.style.opacity = '0';
    img.style.animation = 'none';
    img.offsetHeight;
    if (i === j) {
      img.style.animation = 'slideInFromRight 1s forwards';
    }
  });

  dots.forEach(dot => dot.classList.remove('active'));
  dots[i].classList.add('active');
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

function resetTimer() {
  clearInterval(interval);
  interval = setInterval(nextImage, 10000);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showImage(index);
    resetTimer();
  });
});

showImage(index);
resetTimer();

let startX = 0;
let endX = 0;

const carousel = document.querySelector('.Objects3d').parentElement; // contenedor padre

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', () => {
  const diffX = endX - startX;
  if (Math.abs(diffX) > 50) { // umbral mínimo para considerar swipe
    if (diffX > 0) {
      // Swipe hacia la derecha, imagen anterior
      index = (index - 1 + images.length) % images.length;
    } else {
      // Swipe hacia la izquierda, imagen siguiente
      index = (index + 1) % images.length;
    }
    showImage(index);
    resetTimer();
  }
/*_________________________*/





/*__LEER MAS__*/
const toggleBtn = document.getElementById('toggleIntro');
const hiddenText = document.getElementById('introExtra');

toggleBtn.addEventListener('click', () => {
  hiddenText.classList.toggle('show');
  toggleBtn.classList.toggle('rotate');
});
/*_____________*/






/*__VER PRODUCTOS__*/
const btn = document.querySelector('.verProductos');
const waterFill = document.querySelector('.water-fill');

btn.addEventListener('click', () => {
  waterFill.style.height = '100%';

  setTimeout(() => {
    window.location.href = '/productos.html'; 
  }, 2500); 
});
/*__________________*/
