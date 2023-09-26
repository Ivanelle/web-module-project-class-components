import React from 'react';
import Form from './Form';
import Todo from './Todo';
import TodoList from './TodoList';

const initialTodos = [
  {
    name: 'Start Shark',
    id: 123,
    completed: false
  },
  {
    name: 'Pick up toys',
    id: 124,
    completed: false
  },
  {
    name: 'Pick up Dog Poop',
    id: 125,
    completed: false
  },
  {
    name: 'Plan Dinner',
    id: 126,
    completed: false
  },
  {
    name: 'Get Todo List app running',
    id: 127,
    completed: false
  }

]
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: initialTodos
    }
  }

addTodo = (name) => {
  this.setState({
    ...this.state,
    todos: this.state.todos.concat({ id: Date.now(), completed: false, name})
  })
}


toggleCompleted = id => {
  this.setState({
    ...this.state,
    todos: this.state.todos.map(td => {
      if(id == td.id) return { ...td, completed: !td.completed }
      return td
    })
  })
}

clearCompleted = () => {
  this.setState({...this.state, todos: this.state.todos.filter(td => {
    if (!td.completed) return td})
  })
}

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <Form addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    )
  }
}



// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
// root.render(root)