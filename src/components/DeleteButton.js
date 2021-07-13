import React from 'react';
import { Button } from 'reactstrap';

function DeleteButton({delTask}) {
  return (
    <>
    <Button color="danger" onClick={delTask}>Delete</Button>{' '}
    </>
  );
}

export default DeleteButton;