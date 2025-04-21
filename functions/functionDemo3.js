function science() {
    console.log("user is admitted in science");
}

function comm() {
    console.log("user is admitted in comm");
}

function arts() {
    console.log("user is admitted in arts");
}

function admission(cb) {
    console.log("admission function called...");
    cb(); // call the callback function (e.g., comm)
}

var pers = 70;

if (pers >= 80) {
    admission(science);
} else if (pers >= 70) {
    admission(comm);
} else if (pers >= 60) {
    admission(arts);
}
