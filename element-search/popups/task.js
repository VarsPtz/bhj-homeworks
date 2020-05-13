const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById("modal_success");
const modalClose = document.querySelectorAll('.modal__close_times');
const successBtn = document.querySelector('.show-success');

setTimeout(() => {
 modalMain.classList.add("modal_active");
}, 2000);

successBtn.addEventListener("click", function () {
 modalMain.classList.remove("modal_active");
 modalSuccess.classList.add("modal_active");
});

modalClose.forEach(element => {
 element.addEventListener("click", () => element.closest(".modal").remove("modal_active"));
});