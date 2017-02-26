export const getAllQuizzes = (saveState) => {
  const allQuizes = ('http://localhost:3001/quizzes')
  fetch(allQuizes, {
    method: 'GET'})
    .then(response => {
      return response.json()
    .then(response => {
      saveState(response),
      console.log(response)
      })
    })
  }

export const getAQuiz = (id) => {
  const aQuiz = (`http://localhost:3001/quizzes/${id}`)
  fetch(aQuiz, {
    method: 'GET'})
    .then(response => {
      return response.json()
    .then(response => {
      console.log(response)
    })
  })
}

export const addAQuestion = (id, question) => {
  const updatedQuiz = `http://localhost:3001/quizzes/${id}/questions`
  fetch(updatedQuiz, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
    body: JSON.stringify(question)
  })
    .then(response => {
      return response.json()
    .then(response => {
      console.log(response)
    })
  })
}

// export const updateAQuestion = (id, questionId) => {
//   const updatedQuestion = `http://localhost:3001/quizzes/${id}/questions/${questionId}`
//   // save a filter that finds the question with the question that has that id
//   fetch(updatedQuestion, {
//     method: 'PUT',
//     headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
//     body: JSON.stringify()
//   })
// }

export const sampleQuestion = {
  'title': 'Question Title',
  'answers': [{title: 'option 1', 'score': 0}, {title: 'option 2', 'score': 1}]
}
