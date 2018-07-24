'use strict'
import Person from "../practice_8/person";

class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses = klasses;
    }

    introduce(){
        var intro = super.introduce();
        var classinfo = '';
        if(this.klasses != null && this.klasses.length !== 0 ){
            for(let klass of this.klasses){
                if(this.klasses.indexOf(klass) != this.klasses.length-1){
                    classinfo = classinfo + klass.number + ', ';
                }else{
                    classinfo = classinfo + klass.number + '.';
                }
            }
            return intro + ` I am a Teacher. I teach Class `+classinfo;
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


    // isTeaching(student){
    //
    // }


}

export default Teacher;




