$(document).ready(function() {
  hideTable();
  hideInstructions();
  userInput();
  buttonInput();
});

var update_player_position = function(player) {
  var userRow = $("#" + player);
  var $activeElement = $($(userRow).children(".active"));
  var array = $("#player1").children();
  var sibling = $activeElement.next();
  $activeElement.removeClass("active");
  $(sibling).addClass("active");
  setTimeout(function(){
    alertWinner()
    ,200 
  });
};

var alertWinner = function() {
  // For Player One:
  var playerOneRow = $("#player1");
  var gridOne = $(playerOneRow).children();
  if ( $( gridOne[19] ).hasClass( 'active' ) ) {
    $("#winner_one").fadeIn(200);
  };
  // For Player Two:
  var playerTwoRow = $("#player2");
  var gridTwo = $(playerTwoRow).children();
  if ( $( gridTwo[19] ).hasClass( 'active' ) ) {
    $("#winner_two").fadeIn(200);
  };
};

var userInput = function() {
  $('body').keyup(function(e) {
    var gridOne = $("#player1").children();
    var playerOne = $("#player1").children(".active");
    var gridTwo = $("#player2").children();
    var playerTwo = $("#player2").children(".active");
    if ( $(gridOne).index(playerOne) == 19 || $(gridTwo).index(playerTwo) == 19 ) {
      console.log("The Game Has Ended.");
    } 
    else {
      if (e.keyCode == 81) {
        update_player_position('player1');
      };
      if (e.keyCode == 80) {
        update_player_position('player2');
      };
    };
  });
};

var hideTable = function() {
  $(".racer_table").hide();
};

var showTable = function() {
  $(".racer_table").show();
};

var hideInstructions = function() {
  $("#race-begin").on( "submit", function(e) {
    e.preventDefault();
    console.log("asdf")
    $(".instructions").hide();
    showTable();
  });
};

var showInstructions = function() {
  $(".instructions").show();
}

var resetTable = function() {
  $('td').removeClass('active');
  var playerOneCell = $("#player1").children()[0];
  var playerTwoCell = $("#player2").children()[0];
  $(playerOneCell).addClass("active");
  $(playerTwoCell).addClass("active");
}

var buttonInput = function() {
  $("body").on( "click", "#yes", function() {
    $(".options").fadeOut(200);
    resetTable();
  });
  $("body").on( "click", "#no", function() {
    $(".options").hide();
    resetTable();
    hideTable();
    showInstructions();
  });
};
