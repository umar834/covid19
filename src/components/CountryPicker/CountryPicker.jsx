import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import {Typography, Grid} from '@material-ui/core'

import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'

function CountryPicker({handleCountryChange}) {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountriesAPI = async() => {
            setFetchedCountries(await fetchCountries());
        }

        fetchCountriesAPI();
    }, [setFetchedCountries])
    return (
        <div>
            <FormControl className={styles.formControl}>
                <Grid container spacing={1} justify="center">
                    <Typography variant={"h6"} className={styles.mainHeading}>
                        Select Country
                    </Typography>
                </Grid>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="global">Global</option>
                    {fetchedCountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
