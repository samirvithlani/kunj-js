

var chance = 3;

do{
    var balance =parseInt(prompt("enter balance remaining chance are" +chance))
    if(balance<10000){
        chance--
    }
    else{
        console.log("balance = ",balance)
        //chance--;
        break;
    
    }




}while(chance>0)
