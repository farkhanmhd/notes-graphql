import { Input, Textarea, Button, Box, Flex } from "@chakra-ui/react";
import { IoSaveOutline } from "react-icons/io5";

const NotesForm = ({ title = "", body = "" }: { title?: string; body?: string }) => {
  return (
    <form>
      <Input
        defaultValue={title}
        placeholder='Title...'
        size='lg'
        marginBottom='10'
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
        sx={{
          "&::placeholder": {
            color: "gray.300",
          },
        }}
      />
      <Flex justifyContent='flex-end'>
        <Button colorScheme='teal' variant='outline'>
          <Box as='span' marginRight='2'>
            <IoSaveOutline size={22} />
          </Box>
          <Box as='span'>Save Note</Box>
        </Button>
      </Flex>
    </form>
  );
};

export default NotesForm;
