import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

// const { Provider, Consumer } = React.createContext(defaultValue)
const ThemeContext = React.createContext('light')
const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}

const store = createStore(todosReducer)
console.log(store.getState())

const createChild = (storeKey = 'store') => {
  class Child extends Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {({name, store}) => {
            let text = ''
            if (store) {
              text = store.getState().length
            }
            return (
              <div data-testid="store">
                {storeKey} - {text} {name}
              </div>
            )
          }}
        </ThemeContext.Consumer>
      )
    }
  }

  return Child
}
const Child = createChild()

class Parent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      store: store,
      msg: 'ssss'
    }
    this.addToDo = this.addToDo.bind(this)
  }

  addToDo () {
    console.log('ssss')
    store.dispatch({type: ADD_TODO, text: 'add another'})
    // console.log(store.getState())
    this.setState({msg: 'ass'})
  }

  render () {
    return (
      <div>
        <ThemeContext.Provider value={{name: 'ali', store: this.state.store}}>
          <Child></Child>
        </ThemeContext.Provider>
        see the store 
        <em onClick={this.addToDo}>to add</em>
      </div>
    )
  }
}

export default Parent