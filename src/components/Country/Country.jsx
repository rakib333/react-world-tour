import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries}) => {
    
    const {name, population, area, flags} = country;
    const [visited, setVisited] = useState(false);
    const handleVisit = () => {
        setVisited(!visited)
    }

    return (
        <div className="country">
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={() =>handleVisitedCountries(country)}>Mark visited</button>
            <button onClick={handleVisit}>{visited ? "Visited" : "Not visited"}</button>
            {visited ? "I have visited this country" : "I want to visit."}
        </div>
    );
};

export default Country;