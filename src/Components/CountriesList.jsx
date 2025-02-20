import React from 'react';
import countriesJson from '../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div>
      {countriesJson.map((country) => {
        return (
          <div key={country.cca3}>
            <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
