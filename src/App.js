import React from 'react';
import StudentList from './components/AllStudentList/StudentList';
import AddStudent from './components/AddStudent/addStudent';
import EditStudent from './components/EditStudent/EditStudent';
import Header from './components/Header';
import HomePage from './components/HomePage/homePage';
import './App.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/StudentList" element={<StudentList/>}/>
        <Route path="/AddStudent" element={<AddStudent/>}/>
        <Route path="/EditStudent/:id" element={<EditStudent/>}/>
      </Routes>
    </div>
  );
};

export default App;
