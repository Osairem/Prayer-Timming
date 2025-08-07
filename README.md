# 🕌 Islamic Prayer Times AI Agent

A full-stack web application that acts as an AI agent to fetch Islamic prayer (namaz) times based on user input. Built with React.js frontend and Node.js backend.

## 🚀 Features

- **AI Agent Functionality**: Custom `getPrayerTimes()` tool that intelligently fetches prayer times
- **Real-time Data**: Connects to Aladhan Prayer Times API for accurate timings
- **Date Selection**: Choose specific dates for prayer times (defaults to today)
- **Autocomplete Suggestions**: Smart suggestions for city and country inputs
- **Location Detection**: Automatically detect user's location for instant prayer times
- **Recent Searches**: Quick access to previously searched locations
- **Beautiful UI**: Modern, responsive design with gradient backgrounds
- **Cross-platform**: Works on desktop, tablet, and mobile devices

## 📁 Project Structure

```
islamic-prayer-agent/
├── frontend/           # React.js application
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md
├── backend/            # Node.js + Express server
│   ├── routes/
│   ├── package.json
│   ├── server.js
│   └── README.md
├── .gitignore
└── README.md          # This file
```

## 🛠️ Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd islamic-prayer-agent
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the Backend Server**
   ```bash
   cd ../backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

5. **Start the Frontend Application**
   ```bash
   cd ../frontend
   npm start
   ```
   The frontend will open at `http://localhost:3000`

## 🎯 How It Works

### AI Agent Tool: `getPrayerTimes(city, country, date)`

The core of this application is a custom AI agent tool that:

1. **Receives Input**: City, country, and optional date from user
2. **Validates Data**: Ensures required parameters are provided
3. **Makes API Call**: Connects to Aladhan Prayer Times API with date parameter
4. **Processes Response**: Extracts and formats prayer timings
5. **Returns Structured Data**: Clean JSON response for frontend

## 🔧 API Endpoints

### Backend API
- **POST** `/api/getPrayerTimes`
  - **Request**: `{ "city": "Lahore", "country": "Pakistan", "date": "2024-12-15" }`
  - **Response**: Prayer times with location and date

### External API
- **Aladhan Prayer Times API**: `https://api.aladhan.com/v1/timingsByCity`
- **Method**: Calculation method 2 (University of Islamic Sciences, Karachi)
- **Free**: No API key required for basic usage

## 🎨 User Interface

The frontend provides:
- **Smart Form**: City and country inputs with autocomplete suggestions
- **Date Picker**: Calendar interface for selecting specific dates
- **Location Detection**: One-click to use current location
- **Recent Searches**: Quick access to previous searches
- **Loading States**: Visual feedback during API calls
- **Error Messages**: User-friendly error display
- **Prayer Cards**: Beautiful display of prayer times
- **Responsive Design**: Works on all device sizes

## 📚 Technical Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **Axios**: HTTP client
- **CORS**: Cross-origin resource sharing

### Frontend
- **React.js**: Frontend framework
- **Axios**: HTTP client
- **CSS3**: Modern styling with gradients
- **Create React App**: Build tool
- **useRef & useEffect**: Advanced React hooks for autocomplete

## 🎯 Assignment Requirements Met

✅ **AI Agent**: Custom `getPrayerTimes()` function acts as an intelligent tool  
✅ **JavaScript Tool**: Built entirely in JavaScript/Node.js  
✅ **Meaningful Output**: Real prayer times for real-world use  
✅ **Minimal UI**: Clean, focused user interface  
✅ **Custom Function**: `getPrayerTimes(city, country, date)` serves as the AI agent tool  
✅ **Real-world Application**: Solves actual problem (prayer time lookup)  
✅ **Enhanced UX**: Date selection, autocomplete, and location detection  

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ for the Islamic community and developers learning AI agent development.** 