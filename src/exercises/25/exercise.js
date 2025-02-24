// Read what is a closure and give an example here


/*A closure is the combination of a function bundled together (enclosed) with references to its 
surrounding state.In other words, a closure gives you access to an outer
function's scope from an inner function. In JavaScript, closures are created every time a function 
is created, at function creation time.
inner function can access the outer function scope and variables by closure in javaScript
*/

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();