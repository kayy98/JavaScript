//*jawaban No1
let apel=null;
let mangga="";
let jeruk="Jeruk ada";

console.log(apel||mangga||jeruk);
//*jawaban nya :yang muncul adalah let jeruk


//*jawabnan No2
let teh=null;
let kopi=undefined;
let susu=10;
console.log(teh??kopi??susu);
//*jawaban nya :yang muncul adalah let susu t

let number=1;

while (number<5){
    console.log(number);
    number++;     
}
while (number<=7        ){
    console.log(number);
    number++;     
}

let age=2;
while (age<=10){
 console.log(age);
age+=3;
 }



 //!perulangan "do while"
 let numberDo=1;

 do{
    console.log(numberDo);
    numberDo++;

    
 }while (numberDo<=5)


 let numberDO2=7;
 do{
    console.log(numberDO2);
    numberDO2++;
 }while(numberDO2<7);


 
 for (let i=1; i<=5; i++){
    if (i===4)continue;
    console.log(i);
 }  


 