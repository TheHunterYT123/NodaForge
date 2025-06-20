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

function showImage(i, direction = 'right') {
  images.forEach((img, j) => {
    if (i === j) {
      img.style.display = 'block';
      img.style.opacity = '1';

      img.style.animation = 'none';
      img.offsetHeight;

      img.style.animation = direction === 'left'
        ? 'slideFromLeft 1s forwards'
        : 'slideInFromRight 1s forwards';

    } else {
      img.style.display = 'none';
      img.style.opacity = '0';
      img.style.animation = 'none';
    }
  });

  dots.forEach(dot => dot.classList.remove('active'));
  dots[i].classList.add('active');
}

function nextImage() {
  const newIndex = (index + 1) % images.length;
  showImage(newIndex, 'right');
  index = newIndex;
}

function resetTimer() {
  clearInterval(interval);
  interval = setInterval(nextImage, 10000);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    const direction = i > index ? 'right' : 'left';
    index = i;
    showImage(index, direction);
    resetTimer();
  });
});

showImage(index);
resetTimer();

let startX = 0;
let endX = 0;

const baseImage = images[0];
if (baseImage) {
  const carousel = baseImage.parentElement;

  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', () => {
    const diffX = endX - startX;
    if (Math.abs(diffX) > 50) {
      let direction = 'right';
      if (diffX > 0) {
        index = (index - 1 + images.length) % images.length;
        direction = 'left';
      } else {
        index = (index + 1) % images.length;
        direction = 'right';
      }
      showImage(index, direction);
      resetTimer();
    }
  });
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
  if (navigator.vibrate) {
    navigator.vibrate(100);
  }

  const rect = btn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  waterFill.style.left = `${centerX}px`;
  waterFill.style.top = `${centerY}px`;
  waterFill.style.opacity = '1';
  waterFill.style.transform = 'translate(-50%, -50%) scale(0)';

  waterFill.offsetHeight;
  const maxRadius = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
  const scale = maxRadius / 50;

  waterFill.style.transition = 'transform 1s ease-out';
  waterFill.style.transform = `translate(-50%, -50%) scale(${scale})`;

  function onTransitionEnd(event) {
    if (event.propertyName === 'transform') {
      waterFill.removeEventListener('transitionend', onTransitionEnd);
      window.location.href = '/productos.html';
    }
  }

  waterFill.addEventListener('transitionend', onTransitionEnd);
});
/*__________________*/










/*__BOTON PARA LAS ORDENES PERSONALIZADAS__*/
const cards = document.querySelectorAll('.order-card');
const consultBtn = document.querySelector('.consult-btn');
let selectedCard = null;

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('clicked'));
    card.classList.add('clicked');
    selectedCard = card;

    consultBtn.textContent = 'Consultar precios';
  });
});

consultBtn.addEventListener('click', () => {
  if (!selectedCard) {

    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }

    consultBtn.textContent = 'Selecciona un pedido';

    consultBtn.classList.add('shake');
    setTimeout(() => {
      consultBtn.classList.remove('shake');
    }, 400);
    return;
  }

  const link = selectedCard.dataset.link;
  if (link) {
    window.location.href = link;
  }
});
/*_________________________________________*/
