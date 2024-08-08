// Return the count of occurances of str2 in the string str1
/*
    Time Complexity 
        O(N * M)
*/
function naiveSearch(str1, str2) {
  if (str2.length > str1.length) return 0;

  let count = 0;
  for (let i = 0; i < str1.length - str2.length + 1; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) break;
      if (j === str2.length - 1) count++;
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol"); // 1
naiveSearch("lorie loled", "lo"); // 2
naiveSearch("lorie loled", "abc"); // 0
