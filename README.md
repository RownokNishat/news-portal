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

| Breakpoint | Device Type          | Width           |
| ---------- | -------------------- | --------------- |
| Mobile     | Small phones         | < 480px         |
| Mobile     | Larger phones        | 480px - 768px   |
| Tablet     | Portrait & Landscape | 768px - 1024px  |
| Desktop    | Small screens        | 1024px - 1200px |
| Desktop    | Large screens        | > 1200px        |

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

## ✨ Code Quality

### HTML

- Semantic HTML5 elements (`<header>`, `<main>`, `<article>`, `<footer>`)
- Proper use of `<nav>`, `<section>`, and heading hierarchy
- Accessible form inputs with proper labels
- Lazy loading on images

### CSS

- Clean, organized structure with comments
- CSS custom properties for theming
- Mobile-first responsive design
- Proper use of flexbox and grid layouts
- Smooth transitions and animations
- Fallback styles for better compatibility

### JavaScript

- Clean, readable code with comments
- Proper error handling
- Efficient DOM manipulation
- Event delegation where appropriate
- Reusable utility functions
- No inline event handlers

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

## 📝 How to Use Features

### Navigation

- Click logo to go home
- Use navigation menu to filter by category
- Click hamburger menu on mobile to open/close menu

### Search

- Type in search box and press Enter
- Results update to show matching articles
- Clear search to view all articles again

### Filtering

- Click category buttons to filter
- "All News" shows all articles
- Category is saved in URL for sharing

### Reading Articles

- Click any article card to read full content
- View related articles at bottom
- Click "Back to News" to return home

## 🎓 Learning Outcomes

This project demonstrates:

- Strong HTML/CSS fundamentals
- Vanilla JavaScript proficiency
- Responsive web design
- State management concepts
- DOM manipulation
- Event handling
- Data filtering and searching
- Semantic markup
- Accessibility principles
- Performance optimization

## 📞 Support

For questions about the project structure or implementation details, refer to the inline comments in the code or review the relevant section in this README.

## 📄 License

This project is created for educational purposes.

---

**Created**: January 2026  
**Last Updated**: January 2026
