function binarySearch(arr, val) {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === val) return mid;
    else if (arr[mid] > val) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
}

// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
