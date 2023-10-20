// OpenWeatherMap API key
const API_KEY = "9dd9213e8408bfb2060ac6b6b8100fd7";
// Riyadh city
const CITY = "Riyadh";

// Fetch weather data
const fetchWeather = async () => {
    try {
        const data = await getWeatherData();
        populateWeatherWidget(data);
    } catch (error) {
        document.getElementById('weather-content').textContent = "Error fetching weather data.";
    }
};

const getWeatherData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
    return response.json();
};

const populateWeatherWidget = (data) => {
    // Extract relevant data from the API response
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    // Populate the weather widget in the mainPage HTML
    document.getElementById('weather-content').textContent = `${CITY}: ${temperature}°C, ${description}`;
};

// Call the function to fetch and display the weather data on page load
window.onload = fetchWeather;