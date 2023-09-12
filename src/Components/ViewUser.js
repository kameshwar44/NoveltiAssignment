import React, { useState } from "react";
import "../App.css";


function ViewUser() {
  const [users, setUsers] = useState([
    {
      name: "Anom",
      Last: "Mack",
      email: "abc@gmail.com",
      mobile: "85495464546",
      address1: "Acc Colony",
      address2: "5364",
      state: "JH",
      country: "India",
      Zipcode: "72344",
    },
    {
      name: "Anom",
      Last: "Mack",
      email: "abc@gmail.com",
      mobile: "85495464546",
      address1: "Acc Colony",
      address2: "5364",
      state: "JH",
      country: "India",
      Zipcode: "72344",
    },
    {
      name: "Anom",
      Last: "Mack",
      email: "abc@gmail.com",
      mobile: "85495464546",
      address1: "Acc Colony",
      address2: "5364",
      state: "JH",
      country: "India",
      Zipcode: "72344",
    },
  ]);

  return (
    <>
   
    
    <div className="App">
    {/* <Link to='/Create'>CreateUser</Link> */}
      <table>
        <tr>
          <th>First Name:</th>
          <th>Last Name:</th>
          <th>Email Id:</th>
          <th>Mobile:</th>
          <th>Address 1:</th>
          <th>Address 2:</th>
          <th>State:</th>
          <th>Country:</th>
          <th>Zip Code:</th>
        </tr>
        {users.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.Last}</td>
              <td>{val.email}</td>
              <td>{val.mobile}</td>
              <td>{val.address1}</td>
              <td>{val.address2}</td>
              <td>{val.state}</td>
              <td>{val.country}</td>

              <td>{val.Zipcode}</td>
            </tr>
          );
        })}
      </table>
    </div>
    
    </>
  );
}

export default ViewUser;
