 
'use strict';

/**
 * LoadBar : Is a class who represent a loading's bar
 * @param {Number} sum : Represente the total value of our LoadBar
 * @param {Number} nbr : Represent the value of our LoadBar loaded
 */
var LoadBar = function LoadBar(sum, nbr) {
  this.sum = sum;
  this.nbr = nbr;
}

/**
 * percentageBarLoaded : return a percentage of the loadBar loaded
 */
LoadBar.prototype.percentageBarLoaded = function() {
  if (this.sum <= this.nbr) {
    return 100;
  }
  return (100 * this.nbr)/this.sum;
}

/**
 * run : create a LoadBar with the loaded part colored in green
 */
LoadBar.prototype.run = function() {
  var loadBar = document.createElement('div');
  var fullBar = document.createElement('div');

  loadBar.style.width = "90vw";
  loadBar.style.height = "5vh";
  loadBar.style.margin = "0 auto";
  loadBar.style.border = "1px solid black";

  fullBar.style.width = this.percentageBarLoaded() + "%";
  fullBar.style.height = "100%";
  fullBar.style.backgroundColor = "orangered";

  loadBar.appendChild(fullBar);
  document.body.appendChild(loadBar);
}

var loading = new LoadBar(144, 122);
loading.run();
