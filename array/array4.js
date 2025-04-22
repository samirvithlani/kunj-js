var marks = [24,21,22,21,20,24,19,24]

var flag = true;
for(let i=0;i<marks.length;i++){

    if(marks[i]<18){
        flag = false;
        break;
    }
    
}
console.log(flag)
//every...
//some

var flag = false;

for(let i=0;i<=marks.length;i++){

    if(marks[i]>=24){
        flag = true;
        break;
    }
}
console.log(flag)


var flag = marks.some((m)=>{
    return m>=24
})
console.log("flag",flag)
var flag = marks.every((m)=>{
    return m>=18
})
console.log("flag",flag)