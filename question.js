

async function getRandomQuestion() {
    const url = "https://conversation-starters-api.herokuapp.com/api/question";
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
            changeText(data.question);
        } else {
            throw new Error('An error occured.');
        }
    } catch (error) {
        console.log(error);
    }
}

function changeText(quesiton) {
    const ele = document.querySelector("#question");
    ele.innerHTML = quesiton;
}

getRandomQuestion();
