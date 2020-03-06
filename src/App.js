import React, { Component } from 'react';
import Register from './Register';
import People from './People';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      people: []
    };
  }
  update() {
    this.loadPeople();
  }

  componentDidMount() {
    this.loadPeople();
  }

  async loadPeople() {

    try {
      this.setState({ isLoading: true });
      const response = await fetch('http://localhost:8080/personas');

      const peopleJson = await response.json();
      this.setState({ people: peopleJson, isLoading: false });

    } catch (err) {
      this.setState({ isLoading: false });
      console.error(err);
    }

  }

  render() {
    const {isLoading, people} = this.state;
    return (
      <div className="App">
        <Register update={() => this.update()} />
        {
          (!isLoading && people!=null) &&
          <People people={this.state.people} />
        }
      </div>
    );
  }

}

export default App;
