AOS.init();

const pre_carremento = document.querySelector(".pre-carregamento");

function preCarregamento() {
  pre_carremento.style.opacity = "0";
  pre_carremento.style.display = "none";
  setTimeout(() => {
    pre_carremento.style.display = "none";
  }, 5000);
}



document.addEventListener('DOMContentLoaded', function () {
  const snowContainer = document.getElementById('snow-container');
  const snowCount = 8000;

  for (let i = 0; i < snowCount; i++) {
    const snow = document.createElement('div');
    snow.classList.add('snow');
    snowContainer.appendChild(snow);
  }
});



