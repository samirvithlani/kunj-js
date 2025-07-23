class Demo{


    //var x=100
    x =100
    //function
    // demo = ()=>{

    // }
     
      test(no){
        console.log("no!!!!",no)
      }
      test(no1,no2,no3){

      }
      test(){
        var p =100
        console.log("x = ",this.x)
        console.log("p = ",p)
      }  

    //   constructor(){
    //     console.log("default const...")
    //   }
    
      constructor(no){
        console.log(`no = ${no}`)
      }
      

}

//var d = new Demo()
var d = new Demo(10)
d.test(10)