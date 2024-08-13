import { Container, Box } from "@chakra-ui/react";
import NotesGrid from "./components/NotesGrid";

export interface INote {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}

export default function Page() {
  const notes: INote[] = [];

  return (
    <Container as='main' maxW='6xl'>
      <NotesGrid notes={notes} />
    </Container>
  );
}
