import React from 'react'
//data not correct,all cities weather not availabale
//on backspacing remove all present countries
//on clicking,search the weather of the country
const Dropdown = ({ results, eventChange, setResults }) => {
    const handleClick = (data) => {
        console.log(data)
        eventChange(data);
        setResults([]);
    }
    return (
        <div>
            {
                results.map((result, id) => {
                    return <div className='p-2 m-2 hover:text-xl text-white' onClick={() => handleClick(result.city)} key={id}>{result.city}</div>
                }).slice(0, 5)
            }
        </div>
    )
}

export default Dropdown