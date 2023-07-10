import React from "react";
import { useNavigate } from "react-router-dom";
import './homePage.css'

const HomePage = () => {

  const navigate=useNavigate()


  const HandleAllStudentList =()=>{
    navigate('/StudentList')
  }

  const HandleAddStudent =()=>{
    navigate('/AddStudent')
  }

  return (
    <div className="HomePage">
      <h1>Student Management System</h1>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button onClick={HandleAllStudentList} className="btn btn-primary btn1" type="button">
          All Student List
        </button>
        <button onClick={HandleAddStudent}   className="btn btn-primary btn1" type="button">
          Add student
        </button>
      </div>
    </div>
  );
};

export default HomePage;
