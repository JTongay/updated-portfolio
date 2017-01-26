(function(doc){

const links = doc.querySelectorAll('.links'),
pokeStayImg = doc.getElementById('pokestay-img'),
digiDexImg = doc.getElementById('digidex-img'),
raspiImg = doc.getElementById('raspi-img'),
introSection = doc.getElementById('intro-section'),
iconsSection = doc.getElementById('icons-section'),
pokeSection = doc.getElementById('poke-section'),
digiDexSection = doc.getElementById('digidex-section'),
raspiSection = doc.getElementById('raspi-section'),
powerSection = doc.getElementById('power-section')

//click events to show active links color only and make the rest go back
for(var i = 0; i < links.length; i++){
  links[i].addEventListener('click', function(event){
    for(var j = 0; j < links.length; j++){
      links[j].className = ''
    }
    this.className = 'active-link';
  })
}

//click events to go to a page
pokeStayImg.addEventListener('click', function(event){
  introSection.style.display = 'none';
  iconsSection.style.display = 'none';
  pokeSection.style.display = 'block';
})

raspiImg.addEventListener('click', function(){
  introSection.style.display = 'none';
  iconsSection.style.display = 'none';
  raspiSection.style.display = 'block';
})

digiDexImg.addEventListener('click', function(){
  introSection.style.display = 'none';
  iconsSection.style.display = 'none';
  digiDexSection.style.display = 'block';
})




})(document)
