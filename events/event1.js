const test = ()=>{
    const txt = document.getElementById("txt")
    console.log(txt)
    console.log(txt.innerHTML)
    txt.innerHTML = "hi"
}

const changeLink = ()=>{
    const link = document.getElementById("link") //<a>
    link.href = "https://www.netflix.com"
    link.innerHTML="Netflix"
    link.target = "_blank"
}

const changeShape=() =>{

    const boxTag = document.getElementById("box")
    boxTag.style.borderRadius="50%"
    boxTag.style.backgroundColor="red"


}