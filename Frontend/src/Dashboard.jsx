import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from "../../Backend/supabaseClient";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const Dashboard = () => {
  const navigate = useNavigate();
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Function to fetch data from Supabase
  const fetchFruits = async () => {
    try {
      const { data, error } = await supabase
        .from('fruits')
        .select('*');
      
      if (error) throw error;
      setFruits(data);
    } catch (error) {
      console.error("Error fetching fruits:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Get user details
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();
    fetchFruits();
  }, []);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="user-info">
          Welcome, {user?.email}
        </div>
        <button onClick={handleSignOut} className="sign-out-button">
          Sign Out
        </button>
      </nav>

      <div className="dashboard-content">
        <div className="logos">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Dashboard</h1>

        <div className="fruits-container">
          <h2>Fruits from Database</h2>
          {fruits.length > 0 ? (
            <div className="fruits-grid">
              {fruits.map((fruit, index) => (
                <div key={index} className="fruit-card">
                  <h3>{fruit.name}</h3>
                  <p>A fruit in the Supabase database!</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No fruits found in the database.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;