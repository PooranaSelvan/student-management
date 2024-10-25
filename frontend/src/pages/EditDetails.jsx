import React, { useState, useEffect } from "react";
import { User, Hash, GraduationCap, Calendar, MapPin, CalendarDays, Home, Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const EditDetails = () => {

  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    dob: "",
    dept: "",
    year: "",
    address: "",
  });

  // initial aa run aagum - localStorage data va get panni students la update pannum
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
  }, []);


  // form ooda inputs changum pothu write aagum
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  
  const handleGetRollno = () => {

    // students(useState) la irukura rollno and input la irukura rollno match aagutha nu check pannum
    const student = students.find(
      (s) => s.rollno === parseInt(formData.rollno, 10)
    );

    // if rollno match aachuna - formData la student update aagum - editing state true aagum
    if (student) {
      setFormData(student);
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Student Not Found",
        text: "No student with this roll number exists.",
        timer: 2000,
      });
    }
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    // students(useState) map pannum
    const updatedStudents = students.map((student) => {
      if (student.rollno === parseInt(formData.rollno, 10)) {
          // If the roll number matches, return the updated student object
          return { ...formData, rollno: parseInt(formData.rollno, 10) };
      } else {
          // If it doesn't match, return the original student object
          return student;
      }
    });
  
    // students la update panrom
    setStudents(updatedStudents);

    // localStorage la update panrom
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    // result toast
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Data Has Been Updated Successfully..",
      showConfirmButton: false,
      timer: 1500,
    });

    // clearing the form for next data
    setFormData({ name: "", rollno: "", dob: "", dept: "", year: "", address: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
            <h2 className="text-3xl font-bold text-white text-center">
              Update Student
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="relative">
              <Hash className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="number" name="rollno" value={formData.rollno} onChange={handleChange} placeholder="Roll Number" className="w-full pl-10 pr-20 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800 placeholder-gray-500 transition-all duration-300 ease-in-out" required/>
              <button type="button" onClick={handleGetRollno} className="absolute right-1 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                Get
              </button>
            </div>
            <div className="relative">
              <User className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800 placeholder-gray-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <div className="relative">
              <CalendarDays className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of birth" min="1900-01-01" max="3000-12-31" className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800 placeholder-gray-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <div className="relative">
              <GraduationCap className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="text" name="dept" value={formData.dept} onChange={handleChange} placeholder="Department" className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800 placeholder-gray-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <div className="relative">
              <Calendar className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800 placeholder-gray-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <div className="relative">
              <MapPin className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800 placeholder-gray-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              Update Student
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
        <Link to='/deleteDetails'>
            <button className='bg-red-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-red-600 flex items-center'>
              <Trash2 className="mr-2" /> Delete
            </button>
          </Link>
      </div>
      </div>
      
    </div>
  );
};

export default EditDetails;
