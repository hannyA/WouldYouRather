import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class LeaderBoard extends Component {


    render() {
        const {users} = this.props

        console.log("usrs====: ", users)


        return (
            <div>
                <h2 className='center'>
                    LeaderBoard
                </h2>
                <ul className='center'>{users.map((id) => (
                    <li key={id}>
                        <User id={id} />
                    </li>
                ))}
                </ul>
            </div>
        )
    } 
}
 

function mapStateToProps({authedUser, users, questions}) {


    const usersa = Object.keys(users)
    // const questionsa = Object.keys(users[authedUser].questions).length
    
    console.log("answers: ", users )
    // console.log("questions: ", questionsa )

    return {
        users: usersa
        .sort((a,b) => (Object.keys(users[b].answers).length + Object.keys(users[b].questions).length) 
        - (Object.keys(users[a].answers).length + Object.keys(users[a].questions).length))
    }
}


export default connect(mapStateToProps)(LeaderBoard)