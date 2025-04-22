var lang = ["hindi","english","gujarati","marathi","malayalam"]
var flag = false;
for(let i=0;i<lang.length;i++){

    if(lang[i].length>60){
        flag = true;
        break;
    }
}
console.log(flag)

var flag1 = lang.some((l)=>{
    return l.length>60
})
console.log(flag1)