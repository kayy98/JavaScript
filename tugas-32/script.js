//*Soal 1
let botol=document.getElementById('welcomebox');
console.log(botol.textContent);

//!Update Value
botol.textContent="Belajar DOM itu menyenangkan";

console.log(botol.textContent);

let nama=document.getElementById('Rafka');

//*Soal 2
let pElement = document.createElement("p");

//* Isi Teks
pElement.textContent = "Saya sedang belajar createElement";
document.getElementById("noteArea").appendChild(pElement);

//*Soal 3
let paragraphElement=document.createElement('p');

//!menysisipikan element pragraph ke dalam div
document.getElementById('resultbox').appendChild(paragraphElement);

paragraphElement.textContent="Jenis kelamin:laki-laki";

//*Soal 4

