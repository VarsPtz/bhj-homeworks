const checkboxes = document.querySelectorAll(".interest__check");

for (let checkbox of checkboxes) {
  checkbox.addEventListener("click", (e) => {
    let parent = checkbox.closest("li");
    let children = parent.querySelectorAll(
      "ul.interests_active input.interest__check"
    );
    for (let child of children) {
      if (checkbox.checked) {
        child.checked = true;
      } else {
        child.checked = false;
      }
    }
  });
}