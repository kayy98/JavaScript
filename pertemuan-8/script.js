let alamat=document.getElementById('adress');
console.log(alamat.textContent);

let gang=document.getElementsByClassName('iman');
console.log(gang.textContent);

//*mengambil element dengan class (1 class)
let test=document.querySelector('.support');
console.log(test.textContent);

//*mengambil element dengan class (lebih 1 class)
let view=document.getElementsByClassName('card');
console.log(view);
console.log(view[1].textContent);

//*window
console.log(window.innerWidth);
console.log(window.screenY);

//*addlistener
// let btn01=document.getElementById('btn01');
// btn01.addEventListener('click', ()=>{
//     alert('Button di klik')
//     console.log('button ini sedang di klik');
    
// })
// let btn01=document.getElementById("usergender");
// btn01.addEventListener("click",()=>{
//     alert("klik button ini");
//     console.log("klik button ini");
    
// })








