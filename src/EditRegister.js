import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './store';

class EditRegister extends Component {
    constructor(props) {
        super(props);        

        this.unsubscribe = store.subscribe(() => {   
            console.log("Subscribe: ",store.getState());
            
            const isEditMode = store.getState().isEditMode;
            if(isEditMode)
            {
                const person = store.getState().person;
            
                this.refs.firstname.value = person.firstname;
                this.refs.lastname.value = person.lastname;
                
                this.setState({person : store.getState().person}); 
            }                  
        });
    }
    componentDidMount()
    {
        this.refs.firstname.value = this.props.person.firstname;
        this.refs.lastname.value = this.props.person.lastname;
    }

    componentWillUnmount()
    {
        this.unsubscribe();
    }

    onClickUpdate(e) {
        e.preventDefault();
        const storePerson = store.getState().person;

        const person = {
            id: storePerson.id,
            firstname: this.refs.firstname.value,
            lastname: this.refs.lastname.value
        }

        this.props.update(person);
        this.props.setDefault('');
        this.refs.firstname.value = '';
        this.refs.lastname.value = '';
    }

    render() {
        //const { person } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form >
                            <div className="form-group">
                                <label htmlFor="firstname">First Name</label>
                                <input className="form-control" ref="firstname" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Last Name</label>
                                <input className="form-control" ref="lastname" />
                            </div>

                            <button onClick={(e) => this.onClickUpdate(e)} type="button">Save</button>
                        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditRegister);