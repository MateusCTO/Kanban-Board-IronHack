import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import "./scroll.css";
import { Heading, Container, Box } from "@chakra-ui/react";

export default function Column({ title, tasks, id }) {
  return (
    <Container
      className="column"
      bgColor={"#f4f5f7"}
      borderRadius={5}
      w={300}
      h={475}
      overflowY={"scroll"}
      border={"1px"}
      borderColor={"gray"}
    >
      <Heading p={8} bgColor={"pink"} textAlign={"center"}>
        {title}
      </Heading>

      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <Box
              p={3}
              transition={"background-color 0.2s ease"}
              bgColor={"#f4f5f7"}
              flexGrow={1}
              minW={100}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {provided.placeholder}
            </Box>
          );
        }}
      </Droppable>
    </Container>
  );
}
