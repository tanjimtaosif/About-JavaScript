function bringtheprofile(username, cb) {
  console.log("Fetching profile data...");

  setTimeout(() => {
    cb({ _id: 123, username, age: 24, email: "tanjim@gmail.com" });
  }, 2000);
}

function bringallposts(id, cb) {
  console.log("Fething all posts...");

  setTimeout(() => {
    cd({ _id: id, post: ["hello", "hi", "see you"] });
  }, 3000);
}

function savedPostsNikaalo(id, cb) {
  console.log("Fetching saved posts ... ");
  setTimeout(() => {
    cb({ _id: id, saved: [1, 2, 3, 3, 45, 4, 323] });
  }, 3000);
}

bringtheprofile("tanjim", function (data) {
  console.log(data);
  bringallposts(data._id, function (posts) {
    console.log(posts);
    bringallsavedpost(data._id, function (saved) {
      console.log(saved);
    });
  });
});
