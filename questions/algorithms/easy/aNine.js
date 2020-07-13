"use strict";

// 9)
// HackerLand University has the following grading policy:
// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
// If the value of a grade is less than 38, no rounding occurs as the result will still be a failing grade.

// Given the initial value of grades for each of Sam's students, write code to automate the rounding process.
// Return each of the new geades as a new array.

// gradingStudents has the following parameter(s):
// grades: an array of integers representing grades before rounding

// E.g: grades = [73, 67, 38, 33] => 75 \n 67 \n 40 \n 33

const gradingStudents = (grades) => {
  let roundedGrades = grades.map((grade) => {
    if (grade < 38) {
      return grade;
    } else if ((grade + 2) % 5 === 0) {
      return (grade += 2);
    } else if ((grade + 1) % 5 === 0) {
      return (grade += 1);
    } else {
      return grade;
    }
  });

  return roundedGrades;
};

console.log(gradingStudents([73, 67, 38, 33]));
