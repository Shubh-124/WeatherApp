import React from 'react'
import { WiWindy } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { IconContext } from "react-icons";
import { ProgressBar } from 'react-loader-spinner'
import MainData from "./MainData"
import "../index.css"
//icon list--> https://openweathermap.org/img/wn/10d@2x.png

const Result = ({ weatherData, loading }) => {

    return (
        <div className='w-full min-h-full'>
            {
                weatherData.length !== 0 ?
                    (
                        // Loader
                        loading === 0 ? (
                            <div className='flex justify-center m-24 p-24'>
                                <ProgressBar
                                    height="200"
                                    width="200"
                                    ariaLabel="progress-bar-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="progress-bar-wrapper"
                                    borderColor='#F4442E'
                                    barColor='#51E5FF'
                                />

                            </div>) :
                            (loading === 1) ? (
                                // Error Page
                                <div className='md:p-24,m-24 sm: p-16,m-16'>
                                    <h2 className='flex justify-center font-bold md:text-4xl md:p-4,m-4  sm:text-xl,p-2,m-2'>Error 404:City Not Found!</h2>
                                    <div className='flex justify-center'>
                                        <img src="./images/download.png" width="250px" alt="Error" />
                                    </div>


                                    <h2 className='m-2 text-white flex justify-center font-bold text-4xl'>Enter Correct City</h2>
                                </div>) :

                                (
                                    // Features 
                                    <div>
                                        <MainData weatherData={weatherData} />
                                        <div className='grid md:grid-cols-3 sm:grid-cols-1 sm:gap-2 sm:p-2 gap-6 rounded-md p-4 m-6 shadow-md'>
                                            <div className='hover:scale-[1.1] duration-[600ms] p-4 border rounded-md shadow-xl shadow-white'>
                                                <IconContext.Provider value={{ className: "style-icons" }}>
                                                    <WiHumidity color="white" />
                                                </IconContext.Provider>
                                                <h2 className='text-2xl  text-white flex justify-center'>{weatherData.main.humidity}%</h2>
                                                <h3 className='flex text-white justify-center'>Humidity</h3>
                                            </div>
                                            <div className='hover:scale-[1.1] duration-[600ms] p-4 border rounded-md shadow-xl shadow-white'>
                                                <IconContext.Provider value={{ className: "style-icons" }}>
                                                    <WiWindy color="white" />
                                                </IconContext.Provider>
                                                <h2 className='text-2xl text-white flex justify-center'>{weatherData.wind.speed} km/h</h2>
                                                <h3 className='flex text-white justify-center'>Wind Speed</h3>
                                            </div>
                                            <div className='hover:scale-[1.1] duration-[600ms] p-4 border rounded-md shadow-xl shadow-white'>
                                                <IconContext.Provider value={{ className: "style-icons" }}>
                                                    <MdVisibility color="white" />
                                                </IconContext.Provider>
                                                <h2 className='text-2xl text-white flex justify-center'> {weatherData.visibility / 1000}km</h2>
                                                <h3 className='flex text-white justify-center'>Visibility</h3>
                                            </div>
                                        </div>
                                    </div>)) :
                    <>
                        <div className="text-center md:font-extrabold md:p-24 text-white hover:text-transparent/30 duration-[600ms] md:text-8xl">
                            Weather App
                        </div>
                    </>
            }
        </div >
    )
}

export default Result