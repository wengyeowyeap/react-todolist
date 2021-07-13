import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';

function TodoForm(props) {
  const { addNewTask } = props
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (text !== "") {
      addNewTask(text)
    } else {
      alert("Please enter task.")
    }

    setText("")
  }

  const handleInput = e => {
    setText(e.target.value)
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center mt-5" style={{ width: "100vw" }}>
      <FormGroup className="mb-0" style={{ width: "50%" }}>
        <Input onChange={handleInput} value={text} type="text" placeholder="Add Task" />
      </FormGroup>
      <Button type="submit" color="success" value="Add Task">Add</Button>
    </Form>
  )
}

export default TodoForm;