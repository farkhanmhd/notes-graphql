import { Container } from "@chakra-ui/react";
import NotesForm from "../components/NotesForm";
import { getNote } from "../api/graphql/services";

export async function Page({ params }: { params: { id: string } }) {
  const { title, body } = await getNote(params.id);
  return (
    <Container as='main' maxW='6xl'>
      <NotesForm title={title} body={body} />
    </Container>
  );
}

export default Page;
