console.log('App is running')

const app = {
  title: 'Decision Roulette',
  subtitle: 'Let AI decide',
  options: [],
  answer: ''
}

const onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderListApp()
  }
}

const onClearList = () => {
  app.options = []
  app.answer = ''
  renderListApp()
}

const onMakeDecision = () => {
  // generate random number
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  app.answer = option
  renderListApp()
}

const appRoot = document.getElementById('app')

const renderListApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>Options List Length: {app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
      <button disabled={app.options.length === 0} onClick={onClearList}>Clear List</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>

      {app.answer && <h2>Your Answer is: {app.answer}</h2>}
  
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  )
  
  ReactDOM.render(template, appRoot)
}

renderListApp()