import { useState } from "react";
import { EditDog } from "./EditDog";
import { graphql } from "./gql";
import { useQuery } from "@apollo/client";

// prettier-ignore
export const dogQuery = graphql(`#graphql
  query Dog($id: ID!) {
    Dog(id: $id) {
      ...EditDogFragment
      id
      name
      born
      Image {
        id
        src
        attribution
      }
      Breed {
        id
        name
        origin
      }
    }
  }
  
`);
// ${EditDog.fragments.dog}
export function Dog({ id }: { id: string }) {
  const [editing, setEditing] = useState(false);

  const { loading, data } = useQuery(dogQuery, {
    variables: { id },
    context: { delay: 1000 },
  });

  if (editing) {
    return <EditDog onSave={() => setEditing(false)} id={id} />;
  }

  if (loading) {
    return <>loading...</>;
  }

  return (
    <article>
      <h2>
        {data?.Dog?.name} <button onClick={() => setEditing(true)}>edit</button>
      </h2>
      <img src={data?.Dog?.Image?.src} alt={data?.Dog?.Image?.attribution} />

      <p>
        <strong>Breed: {data?.Dog?.Breed?.name}</strong>
      </p>
      <p>
        <strong>Breed Origin: {data?.Dog?.Breed?.origin}</strong>
      </p>
      <p>
        <strong>Born: {data?.Dog?.born}</strong>
      </p>
    </article>
  );
}
