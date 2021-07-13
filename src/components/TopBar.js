import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
function TopBar(props) {
  const { searchTask, endSearch } = props
  const [query, setQuery] = useState('')
  const handleSearch = e => {
    e.preventDefault()
    if (query !== "") {
      searchTask(query)
    }
  }

  const handleInput = e => {
    setQuery(e.target.value)
  }
  const clearQuery = () => {
    setQuery("")
    endSearch()
  }
  return (
    <div className="container my-3 d-md-flex justify-content-between">
      <h1 className="text-center">React To Do List</h1>
      <div className="d-flex align-items-center justify-content-md-start justify-content-center m-md-0 my-3">
        <Form onSubmit={handleSearch} className="d-flex align-items-center">
          <FormGroup className="mb-0">
            <Input onChange={handleInput} value={query} type="text" placeholder="Search Task" />
          </FormGroup>
          <Button type="submit" color="secondary" value="Search Task">Search</Button>
        </Form>
        <Button onClick={clearQuery} color="light" value="Clear Search">Clear</Button>
      </div>
    </div>
  );
}

export default TopBar;