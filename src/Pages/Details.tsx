import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface CountryTypes {
    name:
    {
        common: string
    },
    capital: string[],
    population: number,
    latlng: number[],
    flags:
    {
        png: string
    }
}
const Details: React.FC = () => {

    const { search } = useParams<{ search: string }>()
    const [country, setCountry] = useState<CountryTypes[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();


    useEffect(() => {

        const fetchData = () => {
            setLoading(true);
            fetch(`https://restcountries.com/v3.1/name/${search}`)
                .then(res => res.json())
                .then(data => {
                    setCountry(data)
                    setLoading(false);
                })
        }
        fetchData()
    }, [])
    return (
        <Container data-testid='details' sx={{ width: "50%", mx: "auto", my: 4 }}>
            {loading ? <LinearProgress color="secondary" />
                : <Box sx={{ my: 4 }}>
                    <Typography variant='h3' sx={{ mb: 3 }}>Country Details</Typography>
                    <img src={country[0]?.flags?.png} alt="" />
                    <Typography variant='body1'>  <span style={{ fontWeight: "bold" }}>Name:</span> {country[0]?.name.common}</Typography>
                    <Typography variant='body1'><span style={{ fontWeight: "bold" }}>Capital :</span> {country[0]?.capital}</Typography>
                    <Typography variant='body1'><span style={{ fontWeight: "bold" }}> Population : {country[0]?.population}</span></Typography>
                    <Typography variant='body1'> <span style={{ fontWeight: "bold" }}> Latitude : </span>{country[0]?.latlng[0]}</Typography>
                    <Typography variant='body1'> <span style={{ fontWeight: "bold" }}> Longitude : </span>{country[0]?.latlng[1]}</Typography>
                    <Button onClick={() => navigate(`/weather/${country[0]?.capital}`)} sx={{ mt: 2 }} variant="contained" >Current weather</Button>

                </Box>}
        </Container>
    );
};

export default Details;