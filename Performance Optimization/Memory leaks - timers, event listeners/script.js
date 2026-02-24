// We have te clear our intervals other wise it will be still running on the background even our if statement has been ended.
let count = 0;
const int = setInterval(() => {
  if (count < 10) {
    count++;
    console.log(count);
  } else {
    clearInterval(int);
    console.log("finished");
  }
}, 500);
