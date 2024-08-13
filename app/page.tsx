import { Container, Box } from "@chakra-ui/react";
import NotesGrid from "./components/NotesGrid";
import { getNotes } from "./api/graphql/services";

export interface INote {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}

export default async function Page() {
  const notes = await getNotes();

  return (
    <Container as='main' maxW='6xl'>
      <NotesGrid notes={notes} />
    </Container>
  );
}
