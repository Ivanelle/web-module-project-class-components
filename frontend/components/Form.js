import React from 'react';


export default class Form extends React.Component {
  state = {
    name: '',
    isCompleted: true
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.props.addTodo(this.state.name)
    this.setState({
      ...this.state,
      name: ''
    })
  }
  
  onChange = evt => {
    const { value } = evt.target
    this.setState ({
      ...this.state,
      name: value
    })
  }


  render() {
    const { clearCompleted } = this.props
    return (
      <form onSubmit={this.onSubmit}>
      <div>
        <input type='text' value={this.state.name} onChange={this.onChange}/>
        <input type='submit'/>
        <button onClick={clearCompleted}>Clear 🌟</button>
      </div>
      </form>
    )
  }
}
