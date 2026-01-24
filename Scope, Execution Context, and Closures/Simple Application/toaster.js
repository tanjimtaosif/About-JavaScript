function createToaster(config) {
  return function (str) {
    let div = document.createElement("div");
    div.textContent = str;

    // 1. Handle Theme
    const themeClasses =
      config.theme === "dark"
        ? "bg-gray-800 text-white border-blue-500"
        : "bg-white text-gray-900 border-gray-400";

    // 2. Base styles (Note: I removed 'fixed' here because the PARENT should be fixed)
    div.className = `px-6 py-3 rounded-md shadow-xl border-b-4 font-sans transition-all duration-300 ${themeClasses}`;

    // 3. Find the parent and add the toaster
    const parent = document.querySelector(".parent");

    // Applying the position from config to the parent container
    parent.className = `parent fixed flex flex-col gap-2 z-50 ${config.positionY === "top" ? "top-5" : "bottom-5"} ${config.positionX === "right" ? "right-5" : "left-5"}`;

    parent.appendChild(div);

    // 4. Handle removal
    setTimeout(() => {
      // Check if div is still there before removing to avoid errors
      if (parent.contains(div)) {
        parent.removeChild(div);
      }
    }, config.duration * 1000);
  };
}

// Your config
let toaster = createToaster({
  positionX: "left",
  positionY: "bottom",
  theme: "dark",
  duration: 3,
});

// These will now stack and disappear in order!
toaster("This is my first toaster !!!");
setTimeout(() => toaster("This is my second toaster !!!"), 1000);