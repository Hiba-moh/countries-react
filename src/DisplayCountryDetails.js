import React from 'react';

const DisplayCountryDetails = props => {
  props.setCountry (true);

const handleBackClick = ()=>{
props.setCountry(false);
props.setCountries (props.allCountries);

}


const handleBorderClick = (event)=>{
let key= event.target.id;
props.allCountries.forEach((country=>{
  if(key===country.alpha3Code)
  key=country;
}))
props.setDetails(key);
console.log(key)
}

  return (
    <div class='countryBtn'>
    <button id="back" onClick = {handleBackClick}>Back</button>
    
    <div className="oneCountry">
     
      <div>
        <img id='imgD' src={props.details.flag} alt="flag" />
      </div>
      <div className="capital">
      <h1>{props.details.name.toUpperCase()}</h1>
        <span><b>Native name:</b> {props.details.nativeName}</span>
        <span><b>population:</b> {props.details.population}</span>
        <span><b>Region:</b> {props.details.region}</span>
        <span><b>Subregion:</b> {props.details.subregion}</span>
        <span><b>Capital: </b>{props.details.capital}</span>

         <div id='borders'>
      <span><b>Borders:</b>
        {props.details.borders.map (item => {
          return <button class='borderBtn' onClick={handleBorderClick} id={item}>   {item}  </button>
        })}
        </span>
      </div>
      </div>


      <div className="capital" id='domain'>
        <span><b>Top Level Domain:</b> {props.details.topLevelDomain}</span>


        <span><b>currencies:</b>
        {props.details.currencies.map (item => {
          return (
            <>
               {item.name}
           </>
          );
        })}
 </span>

        <span><b>Languages:</b>
        {props.details.languages.map (item => {
          return <> {item.name}</>
        })}
      </span>
      </div>    

</div>
    </div>
  );
};

export default DisplayCountryDetails;
