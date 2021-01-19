"use strict";

/**
 * TicTacToe : the class that contain the game
 */
var TicTacToe = function TicTacToe() {
  this.gameover = false;
  this.victoryP1 = 0;
  this.victoryP2 = 0;
  this.draw = 0;
}

/**
 *  createTable : function to create the game table
 */
TicTacToe.prototype.createTable = function () {
  var table = document.createElement('table');
  table.style.borderCollapse = "collapse";
  table.style.margin = "auto";
  for (var i = 0; i < 3; i++) {
    var border = document.createElement('tr');
    for (var j = 0; j < 3; j++) {
      var square = document.createElement('th');
      square.style.border = "1px solid black";
      square.style.width = "80px";
      square.style.height = "80px";
      border.appendChild(square);
    }
    border.appendChild(square);
  }
  table.appendChild(border);  
  document.body.appendChild(table);
}

var morpion = new TicTacToe();
morpion.run();