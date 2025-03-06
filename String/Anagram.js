function areAnagrams(str1, str2) {
    // Normalize the strings: remove spaces, convert to lowercase, and sort
    const normalize = str =>
      str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
  
    return normalize(str1) === normalize(str2);
  }
  
  // Example usage
  console.log(areAnagrams("listen", "silent")); // true
  console.log(areAnagrams("triangle", "integral")); // true
  console.log(areAnagrams("hello", "world")); // false
  console.log(areAnagrams("Astronomer", "Moon starer")); // true
  