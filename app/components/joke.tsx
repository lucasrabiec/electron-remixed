import { Link, Form } from "@remix-run/react";
import type { Joke } from "@prisma/client";

export function JokeDisplay({ joke, canDelete = true }: {
  joke: Pick<Joke, "content" | "name">;
  canDelete?: boolean;
}) {
  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{joke.content}</p>
      <Link to=".">"{joke.name}" Permalink</Link>
      <Form method="post">
        <input
          type="hidden"
          name="_method"
          value="delete"
        />
        <button
          type="submit"
          className="button"
          disabled={!canDelete}
        >
          Delete
        </button>
      </Form>
    </div>
  );
}