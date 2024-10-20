import supabase from '../supabaseClient.js';
import User from '../Data Modules/user.js';

//Fetch users from Supabase and create User instances (Like a list)

async function getUsers(req, res) {
    try {
      // Fetch user data from Supabase 'users' table
      const { data, error } = await supabase
        .from('user_profile')
        .select('id, email, first_name, last_name, birthday, password, gender');
      if (error) {
        throw error;
      }
      // Convert each user from Supabase into a User class instance
      const users = data.map((user) => new User(user.id, user.email, user.first_name, user.last_name, user.birthday, user.password, user.gender));
      // Send back users' details as response
      res.json(users.map((user) => user.getDetails()));
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to retrieve users');
    }
  }
export default getUsers;


  
  