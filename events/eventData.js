const getData = ()=>{

    const data = document.getElementsByTagName("h1") //array
    console.log(data)
    console.log(data[0].innerHTML)
    console.log(data[1].innerHTML)

    for(let i=0;i<data.length;i++){
        data[i].innerHTML = "ROYAL"
    }
    
}