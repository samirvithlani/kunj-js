const searchItem = ()=>{

    return new Promise((res,rejc)=>{
        setTimeout(() => {
            res({id:"Abc1004",name:"iphone16",price:1600,color:"blue"})
        }, 3000);
    })
}

const addToCart = (item)=>{

    return new Promise((res,rejc)=>{

        setTimeout(() => {
                res({...item,cartID:1001,qty:1})
        }, 2000);
    })
}

const payment = (cart)=>{

    
    return new Promise((res,reject)=>{

        setTimeout(() => {
            res({...cart,paymentId:"trancsa1234",orderId:"ordfeb11",amount: cart.qty*cart.price})
        }, 4000);
    })

}

async function amazone(){

    console.log("item is beign searching......")
    const item = await searchItem()
    console.log("item has been searched...")

    const cartData = await addToCart(item)
    console.log("item has been added to cart.. ")

    console.log("payment is being processed...")
    const paymentData = await payment(cartData)
    console.log("payment has been done...")
    console.log(paymentData)

}

amazone()