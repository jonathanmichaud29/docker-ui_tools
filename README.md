# 🎨 Next.js UI Template with Docker

A modern, responsive UI template built with Next.js, React, and Sass, featuring smooth animations and excellent user feedback. This project demonstrates a reusable contact form with real-time validation, loading states, and success animations.

## ✨ Features

### 🚀 **Smooth User Experience**
- **Real-time Form Validation** - Instant feedback as users type
- **Animated Interactions** - Smooth transitions and hover effects
- **Loading States** - Elegant spinner animations during form submission
- **Success Feedback** - Animated success messages with auto-reset
- **Responsive Design** - Mobile-first approach with fluid layouts

### 🎯 **Modern Tech Stack**
- **Next.js 14** with App Router
- **React 18** with Hooks
- **Sass/SCSS** for advanced styling
- **Docker** for containerized development
- **TypeScript Ready** - Pre-configured for type safety

### 🎨 **Visual Design**
- **Glassmorphism Effects** - Modern backdrop blur and transparency
- **Gradient Backgrounds** - Eye-catching color schemes
- **Custom Animations** - CSS keyframes for smooth interactions
- **Error Handling** - Custom 404 and 500 error pages

## 🏗️ Project Structure

```
ui-template-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with metadata
│   │   ├── page.js            # Home page component
│   │   ├── not-found.js       # Custom 404 page
│   │   └── error.js           # Custom 500 error page
│   ├── components/
│   │   └── ContactForm.js     # Interactive contact form
│   └── styles/
│       ├── globals.scss       # Global styles and animations
│       ├── Home.module.scss   # Home page specific styles
│       ├── ContactForm.module.scss  # Form component styles
│       └── Error.module.scss  # Error pages styles
├── docker-compose.yml         # Docker development setup
├── Dockerfile                 # Container configuration
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Node.js 18+ (if running locally)

### 🐳 **With Docker (Recommended)**

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd ui-template-nextjs
   ```

2. **Start the development environment:**
   ```bash
   docker build -f ./Dockerfile -t nextjs-ui-tools .
   docker run -it -p 3000:3000 \
     -v "$(pwd)/src:/app/src" \
     -v "./.vscode:/app/.vscode" \
     -v "/app/node_modules" \
     --env-file ./docker/.env \
     --name nextjs-ui-tools_container \
     nextjs-ui-tools
   ```

3. **Access the application:**
   - Open [http://localhost:3000](http://localhost:3000)
   - Hot reload is enabled for development


## 🎯 Form Features

### **Interactive Contact Form**
- **Name Field** - Required with real-time validation
- **Email Field** - Format validation with regex
- **Subject Field** - Required field validation
- **Message Field** - Minimum character count validation
- **Smart Error Handling** - Errors clear as user types
- **Submission States** - Loading spinner and success animation

### **User Feedback System**
- ✅ **Success State** - Animated checkmark with auto-reset
- ⚠️ **Error States** - Red highlighting with helpful messages
- 🔄 **Loading State** - Spinner animation during submission
- 📱 **Responsive** - Works perfectly on all device sizes

## 🎨 Customization

### **Colors & Themes**
```scss
// In globals.scss - modify gradient backgrounds
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

// In ContactForm.module.scss - change accent colors
border-color: #667eea; // Focus states
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); // Buttons
```

### **Form Fields**
```javascript
// In ContactForm.js - add new fields
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
  phone: '', // New field
})
```

### **Animations**
```scss
// In globals.scss - modify animation timing
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## 🔧 Configuration

### **Docker Setup**
- **Hot Reload** - Source code changes reflect immediately
- **Volume Mounting** - Preserves node_modules in container
- **Port Mapping** - Container port 3000 mapped to host
- **Environment Variables** - Development mode enabled

### **Next.js Configuration**
```javascript
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./styles'],
  },
}
```

## 📱 Testing

### **Test Different Scenarios:**
- **Valid Form Submission** - Fill all fields correctly
- **Validation Errors** - Leave fields empty or use invalid email
- **Loading States** - Submit form and watch loading animation
- **Success Flow** - Complete submission and see success message
- **404 Error** - Visit `/nonexistent-page` for custom 404
- **Responsive Design** - Test on different screen sizes

## 🚀 Deployment

### **Production Build**
```bash
# Local build
npm run build
npm start

# Docker production build
docker build -t ui-template-prod .
docker run -p 3000:3000 ui-template-prod
```

### **Environment Variables**
```bash
NODE_ENV=production
NEXT_PUBLIC_API_URL=your-api-endpoint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Next Steps

### **Potential Enhancements:**
- 🔐 **Authentication** - Add user login/registration
- 📊 **Form Analytics** - Track submission success rates
- 🌙 **Dark Mode** - Toggle between light/dark themes
- 🌐 **Internationalization** - Multi-language support
- 📧 **Email Integration** - Connect to email service
- 🎭 **More Components** - Expand the UI library

### **Backend Integration:**
```javascript
// Example API integration
const handleSubmit = async (formData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  return response.json()
}
```

---

**Built with ❤️ using Next.js, React, and Sass**

For questions or support, please open an issue in the repository.

