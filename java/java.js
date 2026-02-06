
document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".toggle-title");

  titles.forEach(title => {
    title.addEventListener("click", () => {
      title.classList.toggle("active");

      const content = title.nextElementSibling;
      if (content) {
        content.style.display =
          content.style.display === "block" ? "none" : "block";
      }
    });
  });
});