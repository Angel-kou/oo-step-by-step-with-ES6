'use strict'
import Person from "../practice_5/person";

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    introduce(){
        var intro = super.introduce();
        if(this.klass != null){
            return intro + ` I am a Teacher. I teach Class ${this.klass}.`;
        }else{
            return intro + ` I am a Teacher. I teach No Class.`;
        }

    }
}

export default Teacher;

