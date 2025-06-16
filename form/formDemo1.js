const submitHandler= (event)=>{
    //fnction -->action ---"" -->page refreshh...
    event.preventDefault() // it will stop execution of action and not reload the page...
    console.log("form subbmited.....")

    const output = document.getElementById("output")//div
    const nameOutput = document.getElementById("nameOutput")
    const ageOutput = document.getElementById("ageOutput")
    
    const name = document.getElementById("name")
    //console.log(`name = ${name.value}`)
    nameOutput.innerHTML=`name = ${name.value}`

    const age = document.getElementById("age")
    //console.log(`age = ${age.value}`)
    ageOutput.innerHTML=`Age = ${age.value}`

    const color = document.getElementById("color")
    console.log(color.value)



    //output.style.color="red"
    output.style.color=color.value
}