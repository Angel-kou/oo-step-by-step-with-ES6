'use strict'
class Class{
    leader;
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return `Class ${this.number}`;
    }

    assignLeader(student){
        if(student.klass.number == this.number)
        return this.leader =  student;
    }

}

export default Class;

