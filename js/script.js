
let myacc = document.querySelectorAll(".accordion")
let myaccarry = Array.from(myacc)
myaccarry.map((button) => {
  button.addEventListener("click", function(){
   button.classList.toggle("active")
   let panel = button.nextElementSibling;
   if(panel.style.display == "block"){
    panel.style.display = "none"
   }else{
    panel.style.display = "block"
   }
  })
})





