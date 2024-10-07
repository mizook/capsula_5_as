import express from "express";

const app = express();
const port = 5003;

app.use((req, res, next) => {
  const apiKey = req.header("X-API-KEY");
  if (apiKey !== "secret-key") {
    return res.status(401).send("Unauthorized");
  }
  next();
});

app.get("/customer", (req, res) => {
  res.send("GET all customers - Express API");
});

app.get("/customer/:id", (req, res) => {
  res.send(`GET customer ${req.params.id} - Express API`);
});

app.post("/customer", (req, res) => {
  res.send("POST new customer - Express API");
});

app.put("/customer/:id", (req, res) => {
  res.send(`PUT update customer ${req.params.id} - Express API`);
});

app.delete("/customer/:id", (req, res) => {
  res.send(`DELETE customer ${req.params.id} - Express API`);
});

app.listen(port, () => {
  console.log(`Express API running on port ${port}`);
});
