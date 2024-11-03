import app from './app.js';  // Ensure the correct path to app.js

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//Find/Termination of Ports
// lsof -i :<portnumber> finds the current connected ports of <portnumber> 
// kill -9 <PID> (Replace <PID> with the id of the active port) to terminate the connection









