// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }
  setState(props) {
    // YOUR CODE

    for (let key in props) {
      this.state[key] = prope[key];
    }

    return this.state;
  }
}