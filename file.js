// Load theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
}

// Toggle theme and store in localStorage
document.getElementById('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Animation on button click
document.getElementById('animateBtn').addEventListener('click', () => {
  const msg = document.getElementById('message');
  msg.classList.add('highlight');
  setTimeout(() => {
    msg.classList.remove('highlight');
  }, 600);
});
document.getElementById('myButton').addEventListener('click', function() {
  alert('Button clicked!');
});
document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if email is valid
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if password is entered
    if (password.trim() === "") {
        alert("Please enter your password.");
        return;
    }

    alert("Sign-In successful!");  // You can replace this with your authentication process
});
