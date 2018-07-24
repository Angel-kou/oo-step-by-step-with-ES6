'use strict'
import Person from "../practice_8/person";

class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }

    introduce(){
        var intro = super.introduce();
        if(this.klass != null){
            return intro + ` I am a Teacher. I teach Class ${this.klass.number}.`;
        }else{
            return intro + ` I am a Teacher. I teach No Class.`;
        }

    }

    introduceWith(student){
        if(student.klass == this.klass){
            return super.introduce() + ` I am a Teacher. I teach ${student.name}.`;
        }else{
            return super.introduce() + ` I am a Teacher. I don't teach ${student.name}.`;
        }
    }


}

export default Teacher;



