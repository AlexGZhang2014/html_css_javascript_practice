class ScaryStory {
  constructor(attributes) {
    this.title = attributes.title;
    this.content = attributes.content;
  }

  static submitStory(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById('content').value;
  }

  static successSubmit(data) {
    let story = new ScaryStory(data);

  }

  static addJSListener() {
    const button = document.getElementById('submit_story');
    button.addEventListener("submit", ScaryStory.submitStory);
  }

  static ready() {
    ScaryStory.addJSListener();
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ScaryStory.ready();
});
