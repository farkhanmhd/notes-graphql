"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type NewNoteState = {
  errors?: {
    title?: string;
    body?: string;
  };
  message?: string | null;
};

export async function getNotes() {
  try {
    const response = await fetch(`${process.env.ENDPOINT}/api/graphql`, {
      cache: "no-store",
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

export async function createNote(prevState: NewNoteState, formData: FormData) {
  try {
    const title = formData.get("title");
    const body = formData.get("body");
    const response = await fetch(`${process.env.ENDPOINT}/api/graphql`, {
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

    if (!response.ok) {
      throw new Error("Failed to create note");
    }

    revalidatePath("/");
  } catch (error) {
    return {
      status: 500,
      message: (error as Error).message,
    };
  }
  redirect("/");
}
