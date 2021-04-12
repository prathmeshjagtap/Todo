import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

function App() {
  console.log(process.env.REACT_APP_YOUR_API_KEY_NAME);
  const [todos, setTodos] = useState([]);
  const [input, setinput] = useState("");

  useEffect(() => {
    console.log("hii");
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
    setinput("");
  };
  return (
    <div className="App">
      <h1>✅ Todo Web-App ✅</h1>

      <form>
        <FormControl>
          <InputLabel>Create a Todo...✏️</InputLabel>
          <Input value={input} onChange={(e) => setinput(e.target.value)} />
          <Button
            style={{ marginTop: "0.5rem" }}
            size="medium"
            disabled={!input}
            type="submit"
            onClick={onSubmit}
            variant="contained"
            color="primary"
          >
            Add-Todo
          </Button>
        </FormControl>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
