const buttonToggler = document.querySelector(".help-toggler");
const helpContent = document.querySelector(".help-content");

buttonToggler.addEventListener("click", helpToggler);

function helpToggler() {
  helpContent.classList.toggle("active");
}
