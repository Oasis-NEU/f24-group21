import express from "express";
import cors from "cors";

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"],
};


app.use(cors(corsOptions));


// When a GET request is made to the "/api" route, execute this callback function
app.get("/api", (req, res) => {
    // res.json will send a response with an object containing an array of fruits
    res.json({"fruits": ["apple", "orange", "banana"]});
});

// Start the server and listen on port 8080: http://localhost:8080/api to access
app.listen(8080, () => {
    console.log ("Server started on port 8080");
});

//Find/Termination of Ports
// lsof -i :8080 finds the current connected ports
// kill -9 <PID> (Replace <PID> with the id of the active port) to terminate the connection







