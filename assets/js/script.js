window.addEventListener("load", function () {
  new Glider(document.querySelector(".carrossel"), {
    slidesToShow: 1,
    dots: ".dots",
    draggable: true,
    scrollLock: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});

// FAQ
const areaPerguntas = document.querySelectorAll(".caixa-pergunta");
areaPerguntas.forEach((caixa) => {
  const button = caixa.children[0];
  console.log();
  button.addEventListener("click", () => {
    if (caixa.classList.contains("active")) {
      caixa.classList.remove("active");
      return true;
    }
    // Tirar classe active
    areaPerguntas.forEach((e) => {
      e.classList.remove("active");
    });
    // Adionando classe active
    caixa.classList.add("active");
  });
});
