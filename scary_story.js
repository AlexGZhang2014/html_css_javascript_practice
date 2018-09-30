class ScaryStory {
  constructor(attributes) {
    this.title = attributes.title;
    this.content = attributes.content;
  }

  static submitStory(e) {
    e.preventDefault();
    alert("BOO!");
  }

  static addJSListener() {
    const button = document.getElementById('submit_story');
    button.addEventListener("submit", ScaryStory.submitStory);
  }

  static ready() {
    ScaryStory.addJSListener();
  }
}

function start() {
  alert("STARTO");
}

document.addEventListener("DOMContentLoaded", function(event) {
  ScaryStory.ready();
  start();
});
