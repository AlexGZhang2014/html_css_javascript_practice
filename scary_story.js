var allStories = [];

class ScaryStory {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    allStories.push(this);
  }

  static submitStory(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById('content').value;
    const story = new ScaryStory(title, content);
    story.addNewStory();
  }

  addNewStory() {
    const storyDiv = document.createElement("div");
    const title = document.createElement("h4");
    const content = document.createElement("p");
    storyDiv.classList.add("story");
    storyDiv.append(title);
    storyDiv.append(content);
    title.append(this.title);
    content.append(this.content);
    document.getElementById('scary_stories').append(storyDiv);
    storyDiv.addEventListener("click", ScaryStory.playMessage);
  }

  static playMessage() {
    alert(`BOOOOO!`)
  }

  static addJSListener() {
    const scaryStoryForm = document.getElementById('submit_story');
    const stories = Array.from(document.getElementsByClassName('story'));
    scaryStoryForm.addEventListener("submit", ScaryStory.submitStory);
    stories.forEach(story => story.addEventListener("click", ScaryStory.playMessage));
  }

  static ready() {
    ScaryStory.addJSListener();
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ScaryStory.ready();
});
