function setupHeaderMenu() {
  const exitIcon = document.querySelector(".header__close");
  const header = document.querySelector(".header");
  const navWrapper = document.querySelector(".nav__wrapper");
  const burgerIcon = document.querySelector(".header__burger");

  const openMenu = () => {
    navWrapper.classList.remove("menu-closed");
    burgerIcon?.classList.add("hidden");
    burgerIcon?.setAttribute("aria-expanded", "true");
    exitIcon?.classList.remove("hidden");
    header.classList.add("opened");
    document.body.style.overflow = "hidden";
  }; 

  const closeMenu = () => {
    navWrapper.classList.add("menu-closed");
    burgerIcon?.classList.remove("hidden");
    burgerIcon?.setAttribute("aria-expanded", "false");
    exitIcon?.classList.add("hidden");
    header.classList.remove("opened");
    document.body.style.overflow = "";
  };

  const handleResize = () => {
    if (window.innerWidth > 968) {
      navWrapper.classList.remove("menu-closed");
      burgerIcon?.classList.add("hidden");
      exitIcon?.classList.add("hidden");
      header.classList.remove("opened");
      document.body.style.overflow = "";
    } else {
      burgerIcon?.classList.remove("hidden");
      burgerIcon?.setAttribute("aria-expanded", "false");
      exitIcon?.classList.add("hidden");
      navWrapper.classList.add("menu-closed");
    }
  }; 

  window.addEventListener("resize", handleResize);
  handleResize();

  burgerIcon?.addEventListener("click", openMenu);
  exitIcon?.addEventListener("click", closeMenu);

  burgerIcon?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openMenu();
    }
  });
  exitIcon?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closeMenu();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.classList.contains("opened")) {
      closeMenu();
    }
  });

  navWrapper?.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    if (window.innerWidth <= 968 && !navWrapper.classList.contains("menu-closed")) {
      closeMenu();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupHeaderMenu);
} else {
  setupHeaderMenu();
} 
