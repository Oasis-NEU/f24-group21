import supabase from '../supabaseClient.js'
import User from '../Data Modules/user.js'

// FETCHING USERS FROM BACKEND:
export async function getUsers(req, res) {
  try {
    const { data, error } = await supabase
      .from('user_profile')
      .select('id, created_at, email, first_name, last_name, birthday, password, gender')

    if (error) {
      throw error
    }

    const users = data.map(
      (user) =>
        new User(
          user.id,
          user.created_at,
          user.email,
          user.first_name,
          user.last_name,
          user.birthday,
          user.password,
          user.gender
        )
    )

    res.json(users.map((user) => user.getDetails()))
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to retrieve users')
  }
}

// ADDING NEW USER TO SUPABASE:
export async function addUser(req, res) {
  const { email, first_name, last_name, birthday, password, gender } = req.body

  try {
    const { data, error } = await supabase.from('user_profile').insert([
      {
        email,
        first_name,
        last_name,
        birthday,
        password,
        gender,
      },
    ])

    if (error) {
      throw error
    }
    //Test Responses:
    res.status(201).json({ message: 'User added successfully', data })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to add user' })
  }
}
