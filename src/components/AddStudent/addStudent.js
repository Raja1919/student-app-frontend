import React, { useState } from "react";
import axios from "axios";
import "./addStudent.css";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {

  const navigate=useNavigate()

  const handleBack=()=>{
    navigate(-1)
  }

  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [Education, setEducation] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
       await axios.post(
        "https://student-app-backend-23oa.onrender.com/add-student",
        {
          Name,
          Age,
          Gender,
          Education
        },
        setName(''),
      setAge(''),
      setGender(''),
      setEducation('')
      );
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit} className="form row g-3">
        <div className="col-md-6">
          <label for="Name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control"  value={Name} onChange={handleNameChange} required/>
        </div>
        <div className="col-md-6">
          <label for="Age" className="form-label">
            Age
          </label>
          <input type="text" className="form-control"  value={Age} onChange={handleAgeChange} required/>
        </div>
        <div className="col-md-6">
          <label for="Gender" className="form-label">
            Gender
          </label>
          <input type="text" className="form-control" value={Gender} onChange={handleGenderChange}required/>
        </div>
        <div className="col-md-6">
          <label for="Education" className="form-label">
            Education
          </label>
          <input type="text" className="form-control"  value={Education} onChange={handleEducationChange} required/>
        </div>
        <div className="btn">
          <button type="submit" className="btn btn-primary">
            Add Student
          </button>
        </div>
      </form>
      <div className="Back">
        <button onClick={handleBack} className="btn btn-primary">Back</button>
      </div>
    </div>
  );
};

export default AddStudent;
