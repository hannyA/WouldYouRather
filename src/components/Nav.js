import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'


class Nav extends Component {

    handleSubmit  = (e) => {
        e.preventDefault()
        console.log('handle this submit')
        console.log('handle this submit')

        this.props.handleLogout()
    }


    render() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add' exact activeClassName='active'>
                        New Poll
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' exact activeClassName='active'>
                        leaderboard
                    </NavLink>
                </li>
                {this.props.loggedIn && (
                    <li >
                    
                    {/* TODO: Setup log out */}
                    <NavLink to='/' onClick={this.handleSubmit}  exact>
                        Log out
                    </NavLink>
                </li>
                )}

            </ul>
        
        </nav>
    )}
}

export default Nav