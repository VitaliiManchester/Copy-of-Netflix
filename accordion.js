var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// let SignIn = document.getElementsByTagName('a')[0],
//     Start = document.getElementsByTagName('a')[1]; 


// Start.addEventListener('mouseenter', function() {
//    SignIn.textContent = "УВІЙТИ";
// })

// Start.addEventListener('mouseleave', function() {
//    SignIn.textContent = "Увійти";
// })

