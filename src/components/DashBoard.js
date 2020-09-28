import React, { Component} from "react"
import { connect } from 'react-redux'
import Question from './Question'

class DashBoard extends Component {

    state = {
        answered: false
    }

    handleClick = (e, state) => {
        e.preventDefault()
        this.setState({
            answered: state
        })
    }


    render() {

        const questionIds =  this.state.answered === true 
            ? this.props.answeredQuestionIds
            : this.props.unansweredQuestionIds
        return (
            <div>
                <h3 className='center'>Questions</h3>
                <div className='center' >
                <button className='replying-to' onClick={(e) => this.handleClick(e, false)}>New Questions</button>
                    <button className='replying-to' onClick={(e) => this.handleClick(e, true)}>Answered</button>
                </div>
                <ul className='dashboard-list'>
                
                    {questionIds.map(id => (
                        <li key={id}><Question id={id} canSubmit={false} /></li>
                    ))}



                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }) {


    const answeredQuestions = Object.keys(users[authedUser].answers)
    const unasweredQuestions = Object.keys(questions).filter(id => !answeredQuestions.includes(id))

    return {
        answeredQuestionIds: answeredQuestions
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        unansweredQuestionIds: unasweredQuestions
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }



}

export default connect(mapStateToProps)(DashBoard)

