/* ===========================================================
   MATEMÁTICA DIGITAL - main.js
   Aquí va el comportamiento (la interactividad) de la página
   de Inicio. Usamos JavaScript básico: querySelector,
   addEventListener y classList.
   =========================================================== */

// Esperamos a que cargue todo el HTML antes de buscar los elementos
document.addEventListener("DOMContentLoaded", function () {

	/* -----------------------------------------------------------
	   1. MENÚ MÓVIL
	   Cuando el usuario hace clic en el botón "Menú" (solo visible
	   en pantallas pequeñas), mostramos u ocultamos la lista de
	   enlaces de navegación.
	   ----------------------------------------------------------- */
	var botonMenu = document.getElementById("botonMenu");
	var menuPrincipal = document.getElementById("menuPrincipal");

	if (botonMenu && menuPrincipal) {
		botonMenu.addEventListener("click", function () {
			menuPrincipal.classList.toggle("menu-abierto");
		});
	}

	/* -----------------------------------------------------------
	   2. PUNTOS DEL HERO
	   Son decorativos por ahora (solo hay una imagen), pero dejamos
	   listo el código para cuando se agreguen más imágenes.
	   Al hacer clic en un punto, le quitamos la clase "activo" a
	   los demás y se la ponemos solo al que se hizo clic.
	   ----------------------------------------------------------- */
	var puntos = document.querySelectorAll(".punto");

	puntos.forEach(function (punto) {
		punto.addEventListener("click", function () {
			puntos.forEach(function (otroPunto) {
				otroPunto.classList.remove("punto-activo");
			});
			punto.classList.add("punto-activo");
		});
	});

	/* -----------------------------------------------------------
	   3. FORMULARIO DE BOLETÍN
	   Como todavía no tenemos un servidor que reciba el correo,
	   evitamos que la página se recargue y mostramos un mensaje
	   de confirmación al usuario.
	   ----------------------------------------------------------- */
	var formBoletin = document.getElementById("formBoletin");

	if (formBoletin) {
		formBoletin.addEventListener("submit", function (evento) {
			evento.preventDefault(); // evita que el formulario se envíe de verdad

			var correo = document.getElementById("correoBoletin").value;
			alert("¡Gracias por suscribirte, " + correo + "!");

			formBoletin.reset(); // limpia el campo del formulario
		});
	}

});
