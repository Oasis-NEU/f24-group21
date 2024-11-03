import supabase from '../supabaseClient.js';
import User from '../Data Modules/user.js';

// FETCHING USERS FROM BACKEND:
// FETCHING USERS FROM BACKEND:
export async function getUsers(req, res) {
  try {
      const { data, error } = await supabase
          .from('user_profile')
          .select('id, created_at, email, first_name, last_name, birthday, password, gender');

      if (error) {
          console.error("Error fetching users:", error);
          return res.status(500).json({ error: 'Failed to retrieve users', details: error });
      }

      console.log("Fetched users data:", data); // Log the raw data fetched

      const users = data.map(user => new User(
          user.id,
          user.created_at,
          user.email,
          user.first_name,
          user.last_name,
          user.birthday,
          user.password,
          user.gender
      ));

      res.json(users.map(user => user.getDetails()));
  } catch (error) {
      console.error("Unexpected error in getUsers:", error);
      res.status(500).json({ error: 'Failed to retrieve users', details: error });
  }
}


// ADDING NEW USER TO SUPABASE:
export async function addUser(req, res) {
  const { email, first_name, last_name, birthday, password, gender } = req.body;

  console.log("Incoming request to add user:", req.body); // Log incoming data

  if (!email || !first_name || !last_name || !birthday || !password || !gender) {
      return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
      const { data, error } = await supabase.from('user_profile').insert([
          { email, first_name, last_name, birthday, password, gender }
      ]);

      console.log("Insert response:", data, error); // Log insert response

      if (error) {
          console.error("Error adding user:", error.message); // More detailed logging
          return res.status(500).json({ error: 'Failed to add user', details: error.message });
      }

      res.status(201).json({ message: 'User added successfully', data });
  } catch (error) {
      console.error("Unexpected error in addUser:", error.message);
      res.status(500).json({ error: 'Failed to add user', details: error.message });
  }
}
