const Country = ({ country: { name, capital, area, languages, flags } }) => (
  <div>
    <h2>{name.common}</h2>
    <div>capital {capital.join(',')}</div>
    <div>area {area}</div>
    <h4>languages:</h4>
    <ul>
      {Object.values(languages).map((language) => (
        <li key={language}>{language}</li>
      ))}
    </ul>
    <img src={flags.svg} width="150" alt={`${name.common} flag`}></img>
  </div>
);

export default Country;
