import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <nav>
        <h1  style={{float:'inline-start'}}>StudentApp</h1>
    <ul>
      <li>
        <Link to="src/Components/home">Home</Link>
      </li>
      <li>
        <Link to="src/Components/addstudent">Add Student</Link>
      </li>
      <li>
        <Link to="src/Components/showstudent">Show Student</Link>
      </li>
    </ul>
  </nav>
  );
};

export default HeaderComponent;
