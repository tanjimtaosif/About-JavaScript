const users = [
  {
    name: "Emily Johnson",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
    bio: "coffee first, everything else later ☕ | city girl ✨",
  },
  {
    name: "Michael Smith",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    bio: "building cool things with code 💻",
  },
  {
    name: "Sophia Williams",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop",
    bio: "soft aesthetic 🌸 | journaling & sunsets 🌅",
  },
  {
    name: "Daniel Brown",
    pic: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=1000&auto=format&fit=crop",
    bio: "discipline beats motivation 🔥",
  },
  {
    name: "Olivia Miller",
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    bio: "main character energy 🎬 | matcha lover 🍵",
  },
  {
    name: "James Anderson",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    bio: "fitness • mindset • growth 💪",
  },
  {
    name: "Ava Thompson",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
    bio: "minimal life, meaningful moments 🤍",
  },
  {
    name: "Ethan Harris",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    bio: "dreaming big & staying curious 🚀",
  },
  {
    name: "Mia Clark",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    bio: "music on repeat 🎧 | late night thoughts 🌙",
  },
  {
    name: "Noah Lewis",
    pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop",
    bio: "tech, travel & storytelling 🌍",
  },
];

// Select DOM elements first
const inp = document.querySelector(".inp");
const cardsContainer = document.querySelector(".cards");

function showUsers(arr) {
  cardsContainer.innerHTML = ""; // Clear existing cards
  arr.forEach((user) => {
    // card
    const card = document.createElement("div");
    card.classList.add("card");

    // image
    const img = document.createElement("img");
    img.src = user.pic;
    img.alt = user.name;

    // overlay
    const overlay = document.createElement("div");
    overlay.classList.add("card-overlay");

    // name
    const name = document.createElement("h3");
    name.textContent = user.name;

    // bio
    const bio = document.createElement("p");
    bio.textContent = user.bio;

    // hierarchy
    overlay.appendChild(name);
    overlay.appendChild(bio);

    card.appendChild(img);
    card.appendChild(overlay);

    cardsContainer.appendChild(card);
  });
}

// Initial render
showUsers(users);

// Filter event listener
inp.addEventListener("input", () => {
  const query = inp.value.trim().toLowerCase();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query),
  );

  showUsers(filteredUsers);
});
