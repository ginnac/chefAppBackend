require("dotenv").config();

//required to import the keys.js file
var keys = require("../keys");

//get the key data from keys
var spoonacularId = keys.AppKeys.SpoonId;




//const path = require("path");
const axios = require("axios");
//const router = require("express").Router();
//const bookController = require("../controllers/bookController");

//api routes

module.exports =function(app){
// Matches with "/api/googlebooks"
app.get("/recipesCallBulk/:query", function(req, res){
  var query = req.params.query;
  var url="https://api.spoonacular.com/recipes/informationBulk?apiKey="+ spoonacularId +"&ids=" + query;

    axios.get(url)
      .then (({data}) => {res.json(data); console.log(query)})
      .catch(err => {console.log(err);res.status(422).json(err)});
  });


  app.get("/recipesCall/:query", function(req, res){
    var query = req.params.query
    var url="https://api.spoonacular.com/recipes/search?number=6&apiKey="+spoonacularId+"&query=" + query;
  
      axios.get(url)
        .then (({data}) => {res.json(data); console.log(url)})
        .catch(err => {console.log(err);res.status(422).json(err)});
    });


  }