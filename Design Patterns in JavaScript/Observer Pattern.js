class YoutubeChannel {
  constructor() {
    this.subscribers = [];
  }
  subscribe(user) {
    this.subscribers.push(user);
    user.update(`You have subscribed the channel.`);
  }
  unsubscribe(user) {
    this.subscribers = this.subscribers.filter((sub) => sub !== user);
    user.update(`You have un-subscribed the channel.`);
  }
  notify(message) {
    this.subscribers.forEach((sub) => sub.update(message));
  }
}
class User {
  constructor(name) {
    this.name = name;
  }
  update(data) {
    console.log(`${this.name}, ${data}`);
  }
}

let bd71 = new YoutubeChannel();
let user1 = new User("Tanjim");
let user2 = new User("Mahtab");

bd71.subscribe(user1);
bd71.subscribe(user2);

bd71.notify("new video is live on the channel .. ");
