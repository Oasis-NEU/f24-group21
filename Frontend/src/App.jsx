import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"; //Might delete later
import { supabase } from "../../Backend/supabaseClient";



function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  // Function to fetch data from Supabase
  const fetchAPI = async () => {
    try {
      // Querying the 'fruits' table from Supabase
      const { data, error } = await supabase
        .from('fruits')  // Assuming you have a table named 'fruits'
        .select('*');    // Select all rows and columns
      
      if (error) {
        throw error;
      }
      // Setting the fruits data
      setArray(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() =>{
    fetchAPI();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {/* Map over the array and render the fruit data */}
        {
          array.map((fruit, index) => (
            <div key={index}>
              <p>{fruit.name} is a fruit in the Supabase database!</p>
              <br></br>
            </div>
          ))
        }
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
