import React, { useState, useRef } from 'react'
import { FaSearch } from 'react-icons/fa';

export default function Search(props) {
    const searchInp = useRef();
    const handleEnter = (event) => {
        if (event.keyCode === 13) {
            props.setResults([]);
            return props.searchWeather();
        }

    };
    const handleChange = () => {
        props.eventChange(searchInp.current.value)
        fetchData(props.val)
    }
    const fetchData = (value) => {
        fetch("https://countriesnow.space/api/v0.1/countries/population/cities").then((response) => response.json()).then((json) => {
            console.log(json);
            const results = json.data.filter((user) => {
                return value && user && user.city && user.city.toLowerCase().includes(value);
            })
            props.setResults(results);
        });
    }
    const onSearch = (searchTerm) => {
        console.log(searchTerm);
        props.eventChange(searchTerm);
        console.log(props.val)
    };
    return (
        <div className='relative'>

            <input className='w-full pl-10 pr-4 py-2 rounded-lg bg-transparent border text-white shadow-md shadow-white hover:text-xl duration-[600ms]' placeholder="Find your city..." value={props.val} onChange={handleChange} onKeyDown={handleEnter} ref={searchInp} />
            <div>
                <button className='absolute top-0 left-0 mt-3 ml-3' type="submit" onClick={props.searchWeather}>
                    <FaSearch className='text-gray-500' />
                </button>
            </div>
        </div>
    )
}