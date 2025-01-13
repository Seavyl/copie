import React from 'react';

const Card = () => {
const {country} = props;
    return (
        <ul>
            <li className="card">
                <img src="{country.flag}" alt="flag" />
                <div className="data_countainer">
                    <ul>
                        <li>{country.name}</li>
                        <li>{country.capital}</li>
                        <li> pop: {country.population}</li>
                    </ul>
                </div>
            </li>
        </ul>
    );
};

export default Card;