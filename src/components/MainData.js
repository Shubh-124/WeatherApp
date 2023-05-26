import React from 'react'
import Clock from "react-live-clock"

const dateBuilder = (d) => {
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
};
function MainData({ weatherData }) {
    return (
        <div className=' md:w-full p-2 m-2 '>
            <h1 className='md:text-5xl text-center text-transparent/50 bg-gradient-to-r from-white hover:text-black font-bold sm:text-2xl'>{weatherData.name},{weatherData.sys.country}</h1>
            <h2 className='animate-pulse flex justify-center'>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} alt="Icon"></img>
            </h2>
            <h2 className='flex justify-center'>
                <h1 className='text-8xl text-white contrast-75 text-center font-bold p-2'>
                    {Math.round(weatherData.main.temp)} °C
                </h1>
            </h2>
            <div className="dmy">
                <div id="txt"></div>
                <div className="flex justify-center">
                    <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                </div>
                <div className=" flex justify-center current-date">{dateBuilder(new Date())}</div>
            </div>
            <div className='p-4 rounded-md shadow-md flex justify-center'>
                <h2 className='text-2xl text-white capitalize'>{weatherData.weather[0].description}</h2>
            </div>
        </div>
    )
}

export default MainData;