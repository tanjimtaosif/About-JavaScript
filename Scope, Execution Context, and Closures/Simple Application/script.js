// toaster
function createToaster(config) {
  let div = document.createElement("div");

  // 1. Pick the colors first
  const themeClasses =
    config.theme === "dark"
      ? "bg-gray-800 text-white"
      : "bg-gray-100 text-black";

  // 2. Pick the position
  const posX = config.positionX === "right" ? "right-10" : "left-10";
  const posY = config.positionY === "top" ? "top-10" : "bottom-10";

  // 3. Combine everything with basic styles
  const baseStyles =
    "fixed px-6 py-3 rounded-md shadow-xl border-b-4 border-blue-500 font-sans";

  // 4. Put it all together
  div.className = `${baseStyles} ${themeClasses} ${posX} ${posY}`;

  div.textContent = notification;
  document.body.appendChild(div);

  setTimeout(() => {
    document.body.removeChild(div);
  }, config.duration * 1000);
}

let toaster = createToaster({
  positionX: "left",
  positionY: "bottom",
  theme: "light",
  duration: 3,
});

toaster("This is a dummy notification !");