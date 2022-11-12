const SimpleCountryList = ({ countries }) =>
  countries.map(({ name }) => <div key={name.common}>{name.common}</div>);

export default SimpleCountryList;
