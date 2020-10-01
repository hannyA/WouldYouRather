import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared"
import DashBoard from "./DashBoard"
import LoadingBar from 'react-redux-loading'
import Poll from './Poll'
import NewPoll from './NewPoll'
import Nav from './Nav'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import Header from './Header'
import { handleAuthedUser } from '../actions/authedUser'

class App extends Component {

    state = {
        loggedIn: false
    }

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    
    // handleLogin = (logged) => {
    //     this.setState({
    //         loggedIn: logged
    //     })   
    // }

    handleLogout = () => {
        const { dispatch } = this.props
        dispatch(handleAuthedUser(null))
    }

    isLoggedIn = () => (
        this.props.authedUser !== null
    )

    render() {

        console.log("===========================")
        console.log("===========================")
        console.log("===========================")
        console.log("===========================", this.handleLogout)
        console.log("===========================")
        console.log("===========================")
        console.log("===========================")
        console.log("App extends Component")
        console.log("logged in: ", this.state.loggedIn)
        console.log("logged in this.props.authedUser: ", this.props.authedUser)
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className='container'>
                        <h1 className='center'>Would you rather...</h1>
                            {this.isLoggedIn()
                            ? (this.props.loading === true
                                ? null
                                : <div>
                                    <div>
                                        <Nav loggedIn={this.isLoggedIn()} handleLogout={this.handleLogout} />
                                        <Route path='/' exact component={DashBoard} />
                                        <Route path='/question/:id' component={Poll} />
                                        <Route path='/add' component={NewPoll} />
                                        <Route path='/leaderboard' component={LeaderBoard} />
                                    </div>
                                 </div>
                            ): <Login />
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ authedUser }) {

    return {
        loading: authedUser === null,
        authedUser
    }
}

export default connect(mapStateToProps)(App)