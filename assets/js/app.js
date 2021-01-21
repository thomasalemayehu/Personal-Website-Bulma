function activateHamburger() {
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
          // Toggle the is-side-navigation custom class to make navigation from side

          // $target.classList.toggle("is-side-navigation");
        });
      });
    }
  });
}
function activateCarousel() {
  $(document).ready(function () {
    $("#about-carousel").carousel({
      indicators: true,
    });
  });

  $(document).ready(function () {
    $("#getToKnowMe-carousel").carousel({
      indicators: true,
    });
  });

  $(document).ready(function () {
    $("#aspirations-carousel").carousel({
      indicators: true,
    });
  });
}
activateHamburger();
activateCarousel();
