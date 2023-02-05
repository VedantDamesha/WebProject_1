const express  = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 5000;

// // public static path
// console.log(path.join(__dirname, "../public")); 
const staticPath = path.join(__dirname , "../public");
const template_path = path.join(__dirname, "../templates/views");

const partials_path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));





//routing
app.get("/", function(req,res){
    res.render("index");

});

app.get("/weather", function(req,res){
    res.render("weather");
})

app.get("/about" , function(req,res){
    // res.send("Developed by Vedant Damesha.");
    res.render("about");
})

app.get("*", function(req,res){
    // res.send("ERROR 404, Page Not Found.")
    res.render("404error", {
        errorMsg : 'Sorry Go Back' , 
    });
})

app.listen(port, function(req,res){
    console.log(`Listening to the port at ${port}`);
});