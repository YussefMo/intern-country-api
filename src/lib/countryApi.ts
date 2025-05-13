import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://restcountries.com/v3.1/name/';

export async function getCountryByName(
  name: string
): Promise<CountryData | undefined> {
  try {
    // Make the API request
    const response = await axios.get<CountryData[]>(`${BASE_URL}${name}`);
    // Check if data exists and the array is not empty
    if (response.data && response.data.length > 0) {
      toast.success(`Country found: ${name}`)
      return response.data[0]; // Return the first country object
    } else {
      // Handle the case where the country is not found or the API returns an empty array
      toast.error(`Country not found: ${name}`);
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error(`Error fetching country data for "${name}":` + error);
    // Improve error message for 404 specifically
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      toast.error(
        `Country "${name}" not found. Please check the spelling and try again.`
      );
    }
    // Re-throw a generic error for other cases to be handled by the caller
    console.error(
      `Failed to fetch data for country: ${name}. Please try again later.`
    );
  }
}
