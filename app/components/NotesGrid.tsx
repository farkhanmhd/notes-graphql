import { Grid, GridItem } from "@chakra-ui/react";
import NoteCard from "./NoteCard";
import { INote } from "../page";

const NotesGrid = ({ notes }: { notes: INote[] }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={4}
    >
      {notes.length > 0 ? (
        notes.map((note) => (
          <GridItem key={note.id}>
            <NoteCard note={note} />
          </GridItem>
        ))
      ) : (
        <GridItem textAlign='center' colSpan={3}>
          There are no notes
        </GridItem>
      )}
    </Grid>
  );
};

export default NotesGrid;
