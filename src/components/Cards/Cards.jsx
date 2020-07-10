import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames';

import styles from './Cards.module.css'

function Cards({data: {confirmed, recovered, deaths, lastUpdate}, country}) {
    if(!confirmed)
    {
        return "Loading...";
    }
    return (
        <div className={styles.container}>

            <Grid container spacing={1} justify="center">
                <Typography variant={"h4"} className={styles.globalHeading}>
                    {country? country+' STATS' : 'GLOBAL STATS'}
                    <p><strong>Last updated: </strong>{new Date(lastUpdate).toDateString()}</p>
                </Typography>
            </Grid>
           <Grid container spacing={1} justify="center">
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.confirmed)}>
                    <CardContent>
                        <Typography className={styles.headerHeading1} variant={"h5"} align="center" color="textSecondary" gutterBottom>
                            CONFIRMED
                        </Typography>
                        <Typography align="center" variant={"h4"}>
                           <CountUp 
                            start = {0} end={confirmed.value} duration={5} separator=","
                           />
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography className={styles.headerHeading1} variant={"h5"} align="center" color="textSecondary" gutterBottom>
                            RECOVERED
                        </Typography>
                        <Typography align="center" variant={"h4"}>
                        <CountUp 
                            start = {0} end={recovered.value} duration={5} separator=","
                           />
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography className={styles.headerHeading1} variant={"h5"} align="center" color="textSecondary" gutterBottom>
                            DEATHS
                        </Typography>
                        <Typography align="center" variant={"h4"}>
                        <CountUp 
                            start = {0} end={deaths.value} duration={5} separator=","
                           />
                        </Typography>
                    </CardContent>
                </Grid>
           </Grid>
        </div>
    )
}

export default Cards
