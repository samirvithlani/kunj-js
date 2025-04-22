var persons = ["sam","shyam","amit","sumit","seeta"]

var flag = true;

for(let i=0;i<persons.length;i++){

    if(!persons[i].startsWith("s")){
        flag = false;
        break;
    }
}

console.log(flag)


var flag1 = persons.every((per)=>{
    return per.startsWith("s")
})
console.log(flag1)