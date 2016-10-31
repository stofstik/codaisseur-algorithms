function toAmericanGrade(grade) {
    // write a function that turns a european grade into an american grade (A-F)
    // A = 9-10, B = 8-8.9, C = 7-7.9, D = 6-6.9, F = 1-5.9 (rest)
    // hint: you can use if (...) return "A"; etc.
    // ...
    if (grade >= 9) {
        return 'A';
    } else if (grade >= 8) {
        return 'B';
    } else if (grade >= 7) {
        return 'C';
    } else if (grade >= 6) {
        return 'D';
    } else if (grade >= 1) {
        return 'F';
    } else {
        return 'Not valid';
    }
}

function toAmericanGrades(grades) {
    // write a function that returns a list of american results
    // hint: use map
    return grades.map(toAmericanGrade);
}

function averageAmericanGrade(grades) {
    // write a function that returns the average grade, in american grades
    // hint: use reduce first
    return toAmericanGrade((grades.reduce((prev, next) => prev + next) / grades.length));
}

// tests
console.log("9 = A", "A" == toAmericanGrade(9));
console.log("10 = A", "A" == toAmericanGrade(10));
console.log("1 = F", "F" == toAmericanGrade(1));
console.log("5.9 = F", "F" == toAmericanGrade(5.9));
console.log("6 = D", "D" == toAmericanGrade(6));
console.log("6.9 = D", "D" == toAmericanGrade(6.9));

var grades1 = [9, 5.5, 6, 7.3];

console.log("last is C", "C" == toAmericanGrades(grades1)[3]);
console.log("average:", "D" == averageAmericanGrade(grades1));
