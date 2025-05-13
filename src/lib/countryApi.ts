import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/name/';

export async function getCountryByName(name: string): Promise<CountryData> {
  try {
    // Make the API request
    const response = await axios.get<CountryData[]>(`${BASE_URL}${name}`);
    // Check if data exists and the array is not empty
    if (response.data && response.data.length > 0) {
      return response.data[0]; // Return the first country object
    } else {
      // Handle the case where the country is not found or the API returns an empty array
      throw new Error(`Country not found: ${name}`);
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error(`Error fetching country data for "${name}":`, error);
    // Improve error message for 404 specifically
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error(
        `Country "${name}" not found. Please check the spelling and try again.`
      );
    }
    // Re-throw a generic error for other cases to be handled by the caller
    throw new Error(
      `Failed to fetch data for country: ${name}. Please try again later.`
    );
  }
}
