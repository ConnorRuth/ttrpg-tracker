const signUpFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (name && password) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to signup');
          }
        }
      };
      
      document
        .querySelector('.signUp-form')
        .addEventListener('submit', signUpFormHandler);
      