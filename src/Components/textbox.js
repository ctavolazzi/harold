import getRandomInt from '../Functions/Helpers/getRandomInt.js';

console.log('getrandomint', getRandomInt);

// add strings to the responses array to change what shows on the main app screen
const textbox = {
  id: "textbox_01",
  responses: ["Let's go!", "Well how about that.", "Creativity is the spark of life", "There is a ghost in the machine..."],
  initialize: function () {
    return this.responses[getRandomInt(0, this.responses.length - 1)]
  }
};

export default textbox;