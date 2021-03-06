const express = require('express');
const cors = require("cors");
const questions = require("./all_questions.json")
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(cors({
    origin: "*"
}))

 
function getRandomQuestion(ratings) {
    const rating = ratings.charAt(Math.floor(Math.random() * ratings.length)); 
    const question = questions["questions"][rating][Math.floor(Math.random() * questions["questions"][rating].length)];

    let questionObj = { "question": question, "rating": rating };

    return questionObj;
}

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/v1/question/', (req, res) => {
    res.send(getRandomQuestion(req.query.ratings));
});


 
const port = process.env.PORT || 8080;
app.listen(port);