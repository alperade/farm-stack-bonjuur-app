import React from "react";
import { useSelector } from "react-redux";

export function Results() {
    const results = useSelector((state) => state.member)
    return (
        <div>
           <p>membership: {results.membership}</p>
           <p>bathrooms: {results.bathrooms}</p>
           <p>bedrooms: {results.bedrooms}</p>
           <p>address: {results.address}</p>
           <p>apartment number: {results.apt}</p>
           <p>phone: {results.phone}</p>
           <p>pets: {results.pets}</p>
           <p>start date: {results.start_date}</p>
           <p>time slot: {results.time_slot}</p>
        </div>
    )

}

export default Results;
