export class Flight {

    airline: string;
    flightNo: string;
    origin: string;
    departure: string;
    destination: string;
    arrival: string;
    gate: string;
    status: string;

    constructor(airline: string, flightNo: string, origin: string, departure: string, destination: string, arrival: string) {
        this.airline = airline;
        this.flightNo = flightNo;
        this.origin = origin;
        this.departure = departure;
        this.destination = destination;
        this.arrival = arrival;
        this.gate = "";
        this.status = "";
    }

    // TODO: add methods
}
