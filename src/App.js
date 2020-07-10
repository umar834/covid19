import React from 'react'

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
import headingImg from './images/covid-heading.png'

class App extends React.Component
{
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const apiData = await fetchData();
        this.setState({data: apiData})
    }

    handleCountryChange = async (country) => {
        const apiData = await fetchData(country);
        this.setState({data: apiData, country: country})
    }
    render(){
        return(
            <div className={styles.container}>
                <img className={styles.headingimg} src={headingImg}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards data={this.state.data} country={this.state.country}/>
                <Chart data={this.state.data} country={this.state.country}/>
            </div>
        )
    }
}

export default App;