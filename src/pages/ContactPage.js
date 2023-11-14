// ContactPage.js

import React, { useState } from "react";
import { useDrop, useDrag } from "react-dnd";
import "./TableComponent.css";

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
    <div className="table-container">
      <table className="styled-table" border="1">
        <thead>
          <tr>
            <th>Town</th>
            <th>Bus</th>
            <th>Train</th>
            <th>Restaurants avail. %</th>
            <th>Bars avail. %</th>
            <th>Places of Interest</th>
            <th>Search</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((row) => (
            <tr key={row.id}>
              <td>{row["BUA name"]}</td>
              <td>{row.IsBus ? "Yes" : "No"}</td>
              <td>{row.IsTrain ? "Yes" : "No"}</td>
              <td>{getRating(row.Restaurants)}</td>
              <td>{getRating(row.Bars)}</td>
              <td>{getRating(row.ThingsToDo)}</td>
              <td>
                <button className="property-button">Find properties</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getRating = (rating) => {
  console.log(parseInt(rating));
  switch (parseInt(rating)) {
    case parseInt(rating) < 4:
      return "Low";
    case parseInt(rating) >= 4 && parseInt(rating) < 8:
      return "Medium";
    default:
      return "High";
  }
};

const ContactPage = () => {
  const [results, setResults] = useState([]);

  const data = [
    {
      town: "Denaby Main",
      bus: "Yes",
      train: "Yes",
      restaurants: "High",
      bars: "High",
      places: "High",
    },
    {
      town: "Dunscroft and Hatfield",
      bus: "Yes",
      train: "Yes",
      restaurants: "High",
      bars: "High",
      places: "High",
    },
    {
      town: "Huddersfield",
      bus: "Yes",
      train: "Yes",
      restaurants: "High",
      bars: "High",
      places: "High",
    },
    {
      town: "North Stainley",
      bus: "Yes",
      train: "Yes",
      restaurants: "High",
      bars: "High",
      places: "High",
    },
    {
      town: "Rainton",
      bus: "Yes",
      train: "Yes",
      restaurants: "High",
      bars: "High",
      places: "Medium",
    },
    {
      town: "Swinton (Rotherham)",
      bus: "Yes",
      train: "Yes",
      restaurants: "Medium",
      bars: "High",
      places: "High",
    },
    {
      town: "Terrington",
      bus: "Yes",
      train: "Yes",
      restaurants: "High",
      bars: "Medium",
      places: "High",
    },
  ];

  const handleGetResults = async () => {
    const response = await fetch(
      "https://getpreferredtowns.azurewebsites.net/api/getPreferredTowns5",
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

    setResults((await response.json()).results);
  };

  return (
    <div>
      <h2>Your Choices</h2>
      {results.length > 0 && <TableComponent results={results} />}
      <button onClick={handleGetResults}>Get Results</button>
      {/* {results.length > 0 && results.map((result) => <div>{result.town}</div>)} */}
    </div>
  );
};

export default ContactPage;
