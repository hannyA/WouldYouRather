import {saveQuestion, saveQuestionAnswer} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const ADD_QUESTION      = 'ADD_QUESTION'
export const ANSWER_QUESTION   = 'ANSWER_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'


function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,

    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}

function answerQuestion(question) {
    return {
        type: ANSWER_QUESTION,
        question,
    }
}

export function handleAnswerQuestion(qid, answer, question) {
    return (dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())

        return saveQuestionAnswer({
            authedUser,
            answer, 
            qid
        })
        .then(() => dispatch(answerQuestion({qid, answer, authedUser})))
        .then(() => dispatch(hideLoading()))
    }
}


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}