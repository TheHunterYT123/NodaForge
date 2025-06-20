/*__PLANTILLA DE LA CARTA__*/
document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.querySelector(".card-wrapper");
  const modal = document.getElementById("productModal");
  const closeModalBtn = document.getElementById("closeModal");

  if (!contenedor || !modal || !closeModalBtn) {
    console.error("❌ Faltan elementos necesarios en el HTML.");
    return;
  }

  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="image-container">
        <img src="${producto.imagen}" alt="${producto.titulo}">
      </div>
      <div class="product-info">
        <div>
          <div class="product-title">${producto.titulo}</div>
          <div class="seller"></div>
          <div class="price">$${producto.precio.toFixed(2)} <span class="discount">${producto.descuento}</span></div>
          <div class="installments">Orden mín: ${producto.ordenMinima}</div>
          <div class="envio">${producto.envio}</div>
        </div>
        <div class="tag">${producto.tag}</div>
      </div>
    `;

    card.addEventListener("click", () => mostrarModal(producto));
    contenedor.appendChild(card);
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  function mostrarModal(producto) {
    modal.querySelector("img").src = producto.imagen;
    modal.querySelector("img").alt = producto.titulo;
    modal.querySelector("#modalTitle").textContent = producto.titulo;
    modal.querySelector(".price-main").textContent = `$${producto.precio.toFixed(2)}`;
    modal.querySelector(".price-discount").textContent = producto.descuento;
    modal.querySelector(".modal-meta").innerHTML = `
      <div class="meta-item"><i class="ri-check-line"></i><span>Orden mínima: <strong>${producto.ordenMinima}</strong></span></div>
      <div class="meta-item"><i class="ri-truck-line"></i><span>${producto.envio}</span></div>
    `;
    modal.querySelector(".modal-description").textContent = producto.descripcion;
    modal.style.display = "block";
  }
});
/*_____________________*/




/*__BOTON DE REGISTRACION AL HACER UNA COMPRA__*/
document.addEventListener("DOMContentLoaded", () => {
  const buyButton = document.querySelector(".buy-button");

  buyButton.addEventListener("click", () => {
    mostrarNotificacion();
    vibrarDispositivo();
  });

  function mostrarNotificacion() {
    const snackbar = document.createElement("div");
    snackbar.className = "snackbar";
    snackbar.textContent = "Debes registrarte primero";

    snackbar.addEventListener("click", () => {
      window.location.href = "login.html";
    });

    document.body.appendChild(snackbar);

    setTimeout(() => {
      snackbar.classList.add("show");
    }, 50);

    setTimeout(() => {
      snackbar.classList.remove("show");
      setTimeout(() => snackbar.remove(), 300);
    }, 4000);
  }

  function vibrarDispositivo() {
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    }
  }
});
/*_________________________________________________*/




/*__CONFIG DE MODAL__*/
const card = document.querySelector('.card-wrapper');
const modal = document.getElementById('productModal');
const closeBtn = document.getElementById('closeModal');

function openModal() {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  modal.focus();
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

card.addEventListener('click', () => {
  openModal();
});

closeBtn.addEventListener('click', () => {
  closeModal();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
});
/*_________________________*/


document.querySelectorAll('.order-card').forEach(card => {
  card.addEventListener('click', () => {
    // Elimina la clase de todas
    document.querySelectorAll('.order-card').forEach(c => c.classList.remove('clicked'));
    // Agrega la clase solo a la seleccionada
    card.classList.add('clicked');
  });
});