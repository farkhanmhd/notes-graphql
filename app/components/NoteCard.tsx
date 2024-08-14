import { Text, Heading, Flex, Box } from "@chakra-ui/react";
import Link from "next/link";
import { formatDate } from "@/utils/utils";

interface Note {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}

const NoteCard = ({ note }: { note: Note }) => {
  return (
    <Link href={`/${note.id}`}>
      <Flex
        backgroundColor='transparent'
        borderRadius='lg'
        p={4}
        boxShadow='md'
        borderWidth='1px'
        borderColor='teal'
        shadow='none'
        height='100%'
        minHeight='170px'
        direction='column'
        justifyContent='space-between'
      >
        <Box>
          <Heading size='md'>{note.title}</Heading>
          <Text textOverflow='ellipsis' overflow='hidden' noOfLines={3} marginY='10px'>
            {note.body}
          </Text>
        </Box>
        <Text fontSize='sm'>Created at: {formatDate(note.createdAt)}</Text>
      </Flex>
    </Link>
  );
};

export default NoteCard;
