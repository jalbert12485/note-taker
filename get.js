function get(req,res){

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/server/db/db.json"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  }); 
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
}

module.exports=get;