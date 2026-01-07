let arr = [11, 22, 23, 55, 4];

// forEach is like a loop that visits every "box" in your array one by one.
arr.forEach(function (value) {
    // Inside here, 'value' is whichever number the loop is currently visiting.
    // It will run this console.log for 11, then for 22, then for 23, and so on.
    console.log(value + 5);
});