// Example: Toggle navigation menu on click
const navLinks = document.querySelectorAll("#bottomHalf a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Add your logic here (e.g., show/hide submenus, change styles, etc.)
    console.log(`Clicked on ${link.textContent}`);
  });
});
