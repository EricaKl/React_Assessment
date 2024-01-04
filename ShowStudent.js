import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const ShowStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('http://localhost:3000/student');
      setStudents(response.data);
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
      <Card style={{ width: '18rem',  border:'2px solid grey', marginLeft:'20px'}}>
      <Card.Body>
        <Card.Title><b>NAME :</b> {student.studentname}</Card.Title>
        <Card.Text>
         <p><b>DOB :</b> {student.dob}</p>
         <p><b>GENDER :</b> {student.gender}</p>
         <p><b>ADDRESS :</b> {student.address}</p>
         <p><b>MOBILE :</b> {student.mobilenumber}</p>
        </Card.Text>
      </Card.Body>
    </Card>
      ))}
      
      {/* <div className="card-">
        {students.map((student) => (
          <div key={student.id} className="card">
            <h3>{student.studentname}</h3>
            <h3>{student.dob}</h3>
            <h3>{student.gender}</h3>
            <h3>{student.address}</h3>
            <h3>{student.mobilenumber}</h3>
          
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ShowStudent;
