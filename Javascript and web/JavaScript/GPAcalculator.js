

var gradePoint = [5, 4, 3.5, 3, 2.5, 2, 1.5, 0]
function gradingSystem(mainMarks, gradePA, optionalSub) {
    if (mainMarks >= 80) {
        return gradePoint[0]
    } else if (mainMarks >= 70) {
        return gradePoint[1]
    } else if (mainMarks >= 60) {
        return gradePoint[2]
    } else if (mainMarks >= 50){
        return gradePoint[3]
    } else if (mainMarks >= 40){
        return gradePoint[4]
    } else if (mainMarks > 33){
        return gradePoint[5]
    } else if (mainMarks <= 33){
        return gradePoint[6]
    } else if (optionalSub >= 80 ){
      var plusP = optionalSub - 80
       return plusP 
    } 
}
console.log(gradingSystem(98, 2, 81))
//it ain't complete, but works