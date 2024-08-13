"use client";

import { Container, Heading, Flex, Spacer, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { IoAdd } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <Container as='header' maxW='6xl' marginX='auto' position='relative'>
      <Flex minWidth='max-content' alignItems='center' gap='2' height='120px'>
        <Heading size='lg' color='teal'>
          <Link href='/'>NotesApp</Link>
        </Heading>
        <Spacer />
        {pathname !== "/create" && (
          <Link href='/create'>
            <Button colorScheme='teal' variant='outline'>
              <Box as='span' marginRight='2'>
                <IoAdd size={22} />
              </Box>
              <Box as='span'>Add Note</Box>
            </Button>
          </Link>
        )}
      </Flex>
    </Container>
  );
};

export default Header;
