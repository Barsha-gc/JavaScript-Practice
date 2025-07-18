//Create a grade calculator based on input marks.
//    A: 90-100
//    B:75-89
//    C:60-74
//    D:<60

let marks = 60;

if (marks >= 90 && marks <= 100) {
  console.log("Grade: A");
} else if (marks >= 75 && marks < 90) {
  console.log("Grade: B");
} else if (marks >= 60 && marks < 75) {
  console.log("Grade: C");
} else if (marks < 60) {
  console.log("Grade: D");
} else {
  console.log("Invalid marks");
}
