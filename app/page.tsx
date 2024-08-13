import { Container, Box } from "@chakra-ui/react";
import NotesGrid from "./components/NotesGrid";

export interface INote {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}

export default function Page() {
  const notes: INote[] = [
    {
      id: "note-1",
      title: "Note 1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, in. Necessitatibus, quis. Commodi nulla perspiciatis vel delectus sunt quia ullam quaerat enim odit asperiores ex voluptate magnam nostrum, similique reiciendis?",
      createdAt: new Date().toISOString(),
    },
    {
      id: "note-2",
      title: "Note 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, in. Necessitatibus, quis. Commodi nulla perspiciatis vel delectus sunt quia ullam quaerat enim odit asperiores ex voluptate magnam nostrum, similique reiciendis?",
      createdAt: new Date().toISOString(),
    },
    {
      id: "note-3",
      title: "Note 3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, in. Necessitatibus, quis. Commodi nulla perspiciatis vel delectus sunt quia ullam quaerat enim odit asperiores ex voluptate magnam nostrum, similique reiciendis?3",
      createdAt: new Date().toISOString(),
    },
    {
      id: "note-4",
      title: "Note 4",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, in. Necessitatibus, quis. Commodi nulla perspiciatis vel delectus sunt quia ullam quaerat enim odit asperiores ex voluptate magnam nostrum, similique reiciendis?",
      createdAt: new Date().toISOString(),
    },
  ];
  return (
    <Container as='main' maxW='6xl'>
      <NotesGrid notes={notes} />
    </Container>
  );
}
