let studentName = "Mark Lewis Del Rosario";
let passingGrade = 75;
let averageGrade = 0;

let subjects = ["Integrative Programming Technologies 1", "Networking 2", "Platform Technologies"];
let grades = [71, 88, 85];
let remarks = [];

console.log("Student Name: " + studentName);
console.log("");
console.log("Subjects:");

for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i] + ": " + grades[i]);
}

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
        remarks.push("Passed");
    } else {
        remarks.push("Failed");
    }
}

let passedSubjects = 0;

for (let i = 0; i < remarks.length; i++) {
    if (remarks[i] == "Passed") {
        passedSubjects++;
    }
}

console.log("");
console.log("Subjects Passed: " + passedSubjects);

if (remarks[0] == "Passed" && remarks[1] == "Passed" && remarks[2] == "Passed") {
    console.log(studentName + " passed all subjects.");
}

averageGrade = (grades[0] + grades[1] + grades[2]) / grades.length;

console.log("");
console.log("Average Grade: " + averageGrade.toFixed(2));

if (averageGrade >= 90) {
    console.log(studentName + " had an Excellent average.");
} else if (averageGrade >= passingGrade) {
    console.log(studentName + " had a Good average.");
} else {
    console.log(studentName + " needs to study harder.");
}