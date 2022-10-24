const loginBtn = document.querySelector(".container nav .login");
const signupBtn = document.querySelector(".container nav .signup");

const loginSection = document.querySelector(".container #login");
const signupSection = document.querySelector(".container #signup");

signupBtn.addEventListener("click", () => {
	signupBtn.classList.add("selected");
	loginBtn.classList.remove("selected");
	loginSection.style.display = "none";
	signupSection.style.display = "block";
});

loginBtn.addEventListener("click", () => {
	loginBtn.classList.add("selected");
	signupBtn.classList.remove("selected");
	signupSection.style.display = "none";
	loginSection.style.display = "block";
});

const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

const fields = document.querySelectorAll("input");

fields.forEach(field => {
	field.addEventListener("input", () => {
		let thisField = document.getElementById(field.id);
		if(thisField.validity.valid) {
			thisField.classList.remove("error");
			thisField.nextElementSibling.classList.remove("show");
		}
	});
});

loginForm.addEventListener("submit", function(e) {
	fields.forEach(field => {
		let thisField = document.getElementById(field.id);
		if (!thisField.validity.valid) {
			thisField.classList.add("error");
			thisField.nextElementSibling.classList.add("show");
			e.preventDefault();
		}
	});
});

signupForm.addEventListener("submit", function(e) {
	fields.forEach(field => {
		let thisField = document.getElementById(field.id);
		if (!thisField.validity.valid) {
			thisField.classList.add("error");
			thisField.nextElementSibling.classList.add("show");
			e.preventDefault();
		}
	});
});