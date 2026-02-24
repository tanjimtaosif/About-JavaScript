const arr = [1, 2, 3, 4, 5, 6];
function myMap(arr, callback) {
  let newarr = [];

  for (let i = 0; i < arr.length; i++) {
    newarr.push(callback(arr[i], i, arr));
  }
  return newarr;
}

let ans = myMap(arr, function (val) {
  return val + 2;
});
