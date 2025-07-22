const paywithPhonePe= ()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Payment successful using PhonePe");
        }, 5000);
    })
}

const paywithGooglePay= ()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Payment successful using GooglePay");
        }, 3000);
    })
}
const paywithPaytm= ()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            rej("Payment successful using Paytm");
        }, 3000);
    })
}


Promise.race([paywithPhonePe(), paywithPaytm(),paywithGooglePay()]).then((result)=>{
    console.log(result);
}
).catch((error)=>{
    console.error("Error:", error);
});
