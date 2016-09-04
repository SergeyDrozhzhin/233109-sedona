var link = document.querySelector(".hotel-search-btn");
var popup = document.querySelector(".modal");
var focusfield = popup.querySelector("[name=arrival-date]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-content-show");
  focusfield.focus();
});

window.addEventListener("keydown", function (event) {
 if(event.keyCode == 27) {
   if(popup.classList.contains("modal-content-show")) {
    popup.classList.remove("modal-content-show");
  }
}
});
