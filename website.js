// Get HTML elements

const studentForm = document.getElementById("studentForm");

const studentName = document.getElementById("studentName");
const studentRoll = document.getElementById("studentRoll");
const studentEmail = document.getElementById("studentEmail");
const studentBranch = document.getElementById("studentBranch");

const searchInput = document.getElementById("searchInput");
const branchFilter = document.getElementById("branchFilter");

const studentTableBody = document.getElementById("studentTableBody");
const noRecord = document.getElementById("noRecord");

const totalStudents = document.getElementById("totalStudents");
const totalBranches = document.getElementById("totalBranches");


// Get students from localStorage

let students = JSON.parse(localStorage.getItem("students")) || [];


// Display students when page loads

displayStudents();


// Enroll Student

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name = studentName.value.trim();
    const roll = studentRoll.value.trim();
    const email = studentEmail.value.trim();
    const branch = studentBranch.value;


    // Check duplicate roll number

    const duplicate = students.some(function(student) {

        return student.roll.toLowerCase() === roll.toLowerCase();

    });


    if (duplicate) {

        alert("A student with this roll number already exists!");

        return;

    }


    // Create new student object

    const newStudent = {

        id: Date.now(),

        name: name,

        roll: roll,

        email: email,

        branch: branch

    };


    // Add student to array

    students.push(newStudent);


    // Save students

    saveStudents();


    // Display updated records

    displayStudents();


    // Reset form

    studentForm.reset();


    alert("Student enrolled successfully!");

});


// Display Students

function displayStudents() {

    const searchValue = searchInput.value.toLowerCase().trim();

    const selectedBranch = branchFilter.value;


    // Filter students

    const filteredStudents = students.filter(function(student) {

        const matchesName = student.name
            .toLowerCase()
            .includes(searchValue);


        const matchesBranch =
            selectedBranch === "All" ||
            student.branch === selectedBranch;


        return matchesName && matchesBranch;

    });


    // Clear table

    studentTableBody.innerHTML = "";


    // Show no record message

    if (filteredStudents.length === 0) {

        noRecord.style.display = "block";

    } else {

        noRecord.style.display = "none";


        // Add students to table

        filteredStudents.forEach(function(student, index) {

            const row = document.createElement("tr");


            row.innerHTML = `

                <td>${index + 1}</td>

                <td>
                    <strong>${student.name}</strong>
                </td>

                <td>${student.roll}</td>

                <td>${student.email}</td>

                <td>
                    <span class="branch-badge">
                        ${student.branch}
                    </span>
                </td>

                <td>

                    <button 
                        class="delete-btn"
                        onclick="deleteStudent(${student.id})"
                    >
                        🗑️ Delete
                    </button>

                </td>

            `;


            studentTableBody.appendChild(row);

        });

    }


    // Update dashboard

    updateDashboard();

}


// Delete Student

function deleteStudent(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this student?"
    );


    if (!confirmDelete) {

        return;

    }


    // Remove student

    students = students.filter(function(student) {

        return student.id !== id;

    });


    // Save updated list

    saveStudents();


    // Refresh table

    displayStudents();

}


// Search Student

searchInput.addEventListener("input", function() {

    displayStudents();

});


// Filter Student by Branch

branchFilter.addEventListener("change", function() {

    displayStudents();

});


// Save Students to Local Storage

function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}


// Update Dashboard

function updateDashboard() {

    // Total Students

    totalStudents.textContent = students.length;


    // Find unique branches

    const branches = new Set(
        students.map(function(student) {

            return student.branch;

        })
    );


    totalBranches.textContent = branches.size;

}