import React, {useEffect, useState} from 'react';
import './App.css';
import DisplayAllCountries from './DisplayAllCountries';
import RegionSelector from './RegionSelector';
import SearchBox from './SearchBox';
import DisplayCountryDetails from './DisplayCountryDetails';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from './Themes.js';

const StyledApp = styled.div`
  color: ${props => props.theme.fontColor};
`;

function App () {
  const [theme, setTheme] = useState ('light');
  const [countries, setCountries] = useState ([]);
  const [allCountries, setAllCountries] = useState ([]);
  const [country, setCountry] = useState (false);
  const [details, setDetails] = useState ({});
  const [region, setRegion] = useState ([]);
  const [selectedRegion, setSelectedRegion] = useState (false);

  const themeToggler = () => {
    theme === 'light' ? setTheme ('dark') : setTheme ('light');
  };

  useEffect (() => {
    fetch ('https://restcountries.eu/rest/v2/all')
      .then (res => {
        return res.json ();
      })
      .then (data => {
        setCountries (data);
        setAllCountries (data);
      });
  }, []);

  if (country) {
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <div>
            <div className="App">
              <div class="headerBar">
                <h1>WHERE IN THE WORLD ?</h1>
                <button onClick={() => themeToggler ()} id="themeBtn">
                  Change Theme
                </button>
              </div>
              <div id="countryDet">
                <DisplayCountryDetails
                  details={details}
                  setCountry={setCountry}
                  setDetails={setDetails}
                  allCountries={allCountries}
                  setCountries={setCountries}
                  countries={countries}
                />

              </div>
            </div>
          </div>
        </StyledApp>
      </ThemeProvider>
    );
  } else if (allCountries.length > 0) {
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <div className="App">
            <div class="headerBar">
              <h1>
                WHERE IN THE WORLD ?
                {' '}
              </h1>
              <button onClick={() => themeToggler ()} id="themeBtn">
                Change Theme
              </button>
            </div>
            <div class="serchBox" />
            <div class="selectMenu" />

            <div class="searchBox">
              <SearchBox
                countries={countries}
                setCountries={setCountries}
                allCountries={allCountries}
                selectedRegion={selectedRegion}
                region={region}
              />
              <div>
                <RegionSelector
                  allCountries={allCountries}
                  setCountries={setCountries}
                  countries={countries}
                  setRegion={setRegion}
                  setSelectedRegion={setSelectedRegion}
                />
              </div>
            </div>

            <div class="displayCountries">
              <DisplayAllCountries
                countries={countries}
                setCountries={setCountries}
                allCountries={allCountries}
                setDetails={setDetails}
                setCountry={setCountry}
                setSelectedRegion={setSelectedRegion}
              />
            </div>

          </div>
        </StyledApp>
      </ThemeProvider>
    );
  } else {
    return <div>No match found</div>;
  }
}

export default App;
