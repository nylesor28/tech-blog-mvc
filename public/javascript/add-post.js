async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="blogtitle"]').value;
  const blog_text = document.querySelector('input[name="blogurl"]').value;

  const response = await fetch(`/api/blogs`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      blog_text
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
}

document.querySelector('.new-blogform').addEventListener('submit', newFormHandler);
