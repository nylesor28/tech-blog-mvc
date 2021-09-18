async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="blog-title"]').value.trim();
  const blog_text = document.querySelector('textarea[name="blog-text"]').value.trim();

  if(!title || !blog_text) {
    alert("Please provie a title and text")
    return
  }

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

document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);
