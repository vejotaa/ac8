import express from "express";
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/time', (req, res) => {
  const date = new Date();
  res.json({
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString()
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
