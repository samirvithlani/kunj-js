//button tag get
const button = document.getElementById("mybutton") //button>
console.log(button);

button.addEventListener("click",()=>{
    alert("button clicked...")
})
button.addEventListener("mouseover",()=>{
    button.style.color="white"
    button.style.backgroundColor="black"
})
button.addEventListener("mouseleave",()=>{
    button.style.color="black"
    button.style.backgroundColor="white"
})