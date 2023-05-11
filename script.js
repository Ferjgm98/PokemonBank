let baseUrl = `${window.location.href.split("/PokemonBank")[0]}/PokemonBank`;
const loginForm = document.getElementById("login-form");

switch (window.location.protocol) {
	case "http:":
	case "https:":
		baseUrl = `${window.location.protocol}//${window.location.host}`;
		break;
}

if (loginForm)
	loginForm.onsubmit = function login(event) {
		event.preventDefault();
		const value = document.getElementById("pin").value;

		if (value === "1234") {
			window.location.href = `${baseUrl}/pages/transactions.html`;
		} else {
			document.getElementById("error-login").style.display = "block";
			document.getElementById("error-login").style.color = "red";
		}
	};

function handleAlert(text) {
	alert(text);
}

function navigateTo(url) {
	window.location.href = `${baseUrl}${url}`;
}
