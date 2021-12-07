const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

const jokesDatabase = [
  "q. Why was the JavaScript developer sad? a. Because they didn't Node how to Express himself",
  "Sometimes when I'm writing JavaScript I want to throw up my hands and say 'this is bullshit!' but I can never remember what 'this' refers to.",
];

app.get("/jokes", (_req, res) => {
  res.json(jokesDatabase);
});

app.post("/jokes", (req, res) => {
  const joke = req.body.joke;
  if (joke) {
    jokesDatabase.push(joke);
    res.sendStatus(201);
  } else {
    res.sendStatus(400);
  }
});

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/another-page", (_req, res) => {
  res.sendFile(path.join(__dirname, "/another-page.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
