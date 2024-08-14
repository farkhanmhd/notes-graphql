"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { INotesForm } from "@/app/definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function getNotes() {
  try {
    const response = await fetch(`${process.env.ENDPOINT}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            notes {
              id
              title
              body
              createdAt
            }
          }
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch notes");
    }

    const { data } = await response.json();
    return data.notes;
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}

export async function getNote(id: string) {
  try {
    const response = await fetch(`${process.env.ENDPOINT}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query ($id: ID!) {
            note(id: $id) {
              id
              title
              body
              createdAt
            }
          }
        `,
        variables: {
          id,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch note");
    }

    const { data } = await response.json();
    return data.note;
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
}

const NoteSchema = z.object({
  id: z.string(),
  title: z.string().min(1, { message: "Title is required" }),
  body: z.string().min(1, { message: "Body is required" }),
  createdAt: z.string(),
});

type NoteState = {
  errors?: {
    title?: string[];
    body?: string[];
  };
  message?: string | null;
};

const NewNote = NoteSchema.omit({ id: true, createdAt: true });

export async function createNote(prevState: NoteState, formData: FormData) {
  const validatedFields = NewNote.safeParse({
    title: formData.get("title"),
    body: formData.get("body"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields, Failed to create note",
    };
  }

  const { title, body }: INotesForm = validatedFields.data;

  try {
    await fetch(`${process.env.ENDPOINT}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          mutation ($title: String!, $body: String!) {
            createNote(title: $title, body: $body) {
              id
              title
              body
              createdAt
            }
          }
        `,
        variables: {
          title,
          body,
        },
      }),
    });
  } catch (error) {
    return {
      message: "Failed to create note",
    };
  }
  revalidatePath("/");
  redirect("/");
}

const UpdateNote = NoteSchema.omit({ id: true, createdAt: true });

export async function updateNote(id: string, prevState: NoteState, formData: FormData) {
  noStore();
  const validatedFields = UpdateNote.safeParse({
    title: formData.get("title"),
    body: formData.get("body"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields, Failed to update note",
    };
  }

  const { title, body }: INotesForm = validatedFields.data;

  try {
    await fetch(`${process.env.ENDPOINT}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          mutation ($id: ID!, $title: String!, $body: String!) {
            updateNote(id: $id, title: $title, body: $body) {
              id
              title
              body
              createdAt
            }
          }
        `,
        variables: {
          id,
          title,
          body,
        },
      }),
    });
  } catch (error) {
    return {
      message: "Failed to update note",
    };
  }

  revalidatePath("/");
  revalidatePath(`/${id}`);
  redirect("/");
}

export async function deleteNote(id: string) {
  try {
    await fetch(`${process.env.ENDPOINT}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          mutation ($id: ID!) {
            deleteNote(id: $id) {
              id
              title
              body
              createdAt
            }
          }
        `,
        variables: {
          id,
        },
      }),
    });
  } catch (error) {
    return {
      message: "Failed to delete note",
    };
  }
  revalidatePath("/");
  redirect("/");
}
