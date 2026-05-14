let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box5 = document.getElementById("box5");
box1.addEventListener("click", () => {
  box1.classList.toggle("success1");
});
box2.addEventListener("click", () => {
  box2.classList.toggle("success2");
});
box3.addEventListener("click", () => {
  box3.classList.toggle("success3");
});
box5.addEventListener("click",()=>{
    document.getElementById('bd').classList.toggle("success5");
})

