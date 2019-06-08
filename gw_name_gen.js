let firstLet = {"a": "storm", "b": "black", "c": "fyre", "d": "death", "e": "warp", "f": "space", "g": "doom", 
	"h": "skull", "i":"bale", "j":"war", "k":"wolf", "l": "blood", "m": "dawn", "n": "flesh", "o": "night", 
	"p": "iron", "q": "daemon", "r": "shroud", "s": "flayed", "t": "steel", "u": "bone", "v": "forge", "w": "shadow", 
	"x": "curse", "y": "tomb", "z": "gore"};
let lastLet = {"a": "might", "b": "veiled", "c": "smash", "d": "claw", "e": "wrath", "f": "hammer", "g": "hunt", 
	"h": "borne", "i": "doom", "j": "tear", "k": "geist", "l": "skull", "m": "blade", "n": "fright", "o": "stone", 
	"p": "hawk", "q": "bane", "r": "hound", "s": "crush", "t": "cast", "u": "bound", "v": "risen", "w": "wrought", 
	"x": "cursed", "y": "sight", "z": "maw"};
let lastAge = ["vile", "song", "wight", "foe", "cruel", "valour", "doom", "cursed", "fell", "death"];
let lastYear = ["blades", "hunt", "brood", "warriors", "legion", "path", "watch", "cult", "bound", "seekers"];
let month = ["disciples", "reavers", "marines", "crusaders", "eternals", "marauders", "knights", "warlocks",
	"revenants", "enclaves", "raiders", "legion"];

function capitaliseWord(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function getAge(birthDate) {
	birthDate.setHours(0,0,0,0);
	let diff = new Date(Date.now() - birthDate.getTime());
	return Math.abs(diff.getUTCFullYear() - 1970);
}

function generate_name(e) {
	e.preventDefault();

	let surname = document.getElementById("name_input").value;
	let birthDate = new Date(document.getElementById("date_input").value);

	// check values against regex

	let nameChk = /^[A-Za-z]/;
	if (nameChk.test(surname)) {

		let wordOne = firstLet[surname.slice(0, 1).toLowerCase()] + lastLet[surname.slice(-1).toLowerCase()];
		let wordTwo = "";
		if (Math.random() > 0.5) {
			wordTwo  = month[birthDate.getMonth()];
		} else {
			wordTwo = lastAge[getAge(birthDate) % 10] + lastYear[birthDate.getFullYear() % 10]
		}

		let name = capitaliseWord(wordOne) + " " + capitaliseWord(wordTwo);

		// remove name div if existing
		if (document.getElementById("name")) {
			document.getElementById("results").removeChild(document.getElementById("name"));
		}

		// append to placeholder div
		let element = document.createElement("div");
		element.setAttribute("id", "name");
		element.appendChild(document.createTextNode(name));
		document.getElementById("results").appendChild(element);

	}
}