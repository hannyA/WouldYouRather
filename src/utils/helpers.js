export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }


export function formatQuestion (question, author, authedUser) {

  const { id, optionOne, optionTwo, timestamp } = question
  const { name, avatarURL } = author

  let response = null

  const userHasAnswered = optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)
  if (userHasAnswered === true) {

    if (optionOne.votes.includes(authedUser)) {
      response = 'optionOne'
    }
    if (optionTwo.votes.includes(authedUser)) {
      response = 'optionTwo'
    }
  }

  return {
    name,
    id,
    timestamp,
    optionOne,
    optionTwo,
    avatar: avatarURL,
    hasAnswered: userHasAnswered,
    response,

    // likes: likes.length,
    // replies: replies.length,
    // hasLiked: likes.includes(authedUser),
    // parent: !parentTweet ? null : {
    //   author: parentTweet.author,
    //   id: parentTweet.id,
    // }
  }

  
  // tylermcginnis: {
  //   id: 'tylermcginnis',
  //   name: 'Tyler McGinnis',
  //   avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
  //   answers: {
  //     "vthrdm985a262al8qx3do": 'optionOne',
  //     "xj352vofupe1dqz9emx13r": 'optionTwo',
  //   },
  //   questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],


  // "xj352vofupe1dqz9emx13r": {
  //   id: 'xj352vofupe1dqz9emx13r',
  //   author: 'johndoe',
  //   timestamp: 1493579767190,
  //   optionOne: {
  //     votes: ['johndoe'],
  //     text: 'write JavaScript',
  //   },
  //   optionTwo: {
  //     votes: ['tylermcginnis'],
  //     text: 'write Swift'
  //   }


    
  }