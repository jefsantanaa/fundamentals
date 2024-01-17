const schoolName = "Cod3r";

console.log(schoolName.charAt(4)); // Get a specific character in a string.
console.log(schoolName.charAt(5)); // Get a specific character in a string.
console.log(schoolName.charCodeAt(3)); // Get the character code un a string.
console.log(schoolName.indexOf("3")); // Get a character through an index 

console.log(schoolName.substring(1));
console.log(schoolName.substring(0, 3));

console.log((schoolName).concat(" School").concat("!"));
console.log(schoolName.replace(3, "e"));
console.log(schoolName.replace(/\d/, "e")); // Replace all digits.
console.log(schoolName.replace(/\w/g, "e")); // Replace everything with letter 'e'.

console.log("Jessica,Jefferson,Jean".split(","));