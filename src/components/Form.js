import React, { Component } from 'react';

import './Form.css'


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            globalTitle: 'titre'
        }
    }


    componentDidMount() {
        console.log("Formulaire rendu !")
    }

    handleChange = event => {
        console.log(event.target.value)
        this.setState({title: event.target.value })
    }


    submitForm = e =>{
        e.preventDefault()
        this.setState({globalTitle: this.state.title});
}



    render() {
        return (

            <div className="FormEmployee">

            <h1>{this.state.globalTitle}</h1>

            <form onSubmit={this.submitForm}>
                <fieldset>
                    <div className="form-data">
                        <label htmlFor="title">Titre</label>
                        <input name='title' type="text" onChange={this.handleChange}/>
                    </div>
                    <hr />
                    <div className="form-data">
                        <input name="globalTitle" type="submit" value="Envoyer" onChange={this.handleChange} />
                    </div>
                </fieldset>
            </form>
        </div>
        )    
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.globalTitle !== this.state.globalTitle) {
            console.log("Titre changé")
        }
    }
}

export default Form