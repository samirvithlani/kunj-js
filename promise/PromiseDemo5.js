const generateExam  = ()=>{


    console.log("exam is beign generating...")
    const promise = new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve({
                name:"Maths",
                questions:10,
                marks:100
            })
        }, 300);
    })

    return promise
}

const generateQuestion = (exam)=>{

    console.log("question is being generating")
    const promise = new Promise((resolve,reject)=>{

        const questionData ={
            "q1":"q1","q2":"q2","q3":"q3","q4":"q4","q5":"q5","q6":"q6","q7":"q7","q8":"q8","q9":"q9","q10":"q10"
        }
        setTimeout(()=>{
            resolve({exam,questionData})
        },300)
    })

    return promise

}

const startExam = ()=>{

    generateExam().then((exam)=>{
        //console.log(exam)
        generateQuestion(exam).then((question)=>{
            console.log("exam...question",question)
        })
    })

}

startExam()