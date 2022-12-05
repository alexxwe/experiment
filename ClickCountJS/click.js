window.onload = function(){ 
  let button = document.getElementById("clicker")
  let buttontwo = document.getElementById("tenclick")

  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "+1 = " + count;
  buttontwo.innerHTML = "+10"

};
buttontwo.onclick = function() {
  count += 10;
  button.innerHTML = "You added ten = " + count;
  buttontwo.innerHTML = "You added ten = "
};

};