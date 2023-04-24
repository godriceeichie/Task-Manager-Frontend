import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';


const getCountries = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,limit=10')
    const data = response.data
    return data
}

const result = await getCountries()

const Test = () => {
    
    return (
        <div>
            <select name="" id="">
                {
                    result.map((country, index)=> {
                        
                        return <option key={index} value={country.name.common}>{country.name.common}</option>
                    })
                }
            </select>
        </div>
    );
}

export default Test;
