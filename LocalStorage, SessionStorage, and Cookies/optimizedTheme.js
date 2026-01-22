/**
 * WHY: To keep the UI in sync with the data.
 * WHERE: Used whenever the theme needs to change (on load, toggle, or system change).
 */
function applyTheme(theme) {
  // HOW: Remove all possible theme classes first to prevent "class soup"
  document.body.classList.remove("dark", "light");
  // Add the specific theme class (e.g., <body class="dark">)
  document.body.classList.add(theme);
}

/**
 * WHY: To detect what the user's operating system (Windows/macOS/iOS) prefers.
 * HOW: matchMedia checks the CSS media query 'prefers-color-scheme'.
 */
function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * WHY: To decide which theme to show when the user first opens the page.
 * WHERE: Runs immediately when the script loads.
 */
function setInitialTheme() {
  // HOW: Check LocalStorage first (User preference takes priority over System)
  const savedTheme = localStorage.getItem("theme");
  // If savedTheme is null, it falls back to the System Theme
  applyTheme(savedTheme || getSystemTheme());
}

// EXECUTION: Set the theme as soon as the JS runs
setInitialTheme();

/**
 * WHY: To react if the user changes their System settings while the site is open.
 * HOW: Only triggers if the user HAS NOT manually picked a theme (LocalStorage is empty).
 */
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
      applyTheme(getSystemTheme());
    }
  });

/**
 * WHY: To allow the user to manually override the theme.
 * HOW: Toggles the current state and SAVES it to LocalStorage for future visits.
 */
document.querySelector("button").addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  applyTheme(newTheme);
  // Store the choice so it persists after a page refresh
  localStorage.setItem("theme", newTheme);
});
