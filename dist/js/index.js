let head = {
  header: document.querySelector(".header"),

  burgerLogo() {
    this.header.addEventListener("click", (event) => {
      const logoTarget = event.target.closest(".header__logo");
      const ulTarget = document.querySelector(".header__logo + ul");
      if (logoTarget) {
        ulTarget.classList.toggle("display-none");
      }
    });
  },
};

head.burgerLogo();
