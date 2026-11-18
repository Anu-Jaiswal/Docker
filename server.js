
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const mongoUrl = "mongodb://host.docker.internal:27017/loginDB";
const client = new MongoClient(mongoUrl);

async function startServer() {
    try {
        await client.connect();
        console.log("MongoDB connected successfully!");

        const db = client.db("loginDB");
        const users = db.collection("users");

        // Display index.html
        app.get("/", (req, res) => {
            res.sendFile(__dirname + "/index.html");
        });

        // Register route
        app.post("/register", async (req, res) => {
            try {
                const { email, password } = req.body;

                const existingUser = await users.findOne({ email });

                if (existingUser) {
                    return res.status(409).send("User already exists!");
                }

                await users.insertOne({
                    email,
                    password
                });

                res.send("Registration successful!");

            } catch (err) {
                res.status(500).send("Registration error!");
            }
        });

        // Login route
        app.post("/login", async (req, res) => {
            try {
                const { email, password } = req.body;

                const user = await users.findOne({
                    email,
                    password
                });

                if (!user) {
                    return res.status(401).send("Invalid credentials!");
                }

                res.send("Login successful!");

            } catch (err) {
                res.status(500).send("Login error!");
            }
        });

        // Start server
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });

    } catch (err) {
        console.log("Database connection failed:", err);
    }
}

startServer();
