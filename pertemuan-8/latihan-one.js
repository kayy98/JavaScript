let btn=document.getElementById('click');
btn.addEventListener('click',()=>{
    alert('Button ini sedang di click');
})
//*click 2
let clk = document.getElementById('clk');
clk.addEventListener('click',() => {
    console.log("Button ini sedang di klik");
});

let clk3=document.getElementById('clk3');
clk3.addEventListener('click',()=>{
//*ini div container
let paragraphElement=document.createElement('p')
document.getElementById('container').appendChild(paragraphElement);
paragraphElement.textContent="Mencoba memasukan paragraf di div menggunakan javascript";
//*ini div about
let paragrapInput=document.createElement('p')
document.getElementById('about').appendChild(paragrapInput);
paragrapInput.textContent="saya senang belajar javascript";
//*alertnya   
alert('Klik tombol ini bersamaan')
    console.log("COBA CLICK TOMBOL INI");
    
})