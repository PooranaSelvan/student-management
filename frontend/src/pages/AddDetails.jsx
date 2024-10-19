import React, { useState, useEffect } from 'react';
import { User, Hash, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; 

const AddDetails = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    dept: '',
    year: '',
    address: ''
  });

  // initial aa run aagum - localStorage la irukura values elam get panni students-array(useState) la update pannm
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  // name ooda input la nadakum
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // alert message for added
    Swal.fire({
     position: "top-end",
     icon: "success",
     title: "Data Has Been Successfully Added..",
     showConfirmButton: false,
     timer: 1500
     });
    e.preventDefault(); // refresh aagama thadukurom
    // formData obj kulla namma enter panna all values irukum athula irunthu rollno matum interger aa change panrom
    // atha newStudent nu variable la store panrom
    const newStudent = { ...formData, rollno: parseInt(formData.rollno, 10) };
    // updatedStudents nu variable kulla already irukura student object + namma ipa parse panna student object aa podurom
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents); // atha setStudents la update panrom
    // finally updatedStudents aa localStorage la update panrom
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    // next data add panrathuku formData obj la irukura data elam clear panrom
    setFormData({ name: '', rollno: '', dept: '', year: '', address: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8 flex flex-wrap flex-col items-center justify-center">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Add Student</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute top-3 left-3 h-5 w-5 text-white" />
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-200 transition-all duration-300 ease-in-out focus:bg-opacity-30" required/>
          </div>
          <div className="relative">
            <Hash className="absolute top-3 left-3 h-5 w-5 text-white" />
            <input type="number" name="rollno" value={formData.rollno} onChange={handleChange} placeholder="Roll Number" className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-200 transition-all duration-300 ease-in-out focus:bg-opacity-30" required/>
          </div>
          <div className="relative">
            <GraduationCap className="absolute top-3 left-3 h-5 w-5 text-white" />
            <input type="text" name="dept" value={formData.dept} onChange={handleChange} placeholder="Department" className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-200 transition-all duration-300 ease-in-out focus:bg-opacity-30" required/>
          </div>
          <div className="relative">
            <Calendar className="absolute top-3 left-3 h-5 w-5 text-white" />
            <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-200 transition-all duration-300 ease-in-out focus:bg-opacity-30" required/>
          </div>
          <div className="relative">
            <MapPin className="absolute top-3 left-3 h-5 w-5 text-white" />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-200 transition-all duration-300 ease-in-out focus:bg-opacity-30" required/>
          </div>
          <button type="submit" className="w-full bg-white text-black font-bold py-2 px-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
            Add Student
          </button>
        </form>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <Link to='/'>
          <button className='bg-black text-white mt-10 px-5 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-gray-500 transform hover:scale-105 active:scale-95'>
            Home
          </button>
        </Link>
        <Link to='/details'>
          <button className='bg-blue-400 text-white mt-10 px-5 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-blue-500 transform hover:scale-105 active:scale-95'>
            View
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddDetails;