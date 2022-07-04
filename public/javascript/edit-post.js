// gets value from text boxes and updated title and content when update post button is clicked
async function updatePostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('textarea[name="title"]').value.trim();
    const content = document.querySelector('textarea[name="content"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    console.log(title, content, id);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
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

document.querySelector('#update-btn').addEventListener('click', updatePostHandler);
