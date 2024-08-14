import { prisma } from "@/lib/prisma";
import { nanoid } from "nanoid";

export const resolvers = {
  Query: {
    notes: () => {
      return prisma.note.findMany();
    },
    note: (_: any, args: any) => {
      return prisma.note.findUnique({ where: { id: args.id } });
    },
  },

  Mutation: {
    createNote: (_: any, args: any) => {
      return prisma.note.create({
        data: {
          id: `note-${nanoid()}`,
          title: args.title,
          body: args.body,
          createdAt: new Date().toISOString(),
        },
      });
    },
    updateNote: (_: any, args: any) => {
      return prisma.note.update({
        where: { id: args.id },
        data: {
          title: args.title,
          body: args.body,
        },
      });
    },
    deleteNote: (_: any, args: any) => {
      return prisma.note.delete({
        where: { id: args.id },
      });
    },
  },
};
