// WeatherWidget.jsx
import React, { useState, useEffect } from 'react';
import './weather.css'; // Import the CSS file

// Replace with your actual API key from OpenWeatherMap
const API_KEY = '2b7bb2ce05077dce3e315f372422f08b';

// Helper function to map weather conditions to workout plans
const getWorkoutPlan = (condition) => {
  const plans = {
    Clear: 'Great day for a run or outdoor yoga!',
    Clouds: 'Perfect for cycling or a brisk walk.',
    Rain: 'Consider indoor workouts like HIIT or yoga.',
    Drizzle: 'Indoor activities such as strength training.',
    Thunderstorm: 'Stay indoors and try a home workout.',
    Snow: 'Indoor exercises or light stretching.',
    Mist: 'Light indoor activities like pilates.',
  };
  return plans[condition] || 'Have a nice day!';
};

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false); // Pop-up visibility

  useEffect(() => {
    // Function to fetch weather data
    const fetchWeather = async (lat, lon, units) => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
        );

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('Invalid API key. Please check your API key.');
          } else if (response.status === 404) {
            throw new Error('Location not found.');
          } else {
            throw new Error('An error occurred while fetching weather data.');
          }
        }

        const data = await response.json();
        setWeather(data);
        setError('');
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    };

    // Function to show the pop-up
    const showPopup = () => {
      setIsVisible(true);
      // Auto-hide after 30 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 30000);
    };

    // Fetch weather data based on user's geolocation
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude, unit);
        showPopup(); // Show pop-up on page load
      },
      () => {
        setError('Unable to retrieve your location.');
        setLoading(false);
      }
    );

    // Set interval to show pop-up every 30 seconds
    const interval = setInterval(() => {
      showPopup();
    }, 200000); // 200000ms = 2 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [unit]);

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  const renderAnimatedBackground = (condition) => {
    switch (condition) {
      case 'Clear':
        return <div className="sun animated-background"></div>;
      case 'Clouds':
        return (
          <div className="animated-background">
            <div className="cloud"></div>
            <div className="cloud" style={{ top: '60px', animationDelay: '5s' }}></div>
          </div>
        );
      case 'Rain':
      case 'Drizzle':
        return (
          <div className="animated-background">
            <div className="cloud"></div>
            {[...Array(20)].map((_, index) => (
              <div
                key={index}
                className="rain"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>
        );
      case 'Thunderstorm':
        return (
          <div className="animated-background">
            <div className="cloud"></div>
            {[...Array(20)].map((_, index) => (
              <div
                key={index}
                className="rain"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>
        );
      case 'Snow':
        return (
          <div className="animated-background">
            {[...Array(30)].map((_, index) => (
              <div
                key={index}
                className="snowflake"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>
        );
      case 'Mist':
        return <div className="mist animated-background"></div>;
      default:
        return <div className="animated-background"></div>;
    }
  };

  return (
    <>
      {isVisible && (
        <div className={`weather-popup ${isVisible ? 'visible' : ''}`}>
          {/* Close Button */}
          <button className="close-button" onClick={closePopup}>
            &times;
          </button>

          {/* Animated Background */}
          {weather && renderAnimatedBackground(weather.weather[0].main)}

          {/* Weather Information */}
          <div className="weather-info">
            {loading ? (
              <p>Loading weather data...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <>
                <h3 className="city">{weather.name}</h3>
                <div className="temp">
                  {Math.round(weather.main.temp)}
                  <span className="unit">{unit === 'metric' ? '°C' : '°F'}</span>
                </div>
                <div className="condition">
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].main}
                    className="icon"
                  />
                  <span>{weather.weather[0].main}</span>
                </div>
                <button onClick={toggleUnit} className="button">
                  Switch to {unit === 'metric' ? '°F' : '°C'}
                </button>
                <div className="workout">
                  <h4>Workout Suggestion:</h4>
                  <p>{getWorkoutPlan(weather.weather[0].main)}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// No inline styles needed as we're using the CSS file
export default WeatherWidget;
