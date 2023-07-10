import React, { useEffect, useState } from "react";
import axios from "axios";
import "./studentList.css";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  const navigate=useNavigate()

  const handleEdit =(id)=>{
    navigate(`/EditStudent/${id}`)
  }

  
  const handleBack=()=>{
    navigate(-1)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://student-app-backend-23oa.onrender.com/delete-student/${id}`
      );
      fetchStudents();
    } catch (error) {
      console.error(error);
    }
  };

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "https://student-app-backend-23oa.onrender.com/all-student"
      );
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Student List</h1>
      <div className="card-container ">
        {students.map((student) => (
          <div className="card" key={student._id}>
            <div className="card-body">
              <h5 className="card-title">Name: {student.Name}</h5>
              <p className="card-text">Age: {student.Age}</p>
              <p className="card-text">Gender: {student.Gender}</p>
              <p className="card-text">Education: {student.Education}</p>
             <div>
             <button onClick={()=>handleEdit(student._id)} className="btn btn-primary edit">
                Edit
              </button>
              <button onClick={()=>handleDelete(student._id)} className="btn btn-primary delete">
                Delete
              </button>
             </div>
            </div>
          </div>
        ))}
      </div>
      <div className="Back">
        <button onClick={handleBack} className="btn btn-primary">Back</button>
      </div>
    </div>
  );
};

export default StudentList;
