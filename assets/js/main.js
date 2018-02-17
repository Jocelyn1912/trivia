$('#start').click(function(event) {
  event.target;
  getTrivia();
})

function getTrivia() {
  fetch(`https://opentdb.com/api.php?amount=10`)
    .then(function(response) {
    // Turns the the JSON into a JS object
      return response.json();
    })
    .then(function(categories) {
      const question = categories.results[0].question;
      console.log(categories);
      $('#container').append(question);
    });
}

