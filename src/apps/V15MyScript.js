class Student{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
        //console.log('hello i am constructor')
    }
}

const std1 = new Student('mohit',23); //object created, so costructor automatically called
const std2 = new Student('rohit',23);
console.log(std1.name,std1.age);
console.log(std2.name,std2.age);