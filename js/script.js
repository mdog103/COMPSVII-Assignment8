console.log("script.js connected!");

let blocks = document.querySelectorAll(".question-block");
let userAnswers = {};

blocks.forEach(function(block) {
    let buttons = block.querySelectorAll(".answer-btn");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

            // 2. Get the data using the dataset attribute
            let buttonid = block.id;
            let response = button.dataset.answer;
            // 3. Store the data in the object
            userAnswers[buttonid] = response;
            console.log(userAnswers); // See current stored answers
        });
    });
});

// Example placeholder for displaying results
function displayResult() {
    let score = 0;

    if (userAnswers["question-1"] === "A") {
        score += 6;
    } else if (userAnswers["question-1"] === "B") {
        score += 5;
    } else if (userAnswers["question-1"] === "C") {
        score += 4;
    } else if (userAnswers["question-1"] === "D") {
        score += 3;
    }

    if (userAnswers["question-2"] === "A") {
        score += 6;
    } else if (userAnswers["question-2"] === "B") {
        score += 5;
    } else if (userAnswers["question-2"] === "C") {
        score += 4;
    } else if (userAnswers["question-2"] === "D") {
        score += 3;
    }

    if (userAnswers["question-3"] === "A") {
        score += 6;
    } else if (userAnswers["question-3"] === "B") {
        score += 5;
    } else if (userAnswers["question-3"] === "C") {
        score += 4;
    } else if (userAnswers["question-3"] === "D") {
        score += 3;
    }

    if (userAnswers["question-4"] === "A") {
        score += 6;
    } else if (userAnswers["question-4"] === "B") {
        score += 3;
    }

    if (userAnswers["question-5"] === "A") {
        score += 6;
    } else if (userAnswers["question-5"] === "B") {
        score += 3;
    }

    if (score >= 15 && score <= 18) {
        result = "You are a terrier";
    } else if (score >= 19 && score <= 21) {
        result = "You are a French Bulldog";
    } else if (score >= 22 && score <= 24) {
        result = "You are a Golden Retriver";
    } else if (score >= 25 && score <= 27) {
        result = "You are a great Dane";
    } else if (score >= 28 && score <= 30) {
        result = "You are a German Shepard";
    }

    resultText.textContent = result;
    resultContainer.style.display = "block";

}
let resultText = document.getElementById("result-text");
let resultContainer = document.getElementById("result-container");
document.getElementById("show-result").addEventListener("click", displayResult);
console.log("button-clicked");
