var button = document.querySelector(".reservation-button");
var form = document.querySelector(".booking-form");

var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");
var check_in = form.querySelector("[name=check-in-date]");
var check_out = form.querySelector("[name=check-out-date]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

try {
    storageAdults = localStorage.getItem("adults");
    storageChildren = localStorage.getItem("children");
} catch (err) {
    isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.classList.toggle("form-hide");
});


form.addEventListener("submit", function(evt) {
    if (!check_in.value || !check_out.value || !adults.value || !children.value) {
        evt.preventDefault();
        form.classList.remove("form-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.toggle("form-error");
        if (!check_out.value) {
            check_out.focus();
            if (!check_in.value) {
                check_in.focus();
            }
        } else if (!adults.value) {
            adults.focus();
        } else children.focus();
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {

        if (form.classList.contains("form-show")) {
            form.classList.add("form-hide");
            form.classList.remove("form-error");
        }
    }
})