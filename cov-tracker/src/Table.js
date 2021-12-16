import React from 'react';
import numeral from "numeral";
import './Table.css';

function Table({ countries }) {
    return <div className="table">
        {countries.map(({country, cases}) => (
            <tr>
                <td>{country}</td>
                <td><srtong>{numeral(cases).format('0,0')}</srtong></td>
            </tr>        
        ))}
        </div>;
}

export default Table
