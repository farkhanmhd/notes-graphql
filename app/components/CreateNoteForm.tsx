"use client";

import { useFormState } from "react-dom";
import { Input, Textarea, Button, Box, Flex } from "@chakra-ui/react";
import { IoSaveOutline, IoTrashBinOutline, IoPencilOutline, IoCloseOutline } from "react-icons/io5";
import { createNote } from "../api/graphql/services";
import { INotesForm } from "../definitions";

const CreateNoteForm = ({ title = "", body = "" }: INotesForm) => {
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
      <Flex justifyContent='flex-end'>
        <Button colorScheme='teal' variant='outline' type='submit'>
          <Box as='span' marginRight='2'>
            <IoSaveOutline size={22} />
          </Box>
          <Box as='span'>Save Note</Box>
        </Button>
      </Flex>
    </form>
  );
};

export default CreateNoteForm;
