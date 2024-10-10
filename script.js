let nombre1html = document.getElementById("nombre1");
let nombre1 = nombre1html.value;

let nombre2html = document.getElementById("nombre2");
let nombre2 = nombre2html.value;

function launchCalcul() {
	return nombre1 * nombre2;
}

nombre2html.addEventListener("keydown", (e) => {
	if (e.key === `Enter`) {
		launchCalcul();
	}
});

console.log(launchCalcul());

let nouveauCalcul = document.getElementById("nouveauCalcul");

nouveauCalcul.addEventListener("click");
