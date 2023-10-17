import { useQuery } from "@apollo/client";
import { graphql } from "./gql";
import { useState } from "react";
import { EditDog } from "./EditDog";

// prettier-ignore
export const dogQuery = graphql(`#graphql
  query Dog($id: ID!) {
    Dog(id: $id) {
      id
      name
      Breed {
        id
        name
        origin
      }
      Image {
        id
        src
        attribution
      }
    }
  }
`);
export function Dog({ id }: { id: string }) {
  const [editing, setEditing] = useState(false);
  const { loading, data } = useQuery(dogQuery, { variables: { id } });

  if (editing) {
    return <EditDog onSave={() => setEditing(false)} id={id} />;
  }

  if (loading) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {data?.Dog?.name} <button onClick={() => setEditing(true)}>edit</button>
      </h2>
      <img src={data?.Dog?.Image?.src} alt={data?.Dog?.Image?.attribution} />

      <p>
        <strong>Breed:</strong> {data?.Dog?.Breed?.name}
      </p>
      <p>
        <strong>Breed Origin:</strong> {data?.Dog?.Breed?.origin}
      </p>
    </article>
  );
}
