"use stirct";

const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach((item, index) => {

 const tabsLength = tabs.length;
 
 item.addEventListener("click", (event) => {

  const tabsActive = Array.from(document.querySelectorAll(".tab_active"));
  const tabsContentActive = Array.from(document.querySelectorAll(".tab__content_active"));
  
  if (tabsActive.length != 0) {
   tabsActive[0].classList.remove("tab_active");
  }

  if (tabsContentActive != 0) {
   tabsContentActive[0].classList.remove("tab__content_active");
  }

  item.classList.add("tab_active");
  tabsContent[index].classList.add("tab__content_active");
  
 });

});