const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

(function() {
  
  var states = document.getElementsByClassName("estado")
  
  for(var i = 0; i < states.length; i++) {
    states[i].onclick = function() {
        alert(this.getAttribute('name') + ' ' + this.getAttribute('code'));
    }
  }
  
})();


