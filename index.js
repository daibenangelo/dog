const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// Sample data for 10 dogs
const dogs = [
  { id: 1, name: "Buddy", breed: "Golden Retriever", age: 3 },
  { id: 2, name: "Luna", breed: "Labrador", age: 2 },
  { id: 3, name: "Charlie", breed: "Beagle", age: 4 },
  { id: 4, name: "Daisy", breed: "Poodle", age: 1 },
  { id: 5, name: "Max", breed: "Bulldog", age: 5 },
  { id: 6, name: "Bella", breed: "German Shepherd", age: 3 },
  { id: 7, name: "Rocky", breed: "Boxer", age: 6 },
  { id: 8, name: "Molly", breed: "Shih Tzu", age: 2 },
  { id: 9, name: "Cooper", breed: "Corgi", age: 4 },
  { id: 10, name: "Lucy", breed: "Husky", age: 3 },
];

// Route to get dog by ID
app.get("/dogs/:id", (req, res) => {
  const dogId = parseInt(req.params.id);
  const dog = dogs.find((d) => d.id === dogId);

  if (!dog) {
    return res.status(404).json({ error: "Dog not found" });
  }

  res.json(dog);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
