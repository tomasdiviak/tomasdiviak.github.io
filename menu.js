const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");

  if (!burger || !nav) {
    return;
  }

  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-active");
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
};

navSlide();
