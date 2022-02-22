const form = document.querySelector(".contact form");
const email = document.querySelector(".contact input");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let emailValue = email.value;
	if (validEmail(emailValue)) {
		form.classList.remove("error");
	} else {
		form.classList.add("error");
	}
});

// Validates email address
function validEmail(email) {
	var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	return String(email).search(filter) != -1;
}
