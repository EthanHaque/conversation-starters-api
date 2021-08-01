const express = require('express');
const questions = require("./all_questions.json")
const app = express();
app.use(express.json());
 
function getRandomQuestion() {
    const question = questions["questions"][Math.floor(Math.random() * questions["questions"].length)];

    return question;
}

app.get('/api/question', (req, res) => {
    res.send(getRandomQuestion());
});
 
const port = process.env.PORT || 8080;
app.listen(port);