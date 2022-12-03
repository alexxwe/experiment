window.onload = function(){ 
  let button = document.getElementById("clicker"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
};