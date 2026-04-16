import React, { useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login form submitted:', formData)
    // Add your login logic here
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-2xl p-8 w-full max-w-md border border-[#31b8c6]/20">
        <h2 className="text-3xl font-bold text-center text-white mb-8 text-[#31b8c6]">
          Login
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#31b8c6] focus:border-transparent text-white placeholder-gray-400 transition duration-200"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#31b8c6] focus:border-transparent text-white placeholder-gray-400 transition duration-200"
              placeholder="Enter your password"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#31b8c6] hover:bg-[#2a9ca8] text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#31b8c6] focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Login
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <a href="/register" className="text-[#31b8c6] hover:text-[#2a9ca8] font-medium transition duration-200">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login