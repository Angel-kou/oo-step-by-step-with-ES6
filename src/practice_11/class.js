'use strict'
class Class{
    leader;
    teacherLister;
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return `Class ${this.number}`;
    }

    assignLeader(student){
        if(student.klass.number == this.number){
            this.leader =  student;
            if(this.teacherLister != null){
                this.teacherLister.leaderNotify(student);
            }
        }else {
            console.log(`It is not one of us.`);
        }
    }

    appendMember(student){
        student.klass = this;
        if(this.teacherLister != null){
            this.teacherLister.joinNotify(student);
        }

    }


    registerAssignLeaderListener(teacher){
        this.teacherLister = teacher;

    }

    registerJoinListener(teacher){
        this.teacherLister = teacher
            // => teacher.joinNotify();
    }

}

export default Class;




