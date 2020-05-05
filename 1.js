"use strict";

class Options {
  constructor(height, width, bg, fontSize, textAlign) { 
    this.height = height; 
    this.width = width; 
    this.bg = bg; 
    this.fontSize = fontSize; 
    this.textAlign = textAlign; 
    this.paramText = `height: ${this.height}; width: ${this.width}; 
                      background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`
  }
  
  createDiv(text, styleText = this.paramText) {   
    let div = document.createElement("div");
    document.body.appendChild(div); //добавление в боди
    div.textContent = text;
    div.style.cssText = styleText;
 }
}
let article = new Options('1000px', '1000px', "red", '20px', 'left');
article.createDiv("text text text", 'color: green; font-size: 40px; background-Color: blue;');
article.createDiv("text text text", 'color: white; font-size: 40px; background-Color: blue;');
article.createDiv("text text text");