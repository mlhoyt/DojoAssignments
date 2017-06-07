// -*- javascript -*-

var food;
function eat() {
  var food;
  // --- above are hoisting changes ---
  food = "half-chicken";
  console.log(food);
  food = "gone";       // CAREFUL!
  console.log(food);
}
// --- above are hoisting changes ---
food = "Chicken";
eat();
console.log(food);
