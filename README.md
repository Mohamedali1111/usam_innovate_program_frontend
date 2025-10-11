# Mohamed Ali - Software Engineer Portfolio

A modern, responsive, and professional portfolio website built with React, showcasing my skills, projects, and experience as a Software Engineer.

## 🚀 Live Demo
[View Live Portfolio](https://mohamed-ali-portfolio.vercel.app)

## ✨ Features
### 🎨 Design & User Experience
- **Modern & Clean Design**: Professional, developer-focused aesthetic
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

### 🧩 Technical Features
- **React 18**: Latest React features with functional components and hooks
- **Vite**: Fast build tool for optimal development experience
- **React Router**: Client-side routing with lazy loading
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Custom Hooks**: Reusable logic for forms and time-based greetings
- **Error Boundaries**: Graceful error handling and recovery
- **Performance Optimizations**: React.memo, useCallback, useMemo, and lazy loading

### 📱 Pages & Components
- **Home Page**: Hero section with dynamic greeting and animated counters
- **About Page**: Education details, coursework, and timeline
- **Skills Page**: Interactive skills showcase with filtering and sorting
- **Projects Page**: Project portfolio with search and category filters
- **Contact Page**: Contact form with validation and social links

## 🛠️ Technologies Used
### Frontend
- **React 18.2.0** - UI library with modern features
- **React Router DOM 6.8.1** - Client-side routing
- **Framer Motion 10.16.4** - Animation library
- **Lucide React 0.263.1** - Icon library

### Styling & Build Tools
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **Vite 4.4.5** - Fast build tool and dev server
- **PostCSS 8.4.27** - CSS processing
- **Autoprefixer 10.4.14** - CSS vendor prefixing

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript Support** - Type definitions for better development experience

## 🚀 Getting Started
### Prerequisites
- Node.js 16.0.0 or higher
- npm or yarn package manager

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohamedali1111/mohamed-ali-portfolio.git
   cd mohamed-ali-portfolio
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start development server**
   ```bash
   npm run dev
   ```
4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── SkillItem.jsx   # Individual skill display
│   ├── ProjectCard.jsx # Project showcase card
│   ├── ErrorBoundary.jsx # Error handling
│   └── LoadingSpinner.jsx # Loading component
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Theme management
├── hooks/              # Custom React hooks
│   ├── useGreeting.js  # Time-based greeting
│   └── useForm.js      # Form state management
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── About.jsx       # About page
│   ├── Skills.jsx      # Skills page
│   ├── Projects.jsx    # Projects page
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Key React Concepts Implemented
### Week 1-2: Fundamentals
- **Functional Components**: All components use modern functional syntax
- **Props & State**: Proper prop drilling and local state management
- **Event Handling**: Form submissions, button clicks, and navigation

### Week 3: Hooks & State Management
- **useState**: Form inputs, filters, and UI state
- **useEffect**: Side effects, timers, and theme persistence
- **Custom Hooks**: `useGreeting` and `useForm` for reusable logic
- **useContext**: Theme management across the application

### Week 4: Advanced Hooks
- **useReducer**: Theme state management with complex logic
- **useCallback**: Memoized functions for performance
- **useMemo**: Computed values for filtering and sorting
- **React.memo**: Component memoization for optimization

### Week 5: Performance & Advanced Features
- **Lazy Loading**: Code splitting with React.lazy and Suspense
- **Error Boundaries**: Graceful error handling
- **Performance Optimization**: Strategic use of memoization
- **Modern React Patterns**: Best practices and modern syntax

## 👨‍💻 About Mohamed Ali
**Software Engineer** based in Shorouk City, Cairo, Egypt

### 🎓 Education
- **B.Sc. in Computer Science and Information Systems**
- **Misr International University (MIU)** - Sep 2021 – Jun 2025

### 💼 Work Experience
- **Software Development Intern** - Circle Advertising Egypt (Sep 2024 – Oct 2024)
- **Summer Internship** - Commercial International Bank (CIB) Egypt (Jul 2024 – Aug 2024)

### 🏆 Key Achievements
- **ICP Hackathon 2025 Finalist** - 2nd place in Phase 1 for CargoTrace Finance project
- **Freelance Projects** - Delivered client projects under tight deadlines
- **Production Contributions** - Built features for real advertising and banking systems

## 🚀 Featured Projects
### 1. Cybersecurity Awareness Training Platform
- **Tech**: Node.js, Express.js, MongoDB, EJS, Bootstrap
- **Features**: Phishing simulation, user scoring, admin panel, progress tracking

### 2. Volunteens – Nonprofit Volunteer Management
- **Tech**: Spring Boot, Flutter, Firebase
- **Features**: Role-based access control, live notifications, cloud-synced scheduling

### 3. CargoTrace Finance – ICP Hackathon Project
- **Tech**: React, Rust (ICP Smart Contracts), Vite
- **Features**: Decentralized trade finance, mirrored NFTs, blockchain integration

### 4. Quicksite – Startup Builder Platform
- **Tech**: React, Tailwind, Next.js (planned)
- **Features**: Website template marketplace, builder tools, Arabic language support

## 🛠️ Technical Skills
### Languages & Frameworks
- **Frontend**: React, Next.js, Angular, Bootstrap, Tailwind CSS
- **Backend**: Node.js, Express.js, Spring Boot, PHP Native
- **Mobile**: Flutter (Dart)
- **Languages**: JavaScript, TypeScript, Java, PHP, C++, C#, Dart, Python

### Databases & Tools
- **Databases**: MongoDB, MySQL, Firebase
- **Tools**: Git, GitHub, Postman, VS Code, Figma, Jira, Framer
- **Practices**: REST APIs, Responsive Design, Authentication, Agile/Scrum, CI/CD

## 🌐 Deployment
### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add build script to package.json
3. Deploy: `npm run deploy`

## 🔧 Configuration
### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_url_here
VITE_CONTACT_EMAIL=mohamedali200bu@gmail.com
```

### Customization
- **Colors**: Modify `tailwind.config.js` for brand colors
- **Content**: Update project data in respective page components
- **Styling**: Customize CSS classes in `src/index.css`

## 📱 Responsive Design
The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader compatibility

## 🚀 Performance Optimizations
- **Code Splitting**: Lazy loading of page components
- **Image Optimization**: Optimized project images
- **Bundle Analysis**: Vite's built-in bundle analyzer
- **Caching**: Efficient caching strategies
- **Minification**: Production build optimization

## 🔮 Future Improvements
- [ ] **Blog Section**: Add a blog for technical articles
- [ ] **API Integration**: Connect to a real backend for contact form
- [ ] **Analytics**: Add Google Analytics or similar
- [ ] **SEO**: Enhanced meta tags and structured data
- [ ] **PWA**: Progressive Web App features
- [ ] **Internationalization**: Multi-language support
- [ ] **Testing**: Unit and integration tests
- [ ] **CMS Integration**: Content management system

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact
- **Email**: mohamedali200bu@gmail.com
- **Phone**: +20 1014800766
- **Location**: Shorouk City, Cairo, Egypt
- **LinkedIn**: [Mohamed Ali](https://www.linkedin.com/in/mohamed-ali-38b6a92b1/)
- **GitHub**: [@Mohamedali1111](https://github.com/Mohamedali1111)

## 🙏 Acknowledgments
- **Tailwind CSS** for the amazing utility-first framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Vite** for the fast build tool
- **React Team** for the incredible library

---

Built with ❤️ by Mohamed Ali using React and modern web technologies.
#   U p d a t e d   1 0 / 1 1 / 2 0 2 5   2 1 : 4 2 : 3 3  
 #   E n v i r o n m e n t   v a r i a b l e   a d d e d   1 0 / 1 1 / 2 0 2 5   2 2 : 0 7 : 0 1  
 