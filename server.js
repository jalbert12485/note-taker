var express = require("express");
const { get } = require("http");
var path=require("path");

var app = express();
var PORT = process.env.PORT || 3000;


// Routes
// ===========================================================

// app.get("/api/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "/server/db/db.json"));
// });

// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "/public/notes.html"));
//   }); 
// app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "/public/index.html"));
// });

get(req,res);


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
