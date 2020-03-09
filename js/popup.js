var button = document.querySelector(".reservation-button");
var form = document.querySelector(".booking-form");

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.classList.toggle("form-hide");
});
