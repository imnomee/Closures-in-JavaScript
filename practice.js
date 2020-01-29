var buttons = document.getElementsByTagName('button');

/*
function createHandler(name) {

    return function () {
        console.log(name);
    }
}

for(var i = 0; i < buttons.length; i += 1) {
	var button = buttons[i];
	var buttonName = button.innerHTML;
	button.addEventListener('click', createHandler(buttonName)
	);
}
*/

//USING LET WILL REDUCE THE CHANCES OF USING CLOSURES AS IT RETURNS ITS OWN VERSION ON EVERY RUN
for (var i = 0; i < buttons.length; i += 1) {
    var button = buttons[i];
    let buttonName = button.innerHTML;
    button.addEventListener('click', () => {
        console.log(buttonName);
    })

}

// function calculate_gpa
function calculate_gpa(student_grades) {
    // pass in student_grades
    // set grade_total to 0
    let grade_total = 0;
    let total_num = student_grades.length;
    // for each grade in student_grades
    for (let i = 0; i < total_num; i++) {
        let grade = student_grades[i];
        // if grade is not a 1, 2, 3, or 4
        if (grade < 1 || grade > 4) {
            console.log('invalid grade ' + grade);
            console.log("can't compelte calculation");
            break;

            // print "invalid grade"
            // iprint grade
            // print "can't complete calculation"
            // exit function
        } else {
            grade_total += grade;
            // else add grade to grade_total
            // iendif
        }
        // endfor
    }
    let gpa = grade_total / total_num;
    // set gpa to grade_total / number of grades
    // return gpa
    return gpa;
    // endfunction
}

let reggie = [4, 4, 3, 4];
console.log(calculate_gpa(reggie));

// set reggie_grades to 4, 4, 3, 4
// print the results of calling calculate_gpa with reggie_grades

let dave = [1, 2, 3, 2];
// set dave_grades to 1, 2, 3, 2
console.log(calculate_gpa(dave));
// print the results of calling calculate_gpa with dave_grades
