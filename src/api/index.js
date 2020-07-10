import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'
const dailyurl = 'https://covid19.mathdro.id/api/daily'
const countriesurl = 'https://covid19.mathdro.id/api/countries'

export const fetchData = async(country) => {
    let changeable = url;

    if(country)
    {
        changeable = `${url}/countries/${country}`;
    }
    try{
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeable);
        
        return {confirmed, recovered, deaths, lastUpdate};
    }
    catch(error)
    {
        alert("Failed to fetch data from "+url);
    }
}

export const fetchDailyData = async() => {
    try{
        const {data} = await axios.get(dailyurl);
        const data1 = data.slice(40,170)

        const modifiedData = data1.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    }
    catch(error)
    {
        alert("Failed to fetch data from "+ dailyurl);
    }
}

export const fetchCountries = async() => {
    try{
        const {data: {countries}} = await axios.get(countriesurl);
        return countries.map((country)=> country.name);
    }
    catch(error)
    {
        alert("Failed to fetch data from "+ countriesurl);
    }
}