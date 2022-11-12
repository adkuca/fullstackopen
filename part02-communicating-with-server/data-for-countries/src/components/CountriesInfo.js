import Country from './Country';
import SimpleCountryList from './SimpleCountryList';

const CountriesInfo = ({ countries }) => {
  let countriesInfo = <div>No matches.</div>;
  if (countries.length === 0) countriesInfo = <div>No matches.</div>;
  else if (countries.length === 1) countriesInfo = <Country country={countries[0]} />;
  else if (countries.length <= 10) countriesInfo = <SimpleCountryList countries={countries} />;
  else if (countries.length > 10)
    countriesInfo = <div>Too many matches, specify another filter</div>;

  return <div>{countriesInfo}</div>;
};

export default CountriesInfo;
