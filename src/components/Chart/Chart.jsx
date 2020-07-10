import React, {useState, useEffect} from 'react'
import { fetchDailyData } from '../../api'
import {Line, Bar} from 'react-chartjs-2'

import styles from './Chart.module.css';

function Chart({data, country}) {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, [])

    const lineChart = (
       dailyData.length ? (<Line 
            data={{
                labels: dailyData.map(({date})=> date),
                datasets: [{
                    data: dailyData.map(({confirmed})=> confirmed),
                    label: 'Confirmed',
                    borderColor: 'black',
                    backgroundColor: 'rgba(129, 128, 128, 0.5)',
                    fill: true,
                }, {
                    data: dailyData.map(({deaths})=> deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
        />) : null
    );

    const barChart = (
        data.confirmed ? (
            <Bar 
            data= {{
                labels: ['Confirmed', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'No of People',
                    backgroundColor: [
                        'rgba(129, 128, 128, 0.9)',
                        'rgba(107, 172, 90, 0.9)',
                        'rgba(214, 109, 109, 0.9)',
                    ],
                    data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: false}
            }}/>
        ) : null
    )
    return (
        <div className={styles.container}>
            {country? barChart: lineChart}
        </div>
    )
}

export default Chart
