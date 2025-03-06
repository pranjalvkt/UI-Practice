// Give two sorted arrays, write a function that
// merges them so that resultant array is also
// sorted. Don’t use .sort function
function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const result = [];
  
    // Traverse both arrays using two pointers
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++; // Move pointer of arr1
      } else {
        result.push(arr2[j]);
        j++; // Move pointer of arr2
      }
    }
  
    // Add remaining elements from arr1 (if any)
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
  
    // Add remaining elements from arr2 (if any)
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
  
    return result;
  }
  
  // Example usage
  const arr1 = [1, 3, 5, 7];
  const arr2 = [2, 4, 6, 8, 10];
  const mergedArray = mergeSortedArrays(arr1, arr2);
  console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 10]

