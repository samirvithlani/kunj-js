const science = (stuName)=>{

    console.log(stuName + " is addmited in science")
}

const admission = (cb,stuName)=>{

    console.log(stuName + " admission process started...")
    //cb == science
    cb(stuName)
}


admission(science,"ram")