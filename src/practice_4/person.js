'use strict'
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    base_introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }


    introduce(){
        return this.base_introduce();
    }
}

export default Person;

