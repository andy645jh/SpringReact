import React, { Component } from 'react';
import Register from './Register';
import People from './People';
import Services from './PersonService';
import { Provider } from 'react-redux';
import store from './store';
import EditRegister from './EditRegister';

class App extends Component {
  constructor() {
    super();

    const person = store.getState().person;
    this.state = {
      isLoading: false,
      isEditMode: false,
      person: person,
      people: []
    };

    this.services = new Services();
  }

  update() {
    this.getAllPeople();
  }

  componentDidMount() {
    this.getAllPeople();
  }

  getAllPeople() {
    this.services.getAllPeople().then(people => {
      this.setState({ isLoading: false, people: people });
    });
  }

  deletePerson(id) {
    this.services.deletePerson(id).then((result) => {
      console.log("DeletePersonResult:", result);
      if(result)
      {
        this.update();
      }      
    });
  }

  createPerson(person) {
    console.log("CreatePerson:", person);
    this.services.createPerson(person).then((result) => {
      //this.update();
      console.log("CreatePersonResult:", result);
      if(result)
      {        
        this.setState({...this.state, fields:{
          firstname:'',
          lastname:''
        }});
        this.update();
        return true;
      }else{
        return false;
      }
      
    });
  }

  updatePerson(person) {
    this.services.updatePerson(person).then((result) => {
      this.update();
      this.setState({
        isEditMode:store.getState().isEditMode        
      });
      console.log("UpdatePersonResult:", result);
    });
  }

  editMode()
  {
    this.setState({
      isEditMode:store.getState().isEditMode,
      person: store.getState().person 
    });
  }

  render() {
    const { isLoading, people, person, isEditMode } = this.state;

    return (
      <Provider store={store}>
      <div className="App container">
        {
          (isEditMode) ? <EditRegister person={person} update={(p)=> this.updatePerson(p)} /> :
          <Register create={(p) => this.createPerson(p)} person={person} /> 
        }        
        {
          (!isLoading && people != null) &&
          <People delete={(id)=> this.deletePerson(id)} edit={(p)=> this.editMode(p)} people={people} />
        }
      </div>
      </Provider>
    );
  }

}

export default App;
