// 1. Select all images
const images = document.querySelectorAll("img");

// 2. Define the observer logic
const observer = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(function (entry) {
      // Check if the image has entered the viewport
      if (entry.isIntersecting) {
        const img = entry.target;

        // Swap the placeholder for the real URL from data-src
        img.src = img.dataset.src;

        // Add a class for CSS animations
        img.classList.add("loaded");

        // IMPORTANT: Stop observing the image after it has loaded
        // This saves memory and processing power
        observer.unobserve(entry);
      }
    });
  },
  {
    root: null, // Use the browser viewport
    threshold: 0.1, // Trigger when 10% of the image is visible
  },
);

// 3. Tell the observer to watch each image
images.forEach(function (img) {
  observer.observe(img);
});
