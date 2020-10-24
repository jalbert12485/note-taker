const express = require("express");
const path=require("path");
const fs=require("fs");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Routes
// ===========================================================

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/server/db/db.json"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  }); 


app.post("/api/notes", function(req,res){
    
    let { title, text }=req.body;

    
    fs.readFile("./server/db/db.json", "utf8", function(err,data){
        if (err) {throw err;}else{
            let notes=JSON.parse(data);
            let note={"title": title,
                "text": text,
                "id": notes.length
            };
            notes.push(note);
          
    
            fs.writeFile("./server/db/db.json",JSON.stringify(notes, null, 2), function(err){
                if(err){throw err;}else{
                    res.json(note);
                }
            });

            
        } 
    });
 
});

app.delete("/api/notes/:id", function(req,res){
    let id=req.params.id;

    fs.readFile("./server/db/db.json", "utf8", function(err,data){
        if (err){ throw err;}else{
            let notes=JSON.parse(data);
            for(let i=0; i< notes.length; i++){
                if(notes[i].id == id){
                    notes.splice(i,1);
                }
            }
            for(let i=0; i< notes.length; i++){
                notes[i].id=i;
            }

            fs.writeFile("./server/db/db.json", JSON.stringify(notes, null, 2), function(err){
                if (err){ throw err;}else{  res.send(`Note deleted.`);}
            } );
          
  


        }
    });
});
 






app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
