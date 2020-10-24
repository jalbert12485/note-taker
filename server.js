const express = require("express");
const path=require("path");
const fs=require("fs");

const app = express();
const PORT = process.env.PORT || 3000;


// Routes
// ===========================================================

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/server/db/db.json"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  }); 
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post("/api/notes", function(req,res){
    

    
    fs.readFile("./server/db/db.json", "utf8", function(err,data){
        if (err) {throw err;}else{
            let notes=JSON.parse(data);
            notes.push({"title": "title",
                        "text": "text",
                        "id": notes.length
                    });
          
    
            fs.writeFile("./server/db/db.json",JSON.stringify(notes), function(err){
                if(err){throw err;}
            });


            res.send(notes);
        } 
    });
    //  let note=req.body; 
   
    

    // notes.push(note);
    // fs.writeFile("./server/db/db.json", JSON.stringify(notes), function(err){
    //     if (err) throw err;
    // } );
 
});

// app.delete("/api/notes/:id", function(){
//     let notes=JSON.parse(fs.readFile("./server/db/db.json", "utf8", function(err){
//         if (err) throw err;
//     }));
//     var id = req.params.id;

//     for(let i=0; i< notes.length; i++){
//         if(notes[i].id == id){
//             notes.splice(i,1);
//         }
//     }
//     fs.writeFile("./server/db/db.json", JSON.stringify(notes), function(err){
//         if (err) throw err;
//     } );
//     res.send(`Note deleted.`);

// });




// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
