var express = require("express");


var app = express();

// connect to a port ... 
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 9000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes, require the different js files (routes files)
require("./routes/index")(app);

app.get("/", function(req, res) {
    res.send("Welcome to the Star Wars Page!");
  });
//require("./app/routing/htmlRoutes")(app);

//listen to the port
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });