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

app.get('/api/question', (req, res) => {
    res.send(getRandomQuestion());
});

app.get('/', function (req, res) {
    res.render('index', {});
  });
 
const port = process.env.PORT || 8080;
app.listen(port);