"use client";

import { useFormState } from "react-dom";
import { Input, Textarea, Button, Box, Flex } from "@chakra-ui/react";
import { IoTrashBinOutline, IoPencilOutline, IoCloseOutline } from "react-icons/io5";
import { updateNote } from "../api/graphql/services";

interface IUpdateNoteForm {
  title?: string;
  body?: string;
  id: string;
}

const EditNoteForm = ({ title = "", body = "", id }: IUpdateNoteForm) => {
  const initialState = {
    message: "",
    errors: {},
  };

  const updateNoteWithId = updateNote.bind(null, id);

  const [state, dispatch] = useFormState(updateNoteWithId, initialState);

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
      <Flex justifyContent='space-between'>
        <Button colorScheme='teal' variant='outline'>
          <Box as='span' marginRight='2'>
            <IoTrashBinOutline size={22} />
          </Box>
          <Box as='span'>Delete Note</Box>
        </Button>
        <Box>
          <Button colorScheme='teal' variant='outline' marginRight='4' type='reset'>
            <Box as='span' marginRight='2'>
              <IoCloseOutline size={22} />
            </Box>
            <Box as='span'>Cancel</Box>
          </Button>
          <Button colorScheme='teal' variant='outline' type='submit'>
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
