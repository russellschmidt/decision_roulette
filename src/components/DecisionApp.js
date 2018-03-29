import React from 'react'

import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

class DecisionApp extends React.Component {
  state = {
    subtitle: 'Let AI make your decisions. ComputerGod loves you. Have faith.',
    options: [],
    selectedOption: undefined
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }
  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length)
    const selectedOption = this.state.options[randomNumber]
    this.setState(() => ({selectedOption}))
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid option please'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This item already exists! Please enter a unique value.'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }))
  }
  handleCloseModal = () => {
    this.setState(() => ({selectedOption: undefined}))
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
  render () {
    return (
      <div id="top">
      <Header title={this.state.title} subtitle={this.state.subtitle} />
        <div className='container'>
          <Action 
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}/>
          <div className="widget">
            <Options
              handleDeleteOptions={this.handleDeleteOptions} 
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    )
  }
}

export default DecisionApp