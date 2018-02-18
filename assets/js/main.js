$('#start, .next').click(function(event) {
  event.target;
  getTrivia();
})

function getTrivia() {
  fetch(`https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple`)
  // boolean para true/false
    .then(function(response) {
    // Turns the the JSON into a JS object
      return response.json();
    })
    .then(function(data) {
      $('#intro').remove();
      const question = data.results[0].question;
      const correct = data.results[0].correct_answer;
      const incorrect = data.results[0].incorrect_answers;
      
      $('#container').append('<div class="trivias"><h3>' + question + '</h3><button value="correct" class="option">' + correct + '</button><button value="incorrect" class="option">' + incorrect[0] + '</button><button value="incorrect" class="option">' + incorrect[1] + '</button><button value="incorrect" class="option">' + incorrect[2] + '</button><button class="next">Next Question</button></div>');

      // función seleccion
      $('.option').click(function() {
        const select = $(this).val();
        if (select == "correct") {
          $(this).addClass("correct");
          $('.trivias').append('<h3>¡Correct!</h3>')
        }else{
          $(this).addClass("incorrect");
          $('.trivias').append('<h3>¡Incorrect!</h3>')
        }
      });


    });//data
}

