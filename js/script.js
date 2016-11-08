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
  var playerOneRow = $("#player1");
  var gridOne = $(playerOneRow).children();
  if ( $( gridOne[10] ).hasClass( 'active' ) ) {
    $("#winner_one").fadeIn(200);
    playSound('player1');
  };
  var playerTwoRow = $("#player2");
  var gridTwo = $(playerTwoRow).children();
  if ( $( gridTwo[10] ).hasClass( 'active' ) ) {
    $("#winner_two").fadeIn(200);
    playSound('player2');
  };
};

var userInput = function() {
  $('body').keyup(function(e) {
    var gridOne = $("#player1").children();
    var playerOne = $("#player1").children(".active");
    var gridTwo = $("#player2").children();
    var playerTwo = $("#player2").children(".active");
    if ( $(gridOne).index(playerOne) == 10 || $(gridTwo).index(playerTwo) == 10 ) {
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
    endSound();
    resetTable();
  });
  $("body").on( "click", "#no", function() {
    $(".options").hide();
    endSound();
    resetTable();
    hideTable();
    showInstructions();
  });
};

var playSound = function(winner) {
  var sound = $("<embed autoplay='true' height='0' width='0'>");
  if (winner == 'player1') {
    sound.attr('src', 'audio/rebel_theme.mp3');
    $('body').append(sound);
  } else {
    sound.attr('src', 'audio/empire_theme.mp3');
    $('body').append(sound);
  };
};

var endSound = function(winner) {
  var sound = $('embed');
  $(sound).remove();
}
