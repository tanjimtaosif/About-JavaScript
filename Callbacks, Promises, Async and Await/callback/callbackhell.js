// 1. Definition of the functions (The API Mockup)
function bringtheprofile(username, cb) {
  console.log("Fetching profile data...");
  setTimeout(() => {
    cb({ _id: 123, username, age: 24, email: "tanjim@gmail.com" });
  }, 2000);
}

function bringallposts(id, cb) {
  console.log("Fething all posts...");
  setTimeout(() => {
    cb({ _id: id, post: ["hello", "hi", "see you"] });
  }, 3000);
}

function bringSavedPosts(id, cb) {
  console.log("Fetching saved posts ... ");
  setTimeout(() => {
    cb({ _id: id, saved: [1, 2, 3, 3, 45, 4, 323] });
  }, 3000);
}

// 2. Execution (The Callback Chain)
bringtheprofile("tanjim", function (data) {
  console.log(data); // Step 1: Profile received
  bringallposts(data._id, function (posts) {
    console.log(posts); // Step 2: Posts received using ID from Step 1
    bringSavedPosts(data._id, function (saved) {
      console.log(saved); // Step 3: Saved posts received
    });
  });
});
