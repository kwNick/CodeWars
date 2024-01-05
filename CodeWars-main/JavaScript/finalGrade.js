//Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
function finalGrade(exam, projects){
    return exam > 90 || projects > 10 ? 100 : exam > 75 && projects > 4 ? 90 : exam > 50 && projects > 1 ? 75 : 0;
}

//probly easier to read
function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) return 100;
    if(exam > 75 & projects > 4) return 90;
    if(exam > 50 & projects > 1) return 75;
    return 0;
  }