import React from 'react';
import './App.css';
import Input from './components/Input'
import TodoItem from './components/TodoItem'
//import {todoList} from './components/TodoList'

import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice' 

// const todoList = [
//   {
//     item: 'todo1',
//     done: false,
//     id: 12345
//   },
//   {
//     item: 'todo2',
//     done: true,
//     id: 123456
//   },
//   {
//     item: 'todo3',
//     done: false,
//     id: 1234567
//   },
// ]


function App() {
  const TodoList = useSelector(selectTodoList)

  return (

    <div className="App">
      <div className="app_container">
      <div className="app_todoContainer">
        {TodoList.map(item => (
          <TodoItem 
          name={item.item}
          done={item.done}
          id={item.id}
          />
        ))}
      </div>
    <Input />
    </div>
    </div>
  );
}

export default App;
