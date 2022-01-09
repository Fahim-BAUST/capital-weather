import { Avatar, Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



interface WeatherTypes {
    temperature: string,
    weather_icons: string[],
    wind_speed: number,
    precip: number
}

const Capitalweather = () => {
    const { capital } = useParams<{ capital: string }>()
    const [loading, setLoading] = useState<boolean>(false);
    const [country, setCountry] = useState<WeatherTypes>()

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            fetch(`http://api.weatherstack.com/current?access_key=f2afbc7eafb9b8f158fe89a81ec1be05&query=${capital}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.current)
                    setCountry(data.current)
                    setLoading(false);
                })
        }
        fetchData()
    }, [])
    return (

        <Box data-testid='capital' sx={{ mt: 10, textAlign: "center" }}>

            <Typography variant='h3'>Current Weather - {capital}</Typography>
            {loading ? <LinearProgress color="secondary" />
                : <Box>
                    <Typography variant='h4' sx={{ color: "tomato" }}>  {country?.temperature}°C</Typography>

                    <Avatar sx={{ mx: "auto" }} alt="Remy Sharp" src={country?.weather_icons[0]} />
                    <Typography variant='h4'> Wind: {country?.wind_speed} km/h</Typography>
                    <Typography variant='h4'> Precipitation:  {country?.precip} %</Typography>

                </Box>}

        </Box>

    );
};

export default Capitalweather;