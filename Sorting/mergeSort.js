function merge(arr, low, mid, high) {
  // Assume 2 arrays as arr[low -> mid] and arr[mid+1 -> high]
  let temp = [];
  let left = low,
    right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low, k = 0; i <= high; i++, k++) {
    arr[i] = temp[k];
  }
}

function mS(arr, low, high) {
  if (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    mS(arr, low, mid);
    mS(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
}

function mergeSort(arr) {
  mS(arr, 0, arr.length - 1);
}

let arr = [65, 37, -4, 23];
mergeSort(arr);
console.log(arr);
