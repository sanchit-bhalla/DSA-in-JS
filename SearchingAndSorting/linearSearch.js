function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
