import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

 export default function questions(state = {}, action) {
     switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,

            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ANSWER_QUESTION:
            const {qid, answer, authedUser} = action.question

            console.log('action: ', action)
            console.log('qid: ', qid)
            console.log('answer: ', answer)
            console.log('authedUser: ', authedUser)

            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                },
            }

        default: 
            return state
     }
 }


//  ...questions,
//  [qid]: {
//    ...questions[qid],
//    [answer]: {
//      ...questions[qid][answer],
//      votes: questions[qid][answer].votes.concat([authedUser])
//    }
 


//  johndoe: {
//     id: 'johndoe',
//     name: 'John Doe',
//     avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
//     answers: {
//       "xj352vofupe1dqz9emx13r": 'optionOne',
//       "vthrdm985a262al8qx3do": 'optionTwo',
//       "6ni6ok3ym7mf1p33lnez": 'optionTwo'
//     },
//     questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
//   }
// }


// "8xf0y6ziyjabvozdd253nd": {
//     id: '8xf0y6ziyjabvozdd253nd',
//     author: 'sarahedo',
//     timestamp: 1467166872634,
//     optionOne: {
//       votes: ['sarahedo'],
//       text: 'have horrible short term memory',
//     },
//     optionTwo: {
//       votes: [],
//       text: 'have horrible long term memory'
//     }
//   },