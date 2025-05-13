import Loader from './Loader';

function CountryData({ loadingCountryData, countryData }: CountryDataProps) {
  if (loadingCountryData)
    return (
      <div className="mx-auto flex min-h-64 max-w-lg items-center justify-center space-y-6 rounded-b-lg bg-white p-8 shadow-lg">
        <Loader />
      </div>
    );

  return (
    <div className="mx-auto flex min-h-64 max-w-lg flex-col items-center justify-center space-y-6 rounded-b-lg bg-white p-8 shadow-lg">
      {!countryData && <p>start by searching a country</p>}
      {countryData && (
        <>
          <h1 className="text-3xl font-bold text-red-500">
            {countryData.name.official}
          </h1>
          <img
            src={countryData.flags.svg}
            alt={countryData.name.common}
            className="w-40 rounded-md border border-gray-200"
          />
          <div className="w-full text-left">
            <p>
              <span className="font-bold">Region: </span>
              {countryData.region}
            </p>
            <p>
              <span className="font-bold">Capital: </span>
              {countryData.capital[0]}
            </p>
            <p>
              <span className="font-bold">Population: </span>
              {countryData.population} people
            </p>
            <p>
              <span className="font-bold">Time Zone: </span>
              {countryData.timezones[0]}
            </p>
            <p>
              <span className="font-bold">Currency: </span>
              {Object.entries(countryData.currencies).map(
                ([code, currency]) => (
                  <span key={code}>
                    {currency.name} ({currency.symbol})
                  </span>
                )
              )}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default CountryData;
