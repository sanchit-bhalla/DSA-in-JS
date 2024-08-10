/*
    Time Complexity --> O(N^2)
*/
function selectionSort(arr) {
  // To sort n items, we need to sort n-1 items only.
  for (let i = 0; i < arr.length - 1; i++) {
    let minInd = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minInd]) {
        minInd = j;
      }
    }

    // Swap elements at index i and minInd
    if (i !== minInd) {
      [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
    }
  }
}

let arr = [65, 37, -4, 23];
selectionSort(arr);
console.log(arr);
