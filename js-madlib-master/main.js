// Mad Lib - JavaScript

// Event Listeners
document.getElementById('madLibBtn').addEventListener('click', displayMadLib);

// Event Functions
function displayMadLib() {
  // Input
  let verbIng = document.getElementById('verb-ing').value;
  let pluralNoun = document.getElementById('plural-noun').value;
  let adjective = document.getElementById('adj').value;
  let presentTenseVerb = document.getElementById('present-tense-verb').value;
  let noun = document.getElementById('noun').value;
  // Build a message
  let message = '"There are too many ' + verbIng + ' ' + pluralNoun + ' on this ' + adjective + ' airplane!", I screamed. "Somebody has to ' + presentTenseVerb + ' on the ' + noun + ' to solve this problem!"'
  // Output the message
  document.getElementById('output').innerHTML = message;
  // Add border to the output
  document.getElementById('output').style.border = '2px solid rgb(250, 216, 26)';
}

// The words I chose for the Mad Lib
// verbIng = boring
// pluralNoun = passengers
// adjective = quiet
// presentTenseVerb = talk
// noun = plane