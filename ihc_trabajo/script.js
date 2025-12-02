console.log("script.js cargado"); 

const btnContacto = document.getElementById('btnContacto');
const modalContacto = document.getElementById('modalContacto');
const cerrarModal = document.getElementById('cerrarModal');
const formContacto = document.getElementById('formContacto');

const modalConfirmacion = document.getElementById('modalConfirmacion');
const btnAceptar = document.getElementById('btnAceptar');
const mensajeExito = document.getElementById('mensajeExito');

console.log("btnContacto:", btnContacto);
console.log("modalContacto:", modalContacto);
console.log("formContacto:", formContacto);

if (!btnContacto || !modalContacto || !formContacto) {
  console.error("Falta alguno de los elementos clave (btnContacto / modalContacto / formContacto). Revisa IDs y que script.js esté cargado después del HTML.");
} else {
  btnContacto.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("Click en Contacto detectado");
    modalContacto.style.display = 'block';
    modalContacto.setAttribute('aria-hidden', 'false');
  });

  if (cerrarModal) {
    cerrarModal.addEventListener('click', function() {
      modalContacto.style.display = 'none';
      modalContacto.setAttribute('aria-hidden', 'true');
    });
  } else {
    console.warn("No se encontró #cerrarModal (X).");
  }

  window.addEventListener('click', function(e) {
    if (e.target === modalContacto) {
      modalContacto.style.display = 'none';
      modalContacto.setAttribute('aria-hidden', 'true');
    }
    if (modalConfirmacion && e.target === modalConfirmacion) {
      modalConfirmacion.style.display = 'none';
      modalConfirmacion.setAttribute('aria-hidden', 'true');
    }
  });

formContacto.addEventListener('submit', function(e) {
    e.preventDefault();

    alert("¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente.\nTe responderemos pronto.");

    formContacto.reset();
});

  if (btnAceptar) {
    btnAceptar.addEventListener('click', function() {
      modalConfirmacion.style.display = 'none';
      modalConfirmacion.setAttribute('aria-hidden', 'true');
    });
  } else {
    console.warn("No se encontró #btnAceptar en modalConfirmacion.");
  }
}

console.log("Sistema de registro cargado");

const personas = [
  { nombre: "Lucía", apellido: "Fernández", edad: 22, interes: "Arte" },
  { nombre: "Carlos", apellido: "Mora", edad: 25, interes: "Tecnología" },
  { nombre: "Ana", apellido: "Rojas", edad: 20, interes: "Música" },
  { nombre: "Diego", apellido: "López", edad: 23, interes: "Deportes" }
];

let interesesSeleccionados = [];

document.querySelectorAll(".interes-tag").forEach(tag => {
  tag.addEventListener("click", () => {
    tag.classList.toggle("activo");

    if (tag.classList.contains("activo")) {
      interesesSeleccionados.push(tag.innerText);
    } else {
      interesesSeleccionados = interesesSeleccionados.filter(i => i !== tag.innerText);
    }
  });
});

const btnRegistrar = document.getElementById("btnRegistrar");

if (btnRegistrar) {
  btnRegistrar.addEventListener("click", () => {

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;

    if (nombre === "" || correo === "") {
      alert("Debes completar tu nombre y correo 😅");
      return;
    }

    document.getElementById("perfilNombre").innerText = nombre;
    document.getElementById("perfilCorreo").innerText = correo;
    document.getElementById("perfilIntereses").innerText = interesesSeleccionados.join(", ");
    document.getElementById("registro").style.display = "none";
    document.getElementById("zonaMatches").style.display = "block";

    let contenedor = document.getElementById("listaMatches");
    contenedor.innerHTML = "";

    personas.forEach(p => {
      contenedor.innerHTML += `
        <div class="cardMatch">
          <h3>${p.nombre} ${p.apellido}</h3>
          <p><strong>Edad:</strong> ${p.edad}</p>
          <p><strong>Interés:</strong> ${p.interes}</p>
        </div>
      `;
    });

  });
}

document.addEventListener('DOMContentLoaded', function() {

  const btnRegistrar = document.getElementById('btnRegistrar');
  const registroSeccion = document.getElementById('registro');      
  const perfilUsuario = document.getElementById('perfilUsuario');  
  const nombreInput = document.getElementById('nombre');
  const correoInput = document.getElementById('correo');

  const editNombre = document.getElementById('editNombre');
  const editCorreo = document.getElementById('editCorreo');
  const editInteres = document.getElementById('editInteres');

  const interesesContainer = document.getElementById('intereses');
  let interesesSeleccionados = [];

  if (interesesContainer) {
    interesesContainer.querySelectorAll('span, .interes-tag, div').forEach(el => {
      if (el.tagName.toLowerCase() === 'span' || el.classList.contains('interes-tag') || el.tagName.toLowerCase()==='div') {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          el.classList.toggle('activo');
          const text = el.innerText.trim();
          if (el.classList.contains('activo')) {
            if (!interesesSeleccionados.includes(text)) interesesSeleccionados.push(text);
            el.style.background = '#6b8bff';
            el.style.color = '#fff';
          } else {
            interesesSeleccionados = interesesSeleccionados.filter(i => i !== text);
            el.style.background = '';
            el.style.color = '';
          }
        });
      }
    });
  }

  if (btnRegistrar) {
    btnRegistrar.addEventListener('click', function(e) {
      e.preventDefault();

      const nombre = nombreInput ? nombreInput.value.trim() : '';
      const correo = correoInput ? correoInput.value.trim() : '';

      if (!nombre || !correo) {
        alert('Por favor completa nombre y correo.');
        return;
      }

      if (editNombre) editNombre.value = nombre;
      if (editCorreo) editCorreo.value = correo;
      if (editInteres) editInteres.value = interesesSeleccionados.join(', ');
      if (registroSeccion) registroSeccion.style.display = 'none';
      if (perfilUsuario) perfilUsuario.style.display = 'block';
      if (perfilUsuario) perfilUsuario.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const btnGuardar = document.querySelector('.btn-guardar');
  if (btnGuardar) {
    btnGuardar.addEventListener('click', () => {
      alert('Cambios guardados (simulado).');
    });
  }

});

