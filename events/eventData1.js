const getData = ()=>{

    const boxes = document.getElementsByClassName("box") //array
    console.log(boxes)
    for(let i=0;i<boxes.length;i++){

        //boxes[i].innerHTML = i+1
        boxes[i].style.backgroundColor = "red"
    }

}