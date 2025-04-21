const science = (stuName)=>{

    console.log(stuName + " is addmited in science")
    return false;
}

const admission = (cb,stuName)=>{

    console.log(stuName + " admission process started...")
    //cb == science
    // var admitted = cb(stuName)
    // console.log(" admitted... " +admitted)
    // return admitted;
    return cb(stuName)
}


var flag = admission(science,"ram")
console.log("flag ",flag)