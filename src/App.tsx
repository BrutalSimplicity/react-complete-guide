import React, { Component } from 'react';
import './App.css';
import Person, { PersonProps } from './Person/Person'
import Collections from './Common/Collections';
import _ from 'lodash';

interface AppState {
  persons: PersonProps[];
  showPersons: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Manu', age: 29 },
        { id: '3', name: 'Stephanie', age: 26 }
      ],
      showPersons: false
    }
  }

  nameChangedHandler = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    this.setState({
      persons: Collections.update(this.state.persons, {id: id}, {name: event.target.value})
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  deletePersonHandler = (id: string) => {
    this.setState({
      persons: Collections.remove(this.state.persons, {id: id})
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    let persons = null;

    if (this.state.showPersons) {
      style.backgroundColor = 'red';
      persons = (
          <div>
            {this.state.persons.map((person) => {
              return (
                <Person 
                id={person.id}
                click={this.deletePersonHandler.bind(this, person.id)}
                name={person.name} age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
              )
            })}
          </div>
      );
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Names</button>
          {persons}
        </div>
    );
  }
}

export default App;
