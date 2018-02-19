/* Iniciando contador de respuestas correctas */
let counterCorrect = 0;
/* Iniciando contador de respuestas correctas */
let counterIncorrect = 0;

/* Evento de click para comenzar la trivia y para pasar a la siguiente pregunta*/
$('#start, #next').click(function() {
  // Llamado a la api
  fetch('https://opentdb.com/api.php?amount=30&category=17&difficulty=easy&type=multiple')
    // Solicitando datos en archivo json
    .then(response => response.json())
    // Obteniendo los datos
    .then(data => {
      $('#intro, .answer').remove();
      $('#trivias').empty();
      $('#next').removeAttr('class');
      // Guardando los datos obtenidos
      const datos = data.results;
      const arrayDatos = datos.sort();
      // Creando el DOM con los resultados obtenidos
      $('#trivias').append('<h3>' + arrayDatos[0].question + '</h3><button value="correct" class="option">' + arrayDatos[0].correct_answer + '</button><button value="incorrect" class="option">' + arrayDatos[0].incorrect_answers[0] + '</button><button value="incorrect" class="option">' + arrayDatos[0].incorrect_answers[1] + '</button><button value="incorrect" class="option">' + arrayDatos[0].incorrect_answers[2] + '</button>');
      // Guardando la suma de los resultados
      let sumCounter = counterCorrect + counterIncorrect;
      // Si la suma de los resultados es menos a 10 entonces puede continuar a la siguiente pregunta
      if (sumCounter < 10) {
        // función seleccion de respuesta
        $('.option').click(function() {
          const select = $(this).val();
          if (select === 'correct') {
            $(this).addClass('correct');
            $('#next').after('<h3 class="answer">¡Correct! </h3>');
            counterCorrect++;
          } else {
            $(this).addClass('incorrect');
            $('#next').after('<h3 class="answer">¡Incorrect! The correct answer is: "' + data.results[0].correct_answer + '" </h3>');
            counterIncorrect++;
          }
        });
        // Si la suma de los resultados es ihual a 10 entonces muestra los resultados.
      } if (sumCounter === 10) {
        $('#trivias').empty();
        $('#next').addClass('hidden');
        $('#trivias').append('<h3 class="end"> You got ' + counterCorrect + ' correct answers and ' + counterIncorrect + ' incorrect answers. </h3>');
      }
    });// data
});

