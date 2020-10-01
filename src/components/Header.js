import React, { Component } from 'react'
import { formatUser } from '../utils/helpers'
import { connect } from 'react-redux'

class Header extends Component {

    logout() {
        console.log("thips.handle pROPMSF:", this.props)

        const { handleLogout} = this.props
        console.log("thips.handleLogout():", handleLogout)


        this.props.handleLogout()
    }

    render() {
        const {avatar, name} = this.props.user
        const { handleLogout} = this.props

        console.log("thips.handleLogout():", handleLogout)
        
        return (
            <div>

                <img src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar' 
                />
                <div>{name}</div> 
                <button onClick={() => this.logout()}>Log out</button>

            </div>
        )
    }
}


function mapStateToProps({ authedUser, users, questions }, {handleLogout}) {
    
    const user = users[authedUser]
    return {
        handleLogout,
        user: user
        ? formatUser(user)
        : null,
    }
}


export default connect(mapStateToProps)(Header)