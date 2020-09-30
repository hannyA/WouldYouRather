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

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    
    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className='container'>
                        <Nav />
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Route path='/' exact component={DashBoard} />
                                <Route path='/question/:id' component={Poll} />
                                <Route path='/add' component={NewPoll} />
                                <Route path='/leaderboard' component={LeaderBoard} />
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ authedUser }) {

    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)