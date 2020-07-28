const moment = require('moment');

exports.computePrice = (ride) => {

    const startDate = new Date(ride.startTime);
    const endDate = this.computeEndDate(ride.startTime, ride.duration);
    const baseFare = 1;
    const costpermile = 0.5 * 5;
    const rushfees = 1;
    const nightfees = 0.5;

    let price = baseFare + ride.distance * costpermile;

    if (startDate.getUTCHours() >= 20
        || endDate.getUTCHours() >= 20
        || startDate.getUTCHours() < 6
        || endDate.getUTCHours() < 6) {
        price += nightfees;
    }

    if (startDate.getUTCHours() >= 16 && startDate.getUTCHours() < 19
        || endDate.getUTCHours() >= 16 && endDate.getUTCHours() < 19) {
        price += rushfees;
    }

    return price;
};

exports.formatDuration = (duration) => {
    const pad = (num, size) => {
            return ('000' + num).slice(size * -1);
        },
        time = parseFloat(duration).toFixed(3),
        hours = Math.floor(time / 60 / 60),
        minutes = Math.floor(duration / 60) - (hours * 60),
        seconds = duration % 60;

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
};


exports.computeEndDate = (time, duration) => {
    let d = new Date(time);
    d.setSeconds(d.getSeconds() + duration);
    return d;
};

exports.getDate = (ride) => {
    return moment(this.getUTCDate(ride.startTime)).format('DD/MM/YYYY')
};

exports.getUTCDate = (time) => {
    let d = new Date(time);
    return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds());
};

exports.formatTime = (date) => {
    return moment(this.getUTCDate(date)).format('HH:mm:ss')
};

