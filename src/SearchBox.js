import React, {useState} from 'react';

const SearchBox = props => {

const [input, setInput] = useState ('');
let filtered;

const handleChange = e => {
 e.preventDefault ();
 let key = e.target.value;
  setInput (key);
  if(props.selectedRegion){
    console.log ('The input ', key);
  filtered =props.region.filter (country =>
  country.name.toLowerCase ().includes (key.toLowerCase ()) || country.capital.toLowerCase ().includes (key.toLowerCase ())
  )}
else if(!props.selectedRegion){
filtered = props.allCountries.filter (
  country =>
    country.name.toLowerCase ().includes (key.toLowerCase ()) ||
    country.capital.toLowerCase ().includes (key.toLowerCase ())
);}
console.log(filtered);
props.setCountries(filtered);


};

return <> <input type="text" placeholder='SEARCH HERE ...' id="inputBox" value={input} onChange={handleChange} /> </>
};

 export default SearchBox;
