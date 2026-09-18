// 10+ LET VARIABLES
let studentName = "Mark Lewis Del Rosario";
let studentAge = 19;
let studentYear = "2nd Year";
let studentSection = "BSIT 2C";
let studentType = "Regular";
let subjectCount = 5;
let totalUnits = 0;
let totalGrades = 0;
let averageGrade = 0;
let tuition = 0;
let payment = 5000;
let balance = 0;
let enrollmentStatus = "Pending";

// 10+ CONST VARIABLES
const schoolName = "Northwest Samar State University";
const schoolCode = "NWSSU";
const course = "Bachelor of Science in Information Technology";
const schoolYear = "2026-2027";
const semester = "First Semester";
const passingGrade = 75;
const tuitionPerUnit = 350;
const miscellaneousFee = 500;
const libraryFee = 200;
const laboratoryFee = 300;
const currency = "PHP";

// STUDENT OBJECT
const student = {
    name: studentName,
    age: studentAge,
    year: studentYear,
    section: studentSection,
    course: course
};

// SUBJECT ARRAY
const subjects = [
    { name: "Platform Technologies", units: 3, grade: 85 },
    { name: "Integrative Programming", units: 3, grade: 88 },
    { name: "Networking", units: 3, grade: 82 },
    { name: "Database Management", units: 3, grade: 90 },
    { name: "Web Development", units: 3, grade: 87 }
];

// 3 DESTRUCTURED ARRAYS
const [subject1, subject2, subject3] = subjects;

const [firstSubject, secondSubject] = [
    subject1.name,
    subject2.name
];

const [firstGrade, secondGrade] = [
    subject1.grade,
    subject2.grade
];

// 3 DESTRUCTURED OBJECT LITERALS
const {
    name: studentFullName,
    age: studentAgeInfo
} = student;

const {
    year: yearLevel,
    section: sectionInfo
} = student;

const {
    name: thirdSubjectName,
    grade: thirdSubjectGrade
} = subject3;

// 2 ARRAYS USING SPREAD OPERATOR
const firstSubjects = [subject1, subject2];

const moreSubjects = [
    ...firstSubjects,
    subject3
];

const allSubjects = [
    ...moreSubjects,
    subjects[3],
    subjects[4]
];

// 2 OBJECTS USING SPREAD OPERATOR
const studentContact = {
    ...student,
    contactNumber: "09123456789"
};

const completeStudent = {
    ...studentContact,
    address: "Calbayog City"
};

// 5 ARROW FUNCTIONS
const getUnits = (subject) => {
    return subject.units;
};

const getGrade = (subject) => {
    return subject.grade;
};

const calculateAverage = (grades) => {
    let total = 0;

    grades.forEach(grade => {
        total += grade;
    });

    return total / grades.length;
};

const calculateTuition = (units) => {
    return units * tuitionPerUnit;
};

const checkStatus = (average) => {
    return average >= passingGrade
        ? "Passed"
        : "Failed";
};

// CALCULATIONS
totalUnits = allSubjects.reduce(
    (total, subject) => total + getUnits(subject),
    0
);

const grades = allSubjects.map(
    subject => getGrade(subject)
);

totalGrades = grades.reduce(
    (total, grade) => total + grade,
    0
);

averageGrade = calculateAverage(grades);

tuition = calculateTuition(totalUnits);

let totalFees =
    tuition +
    miscellaneousFee +
    libraryFee +
    laboratoryFee;

balance = totalFees - payment;

if (balance <= 0) {
    enrollmentStatus = "Enrolled";
} else {
    enrollmentStatus = "Not enrolled";
}

// 2 ARRAYS USING .MAP()
const subjectNames = allSubjects.map(
    subject => subject.name
);

const subjectGrades = allSubjects.map(
    subject => subject.grade
);

// 2 ARRAYS USING .FILTER()
const passedSubjects = allSubjects.filter(
    subject => subject.grade >= passingGrade
);

const highGrades = allSubjects.filter(
    subject => subject.grade >= 85
);

// 2 OBJECTS USING OPTIONAL CHAINING
const contactInfo = {
    phone: completeStudent?.contactNumber ?? "No contact number"
};

const locationInfo = {
    address: completeStudent?.address ?? "No address"
};

// 10+ TEMPLATE LITERALS
const message1 = `School: ${schoolName}`;
const message2 = `Student: ${studentFullName}`;
const message3 = `Age: ${studentAgeInfo}`;
const message4 = `Course: ${course}`;
const message5 = `Year and Section: ${yearLevel} - ${sectionInfo}`;
const message6 = `School Year: ${schoolYear}`;
const message7 = `Semester: ${semester}`;
const message8 = `Total Units: ${totalUnits}`;
const message9 = `Average Grade: ${averageGrade.toFixed(2)}`;
const message10 = `Tuition Fee: ${currency} ${tuition.toFixed(2)}`;
const message11 = `Total Fees: ${currency} ${totalFees.toFixed(2)}`;
const message12 = `Payment: ${currency} ${payment.toFixed(2)}`;
const message13 = `Balance: ${currency} ${balance.toFixed(2)}`;
const message14 = `Academic Status: ${checkStatus(averageGrade)}`;
const message15 = `Enrollment Status: ${enrollmentStatus}`;

// DISPLAY OUTPUT
console.log(`${schoolCode} STUDENT SYSTEM`);
console.log();
console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
console.log(message5);
console.log(message6);
console.log(message7);
console.log();
console.log(`Contact Number: ${contactInfo.phone}`);
console.log(`Address: ${locationInfo.address}`);
console.log();
console.log("SUBJECTS AND GRADES");
console.log(`Subjects: ${subjectNames.join(", ")}`);
console.log(`Grades: ${subjectGrades.join(", ")}`);
console.log(`Passed Subjects: ${passedSubjects.length}`);
console.log(`High Grade Subjects: ${highGrades.length}`);
console.log();
console.log(message8);
console.log(message9);
console.log();
console.log("SCHOOL FEES");
console.log(message10);
console.log(`Miscellaneous Fee: ${currency} ${miscellaneousFee}`);
console.log(`Library Fee: ${currency} ${libraryFee}`);
console.log(`Laboratory Fee: ${currency} ${laboratoryFee}`);
console.log(message11);
console.log(message12);
console.log(message13);
console.log();
console.log(message14);
console.log(message15);
console.log();
console.log(`Thank you, ${studentFullName}!`);
console.log(`Welcome to ${schoolName}!`);