// import logo from './logo.svg';
 import './App.css';
 import TextField from '@material-ui/core/TextField';
import { useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from 'firebase';
import TodoListItem from './Todo';

{/* <Emoji symbol="✨" /> */}
function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, [])

  function getTodos(){
  db.collection("todos").onSnapshot(function (querySnapshot) {
  
    setTodos(
      querySnapshot.docs.map((doc) => ({
      id: doc.id,
    todo: doc.data().todo,
    inprogress: doc.data().inprogress,
  }))
    );
  });
  }

  function addList(e) {
    e.preventDefault();
    //console.log(`todo list will be added`);
   db.collection("todos").add({
     inprogress: true,
     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
     todo: todoInput,
   });

   setTodoInput("");
  }
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center"}}>
      <header className="App-header">
        <h1>Todo React Application With Firebase </h1>
        <form>
        <TextField id="standard-basic" 
        label="Make the List"
        value ={todoInput}
        style={{ width: "50vw", maxwidth: "50px", marginTop: "24px"}}
        onChange ={(e) => setTodoInput(e.target.value)}
         />

        <Button type="submit" variant="contained" onClick ={ addList } 
        style ={ { display: "none"}}>
          Default</Button>
        </form>
        
        {todos.map((todo) => (

          <TodoListItem todo={todo.todo}
          inprogress={todo.inprogress}
          id={todo.id} 
          />
        ))}

      </header>
    </div>
  );
}

export default App;
