const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3005;
var Verse = require('./Verse.model');


// Create link to Angular build directory

app.use(express.static(__dirname + '/dist/quran-navigator'));

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, 
{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
/* 
an exemple of  documents
{
    "nSurah" : 1,
    "nAyah" : 1,
    "content" : "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "language" : "Original Arabic"
} 
*/

//getting a sourat /lang
app.get('/sourat/:id', function (req, res) {
    const id = req.params.id;
    const keys = id.split("-");


    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Verse.find({ "nSurah": keys[1], "language": keys[0] }, { _id: 0, "language": 0 }, function (err, p) {
        if (err) {
            res.send("error has occured");
        }
        else {
            console.log("Full Search sourat", p.length);
            res.json(p);
        }
    }).sort({ nAyah: 1 });//order by ayatnumber  asc

});

//getting a verse in a sourat /lang
app.get('/verse/:id', function (req, res) {
    const id = req.params.id;
    const keys = id.split("-");


    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Verse.find({ "nSurah": keys[1], "language": keys[0], "nAyah": keys[2] }, { _id: 0, "language": 0 }, function (err, p) {
        if (err) {
            res.send("error has occured");
        }
        else {
            console.log("Search of verse in surat", p.length);
            res.json(p);
        }
    });

});

//search a word /lang
app.get("/searchword/:id", function (req, res) {
    let id = req.params.id;
    const keys = id.split("-");
    const help = keys[0] + "-";
    const searchvalue = id.replace(help, '');


    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    //// partial name with regular expressions
    Verse.find(
        {
            "language": keys[0],
            "content": { $regex: new RegExp('.*' + searchvalue + '.*', "i") }
        },
        { _id: 0, "language": 0 }).exec(function (err, results) {
            if (!err) {
                console.log("Partial Search by word", results.length);
                res.json(results);
            }
            else {
                console.log(err);
            }
        });

});
//search word in sourat /lang
app.get("/searchwordinsourat/:id", function (req, res) {
    let id = req.params.id;
    const keys = id.split("-");
    const words = keys[2].split(" ");
    console.log("words", words);
    words.forEach(word => {
        console.log(word)
    });

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    //// partial name
    Verse.find(
        {
            "language": keys[0],
            "nSurah": keys[1],
            "content": { $regex: new RegExp('.*' + keys[2] + '.*', "i") }
        },
        { _id: 0, "language": 0 }).exec(function (err, results) {
            if (!err) {
                console.log("Partial Search by word in sourat", results.length);
                res.json(results);
            }
            else {
                console.log(err);
            }
        });

});

// Listen to queries
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});
