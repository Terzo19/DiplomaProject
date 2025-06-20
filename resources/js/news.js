// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const articleSection = document.getElementById("news-list");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Function to render article previews
  function renderArticles(filteredArticles) {
    articleSection.innerHTML = "";

    filteredArticles.forEach((article) => {
      const articleElement = document.createElement("article");
      articleElement.classList.add("news-card");

      articleElement.innerHTML = `
        <div class="thumbnail" style="background-image: url('${article.image}')"></div>
        <div class="news-body">
          <h2 class="news-title">${article.title}</h2>
          <p class="news-summary">${article.summary}</p>
          <a href="article.html?id=${article.id}" class="read-more">Read More</a>
        </div>
      `;

      articleSection.appendChild(articleElement);
    });
  }

  // Initial render
  renderArticles(newsData);

  // Filter logic
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'active' from all
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.textContent.toLowerCase();
      if (category === "all") {
        renderArticles(newsData);
      } else {
        const filtered = newsData.filter((article) =>
          article.category.toLowerCase() === category
        );
        renderArticles(filtered);
      }
    });
  });

  // Navbar scroll behavior
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
});