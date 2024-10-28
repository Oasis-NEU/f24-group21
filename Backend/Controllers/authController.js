import supabase from '../supabaseClient.js';


// Sign-in with OTP email link
export const signInWithEmail = async (req, res) => {
  const { email } = req.body;

  if (!email.endsWith('@northeastern.edu')) {
    return res.status(400).json({ error: "Only Northeastern emails allowed" });
  }

  const { error } = await supabase.auth.signInWithOtp({ email });

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "OTP sent successfully" });
};

// Sign-in with password
export const signInWithPassword = async (req, res) => {
  const { email, password } = req.body;

  if (!email.endsWith('@northeastern.edu')) {
    return res.status(400).json({ error: "Only Northeastern emails allowed" });
  }

  const { error, user } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "Signed in successfully", user });
};

// Sign-out
export const signOut = async (req, res) => {
  const { error } = await supabase.auth.signOut();

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "User signed out successfully" });
};
