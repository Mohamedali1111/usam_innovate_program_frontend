# My Profile Page - Personal Portfolio

A modern, responsive personal profile page built with React as part of a frontend assessment. This project showcases professional web development skills with a clean, interactive design.

## 🚀 Features

### Core Features
- **Semantic HTML Structure**: Well-organized sections including header, about, skills, projects, contact, and footer
- **Modern CSS Styling**: 
  - CSS Grid and Flexbox for responsive layouts
  - CSS Custom Properties (variables) for easy theming
  - Clean, professional color scheme
  - Smooth hover effects and transitions
- **Interactive Elements**:
  - Dark/Light mode toggle with theme switching
  - Time-based greeting that changes throughout the day
  - Expandable bio section with show/hide functionality
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Accessibility**: Proper focus states, semantic HTML, and ARIA labels

### Sections Included
1. **Navigation Bar**: Fixed header with logo and theme toggle
2. **Header Section**: Name, profession, tagline, and dynamic greeting
3. **About Section**: Personal bio with expandable content
4. **Skills Section**: Categorized technical and soft skills
5. **Projects Section**: Featured projects with technology tags
6. **Contact Section**: Professional contact links with hover effects
7. **Footer**: Copyright information

## 🛠️ Technologies Used

- **React 18**: Modern React with functional components and hooks
- **CSS3**: Advanced styling with Grid, Flexbox, and Custom Properties
- **JavaScript ES6+**: Modern JavaScript features and React hooks
- **HTML5**: Semantic HTML structure
- **Create React App**: Development environment and build tools

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-profile-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#2563eb to #3b82f6)
- **Secondary**: Light grays for backgrounds
- **Accent**: Light blue for highlights
- **Dark Mode**: Inverted color scheme for better accessibility

### Layout System
- **CSS Grid**: Used for skills and projects sections
- **Flexbox**: Used for navigation, header, and contact sections
- **Responsive Breakpoints**: 
  - Desktop: 1200px+
  - Tablet: 768px - 1199px
  - Mobile: 320px - 767px

### Interactive Elements
- **Hover Effects**: Cards lift on hover with enhanced shadows
- **Smooth Transitions**: All interactive elements have 0.3s ease transitions
- **Theme Toggle**: Instant theme switching with CSS variables
- **Bio Expansion**: Smooth animation for expanding content

## 🔧 Customization

### Personalizing Content
1. **Update Profile Information**: Modify the content in `src/Profile.js`
2. **Change Colors**: Update CSS variables in `src/Profile.css`
3. **Add Sections**: Extend the component with additional sections
4. **Modify Skills**: Update the skills arrays in the component

### Key Files to Modify
- `src/Profile.js` - Main component and content
- `src/Profile.css` - Styling and theme variables
- `src/App.js` - App structure

## 🚧 Challenges Faced & Solutions

### Challenge 1: Responsive Design Implementation
**Problem**: Creating a layout that works seamlessly across all device sizes
**Solution**: Used CSS Grid with `auto-fit` and `minmax()` for flexible layouts, combined with media queries for specific breakpoints

### Challenge 2: Dark Mode Implementation
**Problem**: Implementing theme switching without page reload
**Solution**: Used CSS Custom Properties (variables) with JavaScript state management to dynamically change theme colors

### Challenge 3: Smooth Animations
**Problem**: Creating engaging hover effects and transitions
**Solution**: Implemented CSS transitions with transform properties and keyframe animations for smooth user interactions

### Challenge 4: Accessibility
**Problem**: Ensuring the application is accessible to all users
**Solution**: Added proper ARIA labels, focus states, semantic HTML, and keyboard navigation support

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Optimizations

- CSS Custom Properties for efficient theme switching
- Optimized images and assets
- Minimal JavaScript bundle size
- Efficient React component structure


## 👨‍💻 Author

Mohamed Ali
