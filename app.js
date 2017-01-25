(function(doc){

// window.onload = function(){
//
//
// }

var links = doc.querySelectorAll('.links')

for(var i = 0; i < links.length; i++){
  links[i].addEventListener('click', function(event){
    for(var j = 0; j < links.length; j++){
      links[j].className = ''
    }
    this.className = 'active-link';
  })
}


})(document)
