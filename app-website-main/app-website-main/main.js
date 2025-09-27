// Open Modal on button click
document.querySelector('button#createActivityBtn').addEventListener('click', function() {
  document.getElementById('activityModal').style.display = 'block';
});

// Close Modal
function closeActivityModal() {
  document.getElementById('activityModal').style.display = 'none';
}

// On Submit Activity Form
function submitActivity(event) {
  event.preventDefault();

  let title = document.getElementById('title').value.trim();
  let description = document.getElementById('description').value.trim();
  let date = document.getElementById('date').value;

  // For demo, just alert the entered info
  alert(`Activity Created:\nTitle: ${title}\nDescription: ${description}\nDue Date: ${date}`);

  // Close Modal & reset form
  closeActivityModal();
  document.getElementById('activityForm').reset();
}
document.getElementById("openTimetableBtn").addEventListener("click", function() {
    window.location.href = index.html;  // Replace with your target HTML file
});
