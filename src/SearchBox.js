import React, {useState} from 'react';

const SearchBox = props => {

const [input, setInput] = useState ('');
let filtered;

const handleChange = e => {
 e.preventDefault ();
  setInput (e.target.value);
  if(props.selectedRegion)
  filtered =props.region.filter (country =>
  country.name.toLowerCase ().includes (input.toLowerCase ()) || country.capital.toLowerCase ().includes (input.toLowerCase ())
  );
else if(!props.selectedRegion)
filtered = props.allCountries.filter (
  country =>
    country.name.toLowerCase ().includes (input.toLowerCase ()) ||
    country.capital.toLowerCase ().includes (input.toLowerCase ())
);

props.setCountries(filtered);


};

return <> <input type="text" placeholder='SEARCH HERE ...' id="inputBox" value={input} onChange={handleChange} /> </>
};

 export default SearchBox;
