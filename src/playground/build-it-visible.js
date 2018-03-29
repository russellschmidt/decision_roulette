// Visibility toggle - render, constructor, handleToggleVisibility
// state: visibility: false.   if false, button says show detail, else, hide detail

console.log('is this thing on')

// const app = document.getElementById('app')

// const details = {
//   show: false,
//   blurb: 'here are some details'
// }

// const toggleShow = () => {
//   details.show = !details.show
//   render()
// }

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleShow}>
//         {details.show ? 'Hide details': 'Show details'}
//       </button>
//       {(details.show) && <p>{details.blurb}</p>}
//     </div>
//   )

//   ReactDOM.render(jsx, app)
// }

// render()

class ToggleShow extends React.Component {
  constructor (props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false,
      blurb: 'yadda yadda yadda'
    }
  }
  handleToggleVisibility () {
    this.setState( (prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render () {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {(this.state.visibility) && <p>{this.state.blurb}</p>}
      </div>
    )
  }
}

ReactDOM.render(<ToggleShow />, document.getElementById('app'))