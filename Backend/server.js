import app from './app.js';  // Import the app from app.js

const port = 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//Find/Termination of Ports
// lsof -i :<portnumber> finds the current connected ports of <portnumber> 
// kill -9 <PID> (Replace <PID> with the id of the active port) to terminate the connection









