import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';


const Chart = () =>{

    const [dailyData, setDailyData] = useState({});

    useEffect(()=> {
        (async () => {
            setDailyData(await fetchDailyData());
        })();       
    },[dailyData]);

    const LineChart = (
        dailyData[0]? (<Line 
            data={{
                labels: '',
                datasets: [{},{}]
            }}
        />): null
    );

    return(
        <div>Chart</div>
    )
}

export default Chart;