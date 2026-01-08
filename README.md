# StartupMind - News Website Front-End

A responsive, modern news website front-end built with vanilla HTML, CSS, and JavaScript. Designed to be similar to popular news portals like Prothom Alo, BBC, and The Daily Star.

## 🎯 Project Overview

This is a **front-end only** project demonstrating strong HTML/CSS/JavaScript fundamentals without any backend or database requirements. The project focuses on responsive design, clean code structure, and excellent user experience across all devices.

## 📋 Features

### Core Features

- ✅ **Fully Responsive Design** - Mobile, Tablet, and Desktop optimized
- ✅ **Header Navigation** - Logo, navigation menu, and search functionality
- ✅ **Featured News Section** - Highlighted article with cover image
- ✅ **Trending Section** - Popular articles based on view count
- ✅ **News Grid Layout** - Cards displaying news with thumbnails, titles, and descriptions
- ✅ **Category Filtering** - Filter news by different categories
- ✅ **Search Functionality** - Search articles by title, description, or category
- ✅ **News Details Page** - Full article view with related articles
- ✅ **Skeleton Loading States** - Better perceived performance

### Bonus Features

- 🎨 **Smooth Animations** - Subtle hover effects and transitions
- 📱 **Mobile-First Design** - Optimized for all screen sizes
- ♿ **Accessibility Features** - Semantic HTML, proper focus states
- 🔍 **URL Query Parameters** - Category filtering via URL
- 📊 **View Count Tracking** - Trending articles based on views
- 🏗️ **Well-Organized Code** - Clean structure with separation of concerns
- 🌐 **Dark Mode Support** - CSS media query for dark mode preference
- ⌨️ **Reduced Motion Support** - For users with motion sensitivity

## 📁 Project Structure

```
startupMind/
├── index.html                 # Home page
├── article.html              # Article detail page
├── js/
│   ├── data.js              # Mock data and utility functions
│   ├── app.js               # Main application logic (home page)
│   └── article.js           # Article page logic
├── styles/
│   ├── main.css             # Main styles and components
│   └── responsive.css       # Responsive design breakpoints
└── README.md                # This file
```

## 🚀 Quick Start

### Option 1: Open in Browser

Simply open `index.html` in your web browser:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2: Use a Local Server

For better performance and to avoid any potential CORS issues:

**Using Python 3:**

```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

**Using Python 2:**

```bash
python -m SimpleHTTPServer 8000
# Then visit http://localhost:8000
```

**Using Node.js (http-server):**

```bash
npx http-server
# Then visit the provided localhost URL
```

**Using VS Code Live Server:**

- Install "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

## 📐 Key Design Decisions

### 1. **Vanilla JavaScript Over Frameworks**

- Used plain JavaScript for better understanding of fundamentals
- No external dependencies required
- Demonstrates strong DOM manipulation skills
- Smaller file sizes and faster load times

### 2. **Component-Based CSS Architecture**

- CSS organized by components (header, cards, articles, etc.)
- CSS custom properties (variables) for easy theming
- BEM-like naming convention for clarity
- Responsive utility classes

### 3. **Mobile-First Responsive Approach**

- Base styles for mobile devices
- Progressive enhancement with media queries
- Breakpoints: 480px, 768px, 1024px
- Flexible grid layouts using CSS Grid and Flexbox

### 4. **State Management**

- Centralized `appState` object in `app.js`
- State-driven UI updates
- Clean separation between data and presentation
- Easy to extend and debug

### 5. **Mock Data System**

- Comprehensive article data in `data.js`
- Utility functions for filtering and searching
- Simulates real API responses
- Can be easily replaced with actual API calls

### 6. **Accessibility & Performance**

- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels where needed
- Lazy loading for images
- Skeleton screens for better perceived performance

## 🎨 Color Scheme

- **Primary Red**: `#c41e3a` - Used for primary actions and highlights
- **Dark Gray**: `#333333` - Used for text and backgrounds
- **Light Gray**: `#f5f5f5` - Used for backgrounds
- **Text Dark**: `#1a1a1a` - Main text color
- **Text Light**: `#666666` - Secondary text color

## 💾 Data Structure

Each article object contains:

```javascript
{
    id: 1,
    title: "Article Title",
    description: "Brief description",
    category: "technology",
    image: "https://example.com/image.jpg",
    date: "2026-01-06",
    content: "Full HTML content",
    author: "Author Name",
    tags: ["tag1", "tag2"],
    views: 5420
}
```

