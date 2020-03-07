import React, { Component } from 'react';
import Persona from './Persona';

class People extends Component
{
    constructor(props)
    {
        super(props);   
        this.state = {                  
            people: this.props.people     
        };  
    }

    render() {
        const {people} = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                    {
                        (people!=null) &&
                        people.map((person) => <Persona update={() => this.props.update()} key={person.id} id={person.id} firstname={person.firstname} lastname={person.lastname}/>)                  
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default People;