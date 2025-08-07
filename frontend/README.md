# 🎨 Islamic Prayer Times - Frontend

React.js frontend application for the Islamic Prayer Times AI Agent. Features a modern, responsive UI with intelligent autocomplete, date selection, and location detection.

## 🚀 Features

- **Smart Autocomplete**: Dynamic suggestions for city and country inputs
- **Date Picker**: Calendar interface for selecting specific dates
- **Location Detection**: One-click to use current GPS location
- **Recent Searches**: Quick access to previously searched locations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Glassmorphism design with smooth animations
- **Real-time Validation**: Form validation with user-friendly error messages

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the frontend directory**
   ```bash
   cd frontend
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
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.js              # Main React component
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   └── README.md           # This file
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎨 UI Components

### Form Components
- **City Input**: Autocomplete with popular cities worldwide
- **Country Input**: Autocomplete with comprehensive country list
- **Date Picker**: Native HTML5 date input with custom styling
- **Location Button**: GPS-based location detection
- **Submit Button**: Gradient-styled with loading states

### Display Components
- **Prayer Cards**: Beautiful gradient cards for each prayer time
- **Recent Searches**: Glassmorphism pills for quick access
- **Loading States**: Smooth loading animations
- **Error Messages**: User-friendly error display

## 🔧 Technical Implementation

### State Management
- **useState**: Form data, prayer times, loading states
- **useEffect**: Side effects for location detection and localStorage
- **useRef**: DOM references for autocomplete handling

### Key Features
- **Autocomplete Logic**: Real-time filtering of suggestions
- **Location Detection**: Browser Geolocation API + reverse geocoding
- **Recent Searches**: localStorage persistence with deduplication
- **Form Validation**: Client-side validation with error handling

### API Integration
- **Axios**: HTTP client for backend communication
- **Proxy Configuration**: Automatic proxy to backend (port 5000)
- **Error Handling**: Comprehensive error catching and display

## 🎯 Key Features Explained

### Location Detection
```javascript
const detectUserLocation = async () => {
  // Uses browser Geolocation API
  // Reverse geocoding with BigDataCloud API
  // Automatic form population
};
```

### Autocomplete System
```javascript
const handleInputChange = (e) => {
  // Real-time filtering of suggestions
  // Click outside to close dropdown
  // Mobile-friendly touch interface
};
```

### Recent Searches
```javascript
const saveToRecentSearches = (city, country) => {
  // localStorage persistence
  // Automatic deduplication
  // Limited to 5 most recent
};
```

## 🎨 Styling

### Design System
- **Color Palette**: Purple gradient theme (#667eea to #764ba2)
- **Typography**: System fonts with fallbacks
- **Spacing**: Consistent 8px grid system
- **Animations**: Smooth transitions and hover effects

### Responsive Breakpoints
- **Desktop**: 800px max-width container
- **Tablet**: Flexible grid layouts
- **Mobile**: Single-column layout with touch optimization

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Static Hosting
The build folder can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## 🔍 Troubleshooting

### Common Issues
1. **Backend Connection**: Ensure backend is running on port 5000
2. **Location Permission**: Allow location access in browser
3. **CORS Issues**: Check proxy configuration in package.json
4. **Build Errors**: Clear node_modules and reinstall

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with React.js and modern web technologies for the Islamic community.** 