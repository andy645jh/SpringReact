import React, { Component } from 'react';
import Persona from './Persona';

class People extends Component
{   
    getPerson(person)
    {
        const p = {
            person: {
                id: person.id,
                firstname: person.firstname,
                lastname: person.lastname,
        }};
        return p;
    }

    render() {
        const people = this.props.people;
        console.log("People.render ",people);
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                    {
                        (people!=null) &&
                        people.map((person) => 
                        <Persona 
                            edit={this.props.edit} 
                            delete={this.props.delete} 
                            key={person.id}                             
                            id={person.id}
                            firstname={person.firstname}
                            lastname={person.lastname}/>)                  
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default People;