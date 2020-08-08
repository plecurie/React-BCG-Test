import React from 'react'
import Ride from './Ride';
import ButtonGroup from "react-bootstrap/ButtonGroup";

const RidesList = ({ rides }) => {
    if (!rides) {
        return null;
    }

    if (!rides.length) {
        return <p>Sorry, the list is empty.</p>;
    }

    return (
        <div>
            <h1 align="center">Paris Taxi Flare</h1>
            <h2 align="center">Rides List</h2>
            <br/>
            <div align="center" className='container'>
                <ButtonGroup vertical style={{width: 360}}>
                    {rides.map((ride) => (
                        <Ride ride={ride}/>
                    ))}
                </ButtonGroup>
            </div>
        </div>
    )
};

export default RidesList
