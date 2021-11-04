const express = require("express"); /*vachercher la dependance*/
const app = express(); /*execut*/
const mysql = require('mysql');

const path = require("path"); /*va chercher le pass*/

const bdd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "tuto_mysql",
    port: 3306,
});

bdd.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "index.html"))
    });
    /*methode get pour aller chercher le doc*/
    app.get('/users', (req, res) => {
        /*  bdd.connect(function(err) {
              if (err) throw err;*/
        bdd.query("SELECT * FROM users", function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
    /*recupere des donnees avec result-au dessus*/
    /*et gestion des erreurs*/


    /*});*/

    //     app.get('/users/add', (req, res) => {
    //         /* bdd.connect(function(err) {
    //              if (err) throw err;
    //              console.log("Connected!");*/
    //         var sql = "INSERT INTO users ( email, password, pseudo) VALUES ('surtlan@gmail.com','0404', 'alan')";
    //         bdd.query(sql, function(err, result) {
    //             if (err) throw err;
    //             console.log("1 record inserted");
    //         });
    //     });
    //     /*});*/

    //     app.get('/users/add', (req, res) => {
    //         /* bdd.connect(function(err) {
    //              if (err) throw err;
    //              console.log("Connected!");*/
    //         var sql = "INSERT INTO users (email, password, pseudo) VALUES ('jy@gmail.com','0405', 'jeanyves')";
    //         bdd.query(sql, function(err, result) {
    //             if (err) throw err;
    //             console.log("1 record inserted");
    //         });
    //     });
    // });


    // app.get('/users/delete', (req, res) => {
    //     /*bdd.connect(function(err) {
    //         if (err) throw err;
    //         console.log("Connected!");*/
    //     var sql = "DELETE FROM users WHERE pseudo  = 'alan'";
    //     bdd.query(sql, function(err, result) {
    //         if (err) throw err;
    //         console.log("Number of records deleted: " + result.affectedRows);
    //     });
});

/*bdd.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");*/
app.get('/users/addmultiple', (req, res) => {
    var sql = "INSERT INTO users (email, password, pseudo) VALUES ?";
    var values = [
        ['so@gmail.com', '5050', 'soph'],
        ['jerem@gmail.com', '5051', 'jeje'],
        ['flo@gmail.com', '5052', 'flo'],
        ['dani@gmail.com', '5053', 'daniel'],
        ['thomas@gmail.com', '5054', 'tom'],
        ['yan@gmail.com', '5055', 'yann'],
        ['pierrey@gmail.com', '50561', 'py'],
        ['alou@gmail.com', '5057', 'alanou']
    ];
    bdd.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});



app.listen(5500, () => {
    console.log("server running on port 5500");
});

/*pour ouvrir un server utiliser express*/