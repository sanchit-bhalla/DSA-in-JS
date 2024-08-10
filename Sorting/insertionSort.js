/*
    Time Complexity
        Average / Worst Case --> O(N^2)
        Best Case --> O(N)
            Best case occurs when array is almost sorted

        Insertion sort is also good at cases where we get the numbers on the fly. We have some numbers which are sorted and when we receive the new number, we sort that
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1,
      currentVal = arr[i];

    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
}

let arr = [65, 37, -4, 23];
insertionSort(arr);
console.log(arr);
