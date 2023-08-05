class Queue {
  constructor(arr) {
    this.queue = arr;
    this.minPos = 0;
    this.maxPos = arr.length - 1;
  }
  pushIntoQueue(value) {
    this.queue.push(value);
  }
  popOffQueue() {
    if (this.queue[this.minPos]) {
      let first = this.queue[this.minPos];
      this.minPos++;
      console.log(first);
    }
    else {
      console.log(-1);
    }
  }
}
function createQueue(arr) {
  const queue1 = new Queue(arr);
  queue1.pushIntoQueue(1);
  queue1.popOffQueue();
  queue1.popOffQueue();
  queue1.popOffQueue();
  queue1.pushIntoQueue(1);
  queue1.popOffQueue();
  queue1.popOffQueue();
}
createQueue([4, 5]);
