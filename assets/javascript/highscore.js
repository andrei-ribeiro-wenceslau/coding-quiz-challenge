// Retrieve stored scores from local storage and parse them as a JavaScript object
var storedScores = JSON.parse(localStorage.getItem("userData"));

// Select the element with ID "highScoreListArea" and assign it to highScoreListAreaEl variable
var highScoreListAreaEl = document.querySelector("#highScoreListArea");

// Select the elements with IDs "backButton" and "clearScores" and assign them to respective variables
var backBtn = document.querySelector("#backButton");
var clearBtn = document.querySelector("#clearScores");

// Function to display scores on the page
function displayScores() {
    // Check if storedScores is not null
    if (storedScores !== null) {
        // Sort the storedScores array in descending order based on userScore
        storedScores.sort(function(a, b) {
            return b.userScore - a.userScore;
        });

        // Create an ordered list element
        var scoreList = document.createElement("ol");

        // Loop through storedScores array
        for (var i = 0; i < storedScores.length; i++) {
            // Get initials and scores from each entry
            var initials = storedScores[i].inits;
            var scores = storedScores[i].userScore;

            // Create a list item element
            var scoreEntry = document.createElement("li");
            
            // Set the innerHTML of the list item to display initials and scores
            scoreEntry.innerHTML = initials + " - " + scores;

            // Append the list item to the scoreList
            scoreList.appendChild(scoreEntry);
        }

        // Append the scoreList to the highScoreListAreaEl
        highScoreListAreaEl.appendChild(scoreList);
    }
}

// Call the displayScores function to display the scores on the page
displayScores();

// Add event listener to backBtn element
backBtn.addEventListener("click", function () {
    // Redirect to "index.html" when the button is clicked
    location.href = "index.html";
});

// Add event listener to clearBtn element
clearBtn.addEventListener("click", function () {
    // Clear the innerHTML of highScoreListAreaEl
    highScoreListAreaEl.innerHTML = "";
    
    // Clear the local storage
    window.localStorage.clear();
});
