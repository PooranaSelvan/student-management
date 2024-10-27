import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Eye, UserPlus, Edit, Trash2 } from 'lucide-react'
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const buttons = [
    { to: '/details', text: 'View Students', color: 'bg-blue-500', icon: Eye },
    { to: '/addDetails', text: 'Add Student', color: 'bg-green-500', icon: UserPlus },
    { to: '/editDetails', text: 'Edit Student', color: 'bg-yellow-500', icon: Edit },
    { to: '/deleteDetails', text: 'Delete Student', color: 'bg-red-500', icon: Trash2 },
  ]

  return (
    <div className="min-h-screen bg-slate-300 p-4 sm:p-8">
      <Helmet>
        <link rel="icon" href="/img.jpg" />
        <title>Home Page</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <header className="bg-indigo-600 p-6 text-white text-center">
          <h1 className="text-3xl sm:text-4xl font-bold flex items-center justify-center">
            <GraduationCap className="mr-4 h-10 w-10" />
              Students Deck 
          </h1>
        </header>

        <main className="p-6">
          <p className="text-gray-600 text-center mb-8">
            Welcome to the Student Management System. Choose an action below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {buttons.map(({ to, text, color, icon: Icon }) => (
              <Link to={to} key={to} className="block">
                <button className={`w-full ${color} text-white p-4 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                  <Icon className="mr-2 h-6 w-6" />
                  <span>{text}</span>
                </button>
              </Link>
            ))}
          </div>

          <div className="mt-8 bg-gray-100 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How to use:</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Click "View Students" to see all student records</li>
              <li>Use "Add Student" to create a new student entry</li>
              <li>Select "Edit Student" to modify existing student information</li>
              <li>Choose "Delete Student" to remove a student from the system</li>
            </ul>
          </div>

        </main>

        <footer className="bg-gray-200 p-4 text-center text-gray-600">
          <p>&copy; 2024 Student Management System. All rights reserved.</p>
          <p className='text-xs'>Fully Made By Poorana Selvan, DM me on Instagram: @ivlpoorana</p>
        </footer>
        
      </div>
    </div>
  )
}

export default HomePage