//*No.3
let hari = 1;
switch (hari) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("selasa");
    break;
  case 3:
    console.log("rabu");
    break;
  default:
    console.log("Hari tidak valid");
}
//*No.4
let Role="admin";
switch (Role) {
    case "admin":
        console.log("Kamu memiliki akses penuh");
        break;
        case "user":
            console.log("Anda memiliki akses terbatas");
            default:
                console.log("tidak di kenali");
}
//*No.2
let Password="admin123";
if (Password === "admin123") {
    console.log("Login Berhasil");
} else {
    console.log("PAssword salah");
}
//*No.1
let nilaiujian = 78;
if (nilaiujian > 90) {
    console.log("Nilai A");
}else if (nilaiujian > 75) {
    console.log("Nilai B");
} else {
    console.log("Nilai C");
}

let name=null;
let username=name??'Tidak memil iki nama';
console.log(username);

let apple1=null;
let grap1=null;
let watermelon1='0';
let bluberry1='';
console.log(apple1||grap1||bluberry1||watermelon1);


for(let n=9;n>=5;n--){
    if(n===7)continue;
    console.log(n);
    
}
for(let o=4;o<=8;o++){
    if(o===6)break;
    console.log(o);
}

for(let i=0;i<5;i++){
    console.log(i);
}
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}