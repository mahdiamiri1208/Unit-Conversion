/*
==================================================================
===================== Selection of units based ===================
====================== on the inputed quantity ===================
==================================================================
*/
document.addEventListener("DOMContentLoaded", function() {
  const quantitySelect = document.getElementById("Units-id");
  const buttonLength = document.getElementById("fromUnits-length-id");
  const buttonWeight = document.getElementById("fromUnits-weight-id");
  const buttonArea = document.getElementById("fromUnits-area-id");
  const intoLength = document.getElementById("intoUnits-length-id");
  const intoWeight = document.getElementById("intoUnits-weight-id");
  const intoArea = document.getElementById("intoUnits-area-id");

  quantitySelect.addEventListener('change', function() {
      buttonLength.style.display = 'none';
      buttonWeight.style.display = 'none';
      buttonArea.style.display = 'none';
      intoLength.style.display = 'none';
      intoWeight.style.display = 'none';
      intoArea.style.display = 'none';

      switch (quantitySelect.value) {
          case 'Length':
              buttonLength.style.display = 'block';
              intoLength.style.display = 'block';
              break;
          case 'Weight':
              buttonWeight.style.display = 'block';
              intoWeight.style.display = 'block';
              break;
          case 'Area':
              buttonArea.style.display = 'block';
              intoArea.style.display = 'block';
              break;
      }
  });

  quantitySelect.dispatchEvent(new Event('change'));
});
document.getElementById("answerContainer").style.display = "none";

/*
=====================================================================
===================== Getting input from the user ===================
================ and performing the necessary operations ============
=====================================================================
*/
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("btn-convert");
  submitButton.addEventListener("click", function () {

      const numberInput = +document.getElementById("input-number").value;
      const conversionSelect = document.getElementById("Units-id").value;
      
      let fromUnit, toUnit, finalResult;

      switch(conversionSelect){
          case "Length":
              fromUnit = document.getElementById("fromUnits-length-id").value;
              toUnit = document.getElementById("intoUnits-length-id").value;
              finalResult = convertLength(numberInput, fromUnit, toUnit);
              break;
          case "Weight":
              fromUnit = document.getElementById("fromUnits-weight-id").value;
              toUnit = document.getElementById("intoUnits-weight-id").value;
              finalResult = convertWeight(numberInput, fromUnit, toUnit);
              break;
          case "Area":
              fromUnit = document.getElementById("fromUnits-area-id").value;
              toUnit = document.getElementById("intoUnits-area-id").value;
              finalResult = convertArea(numberInput, fromUnit, toUnit);
              break;
          default:
              alert("Invalid quantity type.");
              return;
      }
      if (numberInput && conversionSelect) {
          const answerContainer = document.getElementById("answerContainer");
          const answerSpan = document.getElementById("answerSpan");
          answerSpan.innerHTML = finalResult.toFixed(2) + "&nbsp;" + toUnit;
          answerContainer.style.display = "block";
      }
      else {
          alert("Please fill in all fields.");
      }
  });
});

/*
=====================================================================
======================= Functions related ===========================  
===================  to performing operations  ======================
=====================================================================
*/
function convertLength(numberInput, fromUnit, toUnit) {

  let result;
  let finalResult;
  switch (fromUnit){
    case "Meter":
      result = numberInput
      break
    case "Centimeter":
      result = numberInput / 100
      break
    case "Kilometer":
      result = numberInput * 1000
      break
    case "Mile":
      result = numberInput * 1609
      break
  }
  switch (toUnit){
    case "Meter":
      finalResult = result
      break
    case "Centimeter":
      finalResult = result * 100
      break
    case "Kilometer":
      finalResult = result / 1000
      break
    case "Mile":
      finalResult = result / 1609
      break
  }
  return finalResult;
}

function convertWeight(numberInput, fromUnit, toUnit) {

  let result;
  let finalResult;
  switch (fromUnit){
    case "Gram":
      result = numberInput
      break
    case "Kilogram":
      result = numberInput * 1000
      break
    case "Pound":
      result = numberInput * 453.59
      break
    case "Ounce":
      result = numberInput * 28.34
      break
  }
  switch (toUnit){
    case "Gram":
      finalResult = result
      break
    case "Kilogram":
      finalResult = result / 1000
      break
    case "Pound":
      finalResult = result / 453.59
      break
    case "Ounce":
      finalResult = result / 28.34
      break
  }
  return finalResult;
}

function convertArea(numberInput, fromUnit, toUnit) {

  let result;
  let finalResult;
  switch (fromUnit){
    case "Square Meter":
      result = numberInput
      break
    case "Acre":
      result = numberInput * 4046.86
      break
    case "Hectare":
      result = numberInput * 10000
      break
    case "Square Kilometer":
      result = numberInput * 1000000
      break
  }
  switch (toUnit){
    case "Square Meter":
      finalResult = result
      break
    case "Acre":
      finalResult = result / 4046.86
      break
    case "Hectare":
      finalResult = result / 10000
      break
    case "Square Kilometer":
      finalResult = result / 1000000
      break
  }
  return finalResult;
}

/*
=====================================================================
========================== Animated background ======================
=====================================================================
*/
particlesJS("particles-js", {
    particles: {
      number: {
        value: 70,
        density: { enable: true, value_area: 3465.9314690823144 }
      },
      color: { value: "#00faff" },
      shape: {
        type: "polygon",
        stroke: { width: 0, color: "#000" },
        polygon: { nb_sides: 6 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 35,
        random: true,
        anim: { enable: true, speed: 10, size_min: 40, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 170,
        color: "#229799",
        opacity: 1,
        width: 1.8905080740448992
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: false, mode: "bubble" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 84, line_linked: { opacity: 1 } },
        bubble: {
          distance: 335.0270813557428,
          size: 23.930505811124483,
          duration: 7.897066917671079,
          opacity: 8,
          speed: 3
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;

  count_particles = document.querySelector(".js-count-particles");
  update = function () {

    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);