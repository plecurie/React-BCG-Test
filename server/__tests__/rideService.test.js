const rideService = require("../services/rideService");
const mockRide = {
        id: 4,
        distance: 5,
        startTime: "2020-06-19T14:11:17.031Z",
        duration: 4000
    };

describe("getDate()", () => {
    it("should return the day of the ride", () => {
        expect(rideService.getDate(mockRide)).toEqual("19/06/2020");
    });
});

describe("formatTime()", () => {
    it("should return a time formatted", () => {
        expect(rideService.formatTime(mockRide.startTime)).toEqual("14:11:17");
    });
});
describe("getUTCDate()", () => {
    it("should return the local time of the ride", () => {
        expect(rideService.getUTCDate(mockRide.startTime)).toEqual(new Date("2020-06-19T12:11:17.000Z"));
    });
});
describe("computeEndDate()", () => {
    it("should return the endtime of the ride", () => {
        expect(rideService.computeEndDate(mockRide.startTime, mockRide.duration)).toEqual(new Date("2020-06-19T15:17:57.031Z"));
    });
});
describe("computePrice()", () => {
    it("should return the price of the ride", () => {
        expect(rideService.computePrice(mockRide)).toEqual(13.5);
    });
});
describe("formatDuration()", () => {
    it("should return the formatted duration", () => {
        expect(rideService.formatDuration(mockRide.duration)).toEqual("01:06:40");
    });
});
