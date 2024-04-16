const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log(event);

  const name = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (name && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/home');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
//from activity 14