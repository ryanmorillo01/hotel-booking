import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Crud = () => {
  return (
    <Table striped bordered hover>
    <thead>
      <p>Check in</p>
      <Link to="/create" className="btn-btn-link">Create</Link>
            <Link to="/login" className="btn-btn-link">Login</Link>
      <tr>
        <th>Contact Number</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Room Number</th>
        <th>Days</th>
        <th>Time</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>09510507081</td>
        <td>Mark</td>
        <td>harton</td>
        <td>Mark_harton@gmail.com</td>
        <td>512</td>
        <td>5days</td>
        <td>8:30am</td>
      </tr>
      <tr>
        <td>09662396601</td>
        <td>James</td>
        <td>Newtron</td>
        <td>James_Newtron@gmail.com</td>
        <td>472</td>
        <td>4days</td>
        <td>7:40am</td>
      </tr>
      <tr>
        <td>09172585510</td>
        <td>Larry</td>
        <td>Patter</td>
        <td>Larry_Patter@gmail.com</td>
        <td>364</td>
        <td>1 week</td>
        <td>9:00am</td>
      </tr>
    </tbody>
  </Table>
  
  );
};


export default Crud