import React, { useState } from 'react';

const TableWithDynamicRows = () => {
  // State to hold table rows
  const [rows, setRows] = useState([]);
 
  // State to hold the form input
  const [inputValue, setInputValue] = useState({id: data.length + 1, name: "New Person", middleName:"", lastName:"", gender:"", age: Math.floor(Math.random() * 50) });

  // Handle form submission
  const handleAddRow = (e) => {
    e.preventDefault();
   
    // Add new row data to the rows state
    setRows([inputValue, ...rows]);

    // Clear input fields after adding
    setInputValue({ name: "", middleName:"", lastName:"", gender:"", age: "" });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleAddRow}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={inputValue.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Enter age"
          value={inputValue.age}
          onChange={handleInputChange}
        />
        <button type="submit">Add Row</button>
      </form>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithDynamicRows;