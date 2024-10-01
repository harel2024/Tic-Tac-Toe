document.addEventListener('DOMContentLoaded', function () {
    // הוספת מאזין אירוע לכפתור ההתחברות
    document.querySelector('button').addEventListener('click', login);
});

function login() {
    // קבלת שם המשתמש מהאינפוט
    const username = document.getElementById('username').value;

    // קבלת סיסמא מהאינפוט
    const password = document.getElementById('password').value;

    // בדיקת שם משתמש וסיסמא
    if (username === 'a' && password === 'a') {
        // הצגת פרטי המשתמש
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('user-section').style.display = 'block';
        document.getElementById('user-name').innerText = `Hello, ${username}!`;

        // הגדרת תמונה של המשתמש - דוגמה לתמונה כללית
        document.getElementById('user-image').src = 'https://via.placeholder.com/150';
    } else {
        alert('Incorrect username or password');
    }
}

