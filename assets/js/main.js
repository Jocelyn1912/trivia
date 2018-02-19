let counterCorrect = 0;
let counterIncorrect = 0;

$('#start, #next').click(function() {
  fetch(`https://opentdb.com/api.php?amount=30&category=17&difficulty=easy&type=multiple`)

    .then(response => response.json())
    .then(data => {
      $('#intro, .answer').remove();
      $('#trivias').empty();
      $('#next').removeAttr('class');

      const datos = data.results;
      const arrayDatos = datos.sort();

      $('#trivias').append('<h3>' + arrayDatos[0].question + '</h3><button value="correct" class="option">' + arrayDatos[0].correct_answer + '</button><button value="incorrect" class="option">' + arrayDatos[0].incorrect_answers[0] + '</button><button value="incorrect" class="option">' + arrayDatos[0].incorrect_answers[1] + '</button><button value="incorrect" class="option">' + arrayDatos[0].incorrect_answers[2] + '</button>');

      // función seleccion
      $('.option').click(function() {
        const select = $(this).val();
        if (select === 'correct') {
          $(this).addClass('correct');
          $('#next').after('<h3 class="answer">¡Correct! </h3>');
          counterCorrect++;
          console.log(counterCorrect);
        } else {
          $(this).addClass('incorrect');
          $('#next').after('<h3 class="answer">¡Incorrect! The correct answer is: "' + data.results[0].correct_answer + '" </h3>');
          counterIncorrect++;
          console.log(counterIncorrect);
        }
      });
    });// data
});

