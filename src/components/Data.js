import React, { useState, useEffect } from "react";

const baseUrl = "https://opensky-network.org/api/";
const getAll = "states/all";
const arrivalInASpecificAirport =
  "flights/departure?airport=EDDF&begin=1517227200&end=1517230800";
const departureFromASpecificAirport =
  "flights/departure?airport=EDDF&begin=1517227200&end=1517230800";

const Data = () => {
  const [flightsTime, setFlightsTime] = useState([]);
  const [flightsArrival, setFlightsArrival] = useState([]);
  const [flightsDeparture, setFlightsDeparture] = useState([]);

  // flightsTime.states.map((flight) => {
  //   // console.log(flight.states);
  // });

  async function flightTime() {
    try {
      const res = await fetch(`${baseUrl + getAll}`);
      const data = await res.json();
      setFlightsTime(data);
    } catch (err) {
      console.error(err);
    }
  }
  async function flightArrivalDetails() {
    try {
      const res = await fetch(`${baseUrl + arrivalInASpecificAirport}`);
      const data = await res.json();
      setFlightsArrival(data);
    } catch (err) {
      console.error(err);
    }
  }
  async function flightDepartureDetails() {
    try {
      const res = await fetch(`${baseUrl + departureFromASpecificAirport}`);
      const data = await res.json();
      setFlightsDeparture(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    flightTime();
    flightArrivalDetails();
    flightDepartureDetails();
  }, []);

  // all flights at a given time
  var unixTimestamp = flightsTime.time;
  var dateObj = new Date(unixTimestamp * 1000);
  var utcString = dateObj.toUTCString();
  var time = utcString.slice(-11, -4);
  console.log(time);

  const startTime = unixTimestamp;
  const endTime = startTime + 3600;
  console.log(startTime);
  console.log(endTime);

  // count the number of flights arriving to a particular airport
  var arrivalCount = flightsArrival.length;
  var departureCount = flightsDeparture.length;

  // consoles
  console.log(flightsArrival);
  console.log(flightsDeparture);
  console.log(arrivalCount);
  console.log(departureCount);

  return (
    <div className='Data' style={{ paddingTop: 100 }}>
      {/* {flights.map((flight, index) => ( */}
      {/* <div key={index}> */}
      {/* Airport */}
      {/* <h2></h2> */}

      {/* Current Time */}
      <h2>{time}</h2>

      {/* Number of Flights Arriving */}
      <h2>{arrivalCount}</h2>

      {/* Number of Flights Departing */}
      <h2>{departureCount}</h2>
      {/* <h2>{flight.states}</h2> */}
      {/* </div> */}
      {/* ))}   */}
    </div>
  );
};

export default Data;
