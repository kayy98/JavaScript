// console.log('dini');

let kotak=document.getElementById('myDiv');
console.dir(kotak);
console.log(kotak.textContent);

console.dir(document);


// let span=document.getElementById('mySpan');
// console.log(span.textContent);

let box=document.getElementById('mySpan');
console.log(box.textContent);

//*update value`
box.textContent="   Fatoni";

console.log(box.textContent);


//*update dengan sebuah html yang value nya kosong
let text =document.getElementById('content')
text.textContent=10;

//*menambahkan tag html
//*Buat element paragraph/('p)
let paragraphElement=document.createElement('p');

//?menysisipikan element pragraph ke dalam div
document.getElementById('container').appendChild(paragraphElement);

paragraphElement.textContent="Ini adalah paragraf pertama yang dibuat dengan javascript";

//! value
let number=document.getElementById('phone');
console.log(number.value);

//?mengambil value dari input user
let gender=document.getElementById('gender');
console.log(gender.value);




