const express = require('express');
const cors = require('cors');
const prayerRoutes = require('./routes/prayer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', prayerRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Islamic Prayer Times API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 