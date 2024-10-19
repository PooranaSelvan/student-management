import React, { useEffect, useState } from 'react';
import { GraduationCap, MapPin, Hash, Calendar, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // initial aa run aagum - localStorage la irukura values elam get panni students-array(useState) la update pannm
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  // students-arr(useState) la irukuratha filter panrom [ name & rollno aa vachu filter panrom ]
  // namma searchTeam vachu check panuthu if adhula ethuvume ilana elathayum return pannum
  const filteredStudents = students.filter((student) => {
     // console.log(student);
     return student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.rollno.toString().includes(searchTerm);
  });

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-700 p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Student Details</h1>

      {/* Searh Bar Div */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          {/* Input ooda onChange la get aagura values aa searchTerm var la update panrom */}
          <input type="text" placeholder="Search by name or roll number" className="w-full px-4 py-2 text-gray-900 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

     {/* Result Displaying From filteredStudents - check 15th line */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredStudents.map((student) => (
          <div className={`rounded-lg shadow-lg overflow-hidden bg-gradient-to-br from-indigo-400 to-cyan-500 transition-transform duration-200 ease-in-out hover:scale-105`}>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 capitalize">{student.name}</h2>
              <div className="space-y-2">
                <div className="flex items-center text-white">
                  <Hash className="w-5 h-5 mr-2" />
                  <span>Roll No: {student.rollno}</span>
                </div>
                <div className="flex items-center text-white">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span>{student.dept}</span>
                </div>
                <div className="flex items-center text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Year: {student.year == 1 ? student.year + 'st' : student.year == 2 ? student.year + 'nd' : student.year + 'rd'}</span>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="capitalize">{student.address}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        <Link to='/'>
          <button className='bg-black text-white mt-10 px-5 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-gray-500 transform hover:scale-105 active:scale-95'>
            Home
          </button>
        </Link>
        <Link to='/addDetails'>
          <button className='bg-blue-500 text-white mt-10 px-5 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-blue-400 transform hover:scale-105 active:scale-95'>
            Add
          </button>
        </Link>
        <Link to='/editDetails'>
          <button className='bg-orange-500 text-white mt-10 px-5 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-orange-400 transform hover:scale-105 active:scale-95'>
            Edit
          </button>
        </Link>
        <Link to='/deleteDetails'>
          <button className='bg-red-500 text-white mt-10 px-5 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-red-400 transform hover:scale-105 active:scale-95'>
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StudentDetails;