async function loginFormHandler(event) {
    event.preventDefault();
    // grab inputed data
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username, 
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check reponse status
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);