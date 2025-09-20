// src/weatherService.ts
import axios from "axios";

export async function fetchWeather(city: string) {
  const res = await axios.get(`/weather/${city}`);
  return res.data;
}

export async function fetchWeatherWithRetry(city: string) {
  try {
    return await fetchWeather(city);
  } catch {
    // retry once
    try {
      return await fetchWeather(city);
    } catch (error) {
      throw new Error("Weather fetch failed after retry");
    }
  }
}
