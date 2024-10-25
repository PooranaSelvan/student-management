import React, { useEffect, useState } from 'react';
import { GraduationCap, MapPin, Hash, Calendar, Search, Trash2, CircleMinus, Home, UserPlus, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const DeleteDetails = () => {

  // main state for storing arr of obj of students
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // initial aa run aagum - localStorage data va get panni students la update pannum
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  // 
  const filteredStudents = students.filter((student) => {
    return student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           student.rollno.toString().includes(searchTerm);
  });


  const handleDelete = (rollno) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // get panna rollno != rollno match aagatha thaa matum filter panni eduthu arr va return panuthu
        const updatedStudents = students.filter((student) => student.rollno !== rollno);

        // updating in main useState
        setStudents(updatedStudents);

        // updating in localStorage
        localStorage.setItem('students', JSON.stringify(updatedStudents));

        // result
        Swal.fire(
          'Deleted!',
          'The student has been deleted.',
          'success'
        )
      }
    })
  }

  const handleClearAll = () => {

    // cancel all the objs in the arr
    Swal.fire({
      title: 'Delete all students?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete all!'
    }).then((result) => {
      if (result.isConfirmed) {

        // clearing useState
        setStudents([]);

        // removing the whole arry from localStorage
        localStorage.removeItem('students');

        // result
        Swal.fire(
          'Deleted!',
          'All students have been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <header className="bg-gray-800 p-6 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">Delete Student Details</h1>
        </header>

        <div className="p-6">
          <div className="max-w-md mx-auto mb-8">
            {/* Search Bar */}
            <div className="relative flex items-center">
              <input type="text" placeholder="Search by name or roll number" className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            {/* Clear Button */}
            {students.length >= 1 && (
              <button className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 flex items-center justify-center"onClick={handleClearAll}>
                <CircleMinus className="mr-2" /> Clear All Students
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mapping Filtered Students Data */}
            {filteredStudents.map((student) => (
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200" key={student.rollno}>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 capitalize">{student.name}</h2>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Hash className="w-5 h-5 mr-2 text-blue-500" />
                      <span>Roll No: {student.rollno}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-black" />
                      <span>DOB: {student.dob}</span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-green-500" />
                      <span>{student.dept}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-yellow-500" />
                      <span>Year: {student.year}
                        {student.year === 1 ? 'st' : student.year === 2 ? 'nd' : student.year === 3 ? 'rd' : 'th'}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-red-500" />
                      <span className="capitalize">{student.address}</span>
                    </div>
                  </div>
                </div>
                {/* Delete Button For Single Student */}
                <div className="bg-gray-100 px-6 py-4">
                  <button  className="w-full bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 flex items-center justify-center" onClick={() => handleDelete(student.rollno)}>
                    <Trash2 className="mr-2" /> Delete Student
                  </button>
                </div>
              </div>
            ))}
          </div>

            {/* filtered arr ooda len 0 va iruntha */}
          {filteredStudents.length === 0 && (
            <p className="text-center text-gray-600 mt-8">No students found. Try a different search or add new students.</p>
          )}
        </div>


        <footer className="bg-gray-100 p-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to='/'>
              <button className='bg-gray-800 text-white px-6 py-2 rounded-full font-semibold transition duration-300 hover:bg-gray-700 flex items-center'>
                <Home className="mr-2" /> Home
              </button>
            </Link>
            <Link to='/addDetails'>
              <button className='bg-green-500 text-white px-6 py-2 rounded-full font-semibold transition duration-300 hover:bg-green-600 flex items-center'>
                <UserPlus className="mr-2" /> Add Student
              </button>
            </Link>
            <Link to='/editDetails'>
              <button className='bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold transition duration-300 hover:bg-yellow-600 flex items-center'>
                <Edit className="mr-2" /> Edit Student
              </button>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default DeleteDetails;