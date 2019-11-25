// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }
  setState(props) {
    // YOUR CODE


    this.state = { ...this.state, ...props};

    return this.state;
  }
}

//got picture in camera for date 11/20/2019