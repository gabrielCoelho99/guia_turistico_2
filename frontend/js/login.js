document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      alert('Login bem-sucedido!');
      window.location.href = 'index.html'; // Redirecionar após login bem-sucedido
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Login falhou');
  }
});

  