"use strict";

const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.data = "";
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const description = chunk.toString().trim();

    if(!description){
      callback(new Error("Input can not be empty, please provide a valid input!"));
      return;
    }
    this.data += description;
    callback();
  }

  _read(size) {
    // TODO: Implement your _read method here
    if(this.data){
      const descriptionArray = this.data.split(',');
      const charClass = descriptionArray[0].trim();
      const gender = descriptionArray[1].trim();
      const funFact = descriptionArray[2].trim();

      const message = `Your character is a ${gender} ${charClass} who ${funFact}!`;
      this.push(message);

    }else{
      this.push(null);
    }

    this.data = "";
  }
}

module.exports = CharacterCreator;