// Subjects array [courseCode, courseName, subjectType, totalClasses, presentClasses]
let subjects = [
    ["BAS007B", "Discrete Mathematics", "Theory", 15, 11],
    ["BC0008B", "Operating Systems", "Theory", 15, 10],
    ["BC0011A", "Computer Networks", "Theory", 20, 17],
    ["BC0014B", "Operating Systems Lab", "Practical", 5, 3],
    ["BC0081B", "Python Programming", "Theory", 15, 8],
    ["BC0082B", "Python Programming Lab", "Practical", 5, 3],
    ["BC0594A", "Computer Network Lab", "Practical", 5, 4],
    ["BC0606A", "Introduction to Data Science", "Theory", 15, 11]
];

let tableBody = document.getElementById("attendance-table");

subjects.forEach(subject => {
    let [code, name, type, total, present] = subject;
    let absent = total - present;
    let percent = ((present / total) * 100).toFixed(2);

    let row = `
        <tr>
            <td>${code}</td>
            <td>${name}</td>
            <td>${type}</td>
            <td>${total}</td>
            <td>${present}</td>
            <td>${absent}</td>
            <td class="${percent >= 75 ? "high" : "low"}">${percent}</td>
        </tr>
    `;

    tableBody.innerHTML += row;
});