// Main Application Logic for Home Page

// State Management
const appState = {
  currentPage: 1,
  itemsPerPage: 9,
  currentCategory: "all",
  searchQuery: "",
  filteredArticles: [],
  isLoading: false,
};

// DOM Elements
const filterButtons = document.getElementById("filterButtons");
const newsGrid = document.getElementById("newsGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const featuredSection = document.getElementById("featuredSection");
const trendingGrid = document.getElementById("trendingGrid");
const noResults = document.getElementById("noResults");
const loadingState = document.getElementById("loadingState");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Initialize App
function initializeApp() {
  attachEventListeners();
  parseUrlParams();
}

// Attach Event Listeners
function attachEventListeners() {
  // Filter buttons
  filterButtons.addEventListener("click", handleFilterClick);

  // Search form
  searchForm.addEventListener("submit", handleSearch);

  // Load more button
  loadMoreBtn.addEventListener("click", handleLoadMore);

  // Hamburger menu
  hamburger.addEventListener("click", toggleMobileMenu);

  // Handle browser back/forward buttons
  window.addEventListener("popstate", () => {
    parseUrlParams();
  });

  // Handle navbar category links
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      e.preventDefault();

      // Close the mobile menu after clicking a link
      closeMobileMenu();

      if (href.includes("?category=")) {
        const params = new URLSearchParams(href.split("?")[1]);
        const category = params.get("category").toLowerCase();

        // Update URL and state
        window.history.pushState({ category }, "", href);
        appState.currentPage = 1;
        appState.currentCategory = category;
        appState.searchQuery = "";
        searchInput.value = "";

        // Update active states
        setActiveCategory(category);
        setActiveNavLink(category);

        // Display all sections with new category
        displayFeaturedArticle();
        displayTrendingArticles();
        filterAndDisplayArticles();
        scrollToTop();
      } else if (href === "index.html") {
        window.history.pushState({ category: "all" }, "", "index.html");
        appState.currentPage = 1;
        appState.currentCategory = "all";
        appState.searchQuery = "";
        searchInput.value = "";

        setActiveCategory("all");
        setActiveNavLink("all");

        displayFeaturedArticle();
        displayTrendingArticles();
        filterAndDisplayArticles();
        scrollToTop();
      }
    });
  });
}

// Toggle Mobile Menu
function toggleMobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  // Also toggle the nav element on mobile
  const nav = document.querySelector(".nav");
  if (nav) {
    nav.classList.toggle("active");
  }
}

// Close Mobile Menu
function closeMobileMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  const nav = document.querySelector(".nav");
  if (nav) {
    nav.classList.remove("active");
  }
}

// Parse URL Parameters (for category filtering from URL)
function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  if (category) {
    // Filter and display articles for the category
    appState.currentPage = 1;
    appState.currentCategory = category;
    appState.searchQuery = "";
    searchInput.value = "";

    setActiveCategory(category);
    setActiveNavLink(category);
    displayFeaturedArticle();
    displayTrendingArticles();
    filterAndDisplayArticles();
  } else {
    appState.currentPage = 1;
    appState.currentCategory = "all";
    appState.searchQuery = "";
    searchInput.value = "";

    setActiveCategory("all");
    setActiveNavLink("all");
    displayFeaturedArticle();
    displayTrendingArticles();
    filterAndDisplayArticles();
  }
}

// Load Initial Data
function loadInitialData() {
  displayLoadingState();

  // Simulate loading delay for better UX
  setTimeout(() => {
    appState.currentPage = 1;
    appState.currentCategory = "all";
    appState.searchQuery = "";

    setActiveCategory("all");
    setActiveNavLink("all");
    displayFeaturedArticle();
    displayTrendingArticles();
    filterAndDisplayArticles();
    hideLoadingState();
  }, 500);
}

// Display Loading State (Skeleton Screens)
function displayLoadingState() {
  loadingState.style.display = "block";
  newsGrid.innerHTML = "";
}

// Hide Loading State
function hideLoadingState() {
  loadingState.style.display = "none";
}

// Display Featured Article
function displayFeaturedArticle() {
  const featured = getFeaturedArticle(appState.currentCategory);
  if (!featured) return;

  const featuredLink = document.getElementById("featuredLink");
  featuredLink.href = `article.html?id=${featured.id}`;

  document.getElementById("featuredImage").src = featured.image;
  document.getElementById("featuredImage").alt = featured.title;
  document.getElementById("featuredCategory").textContent =
    featured.category.toUpperCase();
  document.getElementById("featuredTitle").textContent = featured.title;
  document.getElementById("featuredDescription").textContent =
    featured.description;
  document.getElementById("featuredDate").textContent = formatDate(
    featured.date
  );
}

