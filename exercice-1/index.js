"use strict";

/**
 * RandomGrid : function who will give us the parameters of our tables
 * @param {Number} xAxis : choose a number of column
 * @param {Number} yAxis : choose a number of lines
 */
var RandomGrid = function RandomGrid(xAxis, yAxis) {
  this.xAxis = xAxis;
  this.yAxis = yAxis;
  this.arrayColors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  this.intervalDelay = this.randomDelay();
}

/**
 * firstTable : method who will create our first table if it does not exist
 */
RandomGrid.prototype.firstTable = function() {
  var table = document.createElement('table');
  table.style.borderCollapse = 'collapse';

  for (var i = 0; i < this.yAxis; i++) {
    var line = document.createElement('tr');
    line.style.border = "0.5px solid black";
    for (var j = 0; j < this.xAxis; j++) {
      var column = document.createElement('th');
      column.style.width = "50px";
      column.style.height = "50px";
      column.style.border = "0.5px solid black";
      column.style.backgroundColor = this.generateRandomColor();
      line.appendChild(column);
    }
    table.appendChild(line);
  }
  document.body.appendChild(table);
}

/**
 * generateRandomColor : Method who generate a random color. 
 */
RandomGrid.prototype.generateRandomColor = function() {
  var color = '#';
  for (var k = 0; k < 8; k++) {
    color += (this.arrayColors[Math.floor(Math.random() * this.arrayColors.length)]).toString();
  }
  return color;
}

/**
 * changeColor : a method who will change a color of a square of our choice
 * @param {Number} indexOfTheSquare : parameter who will indicate us the square who we will change the color
 */
RandomGrid.prototype.changeColor = function(indexOfTheSquare) {
  var allSquare = document.querySelectorAll('th');
  allSquare[indexOfTheSquare].style.backgroundColor = this.generateRandomColor();
};

/**
 * randomDelay : generate a random number between 1000 and 2000
 */
RandomGrid.prototype.randomDelay = function() {
  return (Math.random() * 1000) + 1000
}

/**
 * run : It will generate a table, if it does not exist and it will change the color of a random square every 1000 to 2000 milliseconds.
 */
RandomGrid.prototype.run = function() {
  setInterval(function() {
    var indexOfTheSquare = Math.floor(Math.random() * (this.xAxis * this.yAxis));
    this.intervalDelay = this.randomDelay();
    if(!document.querySelector('table')) {
      return this.firstTable();
    }
    return this.changeColor(indexOfTheSquare);  
  }.bind(this), this.intervalDelay)
}

var RandomGrid = new RandomGrid(7, 7);
RandomGrid.run();