$("#rolling").on("click",function() {
var nbSix = 0;
var nbOne = 0;
$( ".dice" ).remove();
$( ".nbMain" ).remove();
$( ".diceTotal" ).remove();
  var x = 0;
  var sum = 0;
  var nbDices = $("#nbDices").val();
  var maxRange = 6*nbDices;
  for(x=0;x<nbDices;x++) {
    var valueDice = Math.floor(Math.random() * 6) + 1;
    $("#resultat").append('<div class="dice"><p class="textDice">'+valueDice+'</p></div>');
    sum = sum + valueDice;
    if(valueDice == 6){
      nbSix = nbSix +1;
    }
    if(valueDice == 1){
      nbOne = nbOne +1;
    }
  }

    $("#total").append('<div class="diceTotal"><p class="textDiceTotal">'+sum+'</p></div>');
    $("#nbSix").append('<p class="nbMain">Nombre de Six : <span style="font-weight:bold">'+nbSix+'</span>');
    $("#nbOne").append('<p class="nbMain">Nombre de Six : <span style="font-weight:bold">'+nbOne+'</span>');
});