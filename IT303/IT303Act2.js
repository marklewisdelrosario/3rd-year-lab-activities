let school = {
    name: "Northwest Samar State University",
    location: "Calbayog City"
};

let subject = {
    code: "IT206",
    name: "Platform Technologies"
};

let schoolYear = "2026-2027";
let passingGrade = 75;
let studentCount = 0;

let students = [];
let subjects = ["IT206", "IT206", "IT206"];
let grades = [85, 90, 88];

class Person {

    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    introduce() {
        console.log("Name: " + this.#name);
        console.log("Age: " + this.#age);
    }
}

class Student extends Person {

    #studentId;

    constructor(name, age, studentId) {
        super(name, age);
        this.#studentId = studentId;
    }

    getStudentId() {
        return this.#studentId;
    }

    study() {
        console.log(this.getName() + " is studying BSIT.");
    }

    introduce() {
        console.log(
            "I am " + this.getName() +
            " and I am a student in NWSSU."
        );
    }
}

class Student3 extends Student {

    constructor(name, age, studentId, course) {
        super(name, age, studentId);
        this.course = course;
    }

    attendClass() {
        console.log(
            this.getName() +
            " is studying " +
            this.course + "."
        );
    }
}

class Teacher {

    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    teach() {
        this.prepareLesson();

        console.log(this.name);
    }

    prepareLesson() {
        console.log("The insructor on " + this.subject + " is");
    }
}

let student1 = new Student("Mark", 20, "2026-001");
let student2 = new Student("John", 21, "2026-002");
let collegeStudent1 = new Student3("Maria", 20, "2026-003", "BSIT");

let teacher = new Teacher("Mr. Santos", "IT206 Platform Technologies");

students.push(student1);
students.push(student2);
students.push(collegeStudent1);

studentCount = students.length;

console.log("School: " + school.name);
console.log("Location: " + school.location);
console.log("School Year: " + schoolYear);

console.log("\nSubject:");
console.log(subject.code + " - " + subject.name);

console.log("\nNumber of Students: " + studentCount);

if (studentCount >= 3) {
    console.log("The class has 3 or more students.");
}

if (student1.getAge() >= 18) {
    console.log(student1.getName() + " is an adult.");
}

console.log("\n--- STUDENT 1 ---");

student1.introduce();
console.log("Student ID: " + student1.getStudentId());
student1.study();

console.log("\n--- STUDENT 2 ---");

student2.introduce();
console.log("Student ID: " + student2.getStudentId());
student2.study();

console.log("\n--- STUDENT 3 ---");

collegeStudent1.introduce();

console.log(
    "Student ID: " +
    collegeStudent1.getStudentId()
);

collegeStudent1.attendClass();

console.log("\n--- TEACHER ---");

teacher.teach();

console.log("\n--- SUBJECTS ---");

for (let i = 0; i < subjects.length; i++) {
    console.log(
        (i + 1) + ". " + subjects[i]
    );
}

console.log("\n--- STUDENT LIST ---");

let x = 0;

while (x < students.length) {
    console.log(
        students[x].getName()
    );

    x++;
}

console.log("\n--- GRADES ---");

for (let grade of grades) {
    console.log("Grade: " + grade);
}

console.log("\n--- GRADE REMARKS ---");

for (let i = 0; i < grades.length; i++) {

    let grade = grades[i];

    if (grade >= 90) {
        console.log(
            "Grade " + grade + ": Excellent"
        );

    } else if (grade >= passingGrade) {
        console.log(
            "Grade " + grade + ": Passed"
        );

    } else {
        console.log(
            "Grade " + grade + ": Failed"
        );
    }
}