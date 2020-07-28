const Ride = require('../models/Ride');

const rideService = require( "../services/rideService");

exports.create = (req, res) => {
    const newRide = new Ride(req.body);
    newRide.save(function (err) {
        if(err) {
            res.status(400).send('Unable to save ride to database');
        } else {
            res.status(200).send({created: true});
        }
    });
};

exports.findOne = (req, res) => {
    Ride.findOne(req.query.id).exec((err, data) => {
        if (err) {
            return res.send(500, err);
        }

        return {
            id: data.id,
            date: rideService.getDate(data),
            distance: data.distance,
            price: rideService.computePrice(data),
            startTime: rideService.formatTime(data.startTime),
            endTime: rideService.formatTime(rideService.computeEndDate(data.startTime, data.duration)),
            duration: rideService.formatDuration(data.duration)
        }
    });
};

exports.findAll = (req, res) => {

    const rides = [];

    Ride.find({}).exec((err, results) => {
        if (err) {
            console.error(err);
            return res.send(500, err);
        }

        for (let ride of results) {
            rides.push({
                id: ride.id,
                date: rideService.getDate(ride),
                distance: ride.distance,
                price: rideService.computePrice(ride),
                startTime: rideService.formatTime(ride.startTime),
                endTime: rideService.formatTime(rideService.computeEndDate(ride.startTime, ride.duration)),
                duration: rideService.formatDuration(ride.duration)
            })
        }
        return res.status(200).json({rides: rides});
    });
};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
