import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUser } from "../utils/helpers";

//TODO: Rename class
class User extends Component {

    render() {
        const { name, avatar, answers, questions} = this.props.user
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
    
    return {
        user: user
        ? formatUser(user)
        : null
    }
}


export default connect(mapStateToProps)(User)