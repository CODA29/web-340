// game-characters.js
const { spawn } = require("child_process");
const {join} = require("path");
const dataFile = join(__dirname,"game-characters-data.js");

class GameCharacters {
  constructor(scriptPath = dataFile) {
    // TODO: Set the script file path
    this.scriptPath = scriptPath;
  }

  getCharacters(callback) {
    // TODO: Implement this method
    const child = spawn("node", [this.scriptPath]);

    child.stdout.on("data", (data) => {
      const characterData = JSON.parse(data.toString());
      callback(null, characterData);
    });

    child.stderr.on("data", (data) =>{
      console.error(`stderr: ${data}`);
      callback(new Error(data.toString()), null);
    });

    child.on("error", (error) =>{
      console.error(`spawn error: ${error}`);
      callback(error, null);
    });
  }
}

module.exports = { GameCharacters };