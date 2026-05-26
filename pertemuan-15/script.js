function BuatTeh(){
    console.log("Rebus air");
    console.log("Masukan teh ke dalam air panas");
    console.log("Aduk & siap di santap");
    
}

function createuser(){
    console.log("adrian");
    console.log("21");
    
}

createuser();


function createAdmin(){
    let name="admin";
    console.log("name");
    
}

let userName="Amir";    
function acumalaka(){
    console.log(userName);
    
}

acumalaka();            

//*use.
 
let userName2="rodo";

function abidul(){
    userName2="abdil";
    console.log(userName2);
    
}
console.log(userName2);

abidul();



//*param
function createStudent(studentName , studentAge){
    console.log(studentName);
    console.log(studentAge);
    
}

createStudent('Dino', 20);

//*buatkan function dengan nama userLogin dengan 2 paramete 
//*  yang menampilkan console 'email' dan 'password'


function userLogin(nomor1,nomor2){
    
    console.log(nomor1);
    console.log(nomor2);
}
userLogin('raf222@gmail.com', '1234567');


let email=document.getElementById('emailUser');
let password=document.getElementById('passwordUser');   
let btnLogin=document.getElementById('btnLogin');

btnLogin.addEventListener('click',()=>{
    userLogin(email.value,password.value);
})
//*
function register(adress="no address"){
    console.log(adress);
    
}
register();
register("bogor");

function passwordAdmin(password){
    console.log(password || "no password");
    
}
passwordAdmin();
passwordAdmin('jakarta');







     