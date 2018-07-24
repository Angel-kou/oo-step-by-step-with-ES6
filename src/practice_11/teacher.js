'use strict'
import Person from "../practice_8/person";

class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses = klasses;
    }

    introduce(){
        if(this.klasses != null && this.klasses.length !== 0 ){
            var temp = [];
            temp = this.klasses.map(function (x) {
                return ' '+x.number;
            })
            return super.introduce()+ ` I am a Teacher. I teach Class`+temp.join(',')+'.';
        }else{
            return super.introduce()+ ` I am a Teacher. I teach No Class.`;
        }
    }

    getDescription(){
        if(this.klasses != null && this.klasses.length !== 0 ){
            var temp = [];
            temp = this.klasses.map(function (x) {
                return ' '+x.number;
            })
            return ` I am a Teacher. I teach Class`+temp.join(',')+'.';
        }else{
            return ` I am a Teacher. I teach No Class.`;
        }

    }

    introduceWith(student){
        if(student.klass == this.klass){
            return super.introduce() + ` I am a Teacher. I teach ${student.name}.`;
        }else{
            return super.introduce() + ` I am a Teacher. I don't teach ${student.name}.`;
        }
    }




    leaderNotify(student){
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
    }

    joinNotify(student){
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.klass.number}.`);
    }


}

export default Teacher;





