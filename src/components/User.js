import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUser } from "../utils/helpers";
class User extends Component {

    render() {
        const { name, avatar, answers, questions} = this.props.user

        console.log('==========')
        console.log('==========')

        console.log('==========')
        console.log("ADWD user:", this.props.user)


        return (
            <div> 
                <div>{name}</div>
                <img src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar' 
                />
                <p>Number of questions asked: {questions}</p>
                <p>Number of questions answered: {answers}</p>
            </div>
        )
    }
}


function mapStateToProps({authedUser, users, questions}, {id} ) {

    const user = users[id]

    console.log("AFA user:", user)
    console.log("AFA users:", users)
    
    return {
        user: user
        ? formatUser(user)
        : null
    }
}


export default connect(mapStateToProps)(User)