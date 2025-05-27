const getData = ()=>{
    const data = document.getElementsByName("txt") //array
    for(let i=0;i<data.length;i++){

        data[i].style.textDecoration = "underline"
    }
}