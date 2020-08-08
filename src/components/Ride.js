import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

const Ride = ({ ride }) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <Alert show={show} variant="warning" style={{width:360}}>
                <Alert.Heading>
                    <Badge variant="light">{ride.id}</Badge>
                </Alert.Heading>
                <br/>
                Price: {ride.price} €
                <br/>
                Distance: {ride.distance} miles
                <br/>
                Start: {ride.startTime}
                <br/>
                End: {ride.endTime}
                <br/>
                Duration: {ride.duration}
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close
                    </Button>
                </div>
            </Alert>

            {!show &&
            <Button key={ride.id} value={ride} variant='outline-light' className='button'  style={{backgroundColor: ride.distance > 2 ? 'rgba(100, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)'}} onClick={() => setShow(true)}>
                <Badge variant="light">{ride.id}</Badge>
                <h3> {ride.date}</h3>
                <Badge variant="warning">{ride.price} €</Badge>
            </Button>
            }
        </>

    )
};

export default Ride
