// Click event listener to toggle "open" class on clicked image
document.body.addEventListener("click", (event) => {
  const clickedElement = event.target,
    imgs = document.querySelectorAll(".img");

  // Remove "open" class from all images before adding it to the clicked one
  if (!clickedElement.classList.contains("img")) {
    imgs.forEach((img) => img.classList.remove("open"));
    return;
  }

  // Toggle "open" class on clicked image
  if (clickedElement.classList.contains("open")) {
    clickedElement.classList.remove("open");
    return;
  }

  // Remove "open" class from all images before adding it to the clicked one
  imgs.forEach((img) => img.classList.remove("open"));
  clickedElement.classList.add("open");
});

// Click event listener to prevent default link behavior on clicked image
document.body.addEventListener("click", (event) => {});
