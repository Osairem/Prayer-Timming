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

## 📦 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) - comes with Node.js
- **Git** installed on your system
- **Internet connection** (for API calls to Aladhan Prayer Times API)
- **VS Code** or any code editor (optional but recommended)

### Environment Setup
If the project requires environment variables, create `.env` files in both directories:
- `frontend/.env` (if needed)
- `backend/.env` (if needed)

## 📁 Folder Structure

```
Prayer-Timming/
├── frontend/
│   ├── src/
│   │   ├── App.js              # Main React component
│   │   ├── index.js            # React entry point
│   │   └── index.css           # Global styles
│   ├── public/
│   │   └── index.html          # HTML template
│   ├── package.json            # Frontend dependencies
│   └── README.md               # Frontend documentation
├── backend/
│   ├── routes/
│   │   └── prayer.js           # API routes
│   ├── server.js               # Express server
│   ├── package.json            # Backend dependencies
│   └── README.md               # Backend documentation
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## 🛠️ How to Run the Project

Follow these steps to set up and run the project locally:

### Step 1: Clone the Repository
```bash
git clone https://github.com/Osairem/Prayer-Timming.git
cd Prayer-Timming
```

### Step 2: Set Up the Backend

1. **Navigate to the backend directory**
   ```bash
   cd backend
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm run dev
   ```
   
   The backend will start on: **http://localhost:5000**

### Step 3: Set Up the Frontend

1. **Open a new terminal window/tab**

2. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

3. **Install frontend dependencies**
   ```bash
   npm install
   ```

4. **Start the frontend development server**
   ```bash
   npm start
   ```
   
   The frontend will open automatically at: **http://localhost:3000**

### Step 4: Access the Application

- **Frontend**: Open your browser and go to `http://localhost:3000`
- **Backend API**: Available at `http://localhost:5000/api/getPrayerTimes`

### Available Scripts

**Backend Scripts:**
- `npm start` - Runs the server in production mode
- `npm run dev` - Runs the server with nodemon for development

**Frontend Scripts:**
- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner

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