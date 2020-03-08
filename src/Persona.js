import React, { Component } from 'react';
import {connect} from 'react-redux';

const style = {
    display: 'inline',
    margin: '10px',
};

const styleBox = {
    border: '1px solid 0x555',
    padding: '15px',
};

class Persona extends Component {
   
    onClick(e, id) {
        console.log("Id: ", id);
        //this.deletePersona();
        this.props.delete(id);
    }

    onClickEditar(e, id) {
        console.log("Id: ", id);            

        this.props.setEditMode({
            isEditMode:true
        });

        this.props.setPerson({
            id: this.props.id,
            firstname: this.props.firstname,
            lastname: this.props.lastname
        });

        this.props.edit();
    }   

    render() {
        return (
            <div style={styleBox}>
                <h3 style={style} id={this.props.id}>{this.props.id} --> {this.props.firstname} {this.props.lastname}</h3>                
                <button type="button" onClick={(e) => this.onClick(e, this.props.id)}>X</button>
                <button type="button" onClick={(e) => this.onClickEditar(e, this.props.id)}>E</button>
            </div>
        );
    }
}

const mapStateToProps = state =>
({
    person:state.person
});

const mapDispatchToProps = dispatch =>
({
    setPerson(person)
    {
        dispatch({
            type: 'SET_PERSON',
            person
        })        
    },

    setEditMode(isEditMode){
        dispatch({
            type:'SET_EDIT_MODE',
            isEditMode
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Persona);