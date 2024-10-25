import React, { useState, useEffect } from "react";
import { User, Hash, GraduationCap, Calendar, MapPin, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGet = () => {
    const student = students.find(
      (s) => s.rollno === parseInt(formData.rollno, 10)
    );
    if (student) {
      setFormData(student);
      setIsEditing(true);
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
    const updatedStudents = students.map((student) =>
      student.rollno === parseInt(formData.rollno, 10)
        ? { ...formData, rollno: parseInt(formData.rollno, 10) }
        : student
    );
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Data Has Been Updated Successfully..",
      showConfirmButton: false,
      timer: 1500,
    });
    setFormData({ name: "", rollno: "", dob: "", dept: "", year: "", address: "" });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-md" data-aos="fade-up">
        <div className="bg-white rounded-2xl shadow-2xl">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
            <h2 className="text-3xl font-bold text-white text-center">
              Update Student
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="relative" data-aos="fade-right" data-aos-delay="100">
              <Hash className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="number" name="rollno" value={formData.rollno} onChange={handleChange} placeholder="Roll Number" className="w-full pl-10 pr-20 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800 placeholder-gray-500 transition-all duration-300 ease-in-out" required disabled={isEditing}/>
              <button type="button" onClick={handleGet} className="absolute right-1 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300" disabled={isEditing}>
                Get
              </button>
            </div>
            <div className="relative" data-aos="fade-right" data-aos-delay="200">
              <User className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800 placeholder-gray-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <div className="relative" data-aos="fade-right" data-aos-delay="200">
              <CalendarDays className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of birth" min="1900-01-01" max="3000-12-31" className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800 placeholder-gray-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <div className="relative" data-aos="fade-right" data-aos-delay="300">
              <GraduationCap className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="text" name="dept" value={formData.dept} onChange={handleChange} placeholder="Department" className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800 placeholder-gray-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <div className="relative" data-aos="fade-right" data-aos-delay="400">
              <Calendar className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800 placeholder-gray-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <div className="relative" data-aos="fade-right" data-aos-delay="500">
              <MapPin className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800 placeholder-gray-500 transition-all duration-300 ease-in-out" required/>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95" data-aos="zoom-in" data-aos-delay="600">
              Update Student
            </button>
          </form>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
        <Link to="/">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-purple-100 transform hover:scale-105 active:scale-95 shadow-md">
            Home
          </button>
        </Link>
        <Link to="/details">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-purple-100 transform hover:scale-105 active:scale-95 shadow-md">
            View Details
          </button>
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default EditDetails;
