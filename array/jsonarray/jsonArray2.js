var marks = [10,20,30,40,50,60]
//prev 10,acc =0 sum =10
//prev,20 + 10

var sum = marks.reduce((next,acc)=>{
    return next + acc
})

var sum  = marks.reduce((next,acc)=>next+acc)
// for(let i=0;i<marks.length;i++){

//         sum = sum + marks[i]
// }

console.log(sum)

var data =[
    {
        name:"abc",
        price:100
    },
    {
        name:"pqr",
        price:200
    },
    {
        name:"o",
        price:1000
    }
    
]

var total = data.reduce((cv,ac)=>{
    return cv + ac.price
},0)
console.log(total)