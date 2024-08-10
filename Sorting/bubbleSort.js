/*
    Time Complexity - O(N^2)

    Best Case T.C --> O(N) when using noSwap optimization
    This happens when data is almost sorted
*/
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    // i-1 defines the last element index to compare in the current PASS
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP !
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
}

let arr = [65, 37, -4, 23];
bubbleSort(arr);
console.log(arr);
