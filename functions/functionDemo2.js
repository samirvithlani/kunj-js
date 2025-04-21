function hof(){

    console.log("hof...")
}

function test(a){

    //a = hof
    console.log("test called.",a)
    a()
}

test(hof)

// test(10)
// test("")
// test(false)
// test()
// test({})
// test([])