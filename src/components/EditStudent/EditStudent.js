import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  const [formData, setFormData] = useState({
    Name: '',
    Age: '',
    Gender: '',
    Education: '',
  });

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(
          `https://student-app-backend-23oa.onrender.com/all-student/${id}`
        );
        const student = response.data; // Assuming the API returns the student details
        setFormData({
          Name: student.Name,
          Age: student.Age,
          Gender: student.Gender,
          Education: student.Education,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentDetails();
  }, [id]); // Run this effect when the component mounts and whenever the ID changes

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(
        `https://student-app-backend-23oa.onrender.com/Edit-Student/${id}`,
        formData
      );

      // Reset the form data after submission
      setFormData({
        Name: '',
        Age: '',
        Gender: '',
        Education: '',
      });

      // Optionally, you can navigate the user back to the student list or another page
      navigate('/StudentList');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Student</h1>
      <form onSubmit={handleSubmit} className="form row g-3">
        <div className="col-md-6">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Age" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Gender" className="form-label">
            Gender
          </label>
          <input
            type="text"
            className="form-control"
            name="Gender"
            value={formData.Gender}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Education" className="form-label">
            Education
          </label>
          <input
            type="text"
            className="form-control"
            name="Education"
            value={formData.Education}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12 btn">
          <button type="submit" className="btn btn-primary">
            Update Student
          </button>
        </div>
      </form>
      <div className="Back">
        <button onClick={handleBack} className="btn btn-primary">
          Back
        </button>
      </div>
    </div>
  );
};

export default EditStudent;
