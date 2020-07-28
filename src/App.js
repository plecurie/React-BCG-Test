import React, {useEffect, useState} from 'react';
import RidesList from './components/RidesList';
import './assets/css/App.css';

const App = () => {

    const [rides, setRides] = useState([]);

    useEffect(() => {
        updateRides();
    }, []);

    const updateRides = async () => {
        const response = await fetch('http://localhost:1234/rides');
        const data = await response.json();
        setRides(data.rides);
    };

    return (
        <RidesList rides={rides}/>
    );
};

export default App;
