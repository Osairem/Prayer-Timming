import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    city: '',
    country: '',
    date: new Date().toISOString().split('T')[0] // Default to today
  });
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Autocomplete states
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [countrySuggestions, setCountrySuggestions] = useState([]);
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);
  const [showCountrySuggestions, setShowCountrySuggestions] = useState(false);
  
  // Enhanced features states
  const [userLocation, setUserLocation] = useState(null);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  
  // Refs for handling clicks outside suggestions
  const cityInputRef = useRef(null);
  const countryInputRef = useRef(null);
  const citySuggestionsRef = useRef(null);
  const countrySuggestionsRef = useRef(null);

  // Sample data for autocomplete (you can replace with API calls)
  const popularCities = [
    'Lahore', 'Karachi', 'Islamabad', 'Faisalabad', 'Rawalpindi',
    'Mecca', 'Medina', 'Riyadh', 'Jeddah', 'Dammam',
    'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman',
    'Istanbul', 'Ankara', 'Izmir', 'Bursa',
    'Cairo', 'Alexandria', 'Giza', 'Sharm El Sheikh',
    'Jakarta', 'Surabaya', 'Bandung', 'Medan',
    'Kuala Lumpur', 'George Town', 'Ipoh', 'Shah Alam',
    'Singapore', 'Manila', 'Bangkok', 'Ho Chi Minh City',
    'London', 'Birmingham', 'Manchester', 'Leeds',
    'New York', 'Los Angeles', 'Chicago', 'Houston',
    'Toronto', 'Vancouver', 'Montreal', 'Calgary'
  ];

  const popularCountries = [
    'Pakistan', 'Saudi Arabia', 'United Arab Emirates', 'Turkey',
    'Egypt', 'Indonesia', 'Malaysia', 'Singapore',
    'Philippines', 'Thailand', 'Vietnam', 'United Kingdom',
    'United States', 'Canada', 'Australia', 'Germany',
    'France', 'Italy', 'Spain', 'Netherlands',
    'Belgium', 'Switzerland', 'Austria', 'Sweden',
    'Norway', 'Denmark', 'Finland', 'Poland',
    'Czech Republic', 'Hungary', 'Romania', 'Bulgaria',
    'Greece', 'Portugal', 'Ireland', 'New Zealand',
    'South Africa', 'Nigeria', 'Kenya', 'Morocco',
    'Algeria', 'Tunisia', 'Libya', 'Sudan',
    'Iran', 'Iraq', 'Syria', 'Lebanon',
    'Jordan', 'Palestine', 'Yemen', 'Oman',
    'Qatar', 'Bahrain', 'Kuwait', 'Iraq'
  ];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Handle clicks outside suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (citySuggestionsRef.current && !citySuggestionsRef.current.contains(event.target) && 
          cityInputRef.current && !cityInputRef.current.contains(event.target)) {
        setShowCitySuggestions(false);
      }
      if (countrySuggestionsRef.current && !countrySuggestionsRef.current.contains(event.target) && 
          countryInputRef.current && !countryInputRef.current.contains(event.target)) {
        setShowCountrySuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Detect user location
  const detectUserLocation = async () => {
    setIsDetectingLocation(true);
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000
        });
      });

      const { latitude, longitude } = position.coords;
      
      // Use reverse geocoding to get city and country
      const response = await axios.get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );

      if (response.data.city && response.data.countryName) {
        setFormData(prev => ({
          ...prev,
          city: response.data.city,
          country: response.data.countryName
        }));
        setUserLocation({ city: response.data.city, country: response.data.countryName });
      }
    } catch (error) {
      console.error('Location detection failed:', error);
      setError('Could not detect your location. Please enter manually.');
    } finally {
      setIsDetectingLocation(false);
    }
  };

  // Save search to recent searches
  const saveToRecentSearches = (city, country) => {
    const search = { city, country, timestamp: new Date().toISOString() };
    const updated = [search, ...recentSearches.filter(s => 
      !(s.city === city && s.country === country)
    )].slice(0, 5); // Keep only 5 most recent
    
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  // Load recent search
  const loadRecentSearch = (search) => {
    setFormData(prev => ({
      ...prev,
      city: search.city,
      country: search.country
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Handle autocomplete suggestions
    if (name === 'city') {
      const filtered = popularCities.filter(city => 
        city.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setCitySuggestions(filtered);
      setShowCitySuggestions(value.length > 0 && filtered.length > 0);
    } else if (name === 'country') {
      const filtered = popularCountries.filter(country => 
        country.toLowerCase().includes(country.toLowerCase())
      ).slice(0, 5);
      setCountrySuggestions(filtered);
      setShowCountrySuggestions(value.length > 0 && filtered.length > 0);
    }
  };

  const handleSuggestionClick = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (field === 'city') {
      setShowCitySuggestions(false);
    } else {
      setShowCountrySuggestions(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.city.trim() || !formData.country.trim() || !formData.date) {
      setError('Please enter city, country, and select a date');
      return;
    }

    setLoading(true);
    setError('');
    setPrayerTimes(null);

    try {
      const response = await axios.post('/api/getPrayerTimes', {
        city: formData.city.trim(),
        country: formData.country.trim(),
        date: formData.date
      });

      setPrayerTimes(response.data);
      
      // Save to recent searches
      saveToRecentSearches(formData.city.trim(), formData.country.trim());
    } catch (err) {
      console.error('Error fetching prayer times:', err);
      setError(err.response?.data?.error || err.response?.data?.message || 'Failed to fetch prayer times. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="app-header">
        <h1 className="app-title">🕌 Islamic Prayer Times</h1>
        <p className="app-subtitle">Get accurate prayer times for any city around the world</p>
      </div>

      {/* Location Detection Button */}
      <div className="location-section">
        <button 
          onClick={detectUserLocation}
          disabled={isDetectingLocation}
          className="location-btn"
        >
          {isDetectingLocation ? '📍 Detecting...' : '📍 Use My Location'}
        </button>
        {userLocation && (
          <div className="detected-location">
            📍 Detected: {userLocation.city}, {userLocation.country}
          </div>
        )}
      </div>

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className="recent-searches">
          <h3>Recent Searches</h3>
          <div className="recent-list">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => loadRecentSearch(search)}
                className="recent-item"
              >
                {search.city}, {search.country}
              </button>
            ))}
          </div>
        </div>
      )}

      <form className="prayer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <div className="input-container">
            <input
              ref={cityInputRef}
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter city name (e.g., Lahore)"
              required
            />
            {showCitySuggestions && (
              <div ref={citySuggestionsRef} className="suggestions">
                {citySuggestions.map((city, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick('city', city)}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <div className="input-container">
            <input
              ref={countryInputRef}
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Enter country name (e.g., Pakistan)"
              required
            />
            {showCountrySuggestions && (
              <div ref={countrySuggestionsRef} className="suggestions">
                {countrySuggestions.map((country, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick('country', country)}
                  >
                    {country}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={loading}
        >
          {loading ? 'Fetching Prayer Times...' : 'Get Prayer Times'}
        </button>
      </form>

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      {loading && (
        <div className="loading">
          Loading prayer times...
        </div>
      )}

      {prayerTimes && !loading && (
        <div className="prayer-times">
          <div className="prayer-header">
            <h2 className="prayer-location">
              {prayerTimes.city}, {prayerTimes.country}
            </h2>
            <p className="prayer-date">{prayerTimes.date}</p>
          </div>

          <div className="prayer-grid">
            <div className="prayer-card">
              <div className="prayer-name">Fajr</div>
              <div className="prayer-time">{prayerTimes.timings.Fajr}</div>
            </div>
            <div className="prayer-card">
              <div className="prayer-name">Dhuhr</div>
              <div className="prayer-time">{prayerTimes.timings.Dhuhr}</div>
            </div>
            <div className="prayer-card">
              <div className="prayer-name">Asr</div>
              <div className="prayer-time">{prayerTimes.timings.Asr}</div>
            </div>
            <div className="prayer-card">
              <div className="prayer-name">Maghrib</div>
              <div className="prayer-time">{prayerTimes.timings.Maghrib}</div>
            </div>
            <div className="prayer-card">
              <div className="prayer-name">Isha</div>
              <div className="prayer-time">{prayerTimes.timings.Isha}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 