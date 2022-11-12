const CountryFilter = ({ value, handleChange }) => (
  <div>
    find countries <input type="text" value={value} onChange={handleChange} />
  </div>
);

export default CountryFilter;