// Display Trending Articles
function displayTrendingArticles() {
  const trending = getTrendingArticles(6, appState.currentCategory);

  trendingGrid.innerHTML = trending
    .map(
      (article) => `
        <article class="trending-card" data-id="${article.id}">
            <a href="article.html?id=${article.id}" class="trending-link">
                <div class="trending-image-wrapper">
                    <img src="${article.image}" alt="${
        article.title
      }" class="trending-image">
                    <span class="trending-badge">${article.category}</span>
                </div>
                <div class="trending-content">
                    <h3 class="trending-title">${article.title}</h3>
                    <p class="trending-views">👁️ ${formatViews(
                      article.views
                    )} views</p>
                </div>
            </a>
        </article>
    `
    )
    .join("");
}

// Handle Filter Button Click
function handleFilterClick(e) {
  if (e.target.classList.contains("filter-btn")) {
    const category = e.target.dataset.category;
    setActiveCategory(category);
    setActiveNavLink(category);

    // Update URL without reloading the page
    if (category === "all") {
      window.history.pushState({ category }, "", "index.html");
    } else {
      window.history.pushState(
        { category },
        "",
        `index.html?category=${category}`
      );
    }

    handleCategoryFilter(category);
  }
}

// Set Active Category Button
function setActiveCategory(category) {
  filterButtons.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  const activeBtn = filterButtons.querySelector(
    `[data-category="${category}"]`
  );
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
}

// Set Active Navbar Link
function setActiveNavLink(category) {
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  // Find the link that matches the current category
  const lowerCategory = String(category).toLowerCase();
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (lowerCategory === "all" && href === "index.html") {
      link.classList.add("active");
    } else if (href.toLowerCase().includes(`?category=${lowerCategory}`)) {
      link.classList.add("active");
    }
  });
}

// Handle Category Filter
function handleCategoryFilter(category) {
  appState.currentPage = 1;
  appState.currentCategory = category;
  appState.searchQuery = "";
  searchInput.value = "";

  displayFeaturedArticle();
  displayTrendingArticles();
  filterAndDisplayArticles();
  scrollToTop();
}

// Handle Search
function handleSearch(e) {
  e.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    appState.searchQuery = "";
    handleCategoryFilter(appState.currentCategory);
    return;
  }

  appState.currentPage = 1;
  appState.searchQuery = query;
  appState.currentCategory = "all";

  // Update URL to reflect search mode (no category)
  window.history.pushState({ searchQuery: query }, "", "index.html");

  setActiveCategory("all");
  setActiveNavLink("all");
  displayFeaturedArticle();
  displayTrendingArticles();
  filterAndDisplayArticles();
  scrollToTop();
}

// Filter and Display Articles
function filterAndDisplayArticles() {
  displayLoadingState();

  setTimeout(() => {
    // Get filtered articles based on current state
    if (appState.searchQuery) {
      appState.filteredArticles = searchArticles(appState.searchQuery);
    } else {
      appState.filteredArticles = getArticlesByCategory(
        appState.currentCategory
      );
    }

    // Display articles
    displayArticles();
    hideLoadingState();
  }, 300);
}

// Display Articles
function displayArticles() {
  const startIndex = (appState.currentPage - 1) * appState.itemsPerPage;
  const endIndex = startIndex + appState.itemsPerPage;

  const articlesToDisplay = appState.filteredArticles.slice(
    startIndex,
    endIndex
  );

  if (appState.currentPage === 1) {
    newsGrid.innerHTML = "";
  }

  if (articlesToDisplay.length === 0) {
    if (appState.currentPage === 1) {
      noResults.style.display = "flex";
      loadMoreBtn.style.display = "none";
    }
    return;
  }

  noResults.style.display = "none";

  const html = articlesToDisplay
    .map(
      (article) => `
        <article class="news-card" data-id="${article.id}">
            <a href="article.html?id=${article.id}" class="news-link">
                <div class="news-image-wrapper">
                    <img src="${article.image}" alt="${
        article.title
      }" class="news-image" loading="lazy">
                    <span class="news-category-badge">${article.category}</span>
                </div>
                <div class="news-content">
                    <h3 class="news-title">${article.title}</h3>
                    <p class="news-description">${article.description}</p>
                    <div class="news-meta">
                        <span class="news-date">${formatDate(
                          article.date
                        )}</span>
                    </div>
                </div>
            </a>
        </article>
    `
    )
    .join("");

  newsGrid.innerHTML += html;

  // Update Load More button visibility
  const hasMore = endIndex < appState.filteredArticles.length;
  loadMoreBtn.style.display = hasMore ? "block" : "none";
}

// Handle Load More
function handleLoadMore() {
  appState.currentPage++;
  displayArticles();

  // Scroll to newly loaded content
  setTimeout(() => {
    const newCards = newsGrid.querySelectorAll(".news-card");
    if (newCards.length > 0) {
      newCards[newCards.length - 6]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 100);
}

// Utility Functions

// Format Date (e.g., "Jan 6, 2026")
function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

// Format Views Count (e.g., "5.4K" for 5400)
function formatViews(count) {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return count.toString();
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Add smooth scroll animation for internal links
document.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && e.target.href.includes("#")) {
    e.preventDefault();
    const targetId = e.target.href.split("#")[1];
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
});

// Initialize the app when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
