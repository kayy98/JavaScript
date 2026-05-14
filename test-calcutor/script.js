function one() {
  //*buat sebuah variabel,isinya resultnew
  let numb = document.getElementById("resultNew").textContent;
  console.log(numb);
  //*buat sebuah variabel isinya penambahan 1
  let total = numb + 1;
  console.log(total);
  //* update
  document.getElementById("resultNew").textContent=total;
}
function two(){
  let numb=document.getElementById("resultNew").textContent;
  console.log(numb);

  let total=numb+2;
  console.log(total);

  document.getElementById("resultNew").textContent=total;
  
    

}
function subtraction(){
    //*buat sebuah variabel,isnya redsultNew
  let numb=document.getElementById("resultNew").textContent;


    //*buat sebuah variabel,isinya penambahan -
    let total=numb+ "-";

  document.getElementById("resultNew").textContent=total;

}
function equals(){
 let num1=document.getElementById('resultNew').textContent;
 console.log(num1);

 let operatorMatch=num1.trim().match(/[-]/);
 console.log(operatorMatch);
 
 let operator=operatorMatch[0]
 console.log(operator);
  
 let parts=num1.split(operatorMatch);
 console.log(parts);

 let n1=Number(parts[0]);
 let n2=Number(parts[1]);

 let total=0;

 if(operator== '-'){
  total=n1-n2;
 }else if(operator=='+'){
  total=n1+n2;
 }
  console.log(total);
  document.getElementById("resultNew  ").textContent=total;
  
}