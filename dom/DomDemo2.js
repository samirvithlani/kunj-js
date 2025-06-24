const root = document.getElementById("root")

const box = document.createElement("div")
box.style.backgroundColor="red"
box.style.height="200px"
box.style.width="200px"


root.appendChild(box)

const genShape = ()=>{

    const shape= document.getElementById("shape1")
    console.log(shape.value)
}