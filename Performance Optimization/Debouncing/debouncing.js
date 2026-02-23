let input = document.querySelector("input");

function debounce(fnc, delay) {
  let timer;
  return function (...argument) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fnc(...argument);
    }, delay);
  };
}

input.addEventListener(
  "input",
  debounce(function () {
    console.log("Hey! We are learning debouncing.");
  }, 1000),
);
