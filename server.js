const express = require('express');
const cors = require("cors");
const questions = require("./all_questions.json")
const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}))
 
function getRandomQuestion() {
    const question = questions["questions"][Math.floor(Math.random() * questions["questions"].length)];

    return question;
}

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/question', (req, res) => {
    res.send(getRandomQuestion());
});


 
const port = process.env.PORT || 8080;
app.listen(port);