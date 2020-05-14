const mainMenuItems = document.querySelectorAll("ul.menu_main > li.menu__item > a.menu__link");

Array.from(mainMenuItems).forEach(e => { 
 e.addEventListener("click", (event) => {
  event.preventDefault();
  let menuActive = document.querySelectorAll(
    "ul.menu.menu_main > li.menu__item > ul.menu.menu_sub.menu_active"
  );
  if (e.closest(".menu__item").querySelector("ul.menu.menu_sub")) {
   e.closest(".menu__item").querySelector("ul.menu.menu_sub").classList.toggle("menu_active");
   if (menuActive.length != 0) {
    menuActive[0].classList.remove("menu_active");
   }
   return false;
  }  
 });
 
});