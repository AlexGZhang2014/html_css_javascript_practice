class ScaryStory {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  static submitStory(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById('content').value;
    const story = new ScaryStory(title, content);
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
