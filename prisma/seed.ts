import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const note = await prisma.note.upsert({
    where: { id: "note-1" },
    update: {},
    create: {
      id: "note-1",
      title: "Hello",
      body: "Hello, World!",
      createdAt: new Date().toISOString(),
    },
  });
  console.log({ note });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
