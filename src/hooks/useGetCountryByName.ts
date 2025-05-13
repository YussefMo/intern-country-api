import { useQuery } from '@tanstack/react-query';
import { getCountryByName } from '../lib/countryApi';

export function useGetCountryByName(name?: string) {
  const { isLoading: loadingCountryData, data: countryData } =
    useQuery<CountryData | undefined>({
      queryFn: () => getCountryByName(name!),
      queryKey: ['country', name],
      enabled: !!name
    });

  return { loadingCountryData, countryData };
}
