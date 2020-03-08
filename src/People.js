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
            <div className="container border m-3 p-3">
                <div className="row">                    
                    <div className="col ">
                        <div className='row d-flex align-content-center justify-content-center my-2'>
                            <h2 >REGISTRADOS</h2>
                        </div>
                        <section>
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
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default People;