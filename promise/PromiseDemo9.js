var blance = 90000;

const makePayment = (amount) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (amount < blance) {
        res({
          message: "payment done...",
        });
      } else {
        rej({
          message: "payment failed due to insufficient amount..",
        });
      }
    }, 2000);
  });
};

const paynow = async () => {
  try {
    console.log("payment process starts")
    const paymentData =await makePayment(800000);
    console.log("payment done...");
    console.log(paymentData)
  } catch (err) {
    console.log('err....',err);
  }
};

paynow()
