import React, { Component } from 'react';

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
                        people.map((person) => <h3 key={person.id} id={person.id}>{person.firstname} {person.lastname}</h3>)                  
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default People;