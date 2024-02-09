import { Container, background } from "@chakra-ui/react";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Title = styled.h3`
  padding: 8px;
  background-color: pink;
  text-align: center;
`;

const TaskList = styled.div`
  padding: 3px;
  transition: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;

export default function Column({ title, tasks, id }) {
  return (
    <Container>
      <Title style={{ backgroundcolor: "lightblue", position: "stick" }}>
        To Do
      </Title>

      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {provided.placeholder}
          </TaskList>;
        }}
      </Droppable>
    </Container>
  );
}
