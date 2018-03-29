class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: props.count
    }
  }
  componentDidMount () {
    try {
      const count = parseInt(JSON.parse(localStorage.getItem('count')), 10)
      if (isNaN(count)) {
        this.setState(() => ({ count: 0 }))
      } else {
        this.setState(() => ({ count }))
      }
    } catch (e) {
      // what if the JSON is bad in local storage
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.state.count !== prevProps.count) {
      const json = JSON.stringify(this.state.count)
      localStorage.setItem('count', json)
    }
  }
  handleAddOne () {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne () {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset () {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render () {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>clear</button>
      </div>
    )
  }
}

// Counter.defaultProps = { count: 0 }

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0
// const addOne = () => {
//   count++
//   renderCounterApp()
// }

// const minusOne = () => {
//   count--
//   renderCounterApp()
// }

// const reset = () => {
//   count = 0
//   renderCounterApp()
// }

// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//   const template = (
//     <div>
//       <h1>Touch my clitty count my count: {count}</h1>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={addOne}>+1</button>
//     </div>
//   )

//   ReactDOM.render(template, appRoot)
// }

// renderCounterApp()
