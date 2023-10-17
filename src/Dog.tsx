import { useState } from "react";
import { EditDog } from "./EditDog";
import { graphql } from "./gql";

// prettier-ignore
export const dogQuery = graphql(`#graphql
  query Dog {
    __typename # TODO: Query mit Variablen
  }
`);
export function Dog({ id }: { id: string }) {
  const [editing, setEditing] = useState(false);

  // TODO: Query hier verwenden

  if (editing) {
    return <EditDog onSave={() => setEditing(false)} id={id} />;
  }

  return (
    <article>
      <h2>
        Hundename <button onClick={() => setEditing(true)}>edit</button>
      </h2>
      <img src={"http://example.com"} alt={""} />

      <p>
        <strong>Breed:</strong>
      </p>
      <p>
        <strong>Breed Origin:</strong>
      </p>
      <p>
        <strong>Born:</strong>
      </p>
    </article>
  );
}
