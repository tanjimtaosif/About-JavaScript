function executeLater(fnc) {
  setTimeout(fnc, Math.floor(Math.random() * 20) * 1000);
}
executeLater(function () {
  console.log("hey");
});