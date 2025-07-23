//inheritance
class Person {

    constructor(name,age){
        this.name = name
        this.age = age
    }

}
class Employee extends Person {

    constructor(name,age,post){
        super(name,age)
        this.post = post
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Post: ${this.post}`;
    }
}

let emp = new Employee("John", 30, "Developer");
console.log(emp.getDetails()); // Output: Name: John, Age: 30, Post
 