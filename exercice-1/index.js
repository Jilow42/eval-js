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
}

/**
* firstTable : method who will create our first table if it does not exist
*/
RandomGrid.prototype.firstTable = function () {
  var table = document.createElement('table');
  table.style.borderCollapse = 'collapse';

  for (var i = 0; i < this.yAxis; i++) {
    var line = document.createElement('tr');
    line.style.border = "0.5px solid black";
    for (var j = 0; j < this.xAxis; j++) {
      var column = document.createElement('td');
      column.style.width = "50px";
      column.style.height = "50px";
      column.style.border = "0.5px solid black";
      column.style.backgroundColor = this.generateRandomColor();

      // setInterval(function () {
      //   column.style.backgroundColor = this.generateRandomColor();
      // }.bind(this), this.randomDelay());

      line.appendChild(column);
    }
    table.appendChild(line);
  }
  document.body.appendChild(table);
}

/**
* generateRandomColor : Method who generate a random color.
*/
RandomGrid.prototype.generateRandomColor = function () {
  var color = '#';

  for (var k = 0; k < 8; k++) {
    color += (this.arrayColors[Math.floor(Math.random() * this.arrayColors.length)]).toString();
  }

  return color;
}

/**
* randomDelay : generate a random number between 1000 and 2000
*/
RandomGrid.prototype.randomDelay = function () {
  return (Math.random() * 1000) + 1000
}

/**
* run : It will generate a table, if it does not exist and it will change the color of a random square every 1000 to 2000 milliseconds.
*/
RandomGrid.prototype.run = function () {
  this.firstTable();
}

var RandomGrid = new RandomGrid(7, 7);
RandomGrid.run();