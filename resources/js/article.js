
// Get article ID from URL
const urlParams = new URLSearchParams(window.location.search);
const articleId = parseInt(urlParams.get('id'));

const article = newsData.find(a => a.id === articleId);
const container = document.getElementById('article-content');

if (article) {
  container.innerHTML = `
    <section class="full-article">
      <h1>${article.title}</h1>
      <p class="meta">${article.date} | ${article.category}</p>
      <img src="${article.image}" alt="${article.title}" class="full-image" />
      <div class="article-body">
        <p>${article.content.replace(/\n/g, '</p><p>')}</p>
      </div>
    </section>
  `;
} else {
  container.innerHTML = "<p>Article not found.</p>";
}

// Load article based on URL query
  if (article) {
      document.getElementById("article-title").textContent = article.title;
      document.getElementById("article-meta").textContent = `Published on ${article.date} | Category: ${article.category}`;
      document.getElementById("article-image").src = article.image;
      document.getElementById("article-image").alt = article.title;

      const contentDiv = document.getElementById("article-content");
      contentDiv.innerHTML = article.content.map(para => `<p>${para}</p>`).join('');
  } else {
      document.getElementById("article-title").textContent = "Article Not Found";
      document.getElementById("article-meta").textContent = "";
      document.getElementById("article-content").innerHTML = "<p>Sorry, we couldn't load this article. Please go back to the <a href='news.html'>news page</a>.</p>";
  }


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("comment-form");
  const textArea = document.getElementById("comment-text");
  const commentsList = document.getElementById("comments-list");

  // Simulate username from localStorage (fallback to "Anonymous")
  const currentUser = localStorage.getItem("username") || "Anonymous";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const commentText = textArea.value.trim();
    if (!commentText) return;

    const commentBox = document.createElement("div");
    commentBox.className = "comment";
    commentBox.innerHTML = `
      <div class="author">${currentUser}</div>
      <div class="content">${commentText}</div>
    `;

    commentsList.prepend(commentBox);
    textArea.value = "";
  });
});

