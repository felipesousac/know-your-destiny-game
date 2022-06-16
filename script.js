const answerElement = document.querySelector('#resposta')
const typedQuestionElement = document.getElementById('typedQuestion')

const inputQuestion = document.querySelector('#inputQuestion')
const answers = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.',
  'Não'
]

const button = document.getElementById('button')
button.addEventListener('click', askQuestion)

//make 'enter' key a trigger to askQuestion()
inputQuestion.addEventListener('keypress', event => {
  if (event.key == 'Enter') {
    button.click()
  }
})

function askQuestion() {
  if (inputQuestion.value == '') {
    alert('Digite sua pergunta')
    return
  }

  button.setAttribute('disabled', true)

  const question = inputQuestion.value

  const totalAnswers = answers.length
  //get a random array item based in its total lenght
  const randomNumber = Math.floor(Math.random() * totalAnswers)

  //assign the answerElement const to a random array item
  typedQuestionElement.textContent = question
  answerElement.textContent = answers[randomNumber]

  //reset the inputText value
  inputQuestion.value = ''

  typedQuestionElement.style.opacity = 1
  answerElement.style.opacity = 1
  setTimeout(() => {
    typedQuestionElement.style.opacity = 0
    answerElement.style.opacity = 0
    button.removeAttribute('disabled')
  }, 3000)
}

//toggle theme
const body = document.querySelector('body')
const initialTheme = 'light'

const setTheme = theme => {
  localStorage.setItem('theme', theme)
  body.setAttribute('data-theme', theme)
}

const toggleTheme = () => {
  const activeTheme = localStorage.getItem('theme')

  if (activeTheme === 'light') {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

const setThemeOnInit = () => {
  const savedTheme = localStorage.getItem('theme')
  savedTheme
    ? body.setAttribute('data-theme', savedTheme)
    : setTheme(initialTheme)
}

setThemeOnInit()
