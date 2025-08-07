const express = require('express');
const axios = require('axios');

const router = express.Router();

/**
 * Custom AI Agent Tool: getPrayerTimes
 * This function acts as a tool that fetches Islamic prayer times based on city, country, and date
 * @param {string} city - The city name
 * @param {string} country - The country name
 * @param {string} date - The date in YYYY-MM-DD format (optional, defaults to today)
 * @returns {Promise<Object>} Prayer times data
 */
async function getPrayerTimes(city, country, date = null) {
  try {
    // Validate input parameters
    if (!city || !country) {
      throw new Error('City and country are required parameters');
    }

    // Build API URL with date parameter if provided
    let apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=2`;
    
    if (date) {
      // Validate date format (YYYY-MM-DD)
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(date)) {
        throw new Error('Invalid date format. Please use YYYY-MM-DD format');
      }
      apiUrl += `&date=${date}`;
    }
    
    const response = await axios.get(apiUrl);
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch prayer times from external API');
    }

    const data = response.data;
    
    // Extract prayer timings from the API response
    const timings = data.data.timings;
    
    // Return formatted prayer times
    return {
      city: city,
      country: country,
      date: data.data.date.readable,
      timings: {
        Fajr: timings.Fajr,
        Dhuhr: timings.Dhuhr,
        Asr: timings.Asr,
        Maghrib: timings.Maghrib,
        Isha: timings.Isha
      }
    };
  } catch (error) {
    console.error('Error in getPrayerTimes:', error.message);
    throw new Error(`Failed to get prayer times: ${error.message}`);
  }
}

// POST endpoint for getting prayer times
router.post('/getPrayerTimes', async (req, res) => {
  try {
    const { city, country, date } = req.body;

    // Validate request body
    if (!city || !country) {
      return res.status(400).json({
        error: 'City and country are required fields'
      });
    }

    // Use the custom AI agent tool to get prayer times
    const prayerTimes = await getPrayerTimes(city, country, date);
    
    res.json(prayerTimes);
  } catch (error) {
    console.error('Error in /getPrayerTimes endpoint:', error.message);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

module.exports = router; 