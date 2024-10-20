const supabase = require('../supabaseClient');
const User = require('../Data Modules/user');

//Fetch users from Supabase and create User instances (Like a list)

async function getUsers(req, res) {
    try {
      // Fetch user data from Supabase 'users' table
      const { data, error } = await supabase
        .from('user_profile')
        .select();
      if (error) {
        throw error;
      }
      // Convert each user from Supabase into a User class instance
      const users = data.map((user) => new User(user.id, user.first_name, user.last_name, user.age));
      // Send back users' details as response
      res.json(users.map((user) => user.getDetails()));
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to retrieve users');
    }
  }
  module.exports = { getUsers };
  
  