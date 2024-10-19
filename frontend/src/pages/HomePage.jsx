import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Eye, UserPlus, Edit, Trash2 } from 'lucide-react'

const HomePage = () => {
  const buttons = [
    { to: '/details', text: 'View', color: 'bg-blue-500', icon: Eye },
    { to: '/addDetails', text: 'Add', color: 'bg-emerald-600', icon: UserPlus },
    { to: '/editDetails', text: 'Modify', color: 'bg-amber-600', icon: Edit },
    { to: '/deleteDetails', text: 'Delete', color: 'bg-rose-600', icon: Trash2 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            <GraduationCap className="inline-block mr-4 h-16 w-16 animate-pulse" />
            Student Management
          </h1>
          <p className="text-xl text-white opacity-90 shadow-sm">Empowering education through efficient management</p>
        </div>

          {/* Buttons aa map panrom check 6th line */}
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="flex-1 min-w-[300px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {buttons.map(({ to, text, color, icon: Icon }) => (
                <Link to={to} className="block">
                  <button className={`w-full ${color} text-white py-4 px-6 rounded-lg font-bold text-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 active:scale-95 flex items-center justify-center space-x-3`}>
                    <Icon className="h-6 w-6" />
                    <span>{text}</span>
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Text in the image using positioning */}
          <div className="flex-1 min-w-[300px]">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img  src="/public/images/student.webp"  className="w-full h-auto object-cover"  alt="Students collaborating" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white text-xl font-semibold p-6">
                  Nurturing tomorrow's leaders today
                </p>
              </div>
            </div>
          </div>
        </div>

          {/* Footer  */}
        <footer className="mt-16 text-center text-white opacity-90">
          <p>&copy; 2024 Student Management System. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default HomePage