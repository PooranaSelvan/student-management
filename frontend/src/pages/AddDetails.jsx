import React, { useState, useEffect } from 'react';
import { User, Hash, GraduationCap, Calendar, MapPin, CalendarDays, Home, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; 

const AddDetails = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    dob: '',
    dept: '',
    year: '',
    address: ''
  });

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const alreadyExists = students.some((student) => student.rollno === parseInt(formData.rollno, 10));
    
    if (alreadyExists) {
      Swal.fire({
        icon: "error",
        title: "Duplicate Entry",
        text: "This roll number already exists. Please enter a unique roll number.",
        confirmButtonColor: '#3085d6',
      });
      return;
    }
  
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Student data has been successfully added.",
      confirmButtonColor: '#3085d6',
    });
  
    const newStudent = { ...formData, rollno: parseInt(formData.rollno, 10) };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setFormData({ name: '', rollno: '', dob: '', dept: '', year: '', address: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gray-800 p-6 text-white">
          <h2 className="text-3xl font-bold text-center">Add New Student</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <div className="relative">
              <Hash className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="number" name="rollno" value={formData.rollno} onChange={handleChange} placeholder="Roll Number" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <div className="relative">
              <CalendarDays className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date Of Birth" min="1900-01-01" max="3000-12-31" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <div className="relative">
              <GraduationCap className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="text" name="dept" value={formData.dept} onChange={handleChange} placeholder="Department" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <div className="relative">
              <Calendar className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year of Study" min="1" max="5" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <div className="relative md:col-span-2">
              <MapPin className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out" required/>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
            Add Student
          </button>
        </form>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
        <Link to='/'>
          <button className='bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-gray-700 flex items-center'>
            <Home className="mr-2" /> Home
          </button>
        </Link>
        <Link to='/details'>
          <button className='bg-green-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-green-600 flex items-center'>
            <Eye className="mr-2" /> View Students
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddDetails;