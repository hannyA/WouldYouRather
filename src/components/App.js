import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared"
import DashBoard from "./DashBoard"

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    
    render() {
        return (
            <div>
                {this.props.loading === true
                    ? null
                    : <DashBoard />
                }
                
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {

    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)