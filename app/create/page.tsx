import { Container } from "@chakra-ui/react";
import NotesForm from "../components/NotesForm";

const Page = () => {
  return (
    <Container as='main' maxW='6xl'>
      <NotesForm />
    </Container>
  );
};

export default Page;
