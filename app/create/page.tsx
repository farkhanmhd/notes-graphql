import { Container } from "@chakra-ui/react";
import CreateNoteForm from "../components/CreateNoteForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Note",
  description: "Create a new note",
};

const Page = () => {
  return (
    <Container as='main' maxW='6xl'>
      <CreateNoteForm />
    </Container>
  );
};

export default Page;
