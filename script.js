const imagen = document.getElementById('imagen');

function giro() {
	const animacion = imagen.animate([
			{transform: "scale(0) rotate(0deg)"},
			{transform: "scale(1) rotate(720deg)"}
		],{
			easing: "linear",
			iterations: 1,
			duration: 400
	});
	return animacion.finished;
}


function dado() {
	resultado = Math.floor(6*Math.random() + 1);
	console.log(resultado);
	imagen.src = 'imagenes/' + resultado + '.jpg';
	giro();
}

function mostrar_creditos() {
	alert("Todas las imágenes han sido robadas a sus respectivos dueños\nLa página fue creada por Ramiro Arambarri\nInstagram: @ramiro_arambarri\nMail: raarambarri@gmail.com");
}

document.getElementById('boton').addEventListener("click", dado);

document.getElementById('creditos').addEventListener("click", mostrar_creditos);