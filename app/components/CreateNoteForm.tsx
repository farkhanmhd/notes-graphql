"use client";

import { useFormState } from "react-dom";
import { Input, Textarea, Button, Box, Flex } from "@chakra-ui/react";
import { IoSaveOutline } from "react-icons/io5";
import { createNote } from "../api/graphql/services";
import { INotesForm } from "../definitions";

const CreateNoteForm = ({ title = "", body = "" }: INotesForm) => {
  const initialState = {
    message: "",
    errors: {},
  };

  const [state, dispatch] = useFormState(createNote, initialState);
  return (
    <form action={dispatch}>
      <Input
        defaultValue={title}
        placeholder='Title...'
        size='lg'
        marginBottom='5'
        name='title'
        sx={{
          "&::placeholder": {
            color: "gray.300",
          },
          ...(state.errors?.title && {
            outline: "1px solid red",
          }),
        }}
      />

      <Box marginBottom='5' id='title-error' aria-live='polite' aria-atomic='true' color='red'>
        {state.errors?.title && state.errors?.title.map((error: string) => <p key={error}>{error}</p>)}
      </Box>
      <Textarea
        defaultValue={body}
        placeholder="Today I'm thinking about..."
        height='50vh'
        resize='none'
        marginBottom='5'
        name='body'
        sx={{
          "&::placeholder": {
            color: "gray.300",
          },
          ...(state.errors?.body && {
            outline: "1px solid red",
          }),
        }}
      />
      <Box marginBottom='5' id='body-error' aria-live='polite' aria-atomic='true' color='red'>
        {state.errors?.body && state.errors?.body.map((error: string) => <p key={error}>{error}</p>)}
      </Box>
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
