import { getFromCache, setInCache } from './apiCache';

const API_URL = 'https://dummy.restapiexample.com/api/v1/employees';

export async function fetchEmployeeData() {
  const cacheKey = API_URL; // Use the URL as the cache key

  const cachedData = getFromCache(cacheKey);

  if (cachedData) {
    console.log('Data retrieved from cache:', cachedData);
    return cachedData;
  }

  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      const data = await response.json();
      setInCache(cacheKey, data); // Cache the data
      console.log('Data fetched from the API and cached:', data);
      return data;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    throw error;
  }
}
