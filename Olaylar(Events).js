var button = document.getElementsByTagName('button');
var random = Math.ceil(Math.random()*6);
button[random-1].setAttribute('correct', true);
for (var i = 0; i < button.length; i++) {
button[i].addEventListener('click', function () {
  var correct = this.getAttribute('correct');
  if (correct == 'true') {
  //    alert('Bildiniz!');
      this.style.backgroundColor = 'lightgreen';
  } else {
    //  alert('Bilemediniz!');
      this.style.backgroundColor = 'pink';
  }
}, false);

button[i].addEventListener('mouseout',function(){
this.style.backgroundColor = 'lightblue';
},false)
}
