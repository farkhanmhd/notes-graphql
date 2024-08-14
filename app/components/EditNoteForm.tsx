"use client";

import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { Input, Textarea, Button, Box, Flex } from "@chakra-ui/react";
import { IoTrashBinOutline, IoPencilOutline, IoCloseOutline } from "react-icons/io5";
import { createNote } from "../api/graphql/services";
import { INotesForm } from "../definitions";

const EditNoteForm = ({ title = "", body = "" }: INotesForm) => {
  const router = useRouter();
  const initialState = {
    status: 0,
    message: "",
  };

  const [state, dispatch] = useFormState(createNote, initialState);
  return (
    <form action={dispatch}>
      <Input
        defaultValue={title}
        placeholder='Title...'
        size='lg'
        marginBottom='10'
        name='title'
        sx={{
          "&::placeholder": {
            color: "gray.300",
          },
        }}
      />
      <Textarea
        defaultValue={body}
        placeholder="Today I'm thinking about..."
        height='50vh'
        resize='none'
        marginBottom='10'
        name='body'
        sx={{
          "&::placeholder": {
            color: "gray.300",
          },
        }}
      />
      <Flex justifyContent='space-between'>
        <Button colorScheme='teal' variant='outline'>
          <Box as='span' marginRight='2'>
            <IoTrashBinOutline size={22} />
          </Box>
          <Box as='span'>Delete Note</Box>
        </Button>
        <Box>
          <Button colorScheme='teal' variant='outline' marginRight='4' onClick={() => router.back()}>
            <Box as='span' marginRight='2'>
              <IoCloseOutline size={22} />
            </Box>
            <Box as='span'>Cancel</Box>
          </Button>
          <Button colorScheme='teal' variant='outline'>
            <Box as='span' marginRight='2'>
              <IoPencilOutline size={22} />
            </Box>
            <Box as='span'>Update Note</Box>
          </Button>
        </Box>
      </Flex>
    </form>
  );
};

export default EditNoteForm;
