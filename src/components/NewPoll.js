import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewPoll extends Component {

    state ={
        toHome: false,
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        const target = e.target

        const name = target.name
        const text = target.value

        this.setState({
            [name]:text,
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        //TODO: Add Poll to store
        console.log("SUbmit form")
        const {optionOne, optionTwo} = this.state
        console.log("SUbmit optionOne", optionOne)
        console.log("SUbmit optionTwo", optionTwo)

        const {dispatch} = this.props
        dispatch(handleAddQuestion(optionOne, optionTwo ))

        this.setState({
            optionOne: '',
            optionTwo:'',
            toHome: true
        })
    } 


    render() {

        // TODO: Redirect to / if submitted

        
        const { optionOne, optionTwo, toHome} = this.state


        if (toHome === true) {
            return <Redirect to='/' />
        }

        console.log("optionOne: ", optionOne )
        console.log("optionTwo: ", optionTwo )

        return (
            <div>
                
                <h3 className='center'> New Poll</h3>
                <h2 className='center'> Would you rather...</h2>
                <form className='new-question' onSubmit={this.handleSubmit}>
                
                    <label htmlFor="optionOne">Option One:</label>
                    <input  id="optionOne" 
                            name='optionOne'
                            value={optionOne} 
                            onChange={this.handleChange}/>
                    
                    <label htmlFor="optionTwo">Option Two:</label>
                    <input  id="optionTwo" 
                            name='optionTwo'
                            value={optionTwo} 
                            onChange={this.handleChange} />
                    <button className='btn'
                            type='submit'
                            disabled={optionOne === '' || optionTwo === ''}>
                        Submit
                    </button>

                    <button className='btn'>
                        Cancel
                    </button>
                </form>
                
            </div>
        )
    }
}

export default connect()(NewPoll)