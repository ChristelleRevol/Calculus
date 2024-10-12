// Result with multiple inputs
// let nombre1 = 0;
// let nombre2 = 0;

// const nombre1html = document.getElementById("nombre1");
// nombre1html.addEventListener("change", (event) => {
// 	nombre1 = Number.parseInt(event.target.value);
// });

// const nombre2html = document.getElementById("nombre2");
// nombre2html.addEventListener("change", (event) => {
// 	nombre2 = Number.parseInt(event.target.value);
// });

// const multiply = (num1, num2) => num1 * num2;

// const button = document.getElementById("launchCalculation");
// button.addEventListener("click", (e) => {
// 	console.log(multiply(nombre1, nombre2));
// });

// Result with "game loop"
// const resultDiv = document.getElementById("result");

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// const calculusLoop = async () => {
// 		while (true) {
// 			await sleep(16);

// 			const nombre1 = nombre1html.value;
// 			const nombre2 = nombre2html.value;
// 			resultDiv.innerHTML = multiply(nombre1, nombre2);
// 		}
// 	};

// calculusLoop();

let nombre1 = 0;
let nombre2 = 0;
let currentNumber = 1;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const inputlinehtml = document.getElementById("nombre1");

inputlinehtml.addEventListener("keydown", (event) => {
	const newCharacter = event.key;

	if (newCharacter === "Enter") {
		// biome-ignore lint/correctness/noSwitchDeclarations: <explanation>
		const userinput = inputlinehtml.value;
		// biome-ignore lint/correctness/noSwitchDeclarations: <explanation>
		const isMultiplication = userinput.includes("*");
		// biome-ignore lint/correctness/noSwitchDeclarations: <explanation>
		const isDivision = userinput.includes("/");

		if (isMultiplication) {
			const splitMultiplication = userinput.split(/\*|\//);
			inputlinehtml.value = `The multiple of ${userinput} is ${multiply(splitMultiplication[0], splitMultiplication[1])}!!`;
		} else if (isDivision) {
			const splitDivision = userinput.split(/\*|\//);
			inputlinehtml.value = `The division of ${userinput} is ${divide(splitDivision[0], splitDivision[1])}`;
		} else {
			inputlinehtml.value = "Error";
		}
	}
});

// Solution de Chatgpt pour clear la zone de calcul avec button:
// Event listener for when the input is cleared
/*
inputlinehtml.addEventListener("input", () => {
	if (inputlinehtml.value === "") {
		// Reset to initial state when the input is cleared
		nombre1 = 0;
		nombre2 = 0;
		currentNumber = 1;
	}
});
*/

const nouveauCalcul = document.querySelector(".nouveauCalcul button");

nouveauCalcul.addEventListener("click", () => {
	nombre1 = 0;
	nombre2 = 0;
	currentNumber = 1;
	inputlinehtml.value = "";
});
