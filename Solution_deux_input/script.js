let nombre1html = document.getElementById("nombre1");
nombre1html.addEventListener("onchange", (event) => {
	nombre1 = event.target.value;
});

let nombre2html = document.getElementById("nombre2");
nombre2html.addEventListener("onchange", (event) => {
	nombre1 = event.target.value;
});

function launchCalcul() {
	return nombre1 * nombre2;
}
/*
nombre2html.addEventListener("keydown", (e) => {
	if (e.key === `Enter`) {
		launchCalcul();
	}
});
*/

console.log(launchCalcul());
