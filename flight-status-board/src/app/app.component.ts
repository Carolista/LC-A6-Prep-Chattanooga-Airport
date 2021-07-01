import { Component } from '@angular/core';
import { Flight } from './flight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor() {
        this.getFlights();
    }

    allArrivals: Flight[] = [];
    allDepartures: Flight[] = [];

    getFlights(): void {
        fetch("assets/data/flights.json").then((response) => {
            response.json().then((json) => {
                json.forEach((flight: any) => {
                    let newFlight = new Flight(flight.airline, flight.flightNumber, flight.origin, flight.departure, flight.destination, flight.arrival);
                    newFlight.gate = flight.gate;
                    newFlight.status = flight.status;
                    if (newFlight.destination.includes("Chattanooga")) {
                        this.allArrivals.push(newFlight);
                    } else {
                        this.allDepartures.push(newFlight);
                    }
                })
                console.log(json);
            });
        });
    }

}
