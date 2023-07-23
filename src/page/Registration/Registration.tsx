import React, { useState } from 'react';
import { IUser, UserRole } from '../../types/User';
import { useRegisterMutation } from '../../redux/features/user/userApi';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';


export default function Registration() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState<Partial<IUser>>({
    email: '',
    phoneNumber: '',
    role: UserRole.RegisteredUser,
    password: '',
    name: {
      firstName: '',
      lastName: '',
    },
  });

  const [register, { isLoading }] = useRegisterMutation();

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  const [parentKey, childKey] = name.split('.');

  setFormData((prevFormData) => {
    if (parentKey === 'name') {
      return {
        ...prevFormData,
        name: {
          ...prevFormData.name,
          [childKey]: value,
        },
      };
    } else {
      return {
        ...prevFormData,
        [name]: value,
      };
    }
  });
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(formData)
      .unwrap()
      .then((data) => {
       
        navigate('/login');
        console.log('Registration successful', data);
      })
      .catch((error) => {
        // Registration failed, handle error (e.g., show error message)
        console.error('Registration failed', error);
      });
  };

  return (
    <div>
      <Header></Header>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registration
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                name="name.firstName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 my-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
                value={formData.name?.firstName || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                id="lastName"
                name="name.lastName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
                value={formData.name?.lastName || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 my-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
             <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="sr-only">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 my-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            {/* Add other input fields here for phoneNumber, role, password, etc. */}
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isLoading}
            >
              {isLoading ? 'Registering...' : 'Register'}
              </button>
                <p>Already Have an account? please <Link to="/login"
              className="text-indigo-700 hover:bg-indigo-600 hover:text-white rounded p-2 text-sm font-medium"
              >Login</Link> </p>
          </div>
        </form>
      </div>
        </div>
      </div>
  );
}
