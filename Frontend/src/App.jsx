import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from "axios"; // Optional, can be used for making requests

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    birthday: '',
    password: '',
    gender: '',
  });

  // Function to fetch data from the backend
  const fetchAPI = async () => {
    try {
      const response = await axios.get('/users');  // No need for the port
      setArray(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post('/users', formData); // No need for the port

      // Clear the form after submission
      setFormData({
        email: '',
        first_name: '',
        last_name: '',
        birthday: '',
        password: '',
        gender: '',
      });

      console.log('User added:', response.data);
      fetchAPI(); // Refresh the displayed data
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <h1>Vite + React</h1>

      {/* Form to add a new user */}
      <form onSubmit={handleSubmit}>
        <h2>Add New User</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Add User</button>
      </form>

      <div>
        {/* Render users */}
        {array.map((user, index) => (
          <div key={index}>
            <p>{user.first_name} {user.last_name} is a user in the database!</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
