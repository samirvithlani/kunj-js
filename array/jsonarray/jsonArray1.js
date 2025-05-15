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


//create mobile unit seller data of 1 days, phone name, price quantity, discount, color
//1)find total sales of day after discount
//2)find total given discount
//3)find red color unit sold
//4)find all phoes greterthen >50000
