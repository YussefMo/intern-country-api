import { useGetCountryByName } from './hooks/useGetCountryByName';

function App() {
  const { loadingCountryData, countryData } = useGetCountryByName('egypt');

  return <div>App</div>;
}

export default App;