## 🔧 Customization

### Adding New Articles

Edit `js/data.js` and add new article objects to the `newsArticles` array:

```javascript
const newsArticles = [
  {
    id: 13,
    title: "New Article",
    // ... other properties
  },
  // ... more articles
];
```

### Changing Colors

Edit `:root` variables in `styles/main.css`:

```css
:root {
  --primary-color: #c41e3a;
  --secondary-color: #333333;
  /* ... other variables */
}
```

### Adding Categories

Categories are dynamically generated from the articles in the data. Add new category values to article objects and update the filter buttons in `index.html`.

## 📱 Responsive Breakpoints

| Breakpoint | Device Type    | Width           | Features                                          |
| ---------- | -------------- | --------------- | ------------------------------------------------- |
| Small      | Small phones   | < 480px         | Single column, compact nav, hamburger menu        |
| Medium     | Larger phones  | 480px - 768px   | Single column, hamburger menu, search bar visible |
| Tablet     | Tablets        | 768px - 1024px  | Flexible layout, hamburger menu                   |
| Large      | Laptop/Desktop | 1024px - 1260px | Hamburger visible, search bar before hamburger    |
| XL         | Large monitors | > 1260px        | Full navbar visible, hamburger hidden             |

### Mobile-First Responsive Features

- **Hamburger Menu**: Fully functional on screens < 1260px with smooth animations
- **Adaptive Header**: Logo, search bar, and menu reposition based on screen size
- **Touch-Friendly**: Buttons and links sized appropriately for touch input
- **Flexible Images**: Scale responsively without distortion
- **Readable Text**: Font sizes adjust for comfortable reading on all devices

## 🔍 Search & Filter Features

### Category Filtering

- Click filter buttons to view articles by category
- All categories are dynamically loaded from data
- URL updates with category parameter

### Search Functionality

- Search by article title, description, or category
- Real-time filtering as you type
- Search persists in the search input

### Trending Section

- Shows top 6 articles by view count
- Automatically updated based on article data
- Appears on home page for quick discovery

## 🎬 How It Works

### Home Page Flow

1. Page loads and initializes app
2. Featured article (highest views) is displayed
3. Trending articles are loaded
4. All articles are displayed in grid
5. User can filter by category or search
6. Load More button loads additional articles

### Article Page Flow

1. Article ID extracted from URL parameter
2. Article content is fetched from data
3. Full article is displayed with styling
4. Related articles are shown at bottom
5. User can navigate back or to related articles

## 📝 How to Use Features

### Navigation

- **Desktop (> 1260px)**: Click navbar links to filter by category
- **Tablet/Mobile (< 1260px)**: Click hamburger menu to open navigation, then select category
- Click logo to return home and show all articles

### Hamburger Menu (Mobile)

- Visible on screens < 1260px
- Click hamburger icon (☰) to toggle menu open/closed
- Menu closes automatically when you click a category
- Menu also closes when clicking outside of it

### Search

- Type keywords in the search box
- Press Enter to search
- Results show articles from **all categories** matching your query
- Search updates featured and trending sections
- Clear search to view all articles again

### Filtering

- **Via Navbar**: Click category links (Desktop only)
- **Via Buttons**: Click category filter buttons
- **Via URL**: Add `?category=technology` to the URL
- Click "All News" to show all categories
- Active category highlighted in both navbar and buttons
- Featured and trending sections update based on selected category

### Reading Articles

- Click any article card to read full content
- View full article with author, date, and tags
- Return to home page to see all articles again

## � Quick Start

### Option 1: Open in Browser

Simply open `index.html` in your web browser:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2: Use a Local Server (Recommended)

For better performance and to avoid CORS issues:

**Using Python 3:**

