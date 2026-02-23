const btn = document.querySelector("button");

btn.addEventListener("click", async function () {
  let heavy = await import("./heavy.js");
  heavy.veryHeavy();
});
