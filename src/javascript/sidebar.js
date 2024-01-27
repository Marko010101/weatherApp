document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const menuIcon = document.getElementById("menuIcon");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  if (window.innerWidth < 750) {
    menuIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      mobileMenu.style.right = "0";
      body.classList.add("no-scroll", "sidebarFilter");
      mobileMenu.style.filter = "brightness(1.65)";
      mobileMenu.style.top = window.scrollY + "px";
    });

    closeMenu.addEventListener("click", function () {
      mobileMenu.style.filter = "brightness(1)";
      mobileMenu.style.right = "-100%";
      body.classList.remove("no-scroll", "sidebarFilter");
    });

    // If user clicks anything else insted of menu, menu will be closed
    document.addEventListener("click", function (event) {
      const isClickInsideMenu = mobileMenu.contains(event.target);
      const isClickOnMenuIcon = menuIcon.contains(event.target);

      if (!isClickInsideMenu && !isClickOnMenuIcon) {
        mobileMenu.style.right = "-100%";
        body.classList.remove("no-scroll", "sidebarFilter");
      }
    });
  }
});
