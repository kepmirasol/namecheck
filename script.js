function checkSpelling() {
    // Read input names from textarea
    var inputText = document.getElementById('namesInput').value;

    // Split input text into individual words
    var words = inputText.split(/\s+/);

    // Read the custom dictionary list from the CSV file (you'll need to implement this)
    var dictionary = []; // Array to store dictionary words

    // Spell check logic
    var misspelledWords = [];
    words.forEach(function(word) {
        if (!dictionary.includes(word)) {
            misspelledWords.push(word);
        }
    });

    // Display spell check results
    var resultsDiv = document.getElementById('spellCheckResults');
    resultsDiv.innerHTML = '<p>Misspelled Words:</p>';
    misspelledWords.forEach(function(word) {
        resultsDiv.innerHTML += '<p>' + word + '</p>';
    });
}
