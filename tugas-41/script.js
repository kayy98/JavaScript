function penambahan(a, b) {
    return a + b;
}
 
function perkalian(a, b) {
   return a * b;
}
function perbandingan(a, b) {
    let isBenar = a > b;
    if(isBenar){
        return "benar";
    }else{
        return "salah";
    }
  
}
function condition(a,b) {
    let isParam1True= a > 80;
    let isParam2True= b > 90;
    
    if(true && false){
        return "lulus";
    }else{
        return "tidak lulus";
    }
 }
// Fungsi utama yang menerima callback
function calculate(num1, num2, operation) {
    let result = operation(num1, num2);
    console.log("Hasil:", result);
}
 
// pemanggilan fungsi
calculate(5, 3, penambahan); // Output: Hasil: 8
calculate(9, 2, perkalian); // Output: Hasil: 18
calculate(3, 20, perbandingan); // Output: Hasil: salah
calculate(100, 90, condition); // Output: Hasil: lulus

// jika nilai param1 lebih dari 80 dan param2 lebih dari 90 maka tampilkan "nilai lebih dari 10" selain itu tampilkan "nilai kurang dari atau sama dengan 10"