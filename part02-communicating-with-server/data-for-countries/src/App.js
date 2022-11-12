import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryFilter from './components/CountryFilter';
import CountriesInfo from './components/CountriesInfo';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(({ data }) => {
      setCountries(data);
    });
  }, []);

  const handleFilterChange = (event) => setCountryFilter(event.target.value);

  const filteredCountries = () =>
    countries.filter(({ name }) => new RegExp(countryFilter, 'i').test(name.common));

  return (
    <div>
      <CountryFilter value={countryFilter} handleChange={handleFilterChange} />
      {!!countryFilter && <CountriesInfo countries={filteredCountries()} />}
    </div>
  );
};

export default App;
