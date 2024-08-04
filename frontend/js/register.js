document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://127.0.0.1:3000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        alert(data.message);
        window.location.href = 'login.html';
      } else {
        alert(data.error);
      }
    })
    .catch(error => {
      console.error('Erro ao registrar usuário:', error);
      alert('Erro ao registrar usuário. Verifique sua conexão ou tente novamente mais tarde.');
    });
  });
});


  