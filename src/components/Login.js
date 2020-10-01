import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'
import { formatUser } from "../utils/helpers"
// import { authedUser } from "../reducers/authedUser";
import { handleAuthedUser } from '../actions/authedUser'
//TODO: Fix login format
class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        const a = e.target.value
        console.log('username: ', a)
        this.setState({
            username: a
        })
    }

    handleSubmit  = (e) => {
        e.preventDefault()
        console.log('Login this submit')
        console.log('Login this submit')

        const { dispatch } = this.props

        dispatch(handleAuthedUser( this.state.username ))
    }


    render() {
        const {users} = this.props
        console.log("usrs====: ", users)


        return (
            <div>
                <h2 className='center'>
                Login Page
                </h2>

                <form className='new-question' onSubmit={this.handleSubmit}>
                
                <label htmlFor="optionOne">Username:</label>
                <input  id="optionOne" 
                        name='optionOne'
                        value={this.state.username} 
                        onChange={this.handleChange}
                        />
                
                <label htmlFor="optionTwo">Password:</label>
                <input  id="optionTwo" 
                        name='optionTwo'
                        // value={optionTwo} 
                        // onChange={this.handleChange} 
                />
                <button className='btn'
                        type='submit'>
                    Login
                </button>

            </form>
        </div>
        )
    }
}


function mapStateToProps({authedUser, users, questions}, {handleLogin}) {


    // const usersa = Object.keys(users)
    // const questionsa = Object.keys(users[authedUser].questions).length
    
    // console.log("questions: ", questionsa )

    return {
        users: users,
        handleLogin
    }
}


export default connect(mapStateToProps)(Login)