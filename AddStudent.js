import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddStudent = () => {
    debugger;
    const [studentname, setStudentName] = useState('');
    const [dob, setDate] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');

    const [studentnameError, setStudentNameError] = useState('');
    const [dobError, setdobError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [mobilenumberError, setMobileNumberError] = useState('');

 
    const validateName = () => {
        if (!studentname.trim()) {
            setStudentNameError('Name is required.');
          return false;
        }
        setStudentNameError('');
        return true;
      };
    
      const validateDOB = () => {
        if (!dob.trim()) {
            setdobError('DOB is required.');
          return false;
        }
        setdobError('');
        return true;
      };

      const validateAddress = () => {
        if (!address.trim()) {
            setAddressError('Address is required.');
          return false;
        }
        setAddressError('');
        return true;
      };

      const validateMobile = () => {
        if (!mobilenumber.trim()) {
            setMobileNumberError('Mobile number is required.');
          return false;
        }
        setMobileNumberError('');
        return true;
      };


    
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isDOBValid = validateDOB();
    const isAddressValid = validateAddress();
    const isMobileValid = validateMobile();


    if (isNameValid && isDOBValid && isAddressValid && isMobileValid) {
        const newStudent = {
            studentname,
            dob,
            gender,
            address,
            mobilenumber
        };
    
  
    
    // const newStudent = {
    //     studentname,
    //     dob,
    //     gender,
    //     address,
    //     mobilenumber
    // };
    try {

    await axios.post('http://localhost:3000/student', newStudent);
    setStudentName('');
    setDate('');
    setGender('');
    setAddress('');
    setMobileNumber('');
    setStudentNameError('');
    setdobError('');
    setGenderError('');
    setAddressError('');
    setMobileNumberError('');
    
    alert('Added Successfully');
    }catch(err)
    {
        //console.error('Error adding student:', err);
        alert('Error adding student. Please try again.');
    }
    }
  };

  return (

    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
      
        <table style={{border:'2px solid black', marginLeft:'500px'}}>
            <tr>
                <td> <label> Student Name :</label></td>
                <td>
                <input
                type="text"
                placeholder=" Enter Name"
                value={studentname}
                onChange={(e) => setStudentName(e.target.value)}
                onBlur={validateName}
                /> 
                </td>
                {studentnameError && <p style={{ color: 'red' }}>{studentnameError}</p>}
            </tr>

            <tr>
                <td> <label> DOB :</label></td>
                <td> <input
                type="date"
                value={dob}
                onChange={(e) => setDate(e.target.value)}
                onBlur={validateDOB}
                />
                </td>
                {dobError && <p style={{ color: 'red' }}>{dobError}</p>}
            </tr>
        <tr>
            <td> <label> Gender :</label></td>
            <td> <input
            type="radio"
            name="gender"
            value="male"
            // checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}/>Male

            <input
            type="radio"
            name="gender"
            value="female"
            // checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}/> Female
          </td>
        </tr>
       
       <tr>
        <td> <label> Address :</label></td>
        <td><input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onBlur={validateAddress}
        />
        </td>
        {addressError && <p style={{ color: 'red' }}>{addressError}</p>}
       </tr>
       
       <tr>
        <td> <label>Mobile :</label></td>
        <td> <input
          type="text"
          value={mobilenumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          onBlur={validateMobile}
        /></td>
         {mobilenumberError && <p style={{ color: 'red' }}>{mobilenumberError}</p>}
       </tr>
       </table>
       <br/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddStudent;
