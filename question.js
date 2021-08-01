

async function getRandomQuestion() {
    fetch("https://conversation-starters-api.herokuapp.com/api/question").then(response => {
        const question = response.json();
        const element = document.querySelector("#question");
        element.innerHTML =  question.question;
    });
}

function main() {
    getRandomQuestion();
}

main();
console.log("object");