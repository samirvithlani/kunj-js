var age = 12

if(age>=18){
    console.log("You are eligible to vote")
    if(age>=21){
        console.log("You are eligible to marrige")
        if(age>=60){
            console.log("You are eligible to retire")
        }
        else{
            console.log("You are not eligible to retire")
        }
    }
    else{
        console.log("You are not eligible to marrige")
    }
}
else{
    console.log("You are not eligible to vote")
    if(age>=10){
        console.log("You are eligible to go to school")
    }
    else{
        console.log("You are not eligible to go to school")
    }
}