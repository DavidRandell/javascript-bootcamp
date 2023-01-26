//Grade Calculator

const calculateGrade = function(grade = 0, maxGrade = 100){
    const gradePercent = (grade / maxGrade) * 100
    let studentComment

    if(gradePercent > 90){
        studentGrade = 'A'
        studentComment = 'Excellent work!'
    } else if (gradePercent > 70) {
        studentGrade = 'B'
        studentComment = 'Well Done!'
    } else if (gradePercent > 50) {
        studentGrade = 'C'
        studentComment = 'Not Bad.'
    } else {
        studentGrade = 'D'
        studentComment = 'Sorry, you Failed and must repeat.'
    }
    return `Student score is ${studentGrade}. ${studentComment}`
}

let studentResult = calculateGrade(19, 20)
console.log(studentResult)