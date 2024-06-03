import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  const handleVisitedCountries = country => {
    console.log('add to visited')
    let newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry)
  }

  

  return (
    <div className="container">
      <h1 style={{textAlign: 'center'}}>React world tour: {countries.length} countries</h1>
      <div>
        <h4>Visited countries</h4>
        {
            visitedCountries.map(newCountry => <li key={newCountry.cca3}>{newCountry.name.common}</li>)
        }
      </div>

      <div className="countries-container">
        {
          countries.map(country => <Country 
            key={country.cca3} 
            handleVisitedCountries={handleVisitedCountries}            
            country={country}></Country>)
        }
      </div>

    </div>
  )
};

export default Countries;