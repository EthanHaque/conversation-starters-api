

async function getRandomQuestion(ratings) {
    const url = `https://conversation-starters-api.herokuapp.com/api/v1/question/?ratings=${ratings}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
            changeText(data);
        } else {
            throw new Error('An error occured.');
        }
    } catch (error) {
        console.log(error);
    }
}

function changeText(data) {
    const questionEle = document.querySelector("#question");
    const ratingEle = document.querySelector("#rating")
    questionEle.innerHTML = data.question;
    ratingEle.innerHTML = `rating: ${data.rating}`;
}

getRandomQuestion();
