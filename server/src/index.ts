import express from 'express';

const app = express();
const PORT = 8000;

// Define a route handler for the default home page
app.get('/', (req,res) => res.send('Express + TypeScript Server is awesome! Hello World.'));


// Start the Express server
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
