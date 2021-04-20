const express = require('express');

const app = express();

app.get("/", (req, res) => {
  return res.json({message: "Hello World!! Ignite :D"});
});

//localhost:3333
app.listen(3333, () =>{
  console.log("🚀Back-End Started! Server is On!");
});