// form

const text = document.getElementById('input');
const height = document.getElementById('height');
const unit = document.getElementById('unit');



// button
const button = document.getElementsByClassName('button')[0];

// A4 paper

const A4 = document.getElementsByClassName('box')[0];
console.log(A4)

// event listner

button.addEventListener('click', function(){

console.log('working')
console.log(text.value)
console.log(height.value)
console.log(unit.value)

var p = document.createElement("p");
p.innerHTML = text.value;
p.style.fontSize = height.value+unit.value;

A4.appendChild(p);
});