$(document).ready(function() {
  ////chiedo numero giocatori
var nr_giocatori = parseInt(prompt('quanti giocatori vuoi generare?'));
// richiedo i giocatori all'api
$.ajax({
  url: 'https://www.boolean.careers/api/array/basket?n=numberPlayers',
  method: 'GET',
  data: {
    n: nr_giocatori
  },
  success: function(giocatori) {
    //per ogni giocatore creato, viene generata una card e viene inserita nell'html
    for (var i = 0; i < giocatori.response.length; i++) {
      var source = document.getElementById("cardTemplate").innerHTML;
      var template = Handlebars.compile(source);
      var context = {
        codice: giocatori.response[i].playerCode,
        rimbalzi: giocatori.response[i].rebounds,
        falli: giocatori.response[i].fouls,
        punti: giocatori.response[i].points,
        tiri2punti: giocatori.response[i].twoPoints,
        tiri3punti: giocatori.response[i].threePoints
      };
      var html = template(context);
      $('.flex-container').append(html);
    }


  } ,
  error: function(){
    alert('errore')
  }
});







});
