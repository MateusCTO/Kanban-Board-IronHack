import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

export default function KanbanBoard() {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setImcomplete] = useState([]);

  return (
    <DragDropContext>
      <h2 style={{ textAlign: "center" }}>PROGRESS BORAD</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      ></div>
    </DragDropContext>
  );
}
