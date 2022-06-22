import getRandomInt from '../Helper_Functions/getRandomInt.js';

console.log('getrandomint', getRandomInt);

const textbox = {
  id: "textbox_01",
  responses: ["Let's go!", "Well how about that.", "Creativity is the spark of life", "There is a ghost in the machine..."],
  identify: function () {
  console.log(this);
  },
  initialize: function () {
    return this.responses[getRandomInt(0, this.responses.length - 1)]
  }
};

export default textbox;