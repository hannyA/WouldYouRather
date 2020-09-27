import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate, formatQuestion } from '../utils/helpers'

class Question extends Component {

    handleClick = (e, id) => {
        e.preventDefault()
        console.log("Click box: ", id)

    }


    render() {

        const { question } = this.props
        console.log(question)

        const {
            name, id, timestamp, optionOne, optionTwo, avatar, hasAnswered
        } = question

        return (

                <div className="question" onClick={(e) => this.handleClick(e, id)}>
                    <img src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar' 
                    /> 
                    <div className='question-info'>
                        <span>{name} asked:</span>
                        <div> {formatDate(timestamp)}</div>    
                    </div>
                    

                <div>
                    <span className="question">{optionOne.text}</span>
                    <span className="question">{optionTwo.text}</span>
                </div>

                </div>


        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    
    const question = questions[id]
    
    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser)
    }
}

export default connect(mapStateToProps)(Question)