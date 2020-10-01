import React, {Component} from 'react'
import { NavLink, Link } from 'react-router-dom'
import Header from './Header'

class Nav extends Component {


    render() {

        console.log('this.props.NAVNAV',this.props.handleLogout )


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
                    {/*  TODO: Setup log out  
                        {
                        this.props.loggedIn && (
                        <li >
                            <Link exact to="/">log out</Link>
                        
                    
                    </li>
                    )} */}
                    <li >
                        <Header handleLogout={this.props.handleLogout}/>
                    </li>

                </ul>
            
            </nav>
    )}
}

export default Nav