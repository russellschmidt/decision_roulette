class DecisionApp extends React.Component {
  constructor (props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      subtitle: 'Let AI make your decisions. ComputerGod loves you. Have faith.',
      options: props.options
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
  
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // naughty 
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  componentWillUnmount() {
    console.log('comp will unmount')
  }
  handleDeleteOptions () {
    this.setState(() => ({ options: [] }))
  }
  handleDeleteOption (optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }
  handlePick () {
    const option = Math.floor(Math.random() * this.state.options.length)
    alert (this.state.options[option])
  }
  handleAddOption (option) {
    if (!option) {
      return 'Enter a valid option please'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This item already exists! Please enter a unique value.'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }))
  }
  render () {
    return (
      <div id="top">
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Action 
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}/>
        <Options
          handleDeleteOptions={this.handleDeleteOptions} 
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}
// we can comment out since we read defaults from localStorage now
// DecisionApp.defaultProps = {
//   options: []
// }

const Header = (props) => {
  return (
    <div id='header'>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Decision Roulette'
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  const options = props.options
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <h2>Your Options:</h2>
      {props.options.length === 0 && <p>Enter in some options to get started!</p>}
      {
        options.map((opt) => {
          return (
            <Option 
              key={opt} 
              option={opt}
              handleDeleteOption={props.handleDeleteOption}
            />
          )
        })
      }
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.option}
      <button onClick={() => {
        props.handleDeleteOption(props.option)
      }}>
        Remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption (e) {
    e.preventDefault()

    const optionAdded = e.target.elements.addOption.value.trim()
    const error = this.props.handleAddOption(optionAdded)

    this.setState(() => ({ error }))

    if (!error) {
      e.target.elements.addOption.value = ''
    }
  }
  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='addOption' placeholder='your option here' />
          <button>submit</button>
        </form>
      </div>
    )
  }
}

// const User = () => {
//   return (
//     <div>
//       <p>Name:</p>
//       <p>Age: </p>
//     </div>
//   )
// }

ReactDOM.render(<DecisionApp options={['Angel City Brewery', 'Spring St Bar']}/>, document.getElementById('app'))
