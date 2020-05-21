const checkboxes = Array.from(document.querySelectorAll(".interest__check"));

checkboxes.forEach(checkbox => 
 checkbox.addEventListener("click", () => {
    const parent = checkbox.closest("li");
    const children = parent.querySelectorAll("ul.interests_active input.interest__check");

    for (let child of children) {
      if (checkbox.checked) {
        child.checked = true;
      } else {
        child.checked = false;
      }
    }
    
  })
);