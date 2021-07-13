import React from 'react';
import DeleteButton from './DeleteButton';
import { ListGroupItem } from 'reactstrap';

function TodoItem(props) {
  const { data, taskDone, delTask } = props
  return (
    <>
      <div>
        {data.map(((item, index) => {
          return (
            item.done ?
              <div className="d-flex w-100 justify-content-center mb-1" key={index}>
                <ListGroupItem className="rounded taskItem" id={item.id} onClick={taskDone} style={{ width: "95%" }}><span style={{ color: "green", textDecoration: "line-through", pointerEvents: "none" }}>{item.task}</span><span style={{ pointerEvents: "none" }}>{"👍"}</span></ListGroupItem>
                <DeleteButton delTask={delTask} id={item.id} />
              </div>
              :
              <div className="d-flex w-100 justify-content-center mb-1" key={index}>
                <ListGroupItem className="rounded taskItem" style={{ width: "95%" }} id={item.id} onClick={taskDone}>{item.task}</ListGroupItem>
                <DeleteButton delTask={delTask} />
              </div>

          )
        }))
        }
      </div>
      <small style={{ textAlign: "center" }}>End of List</small>
    </>
  );
}

export default TodoItem;