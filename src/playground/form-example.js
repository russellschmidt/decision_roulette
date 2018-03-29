console.log('App is running')

const app = {
  title: 'Decision Roulette',
  subtitle: 'Let AI decide',
  options: []
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

const onClearList = (e) => {
  app.options = []
  renderListApp()
}

const numbers = [55, 101, 1000]

const appRoot = document.getElementById('app')

const renderListApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onClearList}>Clear List</button>
      {
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>}
        )
      }
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
  
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  )
  
  ReactDOM.render(template, appRoot)
}

renderListApp()