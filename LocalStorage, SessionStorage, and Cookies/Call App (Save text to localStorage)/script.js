// Create new cards, and store data in the local storage
// Fetch cards from local storage
// Handle buttons
// HNdle filters

// ALl variables and doc selections

let addNote = document.querySelector("#add-note");

let closeForm = document.querySelector(".closeForm");
let formContainer = document.querySelector(".form-container");

const stack = document.querySelector(".stack");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

const form = document.querySelector("form");

const imageUrlInput = form.querySelector(
  "input[placeholder='https://example.com/photo.jpg']",
);
const fullNameInput = form.querySelector(
  "input[placeholder='Enter full name']",
);
const homeTownInput = form.querySelector(
  "input[placeholder='Enter home town']",
);
const purposeInput = form.querySelector(
  "input[placeholder='e.g., Quick appointment note']",
);

const categoryRadios = form.querySelectorAll("input[name='category']");

const submitButton = form.querySelector(".submit-btn");

// Code starts here

function saveToLocalStorage(obj) {
  let oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  oldTasks.unshift(obj); // New note goes to the top (index 0)
  localStorage.setItem("tasks", JSON.stringify(oldTasks));
}

addNote.addEventListener("click", function () {
  formContainer.style.display = "initial";
});

closeForm.addEventListener("click", function () {
  formContainer.style.display = "none";
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const imageUrl = imageUrlInput.value.trim();
  const fullName = fullNameInput.value.trim();
  const homeTown = homeTownInput.value.trim();
  const purpose = purposeInput.value.trim();

  let selected = false;
  categoryRadios.forEach(function (cat) {
    if (cat.checked) {
      selected = cat.value;
    }
  });

  if (imageUrl === "") {
    alert("Please enter an Image URL.");
    return;
  }

  if (fullName === "") {
    alert("Please enter your Full Name.");
    return;
  }

  if (homeTown === "") {
    alert("Please enter your Home Town.");
    return;
  }

  if (purpose === "") {
    alert("Please enter the Purpose.");
    return;
  }

  if (!selected) {
    alert("Please select a category");
    return;
  }

  saveToLocalStorage({
    imageUrl,
    fullName,
    purpose,
    homeTown,
    selected,
  });

  form.reset();
  formContainer.style.display = "none";
  showCards();
});

// function to delete a task
function deleteTask(index) {
  let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  allTasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(allTasks));
  showCards();
}

function showCards() {
  stack.innerHTML = "";

  let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  allTasks.forEach(function (task, index) {
    // Create card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Avatar image
    const avatar = document.createElement("img");
    avatar.src = task.imageUrl;
    avatar.alt = "profile";
    avatar.classList.add("avatar");
    card.appendChild(avatar);

    // Name
    const name = document.createElement("h2");
    name.textContent = task.fullName;
    card.appendChild(name);

    // Info: Home town
    const hometownInfo = document.createElement("div");
    hometownInfo.classList.add("info");

    const hometownLabel = document.createElement("span");
    hometownLabel.textContent = "Home town";
    const hometownValue = document.createElement("span");
    hometownValue.textContent = task.homeTown;

    hometownInfo.appendChild(hometownLabel);
    hometownInfo.appendChild(hometownValue);
    card.appendChild(hometownInfo);

    // Info: Bookings
    const bookingsInfo = document.createElement("div");
    bookingsInfo.classList.add("info");

    const bookingsLabel = document.createElement("span");
    bookingsLabel.textContent = "Purpose";
    const bookingsValue = document.createElement("span");
    bookingsValue.textContent = task.purpose;

    bookingsInfo.appendChild(bookingsLabel);
    bookingsInfo.appendChild(bookingsValue);
    card.appendChild(bookingsInfo);

    // Buttons container
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    // Call button
    const callBtn = document.createElement("button");
    callBtn.classList.add("call");
    callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

    // Message button
    const msgBtn = document.createElement("button");
    msgBtn.classList.add("msg");
    msgBtn.textContent = "Message";

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = '<i class="ri-delete-bin-line"></i>';
    deleteBtn.onclick = function () {
      if (confirm("Delete this note?")) {
        deleteTask(index);
      }
    };

    // Append buttons
    buttonsDiv.appendChild(callBtn);
    buttonsDiv.appendChild(msgBtn);
    buttonsDiv.appendChild(deleteBtn);

    // Append buttonsDiv to card
    card.appendChild(buttonsDiv);

    // Finally, add the card to the DOM (for example, inside a container)
    document.querySelector(".stack").appendChild(card); // or any container of your choice
  });
  updateStack();
}
showCards();

// Update
function updateStack() {
  const cards = document.querySelectorAll(".stack .card");

  cards.forEach((card, i) => {
    if (i < 3) {
      // Visible stack cards
      card.style.zIndex = 3 - i;
      card.style.transform = `translateY(${i * 10}px) scale(${1 - i * 0.02})`;
      card.style.opacity = `${1 - i * 0.02}`;
      card.style.display = "block"; // Ensure it's shown
    } else {
      // Hidden cards (if more than 3)
      card.style.zIndex = 0;
      card.style.transform = `translateY(20px) scale(0.9)`;
      card.style.opacity = "0";
      card.style.display = "none"; // Hide completely or just visual hide
    }
  });
}

upBtn.addEventListener("click", function () {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length > 1) {
    // Move last to first (Bottom to Top)
    const lastTask = tasks.pop();
    tasks.unshift(lastTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showCards();
  }
});

downBtn.addEventListener("click", function () {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length > 1) {
    // Move first to last (Top to Bottom)
    const firstTask = tasks.shift();
    tasks.push(firstTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showCards();
  }
});

// Handle Call and Message buttons via Event Delegation
stack.addEventListener("click", function (e) {
  // Handle Call Button
  const callBtn = e.target.closest(".call");
  if (callBtn) {
    const card = callBtn.closest(".card");
    const name = card.querySelector("h2").textContent;
    alert(`Calling ${name}...`);
    return;
  }

  // Handle Message Button
  const msgBtn = e.target.closest(".msg");
  if (msgBtn) {
    const card = msgBtn.closest(".card");
    const name = card.querySelector("h2").textContent;
    alert(`Messaging ${name}...`);
    return;
  }
});
