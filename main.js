/*function getTitle(){
  return document.title;
}

console.log(getTitle());


function getParagraph(){
  return document.getElementsByTagName("p")[0].innerHTML;
}

console.log(getParagraph());

function getHeader(){
  return document.getElementsByTagName("h1")[0].innerHTML;
}

alert(getHeader());


function getBody(){
  return document.getElementsByTagName("body")[0].innerHTML;
}

console.log(getBody());*/

/*
var list = document.getElementsByTagName("ul")[0];
var add = ["S","C","I","P"];
for(var i = 0; i<add.length;i++){
  var listElement = document.createElement("li");
  var text = document.createTextNode(add[i]);
  listElement.appendChild(text);
  list.appendChild(listElement);
}

var son = document.getElementsByTagName("ul")[0].lastElementChild.innerHTML = "T!";
var deneme=document.getElementsByTagName("ul")[0].lastElementChild.style.color = 'red';
document.getElementById("den").style.backgroundColor = "blue";
document.getElementById("den").style.width = '50px';
document.getElementById("den").style.height = '50px';
  document.getElementById("den").style.textAlign = 'center';
document.getElementById("den").style.verticalAlign = 'center';*/

/*
var list = $('ul:first');
var add = ["S","c","i","p","t"];
$each(add,function(){
  list.append($('<li/>').html(this));
});
list.find('li:last').html('t!');
*/
/* javascript ile
var list = document.getElementsByTagName("ul")[0];
var listItems = list.getElementsByTagName("li");
var filtered = [];
for(var i = 0; i <listItems;i++){
  var link = listItems.getElementsByTagName("#a");
  if(link.getAttribute("href") != "#a"){
    filtered.push(listItems[i]);
  }
}

*/
var head = document.getElementsByTagName("head")[0];
var css = document.createElement("link");
css.type = "text/css";
css.rel="stylesheet";
css.href="style.css";
css.media = 'screen';
head.appendChild(css);
