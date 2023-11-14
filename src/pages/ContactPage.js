// ContactPage.js

import React, { useState } from "react";
import { useDrop, useDrag } from "react-dnd";

const TableComponent = (props) => {
  // Sample data for the table
  //   const tableData = [
  //     {
  //       id: 1,
  //       name: "John Doe",
  //       age: 25,
  //       city: "New York",
  //       country: "USA",
  //       occupation: "Engineer",
  //     },
  //     {
  //       id: 2,
  //       name: "Jane Smith",
  //       age: 30,
  //       city: "London",
  //       country: "UK",
  //       occupation: "Designer",
  //     },
  //     {
  //       id: 3,
  //       name: "Bob Johnson",
  //       age: 28,
  //       city: "Berlin",
  //       country: "Germany",
  //       occupation: "Developer",
  //     },
  //     // Add more data as needed
  //   ];

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Town</th>
          <th>Bus</th>
          <th>Train</th>
          <th>Restaurants avail. %</th>
          <th>Bars avail. %</th>
          <th>Places of Interest</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((row) => (
          <tr key={row.id}>
            <td>{row.town}</td>
            <td>{row.bus}</td>
            <td>{row.train}</td>
            <td>{row.restaurants}</td>
            <td>{row.pubs}</td>
            <td>{row.places}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ContactPage = () => {
  const [results, setResults] = useState([]);

  const handleGetResults = async () => {
    const response = await fetch(
      "https://getpreferredtowns.azurewebsites.net/api/getPreferredTowns4",
      {
        method: "POST",
        body: JSON.stringify({
          minPrice: "25000",
          maxPrice: "3000000",
          desiredPostcodes: ["BS16 6TP"],
        }),
        headers: {
          "x-functions-key":
            "bLxEjNxjIO-xL72mcq-HpG8QQak0GGfpwLN25pxUCAJYAzFuS47Wag==",
          Accept: "application/json",
          "content-type": "application/json",
        },
      }
    );

    setResults(await response.json());
  };

  return (
    <div>
      <h2>Your Choices</h2>
      <TableComponent results={results} />
      <button onClick={handleGetResults}>Get Results</button>
      {/* {results.length > 0 && results.map((result) => <div>{result.town}</div>)} */}
    </div>
  );
};

export default ContactPage;
