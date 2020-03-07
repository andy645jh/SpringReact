import React, { Component } from 'react';

class Register extends Component
{
    constructor(props)
    {
        super(props);   
        this.state = {
            firstname:'',
            lastname:''
        };  
    }

    onClick(e)
    {
        e.preventDefault();
        console.log("Subir"); 
        this.addPerson();       
    }

    async addPerson()
    {
        const data = { 
            firstname: this.state.firstname,
            lastname: this.state.lastname
        };
        
        try {
            this.setState({ isLoading: true });
            const response = await fetch('http://localhost:8080/personas/create',{
                body: JSON.stringify(data),
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            
            const responseJson = await response;  
            if(response.ok)
            {
                this.props.update();
            }
            console.log("Response: ",responseJson.ok);              
            this.setState({ firstname:'', lastname:'', isLoading: false });
        } catch (err) {
            this.setState({ isLoading: false });
            console.error(err);
        }
    }

    onChange(e)
    {        
        this.setState({[e.target.name]:e.target.value});
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form >
                            <div className="form-group">
                                <label htmlFor="firstname">First Name</label>
                                <input className="form-control" onChange={(e)=>this.onChange(e)} value={this.state.firstname} name="firstname" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Last Name</label>
                                <input className="form-control" onChange={(e)=>this.onChange(e)} value={this.state.lastname} name="lastname" />
                            </div>

                            <button onClick={(e)=>this.onClick(e)} type="button">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;