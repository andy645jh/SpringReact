import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './store';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                id: this.props.id,
                firstname: this.props.firstname,
                lastname: this.props.lastname
            }
        };

        /*const unsubscribe = store.subscribe(() => {   
            console.log("Subscribe: ",store.getState());
            
            const id = store.getState().person.id;
            if(id>=0)
            {
                this.setState({person : store.getState().person}); 
            }                  
        });*/
    }

    onClickAdd(e) {
        e.preventDefault();

        const person = {
            firstname: this.refs.firstname.value,
            lastname: this.refs.lastname.value
        }
        console.log("Subir");

        this.props.create(person);
        this.props.setDefault();

        this.refs.firstname.value = '';
        this.refs.lastname.value = '';
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="container p-3 border m-3">
                <div className="col">
                    <div className='row d-flex align-content-center justify-content-center my-2'>
                        <h2 >REGISTRAR</h2>
                    </div>
                    <div className="row">
                        <div className='col'>
                            <form >
                                <div className="form-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input className="form-control" ref="firstname" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input className="form-control" ref="lastname" />
                                </div>

                                <button onClick={(e) => this.onClickAdd(e)} type="button">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
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
        },

        setDefault(isEditMode) {
            dispatch({
                type: 'DEF',
                isEditMode
            })
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(Register);