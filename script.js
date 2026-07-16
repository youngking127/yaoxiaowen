const filterButtons = document.querySelectorAll("[data-filter]");
const workCards = document.querySelectorAll("[data-category]");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    workCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
