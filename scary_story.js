class ScaryStory {
  constructor(attributes) {
    this.title = attributes.title;
    this.content = attributes.content;
  }

  static submitStory(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById('content').value;
    const newStory = { title, content };
    ScaryStory.successSubmit(newStory);
  }

  static successSubmit(data) {
    let story = new ScaryStory(data);
    story.addNewStory();
  }

  addNewStory() {
    const title = document.createElement("h4");
    const content = document.createElement("p");
    title.append(this.title);
    content.append(this.content);
    document.getElementById('scary_stories').append(title);
    document.getElementById('scary_stories').append(content);
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
