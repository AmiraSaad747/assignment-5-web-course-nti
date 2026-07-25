class Person {
    #email;
    #id;

    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    get email() {
        return this.#email;
    }
    set email(value) {
        if (value.includes("@")) {
            this.#email = value;
        } else {
            console.log("Invalid email. Try again.");
        }
    }
    get id() {
        return this.#id;
    }
    set id(value) {
        if (value > 0) {
            this.#id = value;
        } else {
            console.log("Invalid ID.");
        }
    }
    describeRole() {
        console.log("I am a school member.");
    }
}
class Principal extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.members = [];
    }
    addMember(member) {
        this.members.push(member);
    }
    removeMember(id) {
        this.members = this.members.filter(member => member.id !== id);
    }
    listMembers() {
        console.log("School Members:");
        this.members.forEach(member => {
            console.log(member.name);
        });
    }
    describeRole() {
        console.log("I manage the school.");
    }
}
class Teacher extends Person {
    constructor(name, email, id, subject) {
        super(name, email, id);
        this.subject = subject;
        this.grades = [];
    }
    gradeStudent(studentName, grade) {
        this.grades.push({
            student: studentName,
            grade: grade
        });
    }
    listGrades() {
        console.log("Student Grades:");
        this.grades.forEach(item => {
            console.log(item.student + " : " + item.grade);
        });
    }
    describeRole() {
        console.log("I teach " + this.subject + ".");
    }
}
class Student extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.subjects = [];
    }
    enrollSubject(subject) {
        this.subjects.push(subject);
    }
    viewSubjects() {
        console.log("Enrolled Subjects:");
        this.subjects.forEach(subject => {
            console.log(subject);
        });
    }
    describeRole() {
        console.log("I am a student.");
    }
}
const principal = new Principal(
    "Ahmed",
    "ahmed@gmail.com",
    1
);
const teacher = new Teacher(
    "Sara",
    "sara@gmail.com",
    2,
    "Math"
);
const student = new Student(
    "Ali",
    "ali@gmail.com",
    3
);
principal.addMember(teacher);
principal.addMember(student);
principal.listMembers();
teacher.gradeStudent("Ali", 95);
teacher.gradeStudent("Omar", 88);
teacher.listGrades();
student.enrollSubject("Mathematics");
student.enrollSubject("Physics");
student.viewSubjects();
const schoolMembers = [
    principal,
    teacher,
    student
];
console.log("Describe Roles:");
schoolMembers.forEach(member => {
    member.describeRole();
});