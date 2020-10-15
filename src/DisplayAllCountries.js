import React from 'react';

const DisplayAllCountries = props => {
  const displayCountry = event => {
    props.allCountries.forEach (country => {
      if (country.name === event.target.id) props.setDetails (country);
    });

    props.setCountry (true);
  };

  return props.countries.map (item => {
    return (
      <div id={item.name} class="country" onClick={displayCountry}>
        <img class="imgC" src={item.flag} alt="Country Flag" id={item.name} />
        <h3 id={item.name}>{item.name.toUpperCase ()}</h3>
        <p id={item.name}>population: {item.population}</p>
        <p id={item.name}>Region: {item.region}</p>
        <p id={item.name}>Capital: {item.capital}</p>

      </div>
    );
  });
};

export default DisplayAllCountries;
