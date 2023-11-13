const botonVerAmigos = document.querySelector("#boton");
const botonDelete = document.querySelector("#delete");
const URL_BASE = "http://localhost:5000";
const listaUL = document.querySelector("#lista");
const inputFriends = document.querySelector("#input");
const botonBuscador = document.querySelector("#search");

//**************************************************************************** *
//?                     VER AMIGOS
// const listaLI = document.createElement("li");

// const functionMostrar = function () {
// 	$.get(`${URL_BASE}/amigos`, (user) => {
// 		user.forEach((friend) => {
// 			let listaLI = document.createElement("li");
// 			listaLI.innerHTML = friend.name;
// 			listaUL.appendChild(listaLI);
// 		});
// 	});
// };
// const accion = botonVerAmigos.addEventListener("click", functionMostrar);

const fsBuscar = function () {
	listaUL.innerHTML = "";
	$.get(`${URL_BASE}/amigos`, (friends) => {
		friends.forEach((friend) => {
			let listaLI = document.createElement("li");
			listaLI.innerHTML = friend.name;
			listaUL.appendChild(listaLI);
		});
	});
};
botonVerAmigos.addEventListener("click", fsBuscar);

//**************************************************************************** */
//?                     BUSCAR AMIGO
const spanAmigo = document.getElementById("amigo");
// const input = $("#input").val();

const buscarAmigoPorID = function () {
	const input = document.getElementById("input").value;
	$.get(`${URL_BASE}/amigos/${input}`, function (valor) {
		spanAmigo.innerHTML = valor.name;
	});
};
botonBuscador.addEventListener("click", buscarAmigoPorID);

//**************************************************************************** */
//?                     DELETE AMIGO
