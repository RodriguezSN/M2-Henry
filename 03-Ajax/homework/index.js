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

$.get(`${URL_BASE}/amigos`, function (friends) {
	friends;
});
