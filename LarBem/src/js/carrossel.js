document.addEventListener("DOMContentLoaded", function () {
  
 var data = [
    { src: "imagens/roupa.jpg", alt: "Roupas", label: "roupas" },
    { src: "imagens/tenis.jpg", alt: "Calçados", label: "calçados" },
    { src: "imagens/brinquedo.jpg", alt: "Brinquedos", label: "brinquedos" }
  ];

  var gridItems = Array.from(document.querySelectorAll(".categorias-lista .categoria-item"));
  gridItems.forEach(function (item, index) {
    var img = item.querySelector("img");
    var label = item.querySelector("span");
    var current = data[index];

    if (!img || !label || !current) {
      return;
    }

    img.src = current.src;
    img.alt = current.alt;
    label.textContent = current.label;
  });

  var carousel = document.querySelector("[data-bazar-carousel]");
  if (!carousel) {
    return;
  }

  var track = carousel.querySelector("[data-bazar-track]");
  var prevButton = carousel.querySelector("[data-bazar-prev]");
  var nextButton = carousel.querySelector("[data-bazar-next]");
  var slides = Array.from(track.children);
  var currentIndex = 0;
  var autoPlayId = null;

  var touchStartX = 0;
  var touchEndX = 0;

  function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = "translateX(-" + currentIndex * 100 + "%)";
  }

  function stopAutoPlay() {
    if (autoPlayId !== null) {
      window.clearInterval(autoPlayId);
      autoPlayId = null;
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayId = window.setInterval(function () {
      goToSlide(currentIndex + 1);
    }, 3500);
  }

  prevButton.addEventListener("click", function () {
    goToSlide(currentIndex - 1);
    startAutoPlay();
  });

  nextButton.addEventListener("click", function () {
    goToSlide(currentIndex + 1);
    startAutoPlay();
  });

  track.addEventListener("touchstart", function (event) {
    touchStartX = event.touches[0].clientX;
    stopAutoPlay();
  });

  track.addEventListener("touchend", function (event) {
    touchEndX = event.changedTouches[0].clientX;

    if (touchStartX - touchEndX > 50) {
      goToSlide(currentIndex + 1);
    }

    if (touchEndX - touchStartX > 50) {
      goToSlide(currentIndex - 1);
    }

    startAutoPlay();
  });

  carousel.addEventListener("mouseenter", stopAutoPlay);
  carousel.addEventListener("mouseleave", startAutoPlay);

  goToSlide(0);
  startAutoPlay();
});