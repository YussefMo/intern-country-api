interface Name {
  common: string;
  official: string;
  nativeName: Record<string, NativeNameDetail>;
}

interface NativeNameDetail {
  official: string;
  common: string;
}

interface CurrencyDetail {
  symbol: string;
  name: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface DemonymDetail {
  f: string;
  m: string;
}

interface TranslationDetail {
  official: string;
  common: string;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface CapitalInfo {
  latlng: [number, number];
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CountryData {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, CurrencyDetail>;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  latlng: [number, number];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Record<string, DemonymDetail>;
  cca3: string;
  translations: Record<string, TranslationDetail>;
  flag: string;
  maps: Maps;
  population: number;
  gini: Record<string, number>;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

interface CountryDataProps {
  loadingCountryData: boolean;
  countryData: CountryData | undefined;
}
