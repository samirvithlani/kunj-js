//fileHandling => ,200,.pdf

const pdfHandler = ()=>{
    console.log("pdf handler...")
}
const wordhandler = ()=>{
    console.log("word handler...")
}
const docHandler = ()=>{
    console.log("doc handler...")
}
const txtHandler = ()=>{
    console.log("txt handler...")
}

const fileHandler = (cb)=>{

    console.log("file handling...")
    cb()
}


const fileName = "abc.txt"
if(fileName.endsWith(".txt")){

    fileHandler(txtHandler)
}
else if(fileName.endsWith(".pdf")){
    fileHandler(pdfHandler)
}