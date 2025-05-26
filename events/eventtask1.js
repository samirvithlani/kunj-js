var flag = 1
const changeShape = ()=>{

    const box = document.getElementById("box")
    flag++
    if(flag %2==0){
        box.style.borderRadius = "50%"
    }
    else{
        box.style.borderRadius = "0%"
    }

}