import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import db from "./firebase";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";

function Todo(props) {
  const [Completed, setCompleted] = useState(false);
  return (
    <div>
      <List
        style={{
          display: "flex",
          alignItems: "center",
          width: "15rem",
          margin: "0 auto",
        }}
      >
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary={Completed ? "Completed" : "Pending"}
          />
        </ListItem>
        <CheckCircleTwoToneIcon
          style={{ color: "#58D68D" }}
          onClick={(event) => setCompleted(!Completed)}
        />
        <DeleteForeverTwoToneIcon
          style={{ color: "#FF0000" }}
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </div>
  );
}

export default Todo;
