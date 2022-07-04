// gets value from text boxes and updated title and content when update post button is clicked
async function createPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('textarea[name="title"]').value.trim();
    const content = document.querySelector('textarea[name="content"]').value.trim();

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#create-btn').addEventListener('click', createPostHandler);
