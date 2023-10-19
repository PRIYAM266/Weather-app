import { useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { getWeatherByCity, getWeatherByLocation } from '../redux/actions';

const Navbar = () => {

    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    const toast = useToast();

    const handleChange = (event) => {
        event.preventDefault();
        dispatch(getWeatherByCity(city, toast));
    }

    const handleLocationData = () => {
        dispatch(getWeatherByLocation(toast));
    }

    return (
        <div className='flex flex-wrap min-h-fit bg-dark-charcoal justify-center gap-3'>
            <form
                className="p-2.5"
                onSubmit={handleChange}>
                <input
                    value={city}
                    type="text"
                    placeholder='City'
                    onChange={(e) => setCity(e.target.value)}
                    className="bg-white rounded-l-xl p-2.5 pl-3"
                />
                <button
                    type="submit"
                    className="hover:bg-caribbean-green bg-dark-purple text-white rounded-r-xl p-2.5 pl-3 font-semibold"
                >
                    Search
                </button>
            </form>

            <div className="p-2.5">

                <button
                    type="button"
                    onClick={handleLocationData}
                    className="hover:bg-caribbean-green bg-dark-purple text-white rounded-xl p-2.5 pl-3 font-semibold"
                >
                    Your Location Weather
                </button>

            </div>
        </div>
    )
}

export default Navbar;
