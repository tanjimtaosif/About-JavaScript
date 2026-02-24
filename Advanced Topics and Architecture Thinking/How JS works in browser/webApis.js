// 1. WHY: We need to check if the browser supports this specific Web API.
if ("Notification" in window) {
  // 2. HOW: Use the Web API to ask the user for permission.
  // This is a Promise-based Web API.
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Permission granted! I can now talk to your OS.");

      // 3. THE LOGIC: Set a timer (Timer API) for 1 seconds.
      setTimeout(() => {
        // 4. THE ACTION: Trigger a system notification (Notification API).
        new Notification("Health Check! 💧", {
          body: "Time to drink some water, Tanjim!",
          icon: "https://cdn-icons-png.flaticon.com/512/3105/3105807.png",
        });
      }, 1000);
    } else {
      console.warn("User blocked notifications.");
    }
  });
} else {
  console.error("This browser does not support the Notification API.");
}