```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

**Using Python 2:**

```bash
python -m SimpleHTTPServer 8000
# Then visit http://localhost:8000
```

**Using Node.js (http-server):**

```bash
npx http-server
# Then visit the provided localhost URL
```

**Using VS Code Live Server:**

- Install "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

## 📞 Support

For questions about the project structure or implementation details, refer to the inline comments in the code or review the relevant section in this README.

## 📄 License

This project is created for educational purposes.

---

**Created**: January 2026  
**Last Updated**: January 2026

## ✨ Code Quality

### HTML

- Semantic HTML5 elements (`<header>`, `<main>`, `<article>`, `<footer>`)
- Proper use of `<nav>`, `<section>`, and heading hierarchy
- Accessible form inputs with proper labels
- Hamburger menu button positioned correctly for mobile
- Responsive header structure with proper element ordering

### CSS

- Clean, organized structure with comments
- CSS custom properties (variables) for theming
- Mobile-first responsive design with 5 major breakpoints
- Proper use of flexbox and grid layouts
- Smooth transitions and animations
- Fallback styles for better compatibility
- Separate responsive.css file for media queries
- `!important` flags where necessary for mobile overrides

### JavaScript

- Clean, readable code with comprehensive comments
- Proper error handling and edge case management
- Efficient DOM manipulation with event delegation
- Reusable utility functions for common operations
- State management via centralized `appState` object
- Proper closure handling for event listeners
- Image URL validation and fallback system

## 🚀 Performance Optimizations

1. **Lazy Loading** - Images load only when needed
2. **Skeleton Screens** - Better perceived loading time
3. **Efficient CSS** - Minimal specificity, reusable classes
4. **No Unnecessary Dependencies** - Pure vanilla JavaScript
5. **Optimized Animations** - Using CSS transforms and transitions
6. **Reduced Motion Support** - Respects user preferences

## 🌐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ✨ Core Features & Implementation

### 🎯 Category Filtering System

- **Multiple Filter Methods**: Navbar links, filter buttons, and URL parameters all work together
- **Dynamic Categories**: Automatically extracted from article data (Technology, Business, Finance, Innovation, Startups)
- **Active State Tracking**: Visual feedback for current category selection across navbar and buttons
- **All Categories Option**: "All News" shows articles from all categories simultaneously
- **Category-Aware Data**:
  - Featured article automatically selects highest-viewed article in chosen category
  - Trending section shows top 6 articles in chosen category, ranked by views
  - Featured and trending update instantly when category changes

### 📱 Mobile Navigation

- **Hamburger Menu System**: Fully functional toggle menu on screens < 1260px
- **Adaptive Layout**: Header restructures across 5 breakpoints (480px, 768px, 1024px, 1260px+)
- **Smart Positioning**: Search bar and hamburger menu reposition based on available space
- **Touch Optimization**: Large touch targets and proper spacing for mobile interaction
- **Menu Auto-Close**: Menu closes when selecting category or clicking outside

### 🔍 Search & Discovery

- **Global Search**: Search across all 72 articles regardless of current category
- **Real-Time Results**: Featured and trending sections update with matching articles
- **Case-Insensitive**: Search works with any capitalization
- **Description Search**: Searches through titles, descriptions, and tags
- **Active Indication**: Clear visual feedback when search is active vs. filter mode

### 🖼️ Image Handling

- **Unsplash Integration**: All 72 articles have beautiful, high-quality images
- **Fallback System**: `ImageURLMap` with verified Unsplash photo IDs for reliability
- **404 Error Prevention**: `getValidImageURL()` function ensures all images load
- **Responsive Images**: Images scale properly across all device sizes

### 🌐 URL Management

- **Browser History**: Category selections update browser history with `pushState()`
- **Shareable URLs**: URLs like `?category=technology` preserve state for sharing
- **Deep Linking**: Users can bookmark category pages and return to them directly
- **Back Button Support**: Browser back button works as expected

## 🎓 Learning Outcomes & Best Practices

This project demonstrates professional-level implementation of:

- **HTML/CSS Fundamentals**: Semantic markup, accessible form design, responsive layouts
- **Vanilla JavaScript Proficiency**: DOM manipulation, event handling, state management without frameworks
- **Responsive Web Design**: Mobile-first approach with 5 strategic breakpoints
- **State Management**: Centralized `appState` object with predictable updates
- **Event Handling**: Efficient event delegation, proper listener cleanup, hamburger menu interactions
- **Data Filtering & Search**: Multi-criteria filtering with case-insensitive matching
- **Semantic Markup**: Proper use of HTML5 elements for accessibility and SEO
- **Accessibility Principles**: ARIA labels, semantic structure, keyboard navigation support
- **Performance Optimization**: Lazy loading, efficient CSS selectors, minimal dependencies
- **Image Optimization**: CDN integration with fallback system for reliability
- **Code Organization**: Separated concerns with dedicated CSS files (main.css, responsive.css, individual component files)

## 🐛 Bug Fixes & Development History

This project evolved through systematic debugging and optimization:

1. ✅ **Critical Filtering Bug**: Fixed root cause where featured/trending articles ignored category filters
2. ✅ **URL State Management**: Implemented proper `pushState()` for shareable, bookmarkable URLs
3. ✅ **Navigation Sync**: Synchronized navbar and filter button active states
4. ✅ **Search Behavior**: Fixed search to return results from all categories, not just current filter
5. ✅ **Case Sensitivity**: Implemented case-insensitive category matching throughout
6. ✅ **Image Reliability**: Created fallback system for 100% image load success rate
7. ✅ **Mobile Menu**: Developed fully functional hamburger menu with proper HTML structure
8. ✅ **Responsive Breakpoints**: Fine-tuned 5 major breakpoints for seamless experience across devices
9. ✅ **Header Layout**: Perfected element ordering and positioning across all screen sizes

All issues identified and resolved through iterative testing and development.

## � Project Structure

```
startupMind/
├── index.html                 # Main page with featured articles, trending, and all articles
├── article.html              # Individual article detail page
├── styles/
│   ├── main.css              # Core styling, colors, typography, cards, grids
│   ├── responsive.css        # Mobile-first responsive design with 5 breakpoints
│   ├── header.css            # Header, navbar, search bar styling
│   ├── articles.css          # Article cards, grid layout styling
│   └── footer.css            # Footer styling
├── js/
│   ├── app.js                # Main application logic (455 lines)
│   │   ├── appState object (category, page, search, filtered articles)
│   │   ├── Event listener attachment (filters, search, navbar)
│   │   ├── URL parameter parsing with parseUrlParams()
│   │   ├── Featured article display with displayFeaturedArticle()
│   │   ├── Trending articles with displayTrendingArticles()
│   │   ├── All articles pagination with displayArticles()
│   │   ├── Search handling with handleSearch()
│   │   ├── Category filtering with handleFilterClick()
│   │   ├── Navbar active state with setActiveNavLink()
│   │   ├── Mobile menu toggle with toggleMobileMenu()
│   │   └── Mobile menu close with closeMobileMenu()
│   └── data.js               # Article data and utility functions (1900 lines)
│       ├── 72 article objects with full metadata
│       ├── ImageURLMap with fallback Unsplash URLs
│       ├── getValidImageURL() image validation function
│       ├── getTrendingArticles(limit, category) category-aware trending
│       ├── getFeaturedArticle(category) category-aware featured selection
│       ├── searchArticles(query) search utility
│       ├── filterArticlesByCategory(articles, category) filter utility
│       └── createArticle(articleData) constructor function
├── README.md                 # Project documentation (you are here)
└── .gitignore               # Git ignore configuration
```

## 🔑 Key File Descriptions

### index.html

- Header with logo, navigation, hamburger menu, search bar
- Featured article section with largest featured article
- Trending section with top 6 trending articles
- Filter buttons for each category
- Articles grid with all articles (paginated)
- Footer with links

### article.html

- Full article content page
- Author, date, and tag information
- Related articles section
- Back to home button

### js/app.js

Primary application controller handling:

- Event listener initialization
- URL parameter parsing and browser history management
- Featured and trending article display based on category
- Article grid rendering with pagination
- Search and filter functionality
- Mobile menu toggle
- Navigation state synchronization
- Active link highlighting

### js/data.js

Article database and utilities:

- **72 total articles** across 5 categories
- Image URL fallback system with ImageURLMap
- Category-aware featured article selection
- Category-aware trending article ranking
- Search and filter utility functions
- Article creation with validation

### styles/main.css

Core styling for colors, typography, and components:

- CSS custom properties (variables) for theming
- Component styles (cards, buttons, forms)
- Grid and flexbox layouts
- Transitions and hover effects

### styles/responsive.css

Mobile-first responsive breakpoints:

- **< 480px**: Small phones (single column, compact elements)
- **480px - 768px**: Medium phones (flexible layout, hamburger menu)
- **768px - 1024px**: Tablets (larger layout, hamburger menu)
- **1024px - 1260px**: Large tablets/small laptops (hamburger visible, search before menu)
- **1261px+**: Large screens (full navbar visible, hamburger hidden)
