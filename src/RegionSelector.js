import React from 'react';

const RegionSelector = props => {
  let regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'Polar'];
  let Africa = [];
  let America = [];
  let Asia = [];
  let Europe = [];
  let Oceania = [];
  let Polar = [];

  props.allCountries.map (item => {
    if (item.region === 'Africa') {
      Africa.push (item);
    } else if (item.region === 'Americas') {
      America.push (item);
    } else if (item.region === 'Asia') {
      Asia.push (item);
    } else if (item.region === 'Europe') {
      Europe.push (item);
    } else if (item.region === 'Oceania') {
      Oceania.push (item);
    } else if (item.region === 'Polar') {
      Polar.push (item);
    }
    return [];
  });

  const changeHandler = event => {
    let key = event.target.value;
    switch (key) {
      case 'Africa':
        props.setRegion (Africa);
        props.setCountries (Africa);
        props.setSelectedRegion (true);
        break;
      case 'America':
        props.setRegion (America);
        props.setCountries (America);
        props.setSelectedRegion (true);
        break;
      case 'Asia':
        props.setRegion (Asia);
        props.setCountries (Asia);
        props.setSelectedRegion (true);
        break;
      case 'Europe':
        props.setRegion (Europe);
        props.setCountries (Europe);
        props.setSelectedRegion (true);
        break;
      case 'Oceania':
        props.setRegion (Oceania);
        props.setCountries (Oceania);
        props.setSelectedRegion (true);
        break;
      case 'Polar':
        props.setRegion (Polar);
        props.setCountries (Polar);
        props.setSelectedRegion (true);
        break;
      default:
        props.setCountries (props.allCountries);
        props.setSelectedRegion (false);
    }
  };

  return (
    <select id="regionSelector" onChange={changeHandler}>
      <option value="default">FILTER BY REGION</option>
      {regions.map (item => {
        return <option>{item}</option>;
      })}
    </select>
  );
};
export default RegionSelector;
