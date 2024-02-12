import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Flex } from "@chakra-ui/react";
import Column from "./Column";

export default function KanbanBoard() {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setImcomplete] = useState([]);

  return (
    <DragDropContext>
      <h2 style={{ textAlign: "center" }}>PROGRESS BORAD</h2>
      <Flex justify={"space-between"} alignItems={"center"} direction={"row"}>
        <Column title={"TO DO"} tasks={incomplete} id={"1"} />
      </Flex>
    </DragDropContext>
  );
}
