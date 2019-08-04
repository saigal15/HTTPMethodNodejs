var express = require("express");
var app = express();
 
const movies = require('./components/movies.json');

app.get('/api/movies', (req,res) => {

    res.send(movies);

} );
app.get('/api/movies/:id', (req,res) => {
const movie = movies.find(c => c.id === (req.params.id) )
if(!movie)res.status(404).send("The movie is not found")
res.send(movie)
    

} );
app.listen(3000);
const port = 3000;
console.log(`Server running at port number ${port}`);



