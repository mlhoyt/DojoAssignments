// -*- javascript -*-
var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
// --- above are hoisting changes ---
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);
