import React from 'react';
import { Button, ListItem , ListItemText} from '@material-ui/core';
import { db } from './firebase_config';

export default function TodoListItem({todo, inprogress, id}) {

    function toggleInProgress(){
        db.collection("todos").doc(id).update({
            inprogress: !inprogress,
        });
    }

    function DeleteTodo(){
        db.collection("todos").doc(id).delete();
    }

    return (
        <div style={{display: "flex"}}>
        <ListItem>
        <ListItemText
         primary={todo} 
         secondary={inprogress ? "In Progress" : "Completed"}
        />

        </ListItem>
        <Button onClick={toggleInProgress}>
        {inprogress ? "Done" : "Undone"}
        </Button>
        <Button onClick={DeleteTodo}>Delete</Button>
        </div>
    );
}
