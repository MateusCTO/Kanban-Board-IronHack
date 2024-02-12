import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import KanbanBoard from "./components/KanbanBoard";
import Task from "./components/Task";
import Column from "./components/Column";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Task
        task={{ id: 123, title: "Make a progress board application" }}
        index="1"
      /> */}
      <KanbanBoard />
    </div>
  );
}
export default App;
