var students =[
    {
        id:101,
        name:"ram",
        age:23
    },
    {
        id:102,
        name:"shyam",
        age:24
    },
    {
        id:103,
        name:"hari",
        age:25
    }
]

students.forEach((stu)=>{
    console.log(stu.id + " "+ stu.name + " "+stu.age)
})

var stuNames = students.map((stu)=>{
    return stu.name.toUpperCase()
})
console.log(stuNames)
//{id:1001,name:"SHYAM",age:24}
var stuData = students.map((stu)=>{
    return {
        id:stu.id+1000,
        name:stu.name.toUpperCase(),
        age:stu.age+1
    }
})
console.log(stuData)

var filtStu = students.filter((stu)=>{
    return stu.age>=24
})
console.log(filtStu)