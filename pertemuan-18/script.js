//*Arrow function

const namaFungsi=()=>{
    console.log('ini adalah arrow function');
}
namaFungsi();

//*refactor (menyederhanakan arrow function)
const namafungsi2=()=>console.log('ini adalah arrow function');
namafungsi2();
//?syarat harus 1 perintah(consol log)

const tambah=(a,b)=>{
    return a+b
};
console.log(tambah(2,4));

 //!tolong buat arrow function untuk mengghitung pengurungan 2 buah angka, menggunakan param dan refactor

 const pengurangan=(a,b)=>a-b;
 console.log(pengurangan(10,5));

 //!Perbedaan dengan fungsi biasa

 function fungsibiasa(){
    console.log(this);//?memacu ke objek pemanggil
 }
 const arrowFunction=()=>{
    console.log(this);//?Mengacu ke 'this'dari lingkuo luar
    
 }
 //?function biasa
 const mobil={
    merk:"Toyota",
    tampilkan:function(){
        console.log(this.merk);
        
    }
 };
 mobil.tampilkan();


 //?function arrow

 const motor={
    merk:"Honda",
    tampilkan:()=>{
        console.log(motor.merk);
        
    }
 };
 motor.tampilkan();
 //!fungsi arrow multi-baris (wajib menggunkana {} dan return)
const perkalian=(a,b)=>{
    let hasil=a*b;
    return hasil
}
console.log(perkalian(3,4));

//!Fungsi Arrow tanpa paramaeter

const nama=()=>console.log('berisik');
nama();

//!Fungsi arrow dengan satu parameter
const userName=(name)=>{
    console.log(name);    
}
userName('Robinho');


//*Jawaban NO.1
const calculateArea = function(length, width) {
  return length * width;
};
//*Jawaban No.2
const calculateArea = (length, width) => {
  return length * width;
};