import React, { useEffect, useState } from 'react';
import { GraduationCap, MapPin, Hash, Calendar, Search, CalendarDays, Home, UserPlus, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  const filteredStudents = students.filter((student) => {
    return student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           student.rollno.toString().includes(searchTerm);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8 shadow-text">Student Details</h1>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-8">
          <div className="p-6">
            <div className="relative max-w-md mx-auto">
              <input 
                type="text" 
                placeholder="Search by name or roll number" 
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {filteredStudents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
              {filteredStudents.map((student) => (
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105" key={student.rollno}>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
                    <h2 className="text-xl font-bold text-white capitalize">{student.name}</h2>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Hash className="w-5 h-5 mr-2 text-blue-500" />
                      <span>Roll No: {student.rollno}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CalendarDays className="w-5 h-5 mr-2 text-green-500" />
                      <span>DOB: {student.dob}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <GraduationCap className="w-5 h-5 mr-2 text-purple-500" />
                      <span>Department: {student.dept}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 mr-2 text-yellow-500" />
                      <span>Year: {student.year == 1 ? student.year + 'st' : student.year == 2 ? student.year + 'nd' : student.year + 'rd'}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-2 text-red-500" />
                      <span className="capitalize">{student.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center p-6 text-gray-500">
              No students found. Try a different search or add new students.
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to='/'>
            <button className='bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gray-700 flex items-center'>
              <Home className="mr-2" /> Home
            </button>
          </Link>
          <Link to='/addDetails'>
            <button className='bg-green-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-green-600 flex items-center'>
              <UserPlus className="mr-2" /> Add
            </button>
          </Link>
          <Link to='/editDetails'>
            <button className='bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-600 flex items-center'>
              <Edit className="mr-2" /> Edit
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
}

export default StudentDetails;