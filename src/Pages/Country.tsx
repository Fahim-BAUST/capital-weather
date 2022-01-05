import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Country = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState<string>('');

    const [disableButton, setDisable] = useState<boolean>(true);


    return (
        <Container sx={{ width: "50%", mx: "auto", my: 15 }}>

            <Box>
                <Typography variant='h4'> Search with Country Name</Typography>
                <TextField sx={{ mt: 4 }} onChange={(e) => { setSearch(e.target.value); setDisable(false) }} id="standard-basic" label="Please enter country" variant="standard" /> <br />
                <Button onClick={() => navigate(`/details/${search}`)} disabled={disableButton} sx={{ mt: 2 }} variant="contained" >Details</Button>

            </Box>

        </Container>
    );
};

export default Country;