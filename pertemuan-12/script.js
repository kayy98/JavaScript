if (true) {
  console.log("kondisi 1 dijalankan");
}
let ips = 8;
let minimalRemed = "8";
//(+@)

if (ips == minimalRemed) {
  console.log("console 2");
}
//*nilai boelan false;'false',0,string kosong'',null,undefined,NaN
//*nilai boelan true:'true',1,string tidak kosong
if (undefined) {
  console.log("jawaban 1");
} else {
  console.log("jawaban 2");
}
let buah = "anggur";
switch (buah) {
  case "anggur":
    console.log("ini adalah anggur");
    break;
  case "jeruk":
    console.log("ini adalah jeruk");
    break;
  case "apel":
    console.log("ini adalah apel");
    break;
  default:
    console.log("ini adalah buah lain");
}
const binatang = "jerapah";
switch (binatang) {
  case "hiu":
    console.log("ini adalah hiu");
    break;
  case "kuda":
    console.log("ini adalah kuda");
    break;
  default:
    console.log("ini adalah binatang");
}

let numbShoes = 42;
let hasil = numbShoes > 42 ? "ukuran besar" : "ukuran kecil";
console.log(hasil);

if (numbShoes > 42) {
  console.log("ukuran besar");
} else {
  console.log("ukurankecil");
}
let bInggris = 87;
let bIndo = 90;
let ips = 70;
let sejarah = 82;

let nilaikelulusanInggris = 90;
let nilaikelulusanBindonesia = 90;
let nilaikelulusanIps = 69;
let nilaikelulusanSejarah = 82;

let kelulusan =
  bIndo >= nilaikelulusanBindonesia
    ? "kodok"
    : sejarah >= nilaikelulusanIps
      ? "kadal"
      : ips <= nilaikelulusanIps
        ? "kerang"
        : "kancil";
console.log(kelulusan);



// jawaban no 1
let nilaiUjian = 78;
if (nilaiUjian > 90) {
  console.log("nilai a");
} else if (nilaiUjian > 75) {
  console.log("nilai b");
} else {
  console.log("nilai c");
}
// jawaban no 2
let password = "admin123";
if (password === "admin123") {
  console.log("Login Berhasil");
} else {
  console.log("Password Salah");
}
// jawaban no 3
let hari = 1;
switch (hari) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  default:
    console.log("Hari tidak valid");
}
// jawaban no 4
let role = "admin";
switch (role) {
  case "admin":
    console.log("Anda memiliki akses penuh");
    break;
  case "user":
    console.log("Akses terbatas");
    break;
  default:
    console.log("tidak dikenali");
}
// jawaban no 5
let umur = 20;
let status = umur > 18 ? "Dewasa" : "Anak-anak";
console.log(status);
