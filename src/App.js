import React, { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import { Button, ListGroup } from 'reactstrap';
import TopBar from './components/TopBar';

function App() {
  const [todos, setTodos] = useState(
    [
      { id: 1, task: 'Walk the dog', done: false },
      { id: 2, task: 'Water the flower', done: true }
    ]
  )

  const [displayTodos, setDisplayTodos] = useState([])
  const [searchMode, setSearchMode] = useState(false)
  const [queryString, setQueryString] = useState('')
  const [sort, setSort] = useState("")
  
  useEffect(() => {
    setNewId(todos.length + 1)
    if (searchMode) {
      searchTask(queryString)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos])

  const [newId, setNewId] = useState(0)

  const addNewTask = (text) => {
    setTodos([...todos, { id: newId, task: text, done: false }])
  }

  const taskDone = (e) => {
    const cloneTodos = [...todos]
    const mapTodos = cloneTodos.map(item =>
      (item.id === parseInt(e.target.id) && item.done === true) ? { ...item, done: false }:
       (item.id === parseInt(e.target.id) && item.done === false) ? { ...item, done: true }:
       item
    )
    setTodos([...mapTodos])
  }

  const searchTask = (query) => {
    setSearchMode(true)
    setQueryString(query.toUpperCase())
    const cloneTodos = [...todos]
    const cloneDisplayTodos = []
    for (const item of cloneTodos) {
      if (item.task.toUpperCase().search(query.toUpperCase()) !== -1) {
        cloneDisplayTodos.push(item)
      }
    }
    setDisplayTodos([...cloneDisplayTodos])
  }

  const endSearch = () => {
    setSearchMode(false)
    setQueryString('')
  }

  const delTask = (e) => {
    const cloneTodos = [...todos]
    cloneTodos.splice(cloneTodos.findIndex(a => a.id === parseInt(e.target.previousSibling.id)), 1)
    //resassign the IDs for each task after a deletion
    for (let i = 0; i < cloneTodos.length; i++) {
      cloneTodos[i].id = i + 1
    }
    setTodos([...cloneTodos])
  }

  const sortTask = () => {
    const cloneTodos = [...todos]
    if (sort === "") {
      setSort("⬇")
      cloneTodos.sort(function (a, b) {
        if (a.task.toString().toUpperCase() < b.task.toString().toUpperCase()) {
          return -1
        }
        if (a.task.toString().toUpperCase() > b.task.toString().toUpperCase()) {
          return 1
        }
        // names must be equal
        return 0;
      })
      setTodos([...cloneTodos])
    } else if (sort === "⬇") {
      setSort("⬆")
      cloneTodos.sort(function (a, b) {
        if (a.task.toString().toUpperCase() < b.task.toString().toUpperCase()) {
          return -1
        }
        if (a.task.toString().toUpperCase() > b.task.toString().toUpperCase()) {
          return 1
        }
        // names must be equal
        return 0;
      })
      cloneTodos.reverse()
      setTodos([...cloneTodos])
    } else if (sort === "⬆") {
      setSort("")
      cloneTodos.sort(function (a, b) {
        return a.id - b.id;
      });
      setTodos([...cloneTodos])
    }
  }

  return (
    <>
      <TopBar searchTask={searchTask} endSearch={endSearch}></TopBar>
      {
        <>
          {searchMode ? <></> : <TodoForm addNewTask={addNewTask} />}
          <div className="container mt-5 text-center">
          <Button color="info" onClick={sortTask} value="Sort Task">{"Sort Tasks " + sort}</Button>
          </div>
        </>
      }
      <ListGroup className="container mt-2">
        <TodoItem data={searchMode ? displayTodos : todos} taskDone={taskDone} delTask={delTask} />
      </ListGroup>

    </>
  );
}

export default App;
