import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import KanbanBoard from "./components/KanbanBoard";
import Task from "./components/Task";
import Column from "./components/Column";
import "./App.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      {/* <Task
        task={{ id: 123, title: "Make a progress board application" }}
        index="1"
      /> */}
      <KanbanBoard />
      <Footer />
    </div>
  );
}
export default App;
