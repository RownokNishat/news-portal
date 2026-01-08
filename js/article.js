// Article Page Logic

// DOM Elements
const articleContainer = document.getElementById("articleContainer");
const relatedGrid = document.getElementById("relatedGrid");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const searchForm = document.getElementById("searchForm");

// Initialize Article Page
function initializeArticlePage() {
  attachEventListeners();
  displayArticle();
  displayRelatedArticles();
}

// Attach Event Listeners
function attachEventListeners() {
  // Hamburger menu
  hamburger.addEventListener("click", toggleMobileMenu);

  // Close menu when link is clicked
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Search form
  searchForm.addEventListener("submit", handleSearch);
}

// Toggle Mobile Menu
function toggleMobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Get Article ID from URL
function getArticleIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Display Article
function displayArticle() {
  const articleId = getArticleIdFromUrl();

  if (!articleId) {
    articleContainer.innerHTML =
      '<div class="no-results"><h3>Article not found</h3></div>';
    return;
  }

  const article = getArticleById(articleId);

  if (!article) {
    articleContainer.innerHTML =
      '<div class="no-results"><h3>Article not found</h3></div>';
    document.title = "Article Not Found - StartupMind";
    return;
  }

  // Update page title
  document.title = `${article.title} - StartupMind`;

  // Update article content
  document.getElementById("articleCategory").textContent =
    article.category.toUpperCase();
  document.getElementById("articleDate").textContent = formatDate(article.date);
  document.getElementById("articleTitle").textContent = article.title;
  document.getElementById("articleImage").src = article.image;
  document.getElementById("articleImage").alt = article.title;
  document.getElementById("articleBody").innerHTML = article.content;

  // Display tags
  const tagsContainer = document.getElementById("articleTags");
  tagsContainer.innerHTML = article.tags
    .map((tag) => `<span class="tag">#${tag}</span>`)
    .join("");
}

// Display Related Articles
function displayRelatedArticles() {
  const articleId = getArticleIdFromUrl();
  if (!articleId) return;

  const relatedArticles = getRelatedArticles(articleId, 3);

  if (relatedArticles.length === 0) {
    relatedGrid.innerHTML = "<p>No related articles found.</p>";
    return;
  }

  relatedGrid.innerHTML = relatedArticles
    .map(
      (article) => `
        <article class="related-card">
            <a href="article.html?id=${article.id}" class="related-link">
                <div class="related-image-wrapper">
                    <img src="${article.image}" alt="${
        article.title
      }" class="related-image">
                    <span class="related-category">${article.category}</span>
                </div>
                <div class="related-content">
                    <h3 class="related-title">${article.title}</h3>
                    <p class="related-date">${formatDate(article.date)}</p>
                </div>
            </a>
        </article>
    `
    )
    .join("");
}

// Handle Search
function handleSearch(e) {
  e.preventDefault();

  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    // Redirect to home page with search query
    window.location.href = `index.html?search=${encodeURIComponent(query)}`;
  }
}

// Utility Functions

// Format Date
function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

// Initialize the article page when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeArticlePage);
} else {
  initializeArticlePage();
}
