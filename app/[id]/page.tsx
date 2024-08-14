import { Container } from "@chakra-ui/react";
import EditNoteForm from "../components/EditNoteForm";
import { getNote } from "../api/graphql/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Note",
  description: "Create a new note",
};

export default async function Page({ params }: { params: { id: string } }) {
  const { title, body } = await getNote(params.id);
  return (
    <Container as='main' maxW='6xl'>
      <EditNoteForm title={title} body={body} id={params.id} />
    </Container>
  );
}
