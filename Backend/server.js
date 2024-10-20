import express from "express"; // Use ES module import
import cors from "cors"; // Import cors for CORS functionality

// Initialize Express app
const app = express();

// Configure CORS options
const corsOptions = {
    origin: ["http://localhost:5173", "http://localhost:5174"], // Allow requests from these origins
};

// Use CORS middleware
app.use(cors(corsOptions));

// When a GET request is made to the "/api" route, execute this callback function
app.get("/api", (req, res) => {
    // Respond with a JSON object
    res.json({ fruits: ["apple", "orange", "banana"] });
});

// Start the server and listen on port 8080
app.listen(8080, () => {
    console.log("Server started on port 8080");
});

//Find/Termination of Ports
// lsof -i :<portnumber> finds the current connected ports of <portnumber> 
// kill -9 <PID> (Replace <PID> with the id of the active port) to terminate the connection









