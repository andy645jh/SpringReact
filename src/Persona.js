import React, { Component } from 'react';

const style = {
    display: 'inline',
    margin: '10px',
};

const styleBox = {
    border: '1px solid 0x555',
    padding: '15px',
};

class Persona extends Component {
    constructor({ id, firstname, lastname }) {
        super();
        this.state = {
            id: id,
            firstname: firstname,
            lastname: lastname
        }
    }

    onClick(e, id) {
        console.log("Id: ", id);
        this.deletePersona();
    }

    onClickEditar(e, id) {
        console.log("Id: ", id);
        this.deletePersona();
    }

    async deletePersona() {

        try {
            this.setState({ isLoading: true });
            const response = await fetch('http://localhost:8080/personas/'+this.state.id, {                
                method: 'DELETE'                
            });

            const responseJson = await response;  
            if(responseJson.ok)
            {
                this.props.update();
            }
        } catch (err) {
            this.setState({ isLoading: false });
            console.error(err);
        }

    }

    render() {
        return (
            <div style={styleBox}>
                <h3 style={style} key={this.state.id} id={this.state.id}>{this.state.firstname} {this.state.lastname}</h3>                
                <button type="button" onClick={(e) => this.onClick(e, this.state.id)}>X</button>
                <button type="button" onClick={(e) => this.onClickEditar(e, this.state.id)}>E</button>
            </div>
        );
    }
}

export default Persona;