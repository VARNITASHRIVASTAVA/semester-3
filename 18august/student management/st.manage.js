function calculateTotal(marks) {
    return marks.reduce(function(total, mark) {
        return total + mark;
    }, 0);
}
function calculatePercentage(total, subjects) {
    return (total / (subjects * 100)) * 100;
}
function calculateGrade(percentage) {

    if (percentage >= 90) {
        return "A+";
    } 
    else if (percentage >= 80) {
        return "A";
    } 
    else if (percentage >= 70) {
        return "B";
    } 
    else if (percentage >= 60) {
        return "C";
    } 
    else if (percentage >= 50) {
        return "D";
    } 
    else if (percentage >= 40) {
        return "E";
    } 
    else {
        return "F";
    }
}
function calculateResult(marks) {

    return marks.every(function(mark) {
        return mark >= 33;
    });
}
document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();
   let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let marks = [
        Number(document.getElementById("english").value),
        Number(document.getElementById("maths").value),
        Number(document.getElementById("science").value),
        Number(document.getElementById("computer").value),
        Number(document.getElementById("social").value)
    ];
   let total = calculateTotal(marks);
    let percentage = calculatePercentage(total, marks.length);
    let grade = calculateGrade(percentage);
    let passed = calculateResult(marks);
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayRoll").textContent = roll;
    document.getElementById("total").textContent = total;
    document.getElementById("percentage").textContent =
        percentage.toFixed(2);
    document.getElementById("grade").textContent = grade;
   let status = document.getElementById("status");

    if (passed) {
        status.textContent = "PASS";
        status.className = "pass";
    } 
    else {
        status.textContent = "FAIL";
        status.className = "fail";
    }
   document.getElementById("result").style.display = "block";
});