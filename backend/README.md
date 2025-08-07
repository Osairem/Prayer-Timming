# 🔧 Islamic Prayer Times - Backend

Node.js + Express backend server for the Islamic Prayer Times AI Agent. Provides RESTful API endpoints for fetching prayer times using the Aladhan API.

## 🚀 Features

- **RESTful API**: Clean, well-documented endpoints
- **AI Agent Tool**: Custom `getPrayerTimes()` function
- **External API Integration**: Connects to Aladhan Prayer Times API
- **Error Handling**: Comprehensive error handling and validation
- **CORS Support**: Cross-origin resource sharing enabled
- **Date Support**: Flexible date parameter for historical/future prayer times
- **Input Validation**: Server-side validation for all inputs

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Server will start on**
   `http://localhost:5000`

### Available Scripts

- `npm start` - Runs the server in production mode
- `npm run dev` - Runs the server with nodemon for development
- `npm test` - Runs tests (if configured)

## 📁 Project Structure

```
backend/
├── routes/
│   └── prayer.js          # Prayer times API routes
├── package.json           # Dependencies and scripts
├── server.js              # Main server file
└── README.md             # This file
```

## 🔧 API Endpoints

### POST `/api/getPrayerTimes`

Fetches prayer times for a specific city, country, and date.

#### Request Body
```json
{
  "city": "Lahore",
  "country": "Pakistan",
  "date": "2024-12-15"
}
```

#### Parameters
- `city` (required): City name (string)
- `country` (required): Country name (string)
- `date` (optional): Date in YYYY-MM-DD format (defaults to today)

#### Response
```json
{
  "city": "Lahore",
  "country": "Pakistan",
  "date": "15 Dec 2024",
  "timings": {
    "Fajr": "04:20",
    "Dhuhr": "12:10",
    "Asr": "15:45",
    "Maghrib": "18:55",
    "Isha": "20:15"
  }
}
```

#### Error Responses
```json
{
  "error": "City and country are required fields"
}
```

```json
{
  "error": "Internal server error",
  "message": "Failed to get prayer times: Invalid date format"
}
```

## 🔧 Technical Implementation

### AI Agent Tool: `getPrayerTimes(city, country, date)`

The core function that acts as an intelligent tool:

```javascript
async function getPrayerTimes(city, country, date = null) {
  // 1. Validate input parameters
  // 2. Build API URL with date parameter
  // 3. Make request to Aladhan API
  // 4. Process and format response
  // 5. Return structured data
}
```

### Key Features

#### Input Validation
- **Required Fields**: City and country are mandatory
- **Date Format**: Validates YYYY-MM-DD format
- **Data Sanitization**: Trims whitespace and encodes parameters

#### External API Integration
- **Aladhan API**: `https://api.aladhan.com/v1/timingsByCity`
- **Calculation Method**: Method 2 (University of Islamic Sciences, Karachi)
- **Error Handling**: Graceful handling of API failures

#### Response Processing
- **Data Extraction**: Extracts relevant prayer timings
- **Formatting**: Consistent time format
- **Error Mapping**: User-friendly error messages

### Route Handler

```javascript
router.post('/getPrayerTimes', async (req, res) => {
  try {
    const { city, country, date } = req.body;
    
    // Validate request body
    if (!city || !country) {
      return res.status(400).json({
        error: 'City and country are required fields'
      });
    }

    // Use AI agent tool
    const prayerTimes = await getPrayerTimes(city, country, date);
    
    res.json(prayerTimes);
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});
```

## 🛡️ Error Handling

### Validation Errors
- **400 Bad Request**: Missing required fields
- **400 Bad Request**: Invalid date format
- **500 Internal Server Error**: External API failures

### Error Categories
1. **Input Validation**: Missing or invalid parameters
2. **External API**: Aladhan API connection issues
3. **Data Processing**: Response parsing errors
4. **Network**: Connection timeouts and failures

## 🔧 Dependencies

### Core Dependencies
- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **axios**: HTTP client for external API calls

### Development Dependencies
- **nodemon**: Auto-restart server during development

## 🚀 Deployment

### Production Setup
```bash
npm start
```

### Environment Variables
Create a `.env` file for production:
```env
PORT=5000
NODE_ENV=production
```

### Deployment Options
- **Heroku**: Easy deployment with Procfile
- **Railway**: Simple Node.js hosting
- **Vercel**: Serverless deployment
- **AWS EC2**: Full control deployment
- **Docker**: Containerized deployment

## 🔍 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Check what's using port 5000
   lsof -i :5000
   # Kill the process
   kill -9 <PID>
   ```

2. **CORS Errors**
   - Ensure CORS middleware is properly configured
   - Check frontend proxy settings

3. **External API Failures**
   - Verify internet connection
   - Check Aladhan API status
   - Review API rate limits

4. **Date Format Issues**
   - Ensure date is in YYYY-MM-DD format
   - Validate date is not in the future (if required)

### Debug Mode
```bash
DEBUG=* npm run dev
```

## 📊 API Monitoring

### Health Check
```bash
curl http://localhost:5000/api/getPrayerTimes
```

### Response Time Monitoring
```javascript
// Add to route handler
const startTime = Date.now();
// ... API call ...
const responseTime = Date.now() - startTime;
console.log(`Response time: ${responseTime}ms`);
```

## 🔒 Security Considerations

### Input Sanitization
- URL encoding of parameters
- SQL injection prevention (if using database)
- XSS protection through proper response headers

### Rate Limiting
Consider implementing rate limiting for production:
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

## 📚 External APIs

### Aladhan Prayer Times API
- **Base URL**: `https://api.aladhan.com/v1/timingsByCity`
- **Method**: GET
- **Parameters**: city, country, method, date
- **Rate Limit**: Free tier available
- **Documentation**: https://aladhan.com/prayer-times-api

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

**Built with Node.js and Express for the Islamic community.** 