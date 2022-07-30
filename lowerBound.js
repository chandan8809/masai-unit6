function lowerBound(arr, k) {
  let start = 0;
  let end = arr.length - 1;
  let res;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (k <= arr[mid]) {
      end = mid - 1;
      res = mid;
    } else {
      start = mid + 1;
    }
  }
  console.log(res);
}

let arr = [0, 2, 4, 4, 5, 5, 7, 7, 9, 10];
let k = 5;
lowerBound(arr, k);
