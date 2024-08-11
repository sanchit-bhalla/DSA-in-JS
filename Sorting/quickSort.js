function swap(array, ind1, ind2) {
  let temp = array[ind1];
  array[ind1] = array[ind2];
  array[ind2] = temp;
}

// Many ways to do this function. Check different way in c++ code
function partition(arr, start = 0, end = arr.length - 1) {
  let swapIndex = start;
  let pivot = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
}

let arr = [65, 37, -4, 23];
quickSort(arr);
console.log(arr);
