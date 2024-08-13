import { Box, Text, Heading, VStack } from "@chakra-ui/react";
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
      <Box backgroundColor='transparent' borderRadius='lg' p={4} boxShadow='md' borderWidth='1px' borderColor='teal' shadow='none'>
        <VStack align='start'>
          <Heading size='md'>{note.title}</Heading>
          <Text textOverflow='ellipsis' overflow='hidden' noOfLines={3} marginY='10px'>
            {note.body}
          </Text>
          <Text fontSize='sm'>Created at: {formatDate(note.createdAt)}</Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default NoteCard;
