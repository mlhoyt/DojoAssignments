// -*- javascript -*-

var new_word;
function lastFunc() {
  // --- above are hoisting changes ---
  new_word = "old";
}
// --- above are hoisting changes ---
new_word = "NEW!";
console.log(new_word);
