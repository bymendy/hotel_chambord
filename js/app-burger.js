const nav = document.querySelector('navbar-brand');
const li = document.querySelectorAll('.Nav a');
// console.log(nav);

//Check every link
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener('click', function(e){
    
    //If list has nested list
    if(this.nextElementSibling.className.indexOf('hamburger') !== -1) {
      // Prevent anchor
      e.preventDefault();
      
      //Hide previous nav
      nav.lastElementChild.classList.remove('isActive');
      
      //Clone and append to bottom
      const clone = this.nextElementSibling.cloneNode(true);
      nav.appendChild(clone);
      
      //Make it visible
      nav.lastElementChild.classList.add('isActive');
    }
  });
}
                         
