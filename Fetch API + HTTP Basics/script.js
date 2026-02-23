function getUsers() {
  fetch("https://randomuser.me/api/?results=3")
    .then((rawdata) => rawdata.json())
    .then((data) => {
      // Clear the container before adding new users
      const usersContainer = document.querySelector(".users");
      usersContainer.innerHTML = "";

      data.results.forEach(function (user) {
        // 1. Create the Card
        const card = document.createElement("div");
        card.className =
          "bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full mb-4";

        const innerFlex = document.createElement("div");
        innerFlex.className = "flex items-center space-x-4";

        // 2. Create the Avatar
        const avatar = document.createElement("img");
        avatar.className =
          "w-16 h-16 rounded-full object-cover border-2 border-gray-700";
        avatar.src = user.picture.large;
        avatar.alt = "User Avatar";

        const textContainer = document.createElement("div");

        // 3. Create Name, Email, and Badge
        const name = document.createElement("h2");
        name.className = "text-xl font-semibold text-gray-100";
        name.textContent = `${user.name.first} ${user.name.last}`;

        const email = document.createElement("div");
        email.className = "text-gray-400";
        email.textContent = user.email;

        const badge = document.createElement("span");
        badge.className =
          "inline-block mt-2 px-3 py-1 bg-blue-900 text-blue-200 rounded text-sm";
        badge.textContent = "Active";

        textContainer.appendChild(name);
        textContainer.appendChild(email);
        textContainer.appendChild(badge);

        innerFlex.appendChild(avatar);
        innerFlex.appendChild(textContainer);

        card.appendChild(innerFlex);

        usersContainer.appendChild(card);
      });
    });
  // .catch((err) => console.error("Something went wrong:", err));
}

document.getElementById("refreshBtn").addEventListener("click", getUsers);
getUsers();

document.querySelector;
