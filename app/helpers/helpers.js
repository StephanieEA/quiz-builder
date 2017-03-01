export const getAllQuizzes = (saveState) => {
  const allQuizes = ('http://localhost:3001/quizzes')
  fetch(allQuizes, {
    method: 'GET'})
    .then(response => {
      return response.json()
    .then(response => {
      saveState(response)
       console.log(response)
      })
    })
  }

export const getAQuiz = (id) => {
  const aQuiz = (`http://localhost:3001/quizzes/${id}`)
  fetch(aQuiz, {
    method: 'GET'})
    .then(response => response.json())
    .then(response => console.log(response))
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
    .then(response => response.json())
    .then(response => console.log(response))
}

export const deleteAQuestion = (quizId, questionId) => {
  const deleteQuestion = `http://localhost:3001/quizzes/${quizId}/questions/${questionId}`
  fetch(deleteQuestion, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      },
    }
  )
    .then(response => response.json())
    .then(response => console.log(response))
}

export const returnAnsweredQuestion = (quizId, question, answer) => {
  const answerQuest = `http://localhost:3001/quizzes/${quizId}/questions/${question.id}/answers`
  fetch(answerQuest, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
             'Accept': 'application/json'
    },
    body: JSON.stringify(answer)
  })
    .then(response => response.json())
    .then(response => console.log(response))
}

export const postFinalScore = (score, saveState) => {
  fetch('http://localhost:3001/scores', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({ score: score })
 })
   .then(response => response.json())
   .then(response => saveState(response))
}

export const sampleFinalScore = 1

export const sampleAnswer = {
  'title': 'On average, how many npm packages do you install per app?',
  'score': 5
}

export const sampleQuestion = {
  id: 1478253351169,
  title: "On average, how many npm packages do you install per app?",
  answers: [
    {
      title: "None. Everything I build is lovingly hand-made from scratch",
      score: 1
    },
    {
    title: "It depends on the size and scope of the application.",
    score: 0
    },
    {
    title: "At least a trillion",
    score: 2
    },
    {
    title: "npm WARN UNMET PEER DEPENDENCY",
    score: 3
    }
  ]
}
