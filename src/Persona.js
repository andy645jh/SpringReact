import React, { Component } from 'react';
import { connect } from 'react-redux';

class Persona extends Component {

    onClick(e, id) {
        console.log("Id: ", id);
        //this.deletePersona();
        this.props.delete(id);
    }

    onClickEditar(e, id) {
        console.log("Id: ", id);

        this.props.setEditMode({
            isEditMode: true
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
            <div className='row border-bottom bg-light px-2 py-2'>
                
                <div className='col'>
                    <h5 id={this.props.id}>{this.props.id} --> {this.props.firstname} {this.props.lastname}</h5>
                </div>

                <div className='col-auto justify-content-end'>
                    <button className='btn btn-primary mx-2' type="button" onClick={(e) => this.onClickEditar(e, this.props.id)}>E</button>
                    <button className='btn btn-danger' type="button" onClick={(e) => this.onClick(e, this.props.id)}>X</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>
    ({
        person: state.person
    });

const mapDispatchToProps = dispatch =>
    ({
        setPerson(person) {
            dispatch({
                type: 'SET_PERSON',
                person
            })
        },

        setEditMode(isEditMode) {
            dispatch({
                type: 'SET_EDIT_MODE',
                isEditMode
            })
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(Persona);